import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.3035tech.com'),
  title: {
    default: '3035TECH — Your LATAM Technology Partner',
    template: '%s | 3035TECH',
  },
  description:
    'Your global technology partner headquartered in Brazil. Managed squads, staff augmentation, and custom software development for enterprises worldwide. European hub in Dublin, Ireland.',
  keywords: [
    '3035TECH',
    '3035TECH Ireland',
    '3035TECH Dublin',
    '3035 Tech Ireland',
    'software development Ireland',
    'technology partner Dublin',
    'staff augmentation',
    'managed squads',
    'outsourcing',
    'nearshore',
    'LATAM technology',
    'Brazil software company',
    'custom software',
    'engineering teams',
    'software factory',
    'React development',
    'mobile development',
    'enterprise software',
  ],
  authors: [{ name: '3035TECH' }],
  creator: '3035TECH',
  publisher: '3035TECH',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: '3035TECH — Your LATAM Technology Partner',
    description:
      'Your global technology partner headquartered in Brazil. Managed squads, staff augmentation, and custom software development for enterprises worldwide.',
    url: 'https://www.3035tech.com',
    siteName: '3035TECH',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '3035TECH — Your LATAM Technology Partner',
    description:
      'Your global technology partner headquartered in Brazil. Managed squads, staff augmentation, and custom software development.',
    site: '@3035tech',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION && {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    }),
    other: {
      'facebook-domain-verification': 's89hy8t6cay9f9yz0tw0x9sqga0uy3',
      ...(process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION && {
        'msvalidate.01': process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION,
      }),
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
