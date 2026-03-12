"use client"

import { useEffect, useRef, useState } from "react"
import { trackEvent } from "@/lib/ga"

type TrackedSection = {
  id: string
  label: string
}

const SECTIONS: TrackedSection[] = [
  { id: "services", label: "services" },
  { id: "cases", label: "cases" },
  { id: "teach", label: "teach" },
  { id: "about", label: "about" },
  { id: "contact", label: "contact" },
]

export function SectionViewTracker() {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const hasTrackedRef = useRef<Set<string>>(new Set())

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return

          const target = entry.target as HTMLElement
          const id = target.id
          if (!id) return

          // Só registra se realmente mudou de seção
          if (activeSection === id) return

          setActiveSection(id)

          // Evita disparar muitas vezes ao rolar para cima/baixo
          if (!hasTrackedRef.current.has(id)) {
            hasTrackedRef.current.add(id)
          }

          trackEvent({
            action: "section_view",
            category: "section",
            label: id,
          })
        })
      },
      {
        threshold: 0.5,
      }
    )

    SECTIONS.forEach((section) => {
      const el = document.getElementById(section.id)
      if (el) observer.observe(el)
    })

    return () => {
      observer.disconnect()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return null
}

