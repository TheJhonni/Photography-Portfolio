/** @type {import('next').NextConfig} */

const nextConfig = {
  transpilePackages: ['@mep-agency/next-iubenda'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [ { source: '/', destination: '/it', permanent: true } ]
  }
}


module.exports = nextConfig

