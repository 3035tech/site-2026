import { locales, localizedPath } from '@/lib/i18n/config'
import { brandLogo } from '@/lib/images'
import { getCaseStudyPages, getServicePages } from '@/lib/pages-data'
import { siteUrl } from '@/lib/site'

function xmlEscape(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&apos;',
    }
    return entities[character]
  })
}

export function GET() {
  const entries = locales.flatMap((locale) => [
    { locale, path: '/', image: brandLogo.src },
    ...getServicePages(locale).map((service) => ({
      locale,
      path: `/services/${service.slug}`,
      image: service.image,
    })),
    ...getCaseStudyPages(locale).map((caseStudy) => ({
      locale,
      path: `/case-studies/${caseStudy.slug}`,
      image: caseStudy.image,
    })),
  ])

  const urls = entries
    .filter((entry): entry is typeof entry & { image: string } => Boolean(entry.image))
    .map(({ locale, path, image }) => {
      const pageUrl = `${siteUrl}${localizedPath(locale, path)}`
      const imageUrl = `${siteUrl}${image}`
      return `<url><loc>${xmlEscape(pageUrl)}</loc><image:image><image:loc>${xmlEscape(imageUrl)}</image:loc></image:image></url>`
    })

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">${urls.join('')}</urlset>`

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  })
}
