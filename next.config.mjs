/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
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
