export const locales = ['en', 'es', 'pt', 'de'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'en'

export const hreflangMap: Record<Locale, string> = {
  en: 'en',
  es: 'es',
  pt: 'pt-BR',
  de: 'de',
}

export const htmlLangMap: Record<Locale, string> = {
  en: 'en',
  es: 'es',
  pt: 'pt-BR',
  de: 'de',
}

export const localeLabels: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
  pt: 'Português',
  de: 'Deutsch',
}

export function isValidLocale(value: string): value is Locale {
  return locales.includes(value as Locale)
}

/** Path without locale prefix, always starts with / */
export function stripLocalePrefix(pathname: string): string {
  const segments = pathname.split('/')
  const maybeLocale = segments[1]
  if (maybeLocale && isValidLocale(maybeLocale)) {
    const rest = segments.slice(2).join('/')
    return rest ? `/${rest}` : '/'
  }
  return pathname || '/'
}

export function localizedPath(locale: Locale, path: string): string {
  const normalized = path === '/' ? '' : path.startsWith('/') ? path : `/${path}`
  return `/${locale}${normalized}`
}
