"use client"

const services = [
  {
    number: "01",
    title: "Managed Squads",
    description:
      "High-performing squads that combine engineering, strategy, and autonomy to accelerate digital delivery. We assemble and lead end-to-end teams that unlock bottlenecks, shorten go-to-market cycles, and deliver scalable solutions aligned with your business outcomes.",
    highlights: ["End-to-end ownership", "Agile delivery", "Aligned to your roadmap"],
  },
  {
    number: "02",
    title: "Staff Augmentation",
    description:
      "Expand your tech capabilities with expert professionals fully integrated into your team. We help you evolve complex systems and accelerate key initiatives without compromising governance, speed, or quality.",
    highlights: ["Seamless integration", "Expert-level talent", "Flexible scaling"],
  },
  {
    number: "03",
    title: "Software Development",
    description:
      "From ideation to deployment, we architect and build custom platforms, applications, and integrations designed for scale. Web, mobile, API ecosystems, and cloud-native solutions tailored to your business challenges.",
    highlights: [
      "Custom platforms & applications",
      "API ecosystems & integrations",
      "Cloud-native architecture",
    ],
  },
  {
    number: "04",
    title: "Support & Evolution",
    description:
      "Ongoing maintenance, support, and continuous product evolution. We keep your systems running at peak performance while evolving features based on business needs and user feedback.",
    highlights: [
      "Ongoing maintenance & monitoring",
      "Continuous product improvement",
      "Long-term partnership",
    ],
  },
]

export function Services() {
  return (
    <section id="services" className="bg-white py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-brand-purple text-sm font-bold uppercase tracking-[0.15em]">
            What We Do
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-serif text-navy-dark leading-tight text-balance">
            Solutions tailored to your business challenges
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
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-text-body-light group-hover:text-white/55 leading-relaxed transition-colors duration-500">
                {service.description}
              </p>

              {/* Highlights */}
              <div className="mt-6 flex flex-wrap gap-2">
                {service.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-off-white text-text-body-light group-hover:bg-white/10 group-hover:text-white/70 transition-colors duration-500"
                  >
                    {highlight}
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
