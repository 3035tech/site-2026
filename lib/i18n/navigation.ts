'use client'

import { useParams, usePathname, useRouter } from 'next/navigation'
import {
  defaultLocale,
  isValidLocale,
  localizedPath,
  stripLocalePrefix,
  type Locale,
} from '@/lib/i18n/config'

export function useLocale(): Locale {
  const params = useParams()
  const rawLocale = params?.locale
  if (typeof rawLocale === 'string' && isValidLocale(rawLocale)) {
    return rawLocale
  }
  return defaultLocale
}

export function useLocalizedPath(path: string): string {
  const locale = useLocale()
  return localizedPath(locale, path)
}

export function useSwitchLocale() {
  const router = useRouter()
  const pathname = usePathname()

  return (newLocale: Locale) => {
    const pathWithoutLocale = stripLocalePrefix(pathname)
    router.push(localizedPath(newLocale, pathWithoutLocale))
    localStorage.setItem('language', newLocale)
  }
}
