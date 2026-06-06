import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/metadata'
import { PrivacyContent } from '@/components/privacy-content'
import { InnerPageHero, SiteShell } from '@/components/site-shell'
import { getLocaleOrDefault } from '@/lib/i18n/server'
import { localizedPath, type Locale } from '@/lib/i18n/config'
import { buildBreadcrumbs } from '@/lib/breadcrumbs'
import { translations } from '@/lib/i18n/translations'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: rawLocale } = await params
  const locale = getLocaleOrDefault(rawLocale) as Locale
  const t = translations[locale]

  return createPageMetadata({
    locale,
    title: t['privacy.metaTitle'],
    description: t['privacy.metaDescription'],
    path: '/privacy',
    ogLabel: t['footer.privacy'],
  })
}

export default async function PrivacyPage({ params }: Props) {
  const { locale: rawLocale } = await params
  const locale = getLocaleOrDefault(rawLocale) as Locale
  const t = translations[locale]

  return (
    <SiteShell>
      <InnerPageHero
        label={t['footer.privacy']}
        title={t['privacy.title']}
        description={t['privacy.metaDescription']}
        backHref={localizedPath(locale, '/')}
        backLabel={t['pages.backHome']}
        breadcrumbItems={buildBreadcrumbs(locale, [
          { name: t['pages.home'], path: '/' },
          { name: t['footer.privacy'], path: '/privacy' },
        ])}
      />
      <section className="bg-navy-dark py-12 sm:py-20 border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <PrivacyContent />
        </div>
      </section>
    </SiteShell>
  )
}
