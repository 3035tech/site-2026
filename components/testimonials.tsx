"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "We've worked with the 3035TECH team for several years on different projects and it's been great. We love having their developers embedded in our team, learning exactly as our internal developers and contributing just as much.",
    author: "Brandon Klotz",
    title: "Engineering Manager, ClickFunnels",
  },
  {
    quote:
      "Working with 3035TECH has been great. The team understood our challenges very quickly and got the project moving. They put our minds at ease about the software development process. Since this project directly impacts our customers, it was great that they could be there to support them. The integration has been a huge success for our team and clients.",
    author: "Brian Dennis",
    title: "Co-founder, The Fruit People",
  },
  {
    quote:
      "We have never been so well served by a vendor, regardless of the industry. Your service culture is very similar to how we serve our own clients. Excellence in service has always been a priority here, and we see that you operate the same way.",
    author: "Maurício Pires",
    title: "CEO, GoMoney & 21Mobile",
  },
  {
    quote:
      "There's never a bad time with the 3035TECH team — if there's a scope change on the client side, they always find a way to include it in the delivery. Another key point is that the project team doesn't just take requirements and start developing. They ask questions and make us think.",
    author: "Eduardo Viegas",
    title: "CTO, Fraxy",
  },
  {
    quote:
      "The 3035TECH team is highly committed. Whenever we need to develop new features and our development queue is full, they're the first choice. All the work delivered has performed excellently with no maintenance required.",
    author: "Paulo Deitos Filho",
    title: "Co-founder, CapTable/StartSe | CapRate | TEDx Speaker",
  },
  {
    quote:
      "We've been clients of 3035TECH for some time and I highly recommend them. We've created and developed several products and services together. As a startup, the sense of urgency is essential — and it's something we've always been able to count on. A perfect combination of quality with agility in delivery.",
    author: "Hugo Ferreira",
    title: "Co-founder, Finplace",
  },
  {
    quote:
      "We have had an excellent experience with the services provided by 3035TECH. The quality of service is remarkable, always delivered with great agility and efficiency. I highly recommend them for their level of excellence and speed in supporting our needs.",
    author: "Igor Silva",
    title: "Technology Manager, Grupo Caburé",
  },
  {
    quote:
      "For us at Karsten Digital, 3035TECH is more than a vendor — they're a partner truly engaged with our business needs. We count on a 3035TECH team that is 100% dedicated to our Digital Products Squad, but the company's commitment goes far beyond that team's deliveries, always seeking to place professionals with the technical and behavioral profiles we expect. Whenever we face challenges outside the squad's scope, we promptly receive help for a very productive collaboration.",
    author: "Fabio Sano",
    title: "Digital Products Manager, Karsten",
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [isPaused])

  const goToPrevious = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section className="bg-off-white py-24 sm:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Tag */}
        <div className="text-center mb-12">
          <span className="text-brand-purple text-sm font-bold uppercase tracking-[0.15em]">
            What Our Clients Say
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
              &ldquo;{testimonials[current].quote}&rdquo;
            </blockquote>

            <div className="mt-8">
              <p className="text-navy-dark font-medium">
                {testimonials[current].author}
              </p>
              <p className="text-text-body-light text-sm">
                {testimonials[current].title}
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
              {testimonials.map((_, index) => (
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
