const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  try {
    const list = fs.readdirSync(dir);
    for (const file of list) {
      const filePath = path.join(dir, file);
      try {
        const stat = fs.statSync(filePath);
        if (stat.isDirectory() && file !== 'node_modules' && file !== '.next') {
          results = results.concat(walk(filePath));
        } else if (/\.(jpg|jpeg|png|gif)$/i.test(file)) {
          results.push({ p: filePath, s: Math.round(stat.size / 1024) });
        }
      } catch (e) {}
    }
  } catch (e) {}
  return results;
}

const root = path.dirname(__filename);
const imgs = walk(root);
console.log('Total:', imgs.length);
imgs.sort((a, b) => b.s - a.s).forEach(x => console.log(x.s + 'KB\t' + x.p));
