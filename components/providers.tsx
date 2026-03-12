"use client"

import { ReactNode } from "react"
import { LanguageProvider, translations } from "@/lib/i18n"

export function Providers({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider translations={translations}>
      {children}
    </LanguageProvider>
  )
}
