/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'petapixel.com',
        port: '',
        pathname: '/assets/uploads/**',
      },
    ],
  },
}
