/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'greenmarmot.com',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
}


module.exports = nextConfig
