'use client'

import { useLanguage } from '@/lib/i18n'
import { LocaleLink } from '@/components/locale-link'

export function PageCta() {
  const { t } = useLanguage()

  return (
    <section className="bg-off-white py-16 border-t border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-serif text-navy-dark text-balance">
          {t('contact.title')} {t('contact.titleHighlight')}
        </h2>
        <p className="mt-4 text-text-body-light">{t('contact.subtitle')}</p>
        <LocaleLink
          href="/contact"
          className="inline-flex mt-8 items-center justify-center rounded-xl bg-brand-purple hover:bg-brand-purple-hover text-white px-8 py-3 text-base font-medium transition-colors"
        >
          {t('contact.cta')}
        </LocaleLink>
      </div>
    </section>
  )
}
