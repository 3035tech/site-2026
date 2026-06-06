import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/metadata'
import { getStaticPageMeta } from '@/lib/pages-data'
import { Teach } from '@/components/teach'
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
  const meta = getStaticPageMeta(locale).teach

  return createPageMetadata({
    locale,
    title: meta.title,
    description: meta.description,
    path: meta.path,
    ogLabel: '3035TEACH',
  })
}

export default async function TeachPage({ params }: Props) {
  const { locale: rawLocale } = await params
  const locale = getLocaleOrDefault(rawLocale) as Locale
  const t = translations[locale]

  return (
    <SiteShell>
      <InnerPageHero
        label={t['teach.label']}
        title={`${t['teach.title']}${t['teach.titleHighlight']}`}
        description={t['teach.desc1']}
        backHref={localizedPath(locale, '/')}
        backLabel={t['pages.backHome']}
        breadcrumbItems={buildBreadcrumbs(locale, [
          { name: t['pages.home'], path: '/' },
          { name: `${t['teach.title']}${t['teach.titleHighlight']}`, path: '/3035teach' },
        ])}
      />
      <Teach hideHeader />
      <PageCta />
    </SiteShell>
  )
}
