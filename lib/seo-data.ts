import { translations } from '@/lib/i18n/translations'
import type { Locale } from '@/lib/i18n/config'
import { contactEmail, contactPhoneDisplay, organizationPhone } from '@/lib/contact'
import { siteUrl } from '@/lib/site'

const en = translations.en

export { organizationPhone }

const FAQ_COUNT = 10

export function getFaqItems(locale: Locale) {
  const dict = translations[locale]
  return Array.from({ length: FAQ_COUNT }, (_, i) => {
    const n = i + 1
    return {
      question: dict[`faq.${n}.q`] ?? translations.en[`faq.${n}.q`],
      answer: dict[`faq.${n}.a`] ?? translations.en[`faq.${n}.a`],
    }
  })
}

/** @deprecated Use getFaqItems('en') */
export const faqItems = getFaqItems('en')

export const reviewItems = [
  {
    author: 'Brandon Klotz',
    jobTitle: en['testimonials.1.title'],
    quote: en['testimonials.1.quote'],
  },
  {
    author: 'Brian Dennis',
    jobTitle: en['testimonials.2.title'],
    quote: en['testimonials.2.quote'],
  },
  {
    author: 'Maurício Pires',
    jobTitle: en['testimonials.3.title'],
    quote: en['testimonials.3.quote'],
  },
  {
    author: 'Eduardo Viegas',
    jobTitle: en['testimonials.4.title'],
    quote: en['testimonials.4.quote'],
  },
  {
    author: 'Paulo Deitos Filho',
    jobTitle: en['testimonials.5.title'],
    quote: en['testimonials.5.quote'],
  },
  {
    author: 'Hugo Ferreira',
    jobTitle: en['testimonials.6.title'],
    quote: en['testimonials.6.quote'],
  },
  {
    author: 'Igor Silva',
    jobTitle: en['testimonials.7.title'],
    quote: en['testimonials.7.quote'],
  },
  {
    author: 'Fabio Sano',
    jobTitle: en['testimonials.8.title'],
    quote: en['testimonials.8.quote'],
  },
]

export const caseStudySeoItems = [
  {
    id: 'arezzo',
    name: 'Arezzo / AZZAS 2154',
    industry: en['cases.arezzo.industry'],
    engagement: en['cases.arezzo.engagement'],
    description: `${en['cases.arezzo.description']} ${en['cases.arezzo.details']}`,
    impact: en['cases.arezzo.impact'],
  },
  {
    id: 'clickfunnels',
    name: 'ClickFunnels',
    industry: en['cases.clickfunnels.industry'],
    engagement: en['cases.clickfunnels.engagement'],
    description: `${en['cases.clickfunnels.description']} ${en['cases.clickfunnels.details']}`,
    impact: en['cases.clickfunnels.impact'],
  },
  {
    id: 'lunchteam',
    name: 'LunchTeam',
    industry: en['cases.lunchteam.industry'],
    engagement: en['cases.lunchteam.engagement'],
    description: `${en['cases.lunchteam.description']} ${en['cases.lunchteam.details']}`,
    impact: en['cases.lunchteam.impact'],
  },
  {
    id: 'fruitpeople',
    name: 'The Fruit People',
    industry: en['cases.fruitpeople.industry'],
    engagement: en['cases.fruitpeople.engagement'],
    description: `${en['cases.fruitpeople.description']} ${en['cases.fruitpeople.details']}`,
    impact: en['cases.fruitpeople.impact'],
  },
  {
    id: 'gomoney',
    name: 'GoMoney',
    industry: en['cases.gomoney.industry'],
    engagement: en['cases.gomoney.engagement'],
    description: `${en['cases.gomoney.description']} ${en['cases.gomoney.details']}`,
    impact: en['cases.gomoney.impact'],
  },
  {
    id: 'doctorclin',
    name: 'DoctorClin',
    industry: en['cases.doctorclin.industry'],
    engagement: en['cases.doctorclin.engagement'],
    description: `${en['cases.doctorclin.description']} ${en['cases.doctorclin.details']}`,
    impact: en['cases.doctorclin.impact'],
  },
  {
    id: 'dranjo',
    name: 'DrAnjo',
    industry: en['cases.dranjo.industry'],
    engagement: en['cases.dranjo.engagement'],
    description: `${en['cases.dranjo.description']} ${en['cases.dranjo.details']}`,
    impact: en['cases.dranjo.impact'],
  },
]

export const serviceOffers = [
  {
    name: en['services.managedSquads.title'],
    description: en['services.managedSquads.desc'],
  },
  {
    name: en['services.staffAug.title'],
    description: en['services.staffAug.desc'],
  },
  {
    name: en['services.customDev.title'],
    description: en['services.customDev.desc'],
  },
  {
    name: en['services.support.title'],
    description: en['services.support.desc'],
  },
]

export const llmsTxtContent = `# 3035TECH

> Global technology partner headquartered in Brazil. Managed squads, staff augmentation, and custom software for enterprises worldwide.

## About
3035TECH helps enterprises scale engineering through dedicated teams and custom software. Founded in 2015, headquartered in Campo Bom, RS, Brazil with operations in the USA, Ireland, and Germany.

## Services
- Managed Squads: end-to-end engineering teams with full delivery ownership
- Staff Augmentation: senior engineers embedded in client teams (nearshore from LATAM)
- Custom Development: web, mobile, APIs, cloud-native platforms
- Support & Evolution: ongoing maintenance and product evolution

## Notable Clients
Arezzo (retail), ClickFunnels (SaaS), GoMoney (fintech), DoctorClin (healthcare), LunchTeam (FoodTech), The Fruit People (logistics), Karsten (retail)

## 3035TEACH
Company-subsidized developer training program in Brazil. 5 editions completed. 80%+ graduate employment rate. Alumni at SAP and Dell.

## Contact
- Website: ${siteUrl}
- Email: ${contactEmail}
- Phone: ${contactPhoneDisplay}
- LinkedIn: https://www.linkedin.com/company/3035tech
- Location: Hub 5796, Campo Bom, RS, Brazil

## Website Languages
English (/en), Spanish (/es), Portuguese (/pt), German (/de)

## Support Languages
English, Portuguese
`
