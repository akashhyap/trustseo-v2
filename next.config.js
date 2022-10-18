/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [process.env.WP_IMAGES_URL],
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;
