"use client"

import { ReactNode } from "react"
import { ConsentGatedAnalytics } from "@/components/consent-gated-analytics"
import { CookieConsentAnalyticsSync, CookieConsentProvider } from "@/components/cookie-consent-provider"
import { GaAnalytics } from "@/components/ga-analytics"
import { LanguageProvider, translations, type Language } from "@/lib/i18n"

export function Providers({
  children,
  locale,
}: {
  children: ReactNode
  locale: Language
}) {
  return (
    <LanguageProvider key={locale} translations={translations} initialLocale={locale}>
      <CookieConsentProvider>
        {children}
        <CookieConsentAnalyticsSync />
        <ConsentGatedAnalytics />
        <GaAnalytics />
      </CookieConsentProvider>
    </LanguageProvider>
  )
}
