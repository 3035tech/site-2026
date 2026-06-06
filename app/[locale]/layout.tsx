import { notFound } from 'next/navigation'
import { DM_Sans, Instrument_Serif } from 'next/font/google'
import { Providers } from '@/components/providers'
import { StructuredData } from '@/components/structured-data'
import { htmlLangMap, isValidLocale, locales, type Locale } from '@/lib/i18n/config'
import { getLocaleOrDefault } from '@/lib/i18n/server'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
})

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-instrument-serif',
})

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale: rawLocale } = await params
  if (!isValidLocale(rawLocale)) notFound()

  const locale = getLocaleOrDefault(rawLocale) as Locale

  return (
    <html lang={htmlLangMap[locale]} className={`${dmSans.variable} ${instrumentSerif.variable}`}>
      <head>
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM Information" />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="3035TECH Insights"
          href="/feed.xml"
        />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <Providers locale={locale}>
          <StructuredData locale={locale} />
          {children}
        </Providers>
      </body>
    </html>
  )
}
