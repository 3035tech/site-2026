"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/i18n"

export function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-navy-dark border-t border-white/[0.04] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-white/30 text-sm">
            © {currentYear} 3035TECH. {t("footer.rights")}
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <Link
              href="https://linkedin.com/company/3035-tech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-brand-purple-light text-sm transition-colors"
            >
              LinkedIn
            </Link>
            <Link
              href="https://instagram.com/3035.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-brand-purple-light text-sm transition-colors"
            >
              Instagram
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
