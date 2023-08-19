/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    appDir: true
  },
  images: {
    domains: ['fastly.picsum.photos']
  }
};

module.exports = nextConfig;
