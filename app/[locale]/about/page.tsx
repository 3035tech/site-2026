import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/metadata'
import { getStaticPageMeta } from '@/lib/pages-data'
import { About } from '@/components/about'
import { InnerPageHero, PageCta, SiteShell } from '@/components/site-shell'
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
  const meta = getStaticPageMeta(locale).about

  return createPageMetadata({
    locale,
    title: meta.title,
    description: meta.description,
    path: meta.path,
    ogLabel: translations[locale]['about.label'],
  })
}

export default async function AboutPage({ params }: Props) {
  const { locale: rawLocale } = await params
  const locale = getLocaleOrDefault(rawLocale) as Locale
  const t = translations[locale]

  return (
    <SiteShell>
      <InnerPageHero
        label={t['about.label']}
        title={`${t['about.title']} ${t['about.titleHighlight']}`}
        description={t['about.desc1']}
        backHref={localizedPath(locale, '/')}
        backLabel={t['pages.backHome']}
        breadcrumbItems={buildBreadcrumbs(locale, [
          { name: t['pages.home'], path: '/' },
          { name: t['about.label'], path: '/about' },
        ])}
      />
      <About hideHeader />
      <PageCta />
    </SiteShell>
  )
}
