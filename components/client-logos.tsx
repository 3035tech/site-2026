"use client"

import Image from "next/image"

interface Client {
  name: string
  logo?: string
}

const clients: Client[] = [
  { name: "Arezzo", logo: "https://www.3035tech.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Farezzo_logo.502e7e07.png&w=256&q=75" },
  { name: "ClickFunnels", logo: "https://www.3035tech.com/_next/static/media/click_logo.a58627d9.svg" },
  { name: "Karsten", logo: "https://www.3035tech.com/_next/static/media/karsten_logo.bf77de6b.svg" },
  { name: "LunchTeam", logo: "https://www.3035tech.com/_next/static/media/lunch_team_logo.124166cb.svg" },
  { name: "GoMoney", logo: "https://gomoney.me/images/logo-branco-gomoney.png" },
  { name: "DoctorClin", logo: "https://www.3035tech.com/_next/static/media/doctorclin_logo.72c9e61b.svg" },
  { name: "The Fruit People", logo: "https://www.3035tech.com/_next/static/media/fruit_people_logo.5298d9dd.svg" },
  { name: "Drivvo", logo: "https://www.3035tech.com/_next/static/media/drivvo_logo.a8789e24.svg" },
  { name: "Vans", logo: "https://www.3035tech.com/_next/static/media/vans_logo.4ec5c258.svg" },
]

export function ClientLogos() {
  return (
    <section className="relative bg-navy-dark py-16 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <p className="text-center text-xs uppercase tracking-[0.2em] text-white/30 mb-12 font-medium">
          Trusted by leading companies worldwide
        </p>

        {/* Logo Scroll Container */}
        <div className="relative overflow-hidden">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-navy-dark to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-navy-dark to-transparent z-10" />

          {/* Scrolling Logos - duplicated for seamless loop */}
          <div className="flex animate-scroll w-max">
            {[...clients, ...clients, ...clients, ...clients].map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 mx-8 sm:mx-12 group"
              >
                <div className="flex items-center justify-center h-12 px-6 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300">
                  {client.logo ? (
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      width={100}
                      height={32}
                      className="h-6 w-auto opacity-40 group-hover:opacity-70 transition-opacity duration-300"
                      unoptimized
                    />
                  ) : (
                    <span className="text-white/40 group-hover:text-white/70 font-medium text-sm whitespace-nowrap transition-colors duration-300">
                      {client.name}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
