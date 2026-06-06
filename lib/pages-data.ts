import { Locale, locales, localizedPath } from '@/lib/i18n/config'
import { translations } from '@/lib/i18n/translations'
import { siteUrl } from '@/lib/site'

function tr(locale: Locale) {
  const dict = translations[locale]
  return (key: string) => dict[key] ?? translations.en[key] ?? key
}

export type ServiceSection = {
  heading: string
  paragraphs: string[]
}

export type ServicePage = {
  slug: string
  title: string
  description: string
  introParagraphs: string[]
  sections: ServiceSection[]
  examples?: { title: string; paragraph: string }
  highlights: string[]
  metaTitle: string
  metaDescription: string
  image?: string
}

export type CaseStudyPage = {
  slug: string
  client: string
  location: string
  industry: string
  engagement: string
  description: string
  details: string
  impact: string
  metaTitle: string
  metaDescription: string
  image: string
}

const serviceDefs = [
  {
    slug: 'managed-squads',
    key: 'managedSquads',
    image: '/images/managed-squads.jpg',
  },
  {
    slug: 'staff-augmentation',
    key: 'staffAug',
    image: '/images/staff-augmentation.jpg',
  },
  {
    slug: 'custom-development',
    key: 'customDev',
    image: '/images/custom-development.jpg',
  },
  {
    slug: 'support-evolution',
    key: 'support',
    image: '/images/support-evolution.jpg',
  },
] as const

function getServiceDetailContent(locale: Locale, key: string) {
  const t = tr(locale)
  const prefix = `services.${key}`

  const introParagraphs = [`${prefix}.detailP1`, `${prefix}.detailP2`]
    .map((k) => t(k))
    .filter((p) => p && !p.startsWith('services.'))

  const sections: ServiceSection[] = [
    {
      heading: t(`${prefix}.whenTitle`),
      paragraphs: [`${prefix}.whenP1`, `${prefix}.whenP2`]
        .map((k) => t(k))
        .filter((p) => p && !p.startsWith('services.')),
    },
    {
      heading: t(`${prefix}.howTitle`),
      paragraphs: [`${prefix}.howP1`, `${prefix}.howP2`]
        .map((k) => t(k))
        .filter((p) => p && !p.startsWith('services.')),
    },
  ].filter((section) => section.paragraphs.length > 0)

  const examplesTitle = t(`${prefix}.examplesTitle`)
  const examplesP1 = t(`${prefix}.examplesP1`)
  const examples =
    examplesTitle &&
    examplesP1 &&
    !examplesTitle.startsWith('services.') &&
    !examplesP1.startsWith('services.')
      ? { title: examplesTitle, paragraph: examplesP1 }
      : undefined

  return { introParagraphs, sections, examples }
}

const caseStudyDefs = [
  { slug: 'arezzo', client: 'Arezzo / AZZAS 2154', key: 'arezzo', image: '/images/case-arezzo.jpg' },
  { slug: 'clickfunnels', client: 'ClickFunnels', key: 'clickfunnels', image: '/images/case-clickfunnels.jpg' },
  { slug: 'lunchteam', client: 'LunchTeam', key: 'lunchteam', image: '/images/case-lunchteam.jpg' },
  { slug: 'the-fruit-people', client: 'The Fruit People', key: 'fruitpeople', image: '/images/case-fruitpeople.jpg' },
  { slug: 'gomoney', client: 'GoMoney', key: 'gomoney', image: '/images/case-gomoney.jpg' },
  { slug: 'doctorclin', client: 'DoctorClin', key: 'doctorclin', image: '/images/case-doctorclin.jpg' },
  { slug: 'dranjo', client: 'DrAnjo', key: 'dranjo', image: '/images/case-dranjo.jpg' },
] as const

export function getServicePages(locale: Locale): ServicePage[] {
  const t = tr(locale)

  return serviceDefs.map(({ slug, key, image }) => {
    const { introParagraphs, sections, examples } = getServiceDetailContent(locale, key)

    return {
      slug,
      title: t(`services.${key}.title`),
      description: t(`services.${key}.desc`),
      introParagraphs,
      sections,
      examples,
      highlights: [
        t(`services.${key}.h1`),
        t(`services.${key}.h2`),
        t(`services.${key}.h3`),
      ],
      metaTitle: t(`services.${key}.title`),
      metaDescription: t(`services.${key}.desc`),
      image,
    }
  })
}

export function getCaseStudyPages(locale: Locale): CaseStudyPage[] {
  const t = tr(locale)

  return caseStudyDefs.map(({ slug, client, key, image }) => ({
    slug,
    client,
    location: t(`cases.${key}.location`),
    industry: t(`cases.${key}.industry`),
    engagement: t(`cases.${key}.engagement`),
    description: t(`cases.${key}.description`),
    details: t(`cases.${key}.details`),
    impact: t(`cases.${key}.impact`),
    metaTitle: `${client} — ${t('cases.label')}`,
    metaDescription: t(`cases.${key}.description`),
    image,
  }))
}

export function getServiceBySlug(locale: Locale, slug: string) {
  return getServicePages(locale).find((service) => service.slug === slug)
}

export function getCaseStudyBySlug(locale: Locale, slug: string) {
  return getCaseStudyPages(locale).find((caseStudy) => caseStudy.slug === slug)
}

export function getStaticPageMeta(locale: Locale) {
  const t = tr(locale)

  return {
    about: {
      path: '/about',
      title: `${t('about.title')} ${t('about.titleHighlight')}`,
      description: t('about.desc1'),
    },
    teach: {
      path: '/3035teach',
      title: `3035TEACH — ${t('teach.label')}`,
      description: t('teach.desc1'),
    },
    contact: {
      path: '/contact',
      title: t('contact.label'),
      description: t('contact.subtitle'),
    },
    privacy: {
      path: '/privacy',
      title: t('privacy.metaTitle'),
      description: t('privacy.metaDescription'),
    },
    ireland: {
      path: '/ireland',
      title: t('ireland.metaTitle'),
      description: t('ireland.metaDescription'),
    },
    servicesIndex: {
      path: '/services',
      title: t('services.label'),
      description: t('services.indexDesc'),
    },
    caseStudiesIndex: {
      path: '/case-studies',
      title: t('cases.label'),
      description: t('cases.indexDesc'),
    },
  } as const
}

export function pageUrl(locale: Locale, path: string) {
  return `${siteUrl}${localizedPath(locale, path)}`
}

const basePaths = [
  '/',
  '/services',
  '/case-studies',
  '/about',
  '/3035teach',
  '/contact',
  '/privacy',
  '/ireland',
  ...serviceDefs.map((s) => `/services/${s.slug}`),
  ...caseStudyDefs.map((c) => `/case-studies/${c.slug}`),
]

export const allIndexablePaths = locales.flatMap((locale) =>
  basePaths.map((path) => localizedPath(locale, path))
)

export const serviceSlugs = serviceDefs.map((s) => s.slug)
export const caseStudySlugs = caseStudyDefs.map((c) => c.slug)
