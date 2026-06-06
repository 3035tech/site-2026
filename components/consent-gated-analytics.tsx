'use client'

import { Analytics } from '@vercel/analytics/next'
import { useCookieConsent } from '@/components/cookie-consent-provider'
import { hasAnalyticsConsent } from '@/lib/cookie-consent'

export function ConsentGatedAnalytics() {
  const { consent } = useCookieConsent()

  if (!hasAnalyticsConsent(consent)) {
    return null
  }

  return <Analytics />
}
