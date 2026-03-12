"use client"

import { useLanguage } from "@/lib/i18n"

const flagEmoji: Record<string, string> = {
  BR: "🇧🇷",
  US: "🇺🇸",
  IE: "🇮🇪",
  DE: "🇩🇪",
}

const locationKeys = [
  { flag: "BR", countryKey: "about.locations.brazil", descKey: "about.locations.brazilDesc" },
  { flag: "US", countryKey: "about.locations.usa", descKey: "about.locations.usaDesc" },
  { flag: "IE", countryKey: "about.locations.ireland", descKey: "about.locations.irelandDesc" },
  { flag: "DE", countryKey: "about.locations.germany", descKey: "about.locations.germanyDesc" },
]

export function About() {
  const { t } = useLanguage()
  
  return (
    <section id="about" className="bg-white py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Content */}
          <div>
            {/* Section Tag */}
            <span className="text-brand-purple text-sm font-bold uppercase tracking-[0.15em]">
              {t("about.label")}
            </span>

            {/* Headline */}
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-serif text-navy-dark leading-tight text-balance">
              {t("about.title")} <span className="italic gradient-text">{t("about.titleHighlight")}</span>
            </h2>

            {/* Description */}
            <div className="mt-6 space-y-4 text-text-body-light leading-relaxed">
              <p>
                {t("about.desc1")}
              </p>
              <p>
                {t("about.desc2")}
              </p>
            </div>
          </div>

          {/* Right Column: Locations Grid */}
          <div className="grid grid-cols-2 gap-4">
            {locationKeys.map((location) => (
              <div
                key={location.flag}
                className="bg-off-white rounded-[20px] p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                <span className="text-4xl" role="img" aria-label={t(location.countryKey)}>
                  {flagEmoji[location.flag]}
                </span>
                <h3 className="mt-4 text-navy-dark font-medium text-lg">
                  {t(location.countryKey)}
                </h3>
                <p className="mt-2 text-text-body-light text-sm leading-relaxed">
                  {t(location.descKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
