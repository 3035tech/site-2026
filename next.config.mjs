/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/dublin',
        destination: '/en/ireland',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: '3035tech.com' }],
        destination: 'https://www.3035tech.com/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
