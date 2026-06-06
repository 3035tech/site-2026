import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { createPageMetadata } from '@/lib/metadata'
import {
  caseStudySlugs,
  getCaseStudyBySlug,
} from '@/lib/pages-data'
import { InnerPageHero, PageCta, SiteShell } from '@/components/site-shell'
import { LinkedClientName } from '@/components/linked-client-name'
import { getLocaleOrDefault } from '@/lib/i18n/server'
import { locales, localizedPath, type Locale } from '@/lib/i18n/config'
import { translations } from '@/lib/i18n/translations'
import { buildBreadcrumbs } from '@/lib/breadcrumbs'

type Props = {
  params: Promise<{ locale: string; slug: string }>
}

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    caseStudySlugs.map((slug) => ({ locale, slug }))
  )
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params
  const locale = getLocaleOrDefault(rawLocale) as Locale
  const caseStudy = getCaseStudyBySlug(locale, slug)
  if (!caseStudy) return {}

  return createPageMetadata({
    locale,
    title: caseStudy.metaTitle,
    description: caseStudy.metaDescription,
    path: `/case-studies/${caseStudy.slug}`,
    image: caseStudy.image,
    ogLabel: translations[locale]['pages.caseStudy'],
  })
}

export default async function CaseStudyPage({ params }: Props) {
  const { locale: rawLocale, slug } = await params
  const locale = getLocaleOrDefault(rawLocale) as Locale
  const t = translations[locale]
  const caseStudy = getCaseStudyBySlug(locale, slug)
  if (!caseStudy) notFound()

  return (
    <SiteShell>
      <InnerPageHero
        label={t['pages.caseStudy']}
        title={
          <LinkedClientName
            name={caseStudy.client}
            linkClassName="text-white hover:text-brand-purple-light"
          />
        }
        description={caseStudy.description}
        backHref={localizedPath(locale, '/case-studies')}
        backLabel={t['pages.allCaseStudies']}
        breadcrumbItems={buildBreadcrumbs(locale, [
          { name: t['pages.home'], path: '/' },
          { name: t['cases.label'], path: '/case-studies' },
          { name: caseStudy.client, path: `/case-studies/${caseStudy.slug}` },
        ])}
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-10">
            <Image
              src={caseStudy.image}
              alt={caseStudy.client}
              fill
              className="object-cover"
              priority
            />
          </div>

          <dl className="grid sm:grid-cols-3 gap-6 mb-10 pb-10 border-b border-border">
            <div>
              <dt className="text-xs uppercase tracking-wider text-text-caption-light">
                {t['cases.location']}
              </dt>
              <dd className="mt-1 text-navy-dark font-medium">{caseStudy.location}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-text-caption-light">
                {t['cases.industry']}
              </dt>
              <dd className="mt-1 text-navy-dark font-medium">{caseStudy.industry}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-text-caption-light">
                {t['cases.engagement']}
              </dt>
              <dd className="mt-1 text-navy-dark font-medium">{caseStudy.engagement}</dd>
            </div>
          </dl>

          <div className="space-y-6 text-text-body-light leading-relaxed text-lg">
            <p>{caseStudy.description}</p>
            <p>{caseStudy.details}</p>
          </div>

          <div className="mt-10 rounded-2xl bg-off-white p-8">
            <h2 className="text-xl font-serif text-navy-dark mb-3">
              {t['cases.impact']}
            </h2>
            <p className="text-text-body-light leading-relaxed">{caseStudy.impact}</p>
          </div>
        </div>
      </section>

      <PageCta />
    </SiteShell>
  )
}
