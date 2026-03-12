"use client"

import { useState } from "react"
import Image from "next/image"
import { useLanguage } from "@/lib/i18n"

const caseKeys = [
  { id: "arezzo", client: "Arezzo / AZZAS 2154", image: "/images/case-arezzo.jpg" },
  { id: "clickfunnels", client: "ClickFunnels", image: "/images/case-clickfunnels.jpg" },
  { id: "lunchteam", client: "LunchTeam", image: "/images/case-lunchteam.jpg" },
  { id: "fruitpeople", client: "The Fruit People", image: "/images/case-fruitpeople.jpg" },
  { id: "gomoney", client: "GoMoney", image: "/images/case-gomoney.jpg" },
  { id: "doctorclin", client: "DoctorClin", image: "/images/case-doctorclin.jpg" },
  { id: "dranjo", client: "DrAnjo", image: "/images/case-dranjo.jpg" },
]

export function CaseStudies() {
  const [activeCase, setActiveCase] = useState(0)
  const currentCase = caseKeys[activeCase]
  const { t } = useLanguage()

  return (
    <section id="cases" className="bg-navy-dark py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-brand-purple text-sm font-bold uppercase tracking-[0.15em]">
            {t("cases.label")}
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-serif text-white leading-tight">
            {t("cases.title")} <span className="italic gradient-text">{t("cases.titleHighlight")}</span>
          </h2>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 mb-12 overflow-x-auto pb-2">
          {caseKeys.map((caseItem, index) => (
            <button
              key={caseItem.id}
              onClick={() => setActiveCase(index)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                activeCase === index
                  ? "bg-brand-purple text-white"
                  : "bg-white/[0.05] text-white/50 hover:text-white/80 hover:bg-white/[0.08]"
              }`}
            >
              {caseItem.client}
            </button>
          ))}
        </div>

        {/* Case Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Text Content */}
          <div className="space-y-6">
            {/* Location & Industry */}
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="text-white/40">
                <span className="text-white/60">{t("cases.location")}:</span>{" "}
                {t(`cases.${currentCase.id}.location`)}
              </span>
              <span className="text-white/40">
                <span className="text-white/60">{t("cases.industry")}:</span>{" "}
                {t(`cases.${currentCase.id}.industry`)}
              </span>
            </div>

            {/* Engagement Model Badge */}
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-brand-purple/10 border border-brand-purple/20 text-brand-purple-light">
                {t(`cases.${currentCase.id}.engagement`)}
              </span>
            </div>

            {/* Description */}
            <p className="text-white/55 leading-relaxed">
              {t(`cases.${currentCase.id}.description`)}
            </p>

            {/* Details */}
            <p className="text-white/55 leading-relaxed">{t(`cases.${currentCase.id}.details`)}</p>

            {/* Impact */}
            <div className="pt-4 border-t border-white/[0.06]">
              <h4 className="text-white font-medium mb-2">{t("cases.impact")}</h4>
              <p className="text-white/55 leading-relaxed">{t(`cases.${currentCase.id}.impact`)}</p>
            </div>
          </div>

          {/* Right: Visual Card */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-navy-alt border border-white/[0.06] relative overflow-hidden">
              {/* Background Image */}
              <Image
                src={currentCase.image}
                alt={currentCase.client}
                fill
                className="object-cover"
              />
              
              {/* Overlay Gradient */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(15,23,42,0.9) 0%, rgba(15,23,42,0.3) 40%, rgba(15,23,42,0.1) 100%)",
                }}
              />

              {/* Engagement Badge */}
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <div className="bg-navy-dark/80 backdrop-blur-sm rounded-xl p-4 border border-white/[0.06]">
                  <p className="text-xs text-white/40 uppercase tracking-wider mb-1">
                    {t("cases.engagement")}
                  </p>
                  <p className="text-white font-medium">{t(`cases.${currentCase.id}.engagement`)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
