import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { createPageMetadata } from '@/lib/metadata'
import { getServicePages, getStaticPageMeta } from '@/lib/pages-data'
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
  const meta = getStaticPageMeta(locale).servicesIndex

  return createPageMetadata({
    locale,
    title: meta.title,
    description: meta.description,
    path: meta.path,
    ogLabel: meta.title,
  })
}

export default async function ServicesIndexPage({ params }: Props) {
  const { locale: rawLocale } = await params
  const locale = getLocaleOrDefault(rawLocale) as Locale
  const t = translations[locale]
  const servicePages = getServicePages(locale)

  return (
    <SiteShell>
      <InnerPageHero
        label={t['services.label']}
        title={t['services.title']}
        description={t['services.indexDesc']}
        backHref={localizedPath(locale, '/')}
        backLabel={t['pages.backHome']}
        breadcrumbItems={buildBreadcrumbs(locale, [
          { name: t['pages.home'], path: '/' },
          { name: t['services.label'], path: '/services' },
        ])}
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicePages.map((service, index) => (
              <Link
                key={service.slug}
                href={localizedPath(locale, `/services/${service.slug}`)}
                className="group rounded-[20px] border border-border overflow-hidden hover:border-brand-purple/30 hover:shadow-lg transition-all duration-300"
              >
                {service.image && (
                  <div className="relative aspect-[16/9] bg-off-white">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-8">
                  <span className="text-brand-purple text-sm font-bold">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h2 className="mt-3 text-2xl font-serif text-navy-dark group-hover:text-brand-purple transition-colors">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-text-body-light leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {service.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="inline-flex px-3 py-1 rounded-full text-xs font-medium bg-off-white text-text-body-light"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
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
