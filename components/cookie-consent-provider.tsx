'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useSyncExternalStore,
  type ReactNode,
} from 'react'
import { LocaleLink } from '@/components/locale-link'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/lib/i18n'
import {
  COOKIE_CONSENT_EVENT,
  getStoredConsent,
  hasAnalyticsConsent,
  storeConsent,
  type CookieConsentValue,
} from '@/lib/cookie-consent'
import { updateAnalyticsConsent } from '@/lib/ga'

type CookieConsentContextValue = {
  consent: CookieConsentValue | null
  accept: () => void
  reject: () => void
}

const CookieConsentContext = createContext<CookieConsentContextValue | null>(null)

function subscribeToConsent(callback: () => void) {
  window.addEventListener(COOKIE_CONSENT_EVENT, callback)
  window.addEventListener('storage', callback)
  return () => {
    window.removeEventListener(COOKIE_CONSENT_EVENT, callback)
    window.removeEventListener('storage', callback)
  }
}

function getConsentSnapshot(): CookieConsentValue | null {
  return getStoredConsent()
}

function getServerConsentSnapshot(): CookieConsentValue | null {
  return null
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext)
  if (!context) {
    throw new Error('useCookieConsent must be used within CookieConsentProvider')
  }
  return context
}

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const consent = useSyncExternalStore(
    subscribeToConsent,
    getConsentSnapshot,
    getServerConsentSnapshot,
  )

  const applyConsent = useCallback((value: CookieConsentValue) => {
    storeConsent(value)
    updateAnalyticsConsent(hasAnalyticsConsent(value))
  }, [])

  const value: CookieConsentContextValue = {
    consent,
    accept: () => applyConsent('accepted'),
    reject: () => applyConsent('rejected'),
  }

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
      {consent === null && <CookieConsentBanner onAccept={value.accept} onReject={value.reject} />}
    </CookieConsentContext.Provider>
  )
}

function CookieConsentBanner({
  onAccept,
  onReject,
}: {
  onAccept: () => void
  onReject: () => void
}) {
  const { t } = useLanguage()

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-navy-dark/95 backdrop-blur-md p-4 sm:p-6"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-2xl">
          <p id="cookie-consent-title" className="text-sm font-medium text-white">
            {t('cookies.title')}
          </p>
          <p id="cookie-consent-description" className="mt-1 text-sm text-white/55 leading-relaxed">
            {t('cookies.description')}{' '}
            <LocaleLink
              href="/privacy"
              className="text-brand-purple-light underline underline-offset-2 hover:text-brand-purple transition-colors"
            >
              {t('cookies.privacyLink')}
            </LocaleLink>
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 shrink-0">
          <Button
            type="button"
            variant="outline"
            onClick={onReject}
            className="border-white/15 bg-transparent text-white hover:bg-white/5 hover:text-white"
          >
            {t('cookies.reject')}
          </Button>
          <Button
            type="button"
            onClick={onAccept}
            className="bg-brand-purple hover:bg-brand-purple-hover text-white"
          >
            {t('cookies.accept')}
          </Button>
        </div>
      </div>
    </div>
  )
}

export function CookieConsentAnalyticsSync() {
  const { consent } = useCookieConsent()

  useEffect(() => {
    if (consent === null) return
    updateAnalyticsConsent(hasAnalyticsConsent(consent))
  }, [consent])

  return null
}
