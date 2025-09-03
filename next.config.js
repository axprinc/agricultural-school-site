/** @type {import('next').NextConfig} */
const nextConfig = {
  // Heroku用設定
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // 本番環境用の設定
  compress: true,
  poweredByHeader: false,
}

module.exports = nextConfig 