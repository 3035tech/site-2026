'use client'

import { useLanguage } from '@/lib/i18n'

const sectionKeys = ['controller', 'collect', 'legal', 'cookies', 'rights', 'contact'] as const

export function PrivacyContent() {
  const { t } = useLanguage()

  return (
    <article className="prose prose-invert max-w-none">
      <p className="text-white/55 leading-relaxed">{t('privacy.intro')}</p>

      <div className="mt-10 space-y-10 not-prose">
        {sectionKeys.map((key) => (
          <section key={key}>
            <h2 className="text-xl font-serif text-white mb-3">{t(`privacy.${key}.title`)}</h2>
            <p className="text-white/55 leading-relaxed whitespace-pre-line">
              {t(`privacy.${key}.body`)}
            </p>
          </section>
        ))}
      </div>

      <p className="mt-10 text-sm text-white/40">{t('privacy.updated')}</p>
    </article>
  )
}
