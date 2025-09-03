/** @type {import('next').NextConfig} */
const nextConfig = {
  // Heroku専用設定 - 静的エクスポートは絶対に使用しない
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  compress: true,
  poweredByHeader: false,
  // 明示的にoutputを指定しない（デフォルトはstandalone）
}

module.exports = nextConfig