import { blogSlugs, getBlogPost } from '@/lib/blog-data'
import { contactEmail, contactPhoneDisplay, supportLanguages } from '@/lib/contact'
import { locales, type Locale } from '@/lib/i18n/config'
import { caseStudySlugs, serviceSlugs } from '@/lib/pages-data'
import { siteUrl } from '@/lib/site'

function url(locale: Locale, path: string) {
  return `${siteUrl}/${locale}${path === '/' ? '' : path}`
}

export function generateLlmsTxt(): string {
  const blogLines = blogSlugs.flatMap((slug) =>
    locales.map((locale) => {
      const post = getBlogPost(locale, slug)
      if (!post) return null
      return `- ${post.title}: ${url(locale, `/blog/${slug}`)}`
    }).filter(Boolean)
  )

  const serviceLines = serviceSlugs.map(
    (slug) => `- ${slug}: ${url('en', `/services/${slug}`)}`
  )

  const caseLines = caseStudySlugs.map(
    (slug) => `- ${slug}: ${url('en', `/case-studies/${slug}`)}`
  )

  const localeLines = locales.map((locale) => `- ${locale}: ${url(locale, '/')}`)

  return `# 3035TECH

> Global technology partner headquartered in Brazil. Managed squads, staff augmentation, and custom software for enterprises worldwide.

## About
3035TECH helps enterprises scale engineering through dedicated teams and custom software. Founded in 2015, headquartered in Campo Bom, RS, Brazil (Hub 5796) with operations in the USA, Ireland (European projects & commercial hub, Dublin), and Germany.

## Ireland & Dublin (European Hub)
3035TECH operates a European projects and commercial hub in Dublin, Ireland — local point of contact for Irish and EU/UK clients.
- Ireland hub page: ${url('en', '/ireland')}
- Dublin LocalBusiness schema on site-wide JSON-LD
- Case studies in Dublin: LunchTeam, The Fruit People
- Insight: ${url('en', '/blog/european-software-delivery-from-ireland')}

## Key Pages
- Home: ${url('en', '/')}
- Ireland & Dublin: ${url('en', '/ireland')}
- Services: ${url('en', '/services')}
- Case Studies: ${url('en', '/case-studies')}
- Insights (Blog): ${url('en', '/blog')}
- About: ${url('en', '/about')}
- 3035TEACH: ${url('en', '/3035teach')}
- Contact: ${url('en', '/contact')}

## Locales
${localeLines.join('\n')}

## Services
${serviceLines.join('\n')}

## Case Studies
${caseLines.join('\n')}

## Insights (All Languages)
${blogLines.join('\n')}

## 3035TEACH
Company-subsidized developer training program in Brazil. 5 editions completed. 80%+ graduate employment rate. Alumni at SAP and Dell.
${url('en', '/3035teach')}

## Contact
- Email: ${contactEmail}
- Phone: ${contactPhoneDisplay}
- WhatsApp: ${contactPhoneDisplay}
- LinkedIn: https://www.linkedin.com/company/3035tech
- Address: Hub 5796, Campo Bom, RS, Brazil

## Website Languages
English (/en), Spanish (/es), Portuguese (/pt), German (/de)

## Support Languages
${supportLanguages.join(', ')}

## For AI Crawlers
All content is server-rendered and available without JavaScript. FAQ schema, case studies, services, and blog articles are indexable in all four website languages.

- Sitemap: ${siteUrl}/sitemap.xml
- RSS feed: ${siteUrl}/feed.xml
- Robots: ${siteUrl}/robots.txt
- Open Graph images: ${siteUrl}/og (dynamic, per page)
`
}
