/** @type {import('next').NextConfig} */
const nextConfig = {
  // Next.js 15ではappDirはデフォルトで有効なので削除
  // Heroku用設定: output: 'export'を削除
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig 