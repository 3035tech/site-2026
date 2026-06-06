export const contactEmail = 'contact@3035tech.com'
export const organizationPhone = '+5551996442104'
export const contactPhoneDisplay = '+55 51 99644-2104'
export const contactPhoneDisplayAlt = '(+55) 51 99644-2104'

export const contactMailtoUrl = `mailto:${contactEmail}`
export const contactTelUrl = `tel:${organizationPhone}`
export const contactWhatsAppUrl = 'https://wa.me/5551996442104'

export const supportLanguages = ['English', 'Portuguese'] as const

/** Matches email and phone variants used in copy */
export const contactLinkPattern =
  /contact@3035tech\.com|(\(\+55\)\s*51\s*99644-2104|\+55\s*51\s*99644-2104)/g
