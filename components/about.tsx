"use client"

const locations = [
  {
    flag: "BR",
    country: "Brazil",
    description: "Headquarters & Engineering Center, Campo Bom, RS",
  },
  {
    flag: "US",
    country: "United States",
    description: "Home of ClickFunnels & North American clients",
  },
  {
    flag: "IE",
    country: "Ireland",
    description: "European operations & client delivery",
  },
  {
    flag: "DE",
    country: "Germany",
    description: "DataCentric partnership & enterprise clients",
  },
]

const flagEmoji: Record<string, string> = {
  BR: "🇧🇷",
  US: "🇺🇸",
  IE: "🇮🇪",
  DE: "🇩🇪",
}

export function About() {
  return (
    <section id="about" className="bg-white py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Content */}
          <div>
            {/* Section Tag */}
            <span className="text-brand-purple text-sm font-bold uppercase tracking-[0.15em]">
              About 3035TECH
            </span>

            {/* Headline */}
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-serif text-navy-dark leading-tight text-balance">
              Global reach, local commitment
            </h2>

            {/* Description */}
            <div className="mt-6 space-y-4 text-text-body-light leading-relaxed">
              <p>
                Headquartered in Brazil with operations in the United States,
                Ireland, and Germany, 3035TECH is your technology partner that
                helps enterprises solve complex challenges through dedicated
                engineering teams and custom software solutions.
              </p>
              <p>
                We believe that the right team, deeply integrated with your
                culture and objectives, can accelerate outcomes that technology
                alone cannot. That&apos;s why we invest in long-term partnerships —
                not transactions.
              </p>
            </div>
          </div>

          {/* Right Column: Locations Grid */}
          <div className="grid grid-cols-2 gap-4">
            {locations.map((location) => (
              <div
                key={location.country}
                className="bg-off-white rounded-[20px] p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                <span className="text-4xl" role="img" aria-label={location.country}>
                  {flagEmoji[location.flag]}
                </span>
                <h3 className="mt-4 text-navy-dark font-medium text-lg">
                  {location.country}
                </h3>
                <p className="mt-2 text-text-body-light text-sm leading-relaxed">
                  {location.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
