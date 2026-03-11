"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <section id="contact" className="relative bg-navy-dark py-24 sm:py-32">
      {/* Background Glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(124,58,237,0.06) 0%, transparent 50%)",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white leading-tight">
          {"Let's build something"}{" "}
          <span className="italic gradient-text">remarkable</span>.
        </h2>

        {/* Subtext */}
        <p className="mt-6 text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
          Whether you need a dedicated team, expert augmentation, or a technology
          partner to bring your vision to life — we&apos;d love to hear from you.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-brand-purple hover:bg-brand-purple-hover text-white rounded-xl px-8 py-6 text-base font-medium hover:shadow-[0_8px_30px_rgba(124,58,237,0.25)] transition-all duration-200"
          >
            <Link href="mailto:contact@3035tech.com">
              contact@3035tech.com
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="bg-transparent border-white/15 text-white hover:bg-white/5 hover:text-white rounded-xl px-8 py-6 text-base font-medium transition-all duration-200"
          >
            <Link
              href="https://wa.me/5551996442104"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Contact Details */}
        <div className="mt-16 pt-8 border-t border-white/[0.06]">
          <div className="flex flex-wrap justify-center gap-8 text-sm text-white/40">
            <span>(+55) 51 99644-2104</span>
            <span>Hub 5796, Campo Bom — Brazil</span>
            <Link
              href="https://linkedin.com/company/3035-tech"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-purple-light transition-colors"
            >
              LinkedIn
            </Link>
            <Link
              href="https://instagram.com/3035.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-purple-light transition-colors"
            >
              Instagram
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
