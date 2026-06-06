import { pageUrl } from '@/lib/pages-data'
import { contactEmail, organizationPhone } from '@/lib/contact'
import { siteUrl } from '@/lib/site'
import { brandLogo } from '@/lib/images'
import {
  IRELAND_FAQ_COUNT,
  irelandHubPath,
  irelandSeoKeywords,
} from '@/lib/ireland-seo'
import { dublinGeo, dublinMapsUrl, europeHubAddress } from '@/lib/org-locations'
import { translations } from '@/lib/i18n/translations'
import type { Locale } from '@/lib/i18n/config'

function irelandFaqItems(locale: Locale) {
  const dict = translations[locale]
  return Array.from({ length: IRELAND_FAQ_COUNT }, (_, i) => {
    const n = i + 1
    return {
      question: dict[`ireland.faq.${n}.q`] ?? translations.en[`ireland.faq.${n}.q`],
      answer: dict[`ireland.faq.${n}.a`] ?? translations.en[`ireland.faq.${n}.a`],
    }
  })
}

export function IrelandStructuredData({ locale }: { locale: Locale }) {
  const t = translations[locale]
  const pagePath = irelandHubPath
  const url = pageUrl(locale, pagePath)

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    name: t['ireland.metaTitle'],
    description: t['ireland.metaDescription'],
    url,
    inLanguage: locale,
    isPartOf: {
      '@type': 'WebSite',
      name: '3035TECH',
      url: siteUrl,
    },
    about: {
      '@type': 'Organization',
      name: '3035TECH',
      url: siteUrl,
    },
    keywords: irelandSeoKeywords.join(', '),
  }

  const irelandFaqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${url}#faq`,
    mainEntity: irelandFaqItems(locale).map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  const dublinOfficeSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteUrl}/#localbusiness-dublin`,
    name: '3035TECH — Dublin, Ireland',
    alternateName: ['3035TECH Ireland', '3035 Tech Dublin'],
    description: t['ireland.metaDescription'],
    image: `${siteUrl}${brandLogo.src}`,
    url,
    telephone: organizationPhone,
    email: contactEmail,
    address: europeHubAddress,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: dublinGeo.latitude,
      longitude: dublinGeo.longitude,
    },
    hasMap: dublinMapsUrl,
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:30',
    },
    areaServed: [
      { '@type': 'Country', name: 'Ireland' },
      { '@type': 'AdministrativeArea', name: 'Dublin' },
      { '@type': 'Place', name: 'European Union' },
      { '@type': 'Country', name: 'United Kingdom' },
    ],
    parentOrganization: {
      '@type': 'Organization',
      name: '3035TECH',
      url: siteUrl,
    },
    knowsAbout: [
      'Software Development Ireland',
      'Staff Augmentation Dublin',
      'Managed Engineering Squads',
      'Nearshore Development Europe',
      'Technology Partner Ireland',
    ],
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: t['pages.home'],
        item: pageUrl(locale, '/'),
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: t['ireland.label'],
        item: url,
      },
    ],
  }

  // Reinforce Dublin entity linkage for crawlers on this page
  const organizationIrelandSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${url}#organization-ireland`,
    name: '3035TECH',
    url: siteUrl,
    logo: `${siteUrl}${brandLogo.src}`,
    location: {
      '@type': 'Place',
      name: '3035TECH European Hub — Dublin',
      address: europeHubAddress,
      geo: {
        '@type': 'GeoCoordinates',
        latitude: dublinGeo.latitude,
        longitude: dublinGeo.longitude,
      },
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: contactEmail,
      telephone: organizationPhone,
      areaServed: ['IE', 'EU', 'GB'],
      availableLanguage: ['English', 'Portuguese'],
    },
  }

  const schemas = [
    webPageSchema,
    irelandFaqSchema,
    dublinOfficeSchema,
    breadcrumbSchema,
    organizationIrelandSchema,
  ]

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={`ireland-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}
