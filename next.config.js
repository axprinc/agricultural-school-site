/** @type {import('next').NextConfig} */
const nextConfig = {
  // Heroku用設定 - output: 'export'は絶対に使用しない
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // 本番環境用の設定
  compress: true,
  poweredByHeader: false,
  // Heroku用の明示的設定
  experimental: {
    outputFileTracingRoot: undefined,
  },
}

module.exports = nextConfig 