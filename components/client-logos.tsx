"use client"

import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/lib/i18n"

interface Client {
  name: string
  logo?: string
  url: string
}

const clients: Client[] = [
  { name: "Arezzo", logo: "/images/logos/arezzo.png", url: "https://www.arezzo.com.br" },
  { name: "ClickFunnels", logo: "/images/logos/clickfunnels.svg", url: "https://www.clickfunnels.com" },
  { name: "Karsten", logo: "/images/logos/karsten.svg", url: "https://www.karsten.com.br" },
  { name: "LunchTeam", logo: "/images/logos/lunchteam.svg", url: "https://lunch.team" },
  { name: "GoMoney", logo: "/images/logos/gomoney.png", url: "https://www.gomoney.me" },
  { name: "DoctorClin", logo: "/images/logos/doctorclin.svg", url: "https://www.doctorclin.com.br" },
  { name: "The Fruit People", logo: "/images/logos/fruitpeople.svg", url: "https://www.thefruitpeople.ie" },
  { name: "Drivvo", logo: "/images/logos/drivvo.svg", url: "https://www.drivvo.com" },
  { name: "Vans", logo: "/images/logos/vans.svg", url: "https://www.vans.com.br" },
]

export function ClientLogos() {
  const { t } = useLanguage()
  
  return (
    <section className="relative bg-navy-dark py-20 lg:py-24 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <p className="text-center text-sm uppercase tracking-[0.2em] text-white/40 mb-16 font-medium">
          {t("clients.title")}
        </p>

        {/* Logo Scroll Container */}
        <div className="relative overflow-hidden">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 lg:w-48 bg-gradient-to-r from-navy-dark to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 lg:w-48 bg-gradient-to-l from-navy-dark to-transparent z-10" />

          {/* Scrolling Logos - duplicated for seamless loop */}
          <div className="flex animate-scroll w-max">
            {[...clients, ...clients, ...clients, ...clients].map((client, index) => (
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
                  {client.logo ? (
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      width={140}
                      height={48}
                      className="h-8 lg:h-10 w-auto opacity-75 group-hover:opacity-100 transition-opacity duration-300"
                      unoptimized
                    />
                  ) : (
                    <span className="text-white/70 group-hover:text-white font-medium text-base lg:text-lg whitespace-nowrap transition-colors duration-300">
                      {client.name}
                    </span>
                  )}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
