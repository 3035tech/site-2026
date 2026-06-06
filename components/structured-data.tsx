import { siteUrl } from '@/lib/site'
import { brandLogo } from '@/lib/images'
import {
  getCaseStudyPages,
  getServicePages,
  getStaticPageMeta,
  pageUrl,
} from '@/lib/pages-data'
import {
  getFaqItems,
  serviceOffers,
} from '@/lib/seo-data'
import { contactEmail, organizationPhone, supportLanguages } from '@/lib/contact'
import { getBlogPosts } from '@/lib/blog-data'
import { htmlLangMap, type Locale } from '@/lib/i18n/config'
import {
  dublinMapsUrl,
  europeHubAddress,
  headquartersAddress,
  organizationLocations,
} from '@/lib/org-locations'
import { irelandHubPath } from '@/lib/ireland-seo'
import { translations } from '@/lib/i18n/translations'

export function StructuredData({ locale }: { locale: Locale }) {
  const servicePages = getServicePages(locale)
  const caseStudyPages = getCaseStudyPages(locale)
  const blogPosts = getBlogPosts(locale)
  const staticPageMeta = getStaticPageMeta(locale)
  const homeUrl = pageUrl(locale, '/')

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: '3035TECH',
    alternateName: '3035 Tech',
    url: homeUrl,
    logo: `${siteUrl}${brandLogo.src}`,
    description:
      'Global technology partner headquartered in Brazil with a European hub in Dublin, Ireland. Managed squads, staff augmentation, and custom software development for enterprises worldwide.',
    foundingDate: '2015',
    sameAs: [
      'https://www.linkedin.com/company/3035tech',
      'https://github.com/3035tech',
      'https://instagram.com/3035.tech',
    ],
    address: headquartersAddress,
    location: organizationLocations,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: contactEmail,
        telephone: organizationPhone,
        availableLanguage: [...supportLanguages],
        areaServed: 'Worldwide',
      },
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: contactEmail,
        telephone: organizationPhone,
        availableLanguage: ['English', 'Portuguese'],
        areaServed: ['IE', 'EU', 'GB'],
      },
    ],
    areaServed: 'Worldwide',
    knowsAbout: [
      'Software Development',
      'Staff Augmentation',
      'Managed Squads',
      'Custom Software',
      'Global Technology Partner',
      'Nearshore Development',
      'LATAM Technology',
      'Mobile Development',
      'Web Development',
      'Cloud Solutions',
      'Enterprise Software',
      'Software Development Ireland',
      'Technology Partner Dublin',
      'European Software Delivery',
    ],
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: '3035TECH',
    url: homeUrl,
    description:
      '3035TECH — Your Global Technology Partner. Managed squads, staff augmentation, and custom software development.',
    inLanguage: htmlLangMap[locale],
  }

  const professionalServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: '3035TECH',
    image: `${siteUrl}${brandLogo.src}`,
    url: homeUrl,
    telephone: organizationPhone,
    email: contactEmail,
    priceRange: '$$$$',
    address: headquartersAddress,
    location: organizationLocations,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Software Development Services',
      itemListElement: serviceOffers.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.name,
          description: service.description,
          provider: {
            '@type': 'Organization',
            name: '3035TECH',
          },
        },
      })),
    },
  }

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteUrl}/#localbusiness`,
    name: '3035TECH — Campo Bom',
    image: `${siteUrl}${brandLogo.src}`,
    url: homeUrl,
    telephone: organizationPhone,
    email: contactEmail,
    address: headquartersAddress,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -29.6784,
      longitude: -51.0533,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    priceRange: '$$$$',
    areaServed: 'Worldwide',
  }

  const europeHubSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteUrl}/#localbusiness-dublin`,
    name: '3035TECH — Dublin, Ireland',
    alternateName: ['3035TECH Ireland', '3035 Tech Dublin', '3035TECH European Hub'],
    description:
      'European projects and commercial hub in Dublin, Ireland — project coordination and commercial engagement for Irish, EU, and UK clients.',
    image: `${siteUrl}${brandLogo.src}`,
    url: pageUrl(locale, irelandHubPath),
    telephone: organizationPhone,
    email: contactEmail,
    address: europeHubAddress,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 53.3498,
      longitude: -6.2603,
    },
    hasMap: dublinMapsUrl,
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:30',
    },
    parentOrganization: {
      '@type': 'Organization',
      name: '3035TECH',
      url: homeUrl,
    },
    areaServed: [
      { '@type': 'Country', name: 'Ireland' },
      { '@type': 'AdministrativeArea', name: 'Dublin' },
      'European Union',
      'United Kingdom',
    ],
  }

  const educationalOrgSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: '3035TEACH',
    description:
      'Fully company-subsidized developer training program by 3035TECH in Brazil. 5 editions completed, 80%+ graduate employment rate.',
    url: pageUrl(locale, staticPageMeta.teach.path),
    parentOrganization: {
      '@type': 'Organization',
      name: '3035TECH',
    },
  }

  const faqItems = getFaqItems(locale)

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  const siteNavigationSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'SiteNavigationElement',
        position: 1,
        name: 'Services',
        url: pageUrl(locale, staticPageMeta.servicesIndex.path),
      },
      ...servicePages.map((service, index) => ({
        '@type': 'SiteNavigationElement',
        position: index + 2,
        name: service.title,
        url: pageUrl(locale, `/services/${service.slug}`),
      })),
      {
        '@type': 'SiteNavigationElement',
        position: servicePages.length + 2,
        name: 'Case Studies',
        url: pageUrl(locale, staticPageMeta.caseStudiesIndex.path),
      },
      {
        '@type': 'SiteNavigationElement',
        position: servicePages.length + 3,
        name: '3035TEACH',
        url: pageUrl(locale, staticPageMeta.teach.path),
      },
      {
        '@type': 'SiteNavigationElement',
        position: servicePages.length + 4,
        name: 'About',
        url: pageUrl(locale, staticPageMeta.about.path),
      },
      {
        '@type': 'SiteNavigationElement',
        position: servicePages.length + 5,
        name: translations[locale]['ireland.label'] ?? 'Ireland & Dublin',
        url: pageUrl(locale, irelandHubPath),
      },
      {
        '@type': 'SiteNavigationElement',
        position: servicePages.length + 6,
        name: 'Contact',
        url: pageUrl(locale, staticPageMeta.contact.path),
      },
      {
        '@type': 'SiteNavigationElement',
        position: servicePages.length + 7,
        name: 'Insights',
        url: pageUrl(locale, '/blog'),
      },
    ],
  }

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: '3035TECH Insights',
    itemListElement: blogPosts.map((post, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.description,
        datePublished: post.publishedAt,
        url: pageUrl(locale, `/blog/${post.slug}`),
        author: {
          '@type': 'Organization',
          name: '3035TECH',
        },
      },
    })),
  }

  const caseStudiesSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: '3035TECH Case Studies',
    itemListElement: caseStudyPages.map((caseStudy, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Article',
        headline: `${caseStudy.client} — ${caseStudy.engagement}`,
        description: `${caseStudy.description} ${caseStudy.details}`,
        author: {
          '@type': 'Organization',
          name: '3035TECH',
        },
        about: caseStudy.industry,
        abstract: caseStudy.impact,
        url: pageUrl(locale, `/case-studies/${caseStudy.slug}`),
      },
    })),
  }

  const schemas = [
    organizationSchema,
    websiteSchema,
    localBusinessSchema,
    europeHubSchema,
    professionalServiceSchema,
    educationalOrgSchema,
    siteNavigationSchema,
    faqSchema,
    caseStudiesSchema,
    blogSchema,
  ]

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={`${schema['@type']}-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}
