import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: '3035TECH',
    short_name: '3035TECH',
    description: 'Dedicated engineering teams and custom software development.',
    start_url: '/',
    display: 'browser',
    background_color: '#0F172A',
    theme_color: '#0F172A',
    icons: [
      { src: '/brand/3035tech-icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/brand/3035tech-icon-512.png', sizes: '512x512', type: 'image/png' },
      { src: '/brand/3035tech-icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  }
}
