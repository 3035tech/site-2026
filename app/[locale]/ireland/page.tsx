import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/metadata'
import { getStaticPageMeta } from '@/lib/pages-data'
import { IrelandHub } from '@/components/ireland-hub'
import { IrelandStructuredData } from '@/components/ireland-structured-data'
import { InnerPageHero, PageCta, SiteShell } from '@/components/site-shell'
import { getLocaleOrDefault } from '@/lib/i18n/server'
import { localizedPath, type Locale } from '@/lib/i18n/config'
import { buildBreadcrumbs } from '@/lib/breadcrumbs'
import { translations } from '@/lib/i18n/translations'
import { irelandHubPath, irelandSeoKeywords } from '@/lib/ireland-seo'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: rawLocale } = await params
  const locale = getLocaleOrDefault(rawLocale) as Locale
  const meta = getStaticPageMeta(locale).ireland

  return {
    ...createPageMetadata({
      locale,
      title: meta.title,
      description: meta.description,
      path: meta.path,
      ogLabel: translations[locale]['ireland.label'],
    }),
    keywords: [...irelandSeoKeywords],
  }
}

export default async function IrelandPage({ params }: Props) {
  const { locale: rawLocale } = await params
  const locale = getLocaleOrDefault(rawLocale) as Locale
  const t = translations[locale]

  return (
    <SiteShell>
      <IrelandStructuredData locale={locale} />
      <InnerPageHero
        label={t['ireland.label']}
        title={`${t['ireland.title']} ${t['ireland.titleHighlight']}`}
        description={t['ireland.subtitle']}
        backHref={localizedPath(locale, '/')}
        backLabel={t['pages.backHome']}
        breadcrumbItems={buildBreadcrumbs(locale, [
          { name: t['pages.home'], path: '/' },
          { name: t['ireland.label'], path: irelandHubPath },
        ])}
      />
      <IrelandHub />
      <PageCta />
    </SiteShell>
  )
}
