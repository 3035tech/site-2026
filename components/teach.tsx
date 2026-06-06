"use client"

import Image from "next/image"
import { useLanguage } from "@/lib/i18n"
import { teachAlumniLogos } from "@/lib/images"

export function Teach({ hideHeader = false }: { hideHeader?: boolean }) {
  const { t } = useLanguage()
  
  const curriculum = {
    technical: [
      t("teach.curriculum.logic"),
      t("teach.curriculum.js"),
      t("teach.curriculum.react"),
      t("teach.curriculum.java"),
      t("teach.curriculum.db"),
      t("teach.curriculum.mobile"),
      t("teach.curriculum.git"),
    ],
    professional: [
      t("teach.curriculum.scrum"),
      t("teach.curriculum.softskills"),
      t("teach.curriculum.workplace"),
      t("teach.curriculum.teamwork"),
    ],
  }

  interface Stat {
    value?: string
    logo?: (typeof teachAlumniLogos)[number]
    labelKey: string
  }

  const stats: Stat[] = [
    { value: "5", labelKey: "teach.stats.editions" },
    { value: "100%", labelKey: "teach.stats.subsidized" },
    { value: "80%+", labelKey: "teach.stats.employed" },
    { logo: teachAlumniLogos[0], labelKey: "teach.stats.sapAlumni" },
    { logo: teachAlumniLogos[1], labelKey: "teach.stats.dellAlumni" },
  ]
  
  return (
    <section
      id="teach"
      className={`relative overflow-hidden ${hideHeader ? "py-12 sm:py-20" : "py-24 sm:py-32"}`}
      style={{
        background: "linear-gradient(135deg, #0F172A, #1A0B2E, #0F172A)",
      }}
    >
      {/* Background Glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(124,58,237,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Content */}
          <div>
            {!hideHeader && (
              <>
                <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-bold uppercase tracking-[0.15em] bg-brand-purple/10 border border-brand-purple/15 text-brand-purple">
                  {t("teach.label")}
                </span>
                <h2 className="mt-6 text-4xl sm:text-5xl font-serif text-white text-balance">
                  {t("teach.title")}
                  <span className="text-brand-purple">{t("teach.titleHighlight")}</span>
                </h2>
                <div className="mt-6 space-y-4 text-white/55 leading-relaxed">
                  <p>{t("teach.desc1")}</p>
                </div>
              </>
            )}

            <div className={`space-y-4 text-white/55 leading-relaxed ${hideHeader ? "mt-0" : ""}`}>
              <p>{t("teach.desc2")}</p>
              <p>{t("teach.desc3")}</p>
            </div>

            {/* Curriculum */}
            <div className="mt-10 grid sm:grid-cols-2 gap-8">
              <div>
                <h4 className="text-white font-medium mb-4 text-sm uppercase tracking-wider">
                  {t("teach.technicalTrack")}
                </h4>
                <ul className="space-y-2">
                  {curriculum.technical.map((item, index) => (
                    <li key={index} className="text-white/45 text-sm flex items-start gap-2">
                      <span className="text-brand-purple mt-1.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-white font-medium mb-4 text-sm uppercase tracking-wider">
                  {t("teach.professionalTrack")}
                </h4>
                <ul className="space-y-2">
                  {curriculum.professional.map((item, index) => (
                    <li key={index} className="text-white/45 text-sm flex items-start gap-2">
                      <span className="text-brand-purple mt-1.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Key Message */}
            <p className="mt-10 text-white/70 text-sm italic border-l-2 border-brand-purple/30 pl-4">
              {t("teach.keyMessage")}
            </p>
          </div>

          {/* Right Column: Stats & Visual */}
          <div className="lg:sticky lg:top-32">
            {/* Large Edition Number */}
            <div className="relative aspect-square max-w-md mx-auto mb-12 overflow-hidden">
              <div className="absolute inset-0 rounded-full bg-brand-purple/5 border border-brand-purple/10" />
              <div className="absolute inset-4 rounded-full bg-brand-purple/5 border border-brand-purple/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[clamp(5rem,28vw,13.75rem)] font-serif text-brand-purple leading-none">
                  5
                </span>
              </div>
              <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
                <span className="text-white/40 text-sm uppercase tracking-widest">
                  {t("teach.editions")}
                </span>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {stats.map((stat) => (
                <div
                  key={stat.labelKey}
                  className="bg-brand-purple/5 border border-brand-purple/[0.08] rounded-2xl p-4 text-center flex flex-col items-center justify-center"
                >
                  {stat.logo ? (
                    <div className="h-8 flex items-center justify-center">
                      <Image
                        src={stat.logo.src}
                        alt={stat.logo.alt}
                        width={stat.logo.invertOnDark ? 60 : 72}
                        height={stat.logo.invertOnDark ? 32 : 36}
                        className={`h-7 w-auto ${
                          stat.logo.invertOnDark
                            ? "brightness-0 invert opacity-70"
                            : "opacity-95"
                        }`}
                      />
                    </div>
                  ) : (
                    <div className="text-2xl font-serif text-brand-purple">
                      {stat.value}
                    </div>
                  )}
                  <div className="mt-1 text-xs text-white/40">{t(stat.labelKey)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
