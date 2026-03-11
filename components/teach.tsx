"use client"

import Image from "next/image"

const curriculum = {
  technical: [
    "Programming Logic & Fundamentals",
    "JavaScript — core language for modern web",
    "Frontend with React.js",
    "Backend with Java & Spring Boot",
    "Databases — SQL & data modeling",
    "Mobile with React Native",
    "Git & GitFlow workflows",
  ],
  professional: [
    "Scrum & Project Management",
    "Soft Skills & HR Sessions",
    "Professional workplace behavior",
    "Team dynamics & collaboration",
  ],
}

interface Stat {
  value?: string
  logo?: string
  label: string
}

const stats: Stat[] = [
  { value: "5", label: "Editions completed" },
  { value: "100%", label: "Company subsidized" },
  { value: "80%+", label: "Graduates employed" },
  { logo: "https://www.sap.com/dam/application/shared/logos/sap-logo-svg.svg.adapt.svg/1493030643828.svg", label: "Alumni at SAP" },
  { logo: "https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg", label: "Alumni at Dell" },
]

export function Teach() {
  return (
    <section
      id="teach"
      className="relative py-24 sm:py-32 overflow-hidden"
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
            {/* Section Badge */}
            <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-bold uppercase tracking-[0.15em] bg-brand-purple/10 border border-brand-purple/15 text-brand-purple">
              Social Impact
            </span>

            {/* Headline */}
            <h2 className="mt-6 text-4xl sm:text-5xl font-serif text-white">
              3035<span className="text-brand-purple">TEACH</span>
            </h2>

            {/* Description */}
            <div className="mt-6 space-y-4 text-white/55 leading-relaxed">
              <p>
                A fully company-subsidized developer training program that
                transforms aspiring professionals into enterprise-ready engineers.
                Now in its 5th edition, 3035TEACH is our commitment to giving back
                — nurturing the next generation of technology talent in Brazil.
              </p>
              <p>
                The program is 100% funded by 3035TECH, with no cost to
                participants. We take people with zero experience and guide them
                through a complete full-stack development journey — from
                programming logic to deploying real projects.
              </p>
              <p>
                More than 80% of graduates who completed the program are now
                employed and working in the tech industry. Our alumni are now
                building solutions at companies like SAP and Dell, proving that
                investing in people creates lasting impact.
              </p>
            </div>

            {/* Curriculum */}
            <div className="mt-10 grid sm:grid-cols-2 gap-8">
              <div>
                <h4 className="text-white font-medium mb-4 text-sm uppercase tracking-wider">
                  Technical Track
                </h4>
                <ul className="space-y-2">
                  {curriculum.technical.map((item) => (
                    <li key={item} className="text-white/45 text-sm flex items-start gap-2">
                      <span className="text-brand-purple mt-1.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-white font-medium mb-4 text-sm uppercase tracking-wider">
                  Professional Track
                </h4>
                <ul className="space-y-2">
                  {curriculum.professional.map((item) => (
                    <li key={item} className="text-white/45 text-sm flex items-start gap-2">
                      <span className="text-brand-purple mt-1.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Key Message */}
            <p className="mt-10 text-white/70 text-sm italic border-l-2 border-brand-purple/30 pl-4">
              This is not just a coding bootcamp. It&apos;s a complete professional
              formation — from technical fundamentals to enterprise soft skills —
              designed to make graduates truly ready for the job market.
            </p>
          </div>

          {/* Right Column: Stats & Visual */}
          <div className="lg:sticky lg:top-32">
            {/* Large Edition Number */}
            <div className="relative aspect-square max-w-md mx-auto mb-12">
              <div className="absolute inset-0 rounded-full bg-brand-purple/5 border border-brand-purple/10" />
              <div className="absolute inset-4 rounded-full bg-brand-purple/5 border border-brand-purple/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[180px] sm:text-[220px] font-serif text-brand-purple">
                  5
                </span>
              </div>
              <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
                <span className="text-white/40 text-sm uppercase tracking-widest">
                  Editions
                </span>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-brand-purple/5 border border-brand-purple/[0.08] rounded-2xl p-4 text-center flex flex-col items-center justify-center"
                >
                  {stat.logo ? (
                    <div className="h-8 flex items-center justify-center">
                      <Image
                        src={stat.logo}
                        alt={stat.label}
                        width={60}
                        height={32}
                        className="h-6 w-auto brightness-0 invert opacity-70"
                        unoptimized
                      />
                    </div>
                  ) : (
                    <div className="text-2xl font-serif text-brand-purple">
                      {stat.value}
                    </div>
                  )}
                  <div className="mt-1 text-xs text-white/40">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
