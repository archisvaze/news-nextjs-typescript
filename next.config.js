/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['static.inshorts.com'],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
