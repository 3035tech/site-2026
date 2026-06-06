"use client"

import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LocaleLink } from "@/components/locale-link"
import { useLanguage } from "@/lib/i18n"

function AnimatedCounter({
  target,
  suffix = "",
}: {
  target: string
  suffix?: string
}) {
  const numericTarget = parseInt(target.replace(/\D/g, "")) || 0
  const [mounted, setMounted] = useState(false)
  const [count, setCount] = useState(numericTarget)

  useEffect(() => {
    setMounted(true)
    setCount(0)

    const duration = 2000
    const steps = 60
    const increment = numericTarget / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= numericTarget) {
        setCount(numericTarget)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [numericTarget])

  return (
    <span suppressHydrationWarning>
      {mounted ? count : numericTarget}
      {suffix}
    </span>
  )
}

export function Hero() {
  const { t } = useLanguage()

  const stats = [
    { value: "10+", label: t("hero.stats.years") },
    { value: "50+", label: t("hero.stats.projects") },
    { value: "4", label: t("hero.stats.countries") },
    { value: "5", label: t("hero.stats.teachEditions") },
  ]

  return (
    <section className="relative min-h-screen bg-navy-dark overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern" />
      <div
        className="absolute top-0 right-0 w-[800px] h-[800px] opacity-50"
        style={{
          background:
            "radial-gradient(circle at 70% 30%, rgba(124,58,237,0.08) 0%, transparent 50%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="animate-fade-up">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-[10px] sm:text-xs font-bold tracking-widest uppercase bg-brand-purple/[0.08] border border-brand-purple/[0.15] text-brand-purple-light max-w-full text-center leading-snug whitespace-normal">
              {t("hero.badge")}
            </span>
          </div>

          {/* Headline */}
          <h1 className="mt-8 text-4xl sm:text-5xl lg:text-7xl font-serif text-white leading-tight animate-fade-up animation-delay-100 text-balance">
            {t("hero.headline1")}{" "}
            <span className="italic gradient-text">{t("hero.headlineHighlight")}</span>{" "}
            {t("hero.headline2")}
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg sm:text-xl text-white/55 max-w-2xl leading-relaxed animate-fade-up animation-delay-200">
            {t("hero.subtitle")}
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-up animation-delay-300">
            <Button
              asChild
              size="lg"
              className="bg-brand-purple hover:bg-brand-purple-hover text-white rounded-xl px-8 py-6 text-base font-medium hover:shadow-[0_8px_30px_rgba(124,58,237,0.25)] transition-all duration-200"
            >
              <LocaleLink href="/contact">
                {t("hero.cta.primary")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </LocaleLink>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-transparent border-white/15 text-white hover:bg-white/5 hover:text-white rounded-xl px-8 py-6 text-base font-medium transition-all duration-200"
            >
              <LocaleLink href="/case-studies">{t("hero.cta.secondary")}</LocaleLink>
            </Button>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-20 animate-fade-up animation-delay-400">
          <div className="bg-white/[0.03] rounded-2xl p-1 backdrop-blur-sm">
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`p-6 sm:p-8 text-center ${
                    index !== stats.length - 1
                      ? "border-b lg:border-b-0 lg:border-r border-white/[0.06]"
                      : ""
                  } ${index === 1 ? "border-r border-white/[0.06] lg:border-r" : ""}`}
                >
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-serif text-brand-purple-light">
                    <AnimatedCounter
                      target={stat.value}
                      suffix={stat.value.includes("+") ? "+" : ""}
                    />
                  </div>
                  <div className="mt-2 text-xs sm:text-sm uppercase tracking-wider text-white/45 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
