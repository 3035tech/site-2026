import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { ClientLogos } from '@/components/client-logos'
import { Services } from '@/components/services'
import { CaseStudies } from '@/components/case-studies'
import { Teach } from '@/components/teach'
import { Testimonials } from '@/components/testimonials'
import { About } from '@/components/about'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { SectionViewTracker } from '@/components/section-view-tracker'
import { Faq } from '@/components/faq'
import { createPageMetadata } from '@/lib/metadata'
import { translations } from '@/lib/i18n/translations'
import { getLocaleOrDefault } from '@/lib/i18n/server'
import type { Locale } from '@/lib/i18n/config'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: rawLocale } = await params
  const locale = getLocaleOrDefault(rawLocale) as Locale
  const t = translations[locale]

  return createPageMetadata({
    locale,
    title: { absolute: '3035TECH — Your LATAM Technology Partner' },
    description: t['home.metaDescription'] ?? t['hero.subtitle'],
    path: '/',
    ogLabel: 'LATAM Technology Partner',
  })
}

export default function HomePage() {
  return (
    <main>
      <SectionViewTracker />
      <Navbar />
      <Hero />
      <ClientLogos />
      <Services />
      <CaseStudies />
      <Teach />
      <Testimonials />
      <About />
      <Faq />
      <Contact />
      <Footer />
    </main>
  )
}
