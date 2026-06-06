export type SiteImage = {
  src: string
  alt: string
  /** Apply white treatment for dark section backgrounds */
  invertOnDark?: boolean
}

export const brandLogo: SiteImage = {
  src: '/images/logos/3035tech-logo.svg',
  alt: '3035TECH',
}

export const clientLogos: (SiteImage & { name: string; url: string })[] = [
  {
    name: 'Arezzo',
    src: '/images/logos/arezzo.png',
    alt: 'Arezzo logo',
    url: 'https://www.arezzo.com.br',
    invertOnDark: true,
  },
  {
    name: 'ClickFunnels',
    src: '/images/logos/clickfunnels.svg',
    alt: 'ClickFunnels logo',
    url: 'https://www.clickfunnels.com',
    invertOnDark: true,
  },
  {
    name: 'Karsten',
    src: '/images/logos/karsten.svg',
    alt: 'Karsten logo',
    url: 'https://www.karsten.com.br',
    invertOnDark: true,
  },
  {
    name: 'LunchTeam',
    src: '/images/logos/lunchteam.svg',
    alt: 'LunchTeam logo',
    url: 'https://lunch.team',
    invertOnDark: true,
  },
  {
    name: 'GoMoney',
    src: '/images/logos/gomoney.png',
    alt: 'GoMoney logo',
    url: 'https://www.gomoney.me',
    invertOnDark: true,
  },
  {
    name: 'DoctorClin',
    src: '/images/logos/doctorclin.svg',
    alt: 'DoctorClin logo',
    url: 'https://www.doctorclin.com.br',
  },
  {
    name: 'The Fruit People',
    src: '/images/logos/fruitpeople.svg',
    alt: 'The Fruit People logo',
    url: 'https://www.thefruitpeople.ie',
    invertOnDark: true,
  },
  {
    name: 'Drivvo',
    src: '/images/logos/drivvo.svg',
    alt: 'Drivvo logo',
    url: 'https://www.drivvo.com',
    invertOnDark: true,
  },
  {
    name: 'Vans',
    src: '/images/logos/vans.svg',
    alt: 'Vans logo',
    url: 'https://www.vans.com.br',
  },
]

export const caseStudyImages: (SiteImage & { id: string; client: string; slug: string })[] = [
  {
    id: 'arezzo',
    slug: 'arezzo',
    client: 'Arezzo / AZZAS 2154',
    src: '/images/case-arezzo.jpg',
    alt: 'Arezzo case study',
  },
  {
    id: 'clickfunnels',
    slug: 'clickfunnels',
    client: 'ClickFunnels',
    src: '/images/case-clickfunnels.jpg',
    alt: 'ClickFunnels case study',
  },
  {
    id: 'lunchteam',
    slug: 'lunchteam',
    client: 'LunchTeam',
    src: '/images/case-lunchteam.jpg',
    alt: 'LunchTeam case study',
  },
  {
    id: 'fruitpeople',
    slug: 'the-fruit-people',
    client: 'The Fruit People',
    src: '/images/case-fruitpeople.jpg',
    alt: 'The Fruit People case study',
  },
  {
    id: 'gomoney',
    slug: 'gomoney',
    client: 'GoMoney',
    src: '/images/case-gomoney.jpg',
    alt: 'GoMoney case study',
  },
  {
    id: 'doctorclin',
    slug: 'doctorclin',
    client: 'DoctorClin',
    src: '/images/case-doctorclin.jpg',
    alt: 'DoctorClin case study',
  },
  {
    id: 'dranjo',
    slug: 'dranjo',
    client: 'DrAnjo',
    src: '/images/case-dranjo.jpg',
    alt: 'DrAnjo case study',
  },
]

export const teachAlumniLogos: SiteImage[] = [
  {
    src: '/images/logos/sap.svg',
    alt: 'SAP alumni at 3035TEACH',
    invertOnDark: false,
  },
  {
    src: '/images/logos/dell.svg',
    alt: 'Dell alumni at 3035TEACH',
    invertOnDark: true,
  },
]

/** All image paths referenced by the site — used for validation scripts */
export const allSiteImagePaths = [
  brandLogo.src,
  ...clientLogos.map((c) => c.src),
  ...caseStudyImages.map((c) => c.src),
  ...teachAlumniLogos.map((c) => c.src),
  '/images/managed-squads.jpg',
  '/images/staff-augmentation.jpg',
  '/images/custom-development.jpg',
]
