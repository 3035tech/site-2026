"use client"

import { useLanguage } from "@/lib/i18n"

export function Services() {
  const { t } = useLanguage()
  
  const services = [
    {
      number: "01",
      titleKey: "services.managedSquads.title",
      descKey: "services.managedSquads.desc",
      highlightKeys: ["services.managedSquads.h1", "services.managedSquads.h2", "services.managedSquads.h3"],
    },
    {
      number: "02",
      titleKey: "services.staffAug.title",
      descKey: "services.staffAug.desc",
      highlightKeys: ["services.staffAug.h1", "services.staffAug.h2", "services.staffAug.h3"],
    },
    {
      number: "03",
      titleKey: "services.customDev.title",
      descKey: "services.customDev.desc",
      highlightKeys: ["services.customDev.h1", "services.customDev.h2", "services.customDev.h3"],
    },
    {
      number: "04",
      titleKey: "services.support.title",
      descKey: "services.support.desc",
      highlightKeys: ["services.support.h1", "services.support.h2", "services.support.h3"],
    },
  ]
  
  return (
    <section id="services" className="bg-white py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-brand-purple text-sm font-bold uppercase tracking-[0.15em]">
            {t("services.label")}
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-serif text-navy-dark leading-tight text-balance">
            {t("services.title")}
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-border rounded-[20px] overflow-hidden">
          {services.map((service) => (
            <div
              key={service.number}
              className="group bg-white hover:bg-navy-dark p-8 sm:p-10 transition-all duration-500 cursor-default"
            >
              {/* Service Number */}
              <span className="text-brand-purple text-sm font-bold">
                {service.number}
              </span>

              {/* Title */}
              <h3 className="mt-4 text-2xl sm:text-3xl font-serif text-navy-dark group-hover:text-white transition-colors duration-500">
                {t(service.titleKey)}
              </h3>

              {/* Description */}
              <p className="mt-4 text-text-body-light group-hover:text-white/55 leading-relaxed transition-colors duration-500">
                {t(service.descKey)}
              </p>

              {/* Highlights */}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
