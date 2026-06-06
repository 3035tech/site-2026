import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/metadata'
import { getStaticPageMeta } from '@/lib/pages-data'
import { Contact } from '@/components/contact'
import { Faq } from '@/components/faq'
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
  const meta = getStaticPageMeta(locale).contact

  return createPageMetadata({
    locale,
    title: meta.title,
    description: meta.description,
    path: meta.path,
    ogLabel: translations[locale]['contact.label'],
  })
}

export default async function ContactPage({ params }: Props) {
  const { locale: rawLocale } = await params
  const locale = getLocaleOrDefault(rawLocale) as Locale
  const t = translations[locale]

  return (
    <SiteShell>
      <InnerPageHero
        label={t['contact.label']}
        title={`${t['contact.title']} ${t['contact.titleHighlight']}`}
        description={t['contact.subtitle']}
        backHref={localizedPath(locale, '/')}
        backLabel={t['pages.backHome']}
        breadcrumbItems={buildBreadcrumbs(locale, [
          { name: t['pages.home'], path: '/' },
          { name: t['contact.label'], path: '/contact' },
        ])}
      />
      <Contact hideHeader />
      <Faq />
    </SiteShell>
  )
}
