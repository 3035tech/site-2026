"use client"

import Link from "next/link"
import { LocaleLink } from "@/components/locale-link"
import { useLanguage } from "@/lib/i18n"
import { cn } from "@/lib/utils"

const footerLinkClass =
  "inline-flex items-center min-h-11 px-3 text-sm text-white/40 hover:text-brand-purple-light transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple focus-visible:ring-offset-2 focus-visible:ring-offset-navy-dark"

export function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-navy-dark border-t border-white/[0.04] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm text-center sm:text-left">
            © {currentYear} 3035TECH. {t("footer.rights")}
          </p>

          <nav
            aria-label="Footer"
            className="flex flex-wrap items-center justify-center sm:justify-end gap-x-2 gap-y-1"
          >
            <LocaleLink href="/blog" className={footerLinkClass}>
              {t("blog.label")}
            </LocaleLink>
            <Link
              href="https://linkedin.com/company/3035-tech"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(footerLinkClass)}
            >
              LinkedIn
            </Link>
            <Link
              href="https://instagram.com/3035.tech"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(footerLinkClass)}
            >
              Instagram
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
