'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { SiteShell } from '@/components/site-shell'
import { translations } from '@/lib/i18n/translations'
import { defaultLocale, isValidLocale, localizedPath, type Locale } from '@/lib/i18n/config'

export default function LocaleNotFound() {
  const params = useParams()
  const rawLocale = params?.locale
  const locale: Locale =
    typeof rawLocale === 'string' && isValidLocale(rawLocale)
      ? rawLocale
      : defaultLocale
  const t = translations[locale]

  return (
    <SiteShell>
      <section className="bg-navy-dark min-h-[70vh] flex items-center pt-28 pb-20">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-purple-light text-sm font-bold uppercase tracking-[0.15em]">
            404
          </p>
          <h1 className="mt-4 text-3xl sm:text-4xl font-serif text-white">
            {t['notFound.title']}
          </h1>
          <p className="mt-4 text-white/55 leading-relaxed">{t['notFound.description']}</p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={localizedPath(locale, '/')}
              className="inline-flex items-center justify-center rounded-xl bg-brand-purple hover:bg-brand-purple-hover text-white px-8 py-3 text-base font-medium transition-colors"
            >
              {t['notFound.backHome']}
            </Link>
            <Link
              href={localizedPath(locale, '/contact')}
              className="inline-flex items-center justify-center rounded-xl border border-white/15 text-white hover:bg-white/5 px-8 py-3 text-base font-medium transition-colors"
            >
              {t['nav.contact']}
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
