const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const TARGET_EXTS = ['.jpg', '.jpeg', '.png', '.gif'];
const PUBLIC_DIR = path.join(__dirname, 'public');
const SRC_DIR = path.join(__dirname, 'src');

function walkImages(dir) {
  let results = [];
  try {
    const list = fs.readdirSync(dir);
    for (const file of list) {
      const filePath = path.join(dir, file);
      try {
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
          results = results.concat(walkImages(filePath));
        } else if (TARGET_EXTS.includes(path.extname(file).toLowerCase())) {
          results.push(filePath);
        }
      } catch (e) {}
    }
  } catch (e) {}
  return results;
}

async function convertToWebP(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const webpPath = filePath.slice(0, -ext.length) + '.webp';

  try {
    const originalSize = fs.statSync(filePath).size;
    await sharp(filePath)
      .webp({ quality: 82 })
      .toFile(webpPath);
    const newSize = fs.statSync(webpPath).size;
    fs.unlinkSync(filePath);
    const saved = Math.round((1 - newSize / originalSize) * 100);
    const rel = path.relative(__dirname, filePath);
    console.log(`✓ ${rel}  ${Math.round(originalSize/1024)}KB → ${Math.round(newSize/1024)}KB (▼${saved}%)`);
    return { old: filePath, new: webpPath };
  } catch (e) {
    console.error(`✗ ${filePath}: ${e.message}`);
    return null;
  }
}

function replaceInFile(filePath, replacements) {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;
  for (const { oldExt, newExt, baseName } of replacements) {
    const escaped = baseName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(escaped + oldExt, 'g');
    if (regex.test(content)) {
      content = content.replace(new RegExp(escaped + oldExt, 'g'), baseName + newExt);
      changed = true;
    }
  }
  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`  📝 Updated: ${path.relative(__dirname, filePath)}`);
  }
}

function walkSrcFiles(dir) {
  const exts = ['.tsx', '.ts', '.js', '.jsx', '.css', '.html'];
  let results = [];
  try {
    const list = fs.readdirSync(dir);
    for (const file of list) {
      const filePath = path.join(dir, file);
      try {
        const stat = fs.statSync(filePath);
        if (stat.isDirectory() && file !== 'node_modules' && file !== '.next') {
          results = results.concat(walkSrcFiles(filePath));
        } else if (exts.includes(path.extname(file).toLowerCase())) {
          results.push(filePath);
        }
      } catch (e) {}
    }
  } catch (e) {}
  return results;
}

async function main() {
  console.log('=== WebP 変換スクリプト ===\n');

  const images = walkImages(PUBLIC_DIR);
  console.log(`対象画像: ${images.length} 枚\n`);

  const conversions = [];
  for (const img of images) {
    const result = await convertToWebP(img);
    if (result) conversions.push(result);
  }

  console.log(`\n=== コード参照の更新 ===`);

  const replacements = conversions.map(c => ({
    oldExt: path.extname(c.old).toLowerCase(),
    newExt: '.webp',
    baseName: path.basename(c.old, path.extname(c.old)),
  }));

  const srcFiles = [
    ...walkSrcFiles(SRC_DIR),
    ...walkSrcFiles(path.join(__dirname, 'public')),
  ];

  for (const file of srcFiles) {
    replaceInFile(file, replacements);
  }

  console.log(`\n=== 完了 ===`);
  console.log(`変換: ${conversions.length} 枚`);
}

main().catch(console.error);
