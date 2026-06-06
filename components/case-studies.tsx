"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { caseStudyImages } from "@/lib/images"
import { LocaleLink } from "@/components/locale-link"
import { SectionHeader } from "@/components/section-header"
import { useLanguage } from "@/lib/i18n"

function CaseStudyContent({
  caseItem,
  isActive,
  t,
}: {
  caseItem: (typeof caseStudyImages)[number]
  isActive: boolean
  t: (key: string) => string
}) {
  return (
    <article
      id={`case-${caseItem.id}`}
      aria-hidden={!isActive}
      className={`grid lg:grid-cols-2 gap-12 items-start ${isActive ? "" : "sr-only"}`}
    >
      <div className="space-y-6">
        <div className="flex flex-wrap gap-4 text-sm">
          <span className="text-white/40">
            <span className="text-white/60">{t("cases.location")}:</span>{" "}
            {t(`cases.${caseItem.id}.location`)}
          </span>
          <span className="text-white/40">
            <span className="text-white/60">{t("cases.industry")}:</span>{" "}
            {t(`cases.${caseItem.id}.industry`)}
          </span>
        </div>

        <div>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-brand-purple/10 border border-brand-purple/20 text-brand-purple-light">
            {t(`cases.${caseItem.id}.engagement`)}
          </span>
        </div>

        <p className="text-white/55 leading-relaxed">
          {t(`cases.${caseItem.id}.description`)}
        </p>

        <p className="text-white/55 leading-relaxed">
          {t(`cases.${caseItem.id}.details`)}
        </p>

        <div className="pt-4 border-t border-white/[0.06]">
          <h3 className="text-white font-medium mb-2">{t("cases.impact")}</h3>
          <p className="text-white/55 leading-relaxed">
            {t(`cases.${caseItem.id}.impact`)}
          </p>
        </div>

        <LocaleLink
          href={`/case-studies/${caseItem.slug}`}
          className="inline-flex items-center text-sm font-medium text-brand-purple-light hover:text-white transition-colors"
        >
          {t("cases.readFull")}
          <ArrowRight className="ml-1 h-4 w-4" />
        </LocaleLink>
      </div>

      <div className="relative">
        <div className="aspect-[4/3] rounded-2xl bg-navy-alt border border-white/[0.06] relative overflow-hidden">
          <Image
            src={caseItem.src}
            alt={caseItem.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />

          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(15,23,42,0.9) 0%, rgba(15,23,42,0.3) 40%, rgba(15,23,42,0.1) 100%)",
            }}
          />

          <div className="absolute bottom-6 left-6 right-6 z-10">
            <div className="bg-navy-dark/80 backdrop-blur-sm rounded-xl p-4 border border-white/[0.06]">
              <p className="text-xs text-white/40 uppercase tracking-wider mb-1">
                {t("cases.engagement")}
              </p>
              <p className="text-white font-medium">
                {t(`cases.${caseItem.id}.engagement`)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export function CaseStudies() {
  const [activeCase, setActiveCase] = useState(0)
  const { t } = useLanguage()

  return (
    <section id="cases" className="bg-navy-dark py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          theme="dark"
          label={t("cases.label")}
          title={
            <>
              {t("cases.title")}{" "}
              <span className="italic gradient-text">{t("cases.titleHighlight")}</span>
            </>
          }
          className="mb-12"
        />

        <div className="flex gap-2 mb-12 overflow-x-auto pb-2 snap-x snap-mandatory scroll-px-4 -mx-4 px-4 sm:mx-0 sm:px-0">
          {caseStudyImages.map((caseItem, index) => (
            <button
              key={caseItem.id}
              type="button"
              onClick={() => setActiveCase(index)}
              aria-controls={`case-${caseItem.id}`}
              aria-pressed={activeCase === index}
              className={`min-h-11 shrink-0 snap-start px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple ${
                activeCase === index
                  ? "bg-brand-purple text-white"
                  : "bg-white/[0.05] text-white/50 hover:text-white/80 hover:bg-white/[0.08]"
              }`}
            >
              {caseItem.client}
            </button>
          ))}
          <LocaleLink
            href="/case-studies"
            className="min-h-11 shrink-0 snap-start inline-flex items-center px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap bg-white/[0.05] text-brand-purple-light hover:bg-white/[0.08] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple"
          >
            {t("cases.viewAll")}
          </LocaleLink>
        </div>

        {caseStudyImages.map((caseItem, index) => (
          <CaseStudyContent
            key={caseItem.id}
            caseItem={caseItem}
            isActive={activeCase === index}
            t={t}
          />
        ))}
      </div>
    </section>
  )
}
