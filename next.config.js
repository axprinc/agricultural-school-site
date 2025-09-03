/** @type {import('next').NextConfig} */
const nextConfig = {
  // Heroku専用設定
  output: 'standalone',
  images: {
    unoptimized: true,
  },
  compress: true,
  poweredByHeader: false,
  experimental: {
    outputFileTracingRoot: undefined,
  },
}

module.exports = nextConfig