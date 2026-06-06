import type { Metadata } from 'next'
import { type Locale, locales, localizedPath } from '@/lib/i18n/config'
import { buildAlternateLanguages } from '@/lib/i18n/server'
import { buildDynamicOgImageUrl, resolveAbsoluteImageUrl } from '@/lib/og-url'
import { siteUrl } from '@/lib/site'

const ogLocaleMap: Record<Locale, string> = {
  en: 'en_US',
  es: 'es_ES',
  pt: 'pt_BR',
  de: 'de_DE',
}

type PageMetadataInput = {
  locale: Locale
  title: Metadata['title']
  description: string
  path: string
  /** Absolute URL or path starting with / */
  image?: string
  /** Short label shown on generated OG image when no image is provided */
  ogLabel?: string
}

export function metadataTitleToString(title: Metadata['title']): string {
  if (!title) return '3035TECH'
  if (typeof title === 'string') return title
  if ('absolute' in title && title.absolute) return title.absolute
  if ('default' in title && title.default) return title.default
  return '3035TECH'
}

function buildSocialImages(input: {
  title: Metadata['title']
  description: string
  image?: string
  ogLabel?: string
}) {
  const titleStr = metadataTitleToString(input.title)
  const imageUrl =
    resolveAbsoluteImageUrl(input.image) ??
    buildDynamicOgImageUrl({
      title: titleStr,
      description: input.description,
      label: input.ogLabel,
    })

  return [{ url: imageUrl, width: 1200, height: 630, alt: titleStr }]
}

export function createPageMetadata({
  locale,
  title,
  description,
  path,
  image,
  ogLabel,
}: PageMetadataInput): Metadata {
  const normalizedPath = path === '/' ? '/' : path.startsWith('/') ? path : `/${path}`
  const url = `${siteUrl}${localizedPath(locale, normalizedPath)}`
  const images = buildSocialImages({ title, description, image, ogLabel })

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: buildAlternateLanguages(normalizedPath),
    },
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      locale: ogLocaleMap[locale],
      alternateLocale: locales.filter((l) => l !== locale).map((l) => ogLocaleMap[l]),
      images,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: images.map((img) => img.url),
    },
  }
}

export function createArticleMetadata({
  locale,
  title,
  description,
  path,
  publishedAt,
  ogLabel,
}: PageMetadataInput & { publishedAt: string }): Metadata {
  const base = createPageMetadata({ locale, title, description, path, ogLabel })

  return {
    ...base,
    openGraph: {
      ...base.openGraph,
      type: 'article',
      publishedTime: publishedAt,
    },
  }
}
