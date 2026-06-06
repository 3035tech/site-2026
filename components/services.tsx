"use client"

import { ArrowRight } from "lucide-react"
import { LocaleLink } from "@/components/locale-link"
import { SectionHeader } from "@/components/section-header"
import { useLanguage } from "@/lib/i18n"

const services = [
  {
    number: "01",
    slug: "managed-squads",
    titleKey: "services.managedSquads.title",
    descKey: "services.managedSquads.desc",
    highlightKeys: [
      "services.managedSquads.h1",
      "services.managedSquads.h2",
      "services.managedSquads.h3",
    ],
  },
  {
    number: "02",
    slug: "staff-augmentation",
    titleKey: "services.staffAug.title",
    descKey: "services.staffAug.desc",
    highlightKeys: [
      "services.staffAug.h1",
      "services.staffAug.h2",
      "services.staffAug.h3",
    ],
  },
  {
    number: "03",
    slug: "custom-development",
    titleKey: "services.customDev.title",
    descKey: "services.customDev.desc",
    highlightKeys: [
      "services.customDev.h1",
      "services.customDev.h2",
      "services.customDev.h3",
    ],
  },
  {
    number: "04",
    slug: "support-evolution",
    titleKey: "services.support.title",
    descKey: "services.support.desc",
    highlightKeys: [
      "services.support.h1",
      "services.support.h2",
      "services.support.h3",
    ],
  },
]

export function Services() {
  const { t } = useLanguage()

  return (
    <section id="services" className="bg-white py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label={t("services.label")}
          title={t("services.title")}
          className="mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-border rounded-[20px] overflow-hidden">
          {services.map((service) => (
            <LocaleLink
              key={service.number}
              href={`/services/${service.slug}`}
              className="group bg-white hover:bg-navy-dark p-8 sm:p-10 transition-all duration-500"
            >
              <span className="text-brand-purple text-sm font-bold">
                {service.number}
              </span>

              <h3 className="mt-4 text-2xl sm:text-3xl font-serif text-navy-dark group-hover:text-white transition-colors duration-500">
                {t(service.titleKey)}
              </h3>

              <p className="mt-4 text-text-body-light group-hover:text-white/55 leading-relaxed transition-colors duration-500">
                {t(service.descKey)}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {service.highlightKeys.map((highlightKey) => (
                  <span
                    key={highlightKey}
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-off-white text-text-body-light group-hover:bg-white/10 group-hover:text-white/70 transition-colors duration-500"
                  >
                    {t(highlightKey)}
                  </span>
                ))}
              </div>

              <span className="mt-6 inline-flex items-center text-sm font-medium text-brand-purple group-hover:text-brand-purple-light transition-colors">
                {t("services.learnMore")}
                <ArrowRight className="ml-1 h-4 w-4" />
              </span>
            </LocaleLink>
          ))}
        </div>
      </div>
    </section>
  )
}
