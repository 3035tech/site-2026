import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { createPageMetadata } from '@/lib/metadata'
import {
  getServiceBySlug,
  getServicePages,
  serviceSlugs,
} from '@/lib/pages-data'
import { InnerPageHero, PageCta, SiteShell } from '@/components/site-shell'
import { getLocaleOrDefault } from '@/lib/i18n/server'
import { locales, localizedPath, type Locale } from '@/lib/i18n/config'
import { buildBreadcrumbs } from '@/lib/breadcrumbs'
import { translations } from '@/lib/i18n/translations'

type Props = {
  params: Promise<{ locale: string; slug: string }>
}

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    serviceSlugs.map((slug) => ({ locale, slug }))
  )
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params
  const locale = getLocaleOrDefault(rawLocale) as Locale
  const service = getServiceBySlug(locale, slug)
  if (!service) return {}

  return createPageMetadata({
    locale,
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
    image: service.image,
    ogLabel: translations[locale]['pages.service'],
  })
}

export default async function ServicePage({ params }: Props) {
  const { locale: rawLocale, slug } = await params
  const locale = getLocaleOrDefault(rawLocale) as Locale
  const t = translations[locale]
  const service = getServiceBySlug(locale, slug)
  if (!service) notFound()

  return (
    <SiteShell>
      <InnerPageHero
        label={t['pages.service']}
        title={service.title}
        description={service.description}
        backHref={localizedPath(locale, '/services')}
        backLabel={t['pages.allServices']}
        breadcrumbItems={buildBreadcrumbs(locale, [
          { name: t['pages.home'], path: '/' },
          { name: t['services.label'], path: '/services' },
          { name: service.title, path: `/services/${service.slug}` },
        ])}
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {service.image && (
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-10">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          <div className="prose prose-lg max-w-none">
            <p className="text-text-body-light leading-relaxed text-lg">
              {service.description}
            </p>
          </div>

          <div className="mt-10">
            <h2 className="text-xl font-serif text-navy-dark mb-4">
              {t['pages.whatYouGet']}
            </h2>
            <ul className="grid sm:grid-cols-3 gap-4">
              {service.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="rounded-xl bg-off-white px-4 py-3 text-sm font-medium text-navy-dark"
                >
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <PageCta />
    </SiteShell>
  )
}
