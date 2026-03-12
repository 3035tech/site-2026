"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

export type Language = "en" | "es" | "pt" | "de"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

interface LanguageProviderProps {
  children: ReactNode
  translations: Record<Language, Record<string, string>>
}

export function LanguageProvider({ children, translations }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>("en")
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem("language") as Language | null
    if (stored && ["en", "es", "pt", "de"].includes(stored)) {
      setLanguageState(stored)
    }
    setIsHydrated(true)
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    const translation = translations[language]?.[key]
    if (!translation) {
      // Fallback to English
      return translations["en"]?.[key] || key
    }
    return translation
  }

  // Prevent hydration mismatch by rendering with default language until hydrated
  const value = {
    language: isHydrated ? language : "en",
    setLanguage,
    t,
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}
