"use client"

import { ReactNode } from "react"
import { LanguageProvider, translations, type Language } from "@/lib/i18n"

export function Providers({
  children,
  locale,
}: {
  children: ReactNode
  locale: Language
}) {
  return (
    <LanguageProvider translations={translations} initialLocale={locale}>
      {children}
    </LanguageProvider>
  )
}
