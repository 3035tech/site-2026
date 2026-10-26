import { MetadataRoute } from 'next'
import { blogSlugs, getBlogPost } from '@/lib/blog-data'
import { locales, localizedPath } from '@/lib/i18n/config'
import { buildAlternateLanguages } from '@/lib/i18n/server'
import { caseStudySlugs, serviceSlugs } from '@/lib/pages-data'
import { siteUrl } from '@/lib/site'

const basePaths = [
  '/',
  '/services',
  '/case-studies',
  '/about',
  '/3035teach',
  '/contact',
  '/privacy',
  '/ireland',
  '/blog',
  ...serviceSlugs.map((slug) => `/services/${slug}`),
  ...caseStudySlugs.map((slug) => `/case-studies/${slug}`),
  ...blogSlugs.map((slug) => `/blog/${slug}`),
]

function lastModifiedForPath(path: string): Date | undefined {
  const blogMatch = path.match(/^\/blog\/([^/]+)$/)
  if (blogMatch) {
    const post = getBlogPost('en', blogMatch[1])
    if (post) return new Date(post.publishedAt)
  }
}

function priorityForPath(path: string): number {
  if (path === '/') return 1
  if (path === '/ireland') return 0.92
  if (path === '/blog') return 0.85
  if (path.split('/').length <= 2) return 0.9
  return 0.8
}

export default function sitemap(): MetadataRoute.Sitemap {
  return basePaths.flatMap((path) => locales.map((locale) => {
    const localePath = localizedPath(locale, path)
    const lastModified = lastModifiedForPath(path)
    return {
      url: `${siteUrl}${localePath}`,
      ...(lastModified ? { lastModified } : {}),
      changeFrequency: path === '/' ? 'weekly' : path.includes('/blog/') ? 'monthly' : 'monthly',
      priority: priorityForPath(path),
      alternates: {
        languages: buildAlternateLanguages(path),
      },
    }
  }))
}
