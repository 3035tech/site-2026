import { localizedPath, type Locale } from '@/lib/i18n/config'
import type { BreadcrumbItem } from '@/components/breadcrumb-json-ld'

export function buildBreadcrumbs(
  locale: Locale,
  items: { name: string; path: string }[]
): BreadcrumbItem[] {
  return items.map((item) => ({
    name: item.name,
    href: localizedPath(locale, item.path),
  }))
}
