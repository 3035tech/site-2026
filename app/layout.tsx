import type { Metadata } from 'next'
import { DM_Sans, Instrument_Serif } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
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
  title: '3035TECH — Your LATAM Technology Partner',
  description: 'Your global technology partner headquartered in Brazil. Managed squads, staff augmentation, and custom software development for enterprises worldwide.',
  generator: 'v0.app',
  openGraph: {
    title: '3035TECH — Your LATAM Technology Partner',
    description: 'Your global technology partner headquartered in Brazil. Managed squads, staff augmentation, and custom software development for enterprises worldwide.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${instrumentSerif.variable}`}>
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
