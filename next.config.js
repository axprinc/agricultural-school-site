/** @type {import('next').NextConfig} */
const nextConfig = {
  // Next.js 15ではappDirはデフォルトで有効なので削除
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig 