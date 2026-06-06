"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/contact-form"
import { LocaleLink } from "@/components/locale-link"
import { useLanguage } from "@/lib/i18n"
import {
  contactEmail,
  contactMailtoUrl,
  contactPhoneDisplayAlt,
  contactTelUrl,
  contactWhatsAppUrl,
} from "@/lib/contact"

export function Contact({ hideHeader = false }: { hideHeader?: boolean }) {
  const { t } = useLanguage()
  
  return (
    <section
      id="contact"
      className={`relative bg-navy-dark ${hideHeader ? "py-12 sm:py-20" : "py-24 sm:py-32"}`}
    >
      {/* Background Glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(124,58,237,0.06) 0%, transparent 50%)",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {!hideHeader && (
          <>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white leading-tight text-balance">
              {t("contact.title")}{" "}
              <span className="italic gradient-text">{t("contact.titleHighlight")}</span>
            </h2>
            <p className="mt-6 text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
              {t("contact.subtitle")}
            </p>
          </>
        )}

        <ContactForm />

        <p className="mt-10 text-sm text-white/40">{t("contact.form.orDirect")}</p>

        {/* CTAs */}
        <div className={`flex flex-col sm:flex-row justify-center gap-4 mt-6`}>
          <Button
            asChild
            size="lg"
            className="bg-brand-purple hover:bg-brand-purple-hover text-white rounded-xl px-8 py-6 text-base font-medium hover:shadow-[0_8px_30px_rgba(124,58,237,0.25)] transition-all duration-200"
          >
            <Link href={contactMailtoUrl}>
              {contactEmail}
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
              href={contactWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("contact.whatsapp")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Contact Details */}
        <div className="mt-16 pt-8 border-t border-white/[0.06]">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-white/40">
            <Link
              href={contactMailtoUrl}
              className="hover:text-brand-purple-light transition-colors"
            >
              {contactEmail}
            </Link>
            <Link
              href={contactTelUrl}
              className="hover:text-brand-purple-light transition-colors"
            >
              {contactPhoneDisplayAlt}
            </Link>
            <Link
              href={contactWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-purple-light transition-colors"
            >
              {t("contact.whatsapp")}
            </Link>
            <Link
              href="https://www.google.com/maps/search/?api=1&query=Hub+5796+Campo+Bom+RS+Brazil"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-purple-light transition-colors"
            >
              Hub 5796, Campo Bom — Brazil
            </Link>
            <LocaleLink
              href="/ireland"
              className="hover:text-brand-purple-light transition-colors"
            >
              Dublin, Ireland — European hub
            </LocaleLink>
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
