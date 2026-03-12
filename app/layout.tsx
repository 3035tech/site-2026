import type { Metadata } from 'next'
import { DM_Sans, Instrument_Serif } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Providers } from '@/components/providers'
import { StructuredData } from '@/components/structured-data'
import './globals.css'

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: '--font-dm-sans',
})

const instrumentSerif = Instrument_Serif({ 
  subsets: ["latin"],
  weight: "400",
  variable: '--font-instrument-serif',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://3035tech.com'),
  title: {
    default: '3035TECH — Your LATAM Technology Partner',
    template: '%s | 3035TECH',
  },
  description: 'Your global technology partner headquartered in Brazil. Managed squads, staff augmentation, and custom software development for enterprises worldwide. Offices in Brazil, USA, Ireland, and Germany.',
  keywords: [
    '3035TECH',
    'software development',
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
  alternates: {
    canonical: 'https://3035tech.com',
    languages: {
      'en': 'https://3035tech.com',
      'pt-BR': 'https://3035tech.com',
      'es': 'https://3035tech.com',
      'de': 'https://3035tech.com',
    },
  },
  openGraph: {
    title: '3035TECH — Your LATAM Technology Partner',
    description: 'Your global technology partner headquartered in Brazil. Managed squads, staff augmentation, and custom software development for enterprises worldwide.',
    url: 'https://3035tech.com',
    siteName: '3035TECH',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '3035TECH - Your LATAM Technology Partner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '3035TECH — Your LATAM Technology Partner',
    description: 'Your global technology partner headquartered in Brazil. Managed squads, staff augmentation, and custom software development.',
    images: ['/images/og-image.jpg'],
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
    google: 'YOUR_GOOGLE_VERIFICATION_CODE',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${instrumentSerif.variable}`}>
      <head>
        <StructuredData />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <Providers>
          {children}
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
