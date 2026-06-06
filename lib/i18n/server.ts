import { Locale, defaultLocale, isValidLocale, localizedPath } from '@/lib/i18n/config'
import { siteUrl } from '@/lib/site'

export function getLocaleOrDefault(locale: string): Locale {
  return isValidLocale(locale) ? locale : defaultLocale
}

export function buildAlternateLanguages(path: string) {
  const normalized = path === '/' ? '' : path.startsWith('/') ? path : `/${path}`

  return {
    'x-default': `${siteUrl}${localizedPath('en', normalized || '/')}`,
    en: `${siteUrl}${localizedPath('en', normalized || '/')}`,
    es: `${siteUrl}${localizedPath('es', normalized || '/')}`,
    'pt-BR': `${siteUrl}${localizedPath('pt', normalized || '/')}`,
    de: `${siteUrl}${localizedPath('de', normalized || '/')}`,
  }
}
