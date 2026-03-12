"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

const testimonialKeys = [
  { quoteKey: "testimonials.1.quote", author: "Brandon Klotz", titleKey: "testimonials.1.title" },
  { quoteKey: "testimonials.2.quote", author: "Brian Dennis", titleKey: "testimonials.2.title" },
  { quoteKey: "testimonials.3.quote", author: "Maurício Pires", titleKey: "testimonials.3.title" },
  { quoteKey: "testimonials.4.quote", author: "Eduardo Viegas", titleKey: "testimonials.4.title" },
  { quoteKey: "testimonials.5.quote", author: "Paulo Deitos Filho", titleKey: "testimonials.5.title" },
  { quoteKey: "testimonials.6.quote", author: "Hugo Ferreira", titleKey: "testimonials.6.title" },
  { quoteKey: "testimonials.7.quote", author: "Igor Silva", titleKey: "testimonials.7.title" },
  { quoteKey: "testimonials.8.quote", author: "Fabio Sano", titleKey: "testimonials.8.title" },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonialKeys.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [isPaused])

  const goToPrevious = () => {
    setCurrent((prev) => (prev - 1 + testimonialKeys.length) % testimonialKeys.length)
  }

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % testimonialKeys.length)
  }
  
  return (
    <section className="bg-off-white py-24 sm:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Tag */}
        <div className="text-center mb-12">
          <span className="text-brand-purple text-sm font-bold uppercase tracking-[0.15em]">
            {t("testimonials.label")}
          </span>
        </div>

        {/* Testimonial Card */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Large Quote Mark */}
          <Quote className="absolute -top-4 -left-2 w-16 h-16 text-brand-purple-light/30" />

          {/* Testimonial Content */}
          <div className="text-center px-4 sm:px-12 min-h-[280px] sm:min-h-[240px] flex flex-col justify-center">
            <blockquote className="text-xl sm:text-2xl text-navy-dark leading-relaxed font-serif">
              &ldquo;{t(testimonialKeys[current].quoteKey)}&rdquo;
            </blockquote>

            <div className="mt-8">
              <p className="text-navy-dark font-medium">
                {testimonialKeys[current].author}
              </p>
              <p className="text-text-body-light text-sm">
                {t(testimonialKeys[current].titleKey)}
              </p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center items-center gap-4 mt-10">
            <button
              onClick={goToPrevious}
              className="p-2 rounded-full border border-border hover:border-brand-purple hover:text-brand-purple transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonialKeys.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    current === index
                      ? "bg-brand-purple w-6"
                      : "bg-text-caption-light hover:bg-text-body-light"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="p-2 rounded-full border border-border hover:border-brand-purple hover:text-brand-purple transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
