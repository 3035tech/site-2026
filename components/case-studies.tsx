"use client"

import { useState } from "react"
import Image from "next/image"

const cases = [
  {
    client: "Arezzo / AZZAS 2154",
    location: "Brazil",
    industry: "Retail — Largest fashion retail group in Latin America",
    engagement: "Staff Augmentation",
    image: "/images/case-arezzo.jpg",
    description:
      "Our partnership with Arezzo goes far beyond software development. Through specialized outsourcing, we serve as a strategic technology partner — supporting data-driven operations, structuring information, and enabling technical solutions that strengthen the company's existing initiatives.",
    details:
      "We contribute directly to the evolution of their core platform connecting planning, procurement, supply chain, and logistics. Our work includes supporting predictive demand models, intelligent replenishment logic across the franchise network, and building digital products that connect planning, merchandising, commercial, and logistics teams.",
    impact:
      "Improved full-price sell-through, faster replenishment decisions, reduced excess inventory, and a more connected, data-driven operation across the entire retail chain.",
  },
  {
    client: "ClickFunnels",
    location: "United States",
    industry: "SaaS / Marketing Technology",
    engagement: "Managed Squad + Staff Augmentation",
    image: "/images/case-clickfunnels.jpg",
    description:
      "ClickFunnels needed to rebuild the visual layer and infrastructure of their sales funnel platform and their in-platform site builder — both originally built with standard Ruby on Rails templates. We provided a frontend engineering squad in React to help develop these two core functionalities.",
    details:
      "For the funnel builder redesign, we operated as a managed squad — receiving design specs and delivering new features end-to-end. For the site builder, our engineers worked as augmented staff, embedded directly within ClickFunnels' internal engineering team. This combined approach brought expertise the client didn't have in-house and directly supported the launch of ClickFunnels 2.0.",
    impact:
      "Successfully delivered the frontend architecture for the ClickFunnels 2.0 launch, their biggest product transformation.",
  },
  {
    client: "LunchTeam",
    location: "Dublin, Ireland",
    industry: "FoodTech / E-commerce",
    engagement: "Managed Squad + Software Factory",
    image: "/images/case-lunchteam.jpg",
    description:
      "LunchTeam is a complete food e-commerce ecosystem, and we built the entire platform from scratch. The solution includes a customer-facing mobile app for ordering, a web-based e-commerce storefront, a backoffice system for operations, a driver app for delivery management, and a kitchen app for real-time order printing at partner restaurants.",
    details:
      "The platform includes optimized delivery route operations and data dashboards for governance and performance tracking. We provide ongoing full support and sustention, running on modern, scalable cloud infrastructure. We work with a dedicated squad for core operations and a software factory model for products in evolution.",
    impact:
      "Full ecosystem delivered and running in production with scalable cloud architecture, under continuous support and evolution.",
  },
  {
    client: "The Fruit People",
    location: "Dublin, Ireland",
    industry: "Food & Beverage / Logistics",
    engagement: "Software Development",
    image: "/images/case-fruitpeople.jpg",
    description:
      "The Fruit People needed a system to integrate their order management with Xero, their financial management platform. They had an ordering system but were manually entering every order into Xero — a process complicated by business rules involving weekly order grouping and invoice generation based on specific aggregation logic.",
    details:
      "We developed a custom integration platform that connects with both the ordering system (via API) and Xero (via API), with a fully configurable rules engine for order grouping and invoice generation. The solution runs on a React frontend with a Java Spring Boot backend, deployed on scalable AWS cloud infrastructure.",
    impact:
      "Eliminated manual data entry, scalable architecture that supports business growth, with ongoing partnership for support and new features.",
  },
  {
    client: "GoMoney",
    location: "Global",
    industry: "Fintech / Blockchain Payments",
    engagement: "Staff Augmentation + Support",
    image: "/images/case-gomoney.jpg",
    description:
      "GoMoney is a global payments platform that accepts multiple currencies and records all transactions on blockchain. We work on the continuous evolution of the platform, integrating with financial partners worldwide.",
    details:
      "Our team is embedded in support, sustention, and product evolution — providing global support in multiple languages to ensure clear communication and tailored solutions for clients anywhere in the world.",
    impact:
      "Continuous platform evolution with global multi-language support operations.",
  },
  {
    client: "DoctorClin",
    location: "Brazil",
    industry: "Healthcare / Health Insurance",
    engagement: "Managed Squads",
    image: "/images/case-doctorclin.jpg",
    description:
      "DoctorClin is a healthcare provider and health insurance operator. We are responsible for the evolution, support, and maintenance of their patient-facing application — which handles appointment scheduling, exam requests, financial operations, and other functionalities.",
    details:
      "Beyond the patient app, all internal portals are developed and maintained by our team. We operate with dedicated squads working on strategic, high-impact projects for the client.",
    impact:
      "Dedicated squads delivering on strategic projects with high business relevance, with full ownership of the digital product portfolio.",
  },
  {
    client: "DrAnjo",
    location: "Brazil",
    industry: "HealthTech / Telemedicine",
    engagement: "Software Factory → Support & Evolution",
    image: "/images/case-dranjo.jpg",
    description:
      "DrAnjo is a telemedicine application offering online consultations across multiple medical specialties. We built the entire platform from zero — the patient-facing app, the backoffice management system, and all integrations with health insurance providers.",
    details:
      "After consultations, the platform generates digital prescriptions when medications are needed. The project started as a full software factory engagement and evolved into an ongoing support and sustention model as the product matured.",
    impact:
      "End-to-end platform built from scratch, successfully transitioned from development to long-term support and evolution.",
  },
]

export function CaseStudies() {
  const [activeCase, setActiveCase] = useState(0)
  const currentCase = cases[activeCase]

  return (
    <section id="cases" className="bg-navy-dark py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-brand-purple text-sm font-bold uppercase tracking-[0.15em]">
            Case Studies
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-serif text-white leading-tight">
            Real impact, real partnerships
          </h2>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 mb-12 overflow-x-auto pb-2">
          {cases.map((caseItem, index) => (
            <button
              key={caseItem.client}
              onClick={() => setActiveCase(index)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                activeCase === index
                  ? "bg-brand-purple text-white"
                  : "bg-white/[0.05] text-white/50 hover:text-white/80 hover:bg-white/[0.08]"
              }`}
            >
              {caseItem.client}
            </button>
          ))}
        </div>

        {/* Case Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Text Content */}
          <div className="space-y-6">
            {/* Location & Industry */}
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="text-white/40">
                <span className="text-white/60">Location:</span>{" "}
                {currentCase.location}
              </span>
              <span className="text-white/40">
                <span className="text-white/60">Industry:</span>{" "}
                {currentCase.industry}
              </span>
            </div>

            {/* Engagement Model Badge */}
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-brand-purple/10 border border-brand-purple/20 text-brand-purple-light">
                {currentCase.engagement}
              </span>
            </div>

            {/* Description */}
            <p className="text-white/55 leading-relaxed">
              {currentCase.description}
            </p>

            {/* Details */}
            <p className="text-white/55 leading-relaxed">{currentCase.details}</p>

            {/* Impact */}
            <div className="pt-4 border-t border-white/[0.06]">
              <h4 className="text-white font-medium mb-2">Impact</h4>
              <p className="text-white/55 leading-relaxed">{currentCase.impact}</p>
            </div>
          </div>

          {/* Right: Visual Card */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-navy-alt border border-white/[0.06] relative overflow-hidden">
              {/* Background Image */}
              <Image
                src={currentCase.image}
                alt={currentCase.client}
                fill
                className="object-cover"
              />
              
              {/* Overlay Gradient */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(15,23,42,0.9) 0%, rgba(15,23,42,0.3) 40%, rgba(15,23,42,0.1) 100%)",
                }}
              />

              {/* Engagement Badge */}
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <div className="bg-navy-dark/80 backdrop-blur-sm rounded-xl p-4 border border-white/[0.06]">
                  <p className="text-xs text-white/40 uppercase tracking-wider mb-1">
                    Engagement Model
                  </p>
                  <p className="text-white font-medium">{currentCase.engagement}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
