import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { createPageMetadata } from '@/lib/metadata'
import { getCaseStudyPages, getStaticPageMeta } from '@/lib/pages-data'
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
  const meta = getStaticPageMeta(locale).caseStudiesIndex

  return createPageMetadata({
    locale,
    title: meta.title,
    description: meta.description,
    path: meta.path,
    ogLabel: meta.title,
  })
}

export default async function CaseStudiesIndexPage({ params }: Props) {
  const { locale: rawLocale } = await params
  const locale = getLocaleOrDefault(rawLocale) as Locale
  const t = translations[locale]
  const caseStudyPages = getCaseStudyPages(locale)

  return (
    <SiteShell>
      <InnerPageHero
        label={t['cases.label']}
        title={`${t['cases.title']} ${t['cases.titleHighlight']}`}
        description={t['cases.indexDesc']}
        backHref={localizedPath(locale, '/')}
        backLabel={t['pages.backHome']}
        breadcrumbItems={buildBreadcrumbs(locale, [
          { name: t['pages.home'], path: '/' },
          { name: t['cases.label'], path: '/case-studies' },
        ])}
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudyPages.map((caseStudy) => (
              <Link
                key={caseStudy.slug}
                href={localizedPath(locale, `/case-studies/${caseStudy.slug}`)}
                className="group rounded-[20px] border border-border overflow-hidden hover:border-brand-purple/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="relative aspect-[16/10] bg-navy-dark">
                  <Image
                    src={caseStudy.image}
                    alt={caseStudy.client}
                    fill
                    className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-flex px-3 py-1 rounded-full text-xs font-medium bg-brand-purple/20 border border-brand-purple/30 text-brand-purple-light">
                      {caseStudy.engagement}
                    </span>
                    <h2 className="mt-3 text-2xl font-serif text-white">
                      {caseStudy.client}
                    </h2>
                    <p className="mt-1 text-sm text-white/55">{caseStudy.industry}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-text-body-light leading-relaxed line-clamp-3">
                    {caseStudy.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PageCta />
    </SiteShell>
  )
}
