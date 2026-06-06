export type CookieConsentValue = 'accepted' | 'rejected'

export const COOKIE_CONSENT_KEY = '3035tech_cookie_consent'
export const COOKIE_CONSENT_EVENT = '3035tech:cookie-consent'

export function getStoredConsent(): CookieConsentValue | null {
  if (typeof window === 'undefined') return null
  const value = localStorage.getItem(COOKIE_CONSENT_KEY)
  return value === 'accepted' || value === 'rejected' ? value : null
}

export function storeConsent(value: CookieConsentValue) {
  localStorage.setItem(COOKIE_CONSENT_KEY, value)
  window.dispatchEvent(new CustomEvent(COOKIE_CONSENT_EVENT, { detail: value }))
}

export function hasAnalyticsConsent(consent: CookieConsentValue | null): consent is 'accepted' {
  return consent === 'accepted'
}
