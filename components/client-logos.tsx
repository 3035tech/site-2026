"use client"

import Image from "next/image"
import Link from "next/link"
import { clientLogos } from "@/lib/images"
import { useLanguage } from "@/lib/i18n"

function logoClassName(invertOnDark?: boolean) {
  return [
    "h-8 lg:h-10 w-auto max-w-[140px] object-contain opacity-75 group-hover:opacity-100 transition-opacity duration-300",
    invertOnDark ? "brightness-0 invert" : "",
  ]
    .filter(Boolean)
    .join(" ")
}

export function ClientLogos() {
  const { t } = useLanguage()

  return (
    <section className="relative bg-navy-dark py-20 lg:py-24 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm uppercase tracking-[0.2em] text-white/40 mb-16 font-medium">
          {t("clients.title")}
        </p>

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 lg:w-48 bg-gradient-to-r from-navy-dark to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 lg:w-48 bg-gradient-to-l from-navy-dark to-transparent z-10" />

          <div className="flex animate-scroll w-max">
            {[...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos].map(
              (client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="flex-shrink-0 mx-6 sm:mx-10 lg:mx-14 group"
                >
                  <Link
                    href={client.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center h-16 lg:h-20 px-8 lg:px-10 rounded-xl bg-white/[0.05] border border-white/[0.10] hover:border-white/[0.25] hover:bg-white/[0.08] transition-all duration-300"
                  >
                    <Image
                      src={client.src}
                      alt={client.alt}
                      width={140}
                      height={48}
                      className={logoClassName(client.invertOnDark)}
                    />
                  </Link>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
