"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/language-switcher"
import { LocaleLink } from "@/components/locale-link"
import { useLanguage, Language } from "@/lib/i18n"
import { useSwitchLocale } from "@/lib/i18n/navigation"
import { stripLocalePrefix } from "@/lib/i18n/config"
import { usePathname } from "next/navigation"
import { brandLogo } from "@/lib/images"
import { cn } from "@/lib/utils"

const mobileLanguages: { code: Language; flag: string }[] = [
  { code: "en", flag: "🇺🇸" },
  { code: "es", flag: "🇪🇸" },
  { code: "pt", flag: "🇧🇷" },
  { code: "de", flag: "🇩🇪" },
]

function MobileLanguageSelector() {
  const { language } = useLanguage()
  const switchLocale = useSwitchLocale()

  return (
    <div className="flex items-center gap-3">
      {mobileLanguages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => switchLocale(lang.code)}
          className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl transition-all duration-200 ${
            language === lang.code
              ? "bg-brand-purple/20 ring-2 ring-brand-purple scale-110"
              : "bg-white/5 hover:bg-white/10"
          }`}
          aria-label={`Switch to ${lang.code}`}
        >
          {lang.flag}
        </button>
      ))}
    </div>
  )
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { t } = useLanguage()
  const pathname = usePathname()
  const isHome = stripLocalePrefix(pathname) === "/"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  const navLinks = [
    { label: t("nav.services"), href: "/services" },
    { label: t("nav.cases"), href: "/case-studies" },
    { label: t("blog.label"), href: "/blog" },
    { label: t("nav.teach"), href: "/3035teach" },
    { label: t("nav.about"), href: "/about" },
    { label: t("nav.contact"), href: "/contact" },
  ]

  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  const isLinkActive = (href: string) => {
    const path = stripLocalePrefix(pathname)
    return path === href || path.startsWith(`${href}/`)
  }

  const navLinkClass = (href: string, size: 'sm' | 'lg' = 'sm') =>
    cn(
      'transition-colors duration-200 font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple focus-visible:ring-offset-2 focus-visible:ring-offset-navy-dark rounded-sm',
      size === 'lg' ? 'text-2xl' : 'text-sm',
      isLinkActive(href)
        ? 'text-white'
        : 'text-white/70 hover:text-brand-purple-light'
    )

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || !isHome
            ? "bg-[#0F172A]/95 backdrop-blur-xl border-b border-white/[0.06]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <LocaleLink href="/" className="flex items-center" onClick={closeMobileMenu}>
              <Image
                src={brandLogo.src}
                alt={brandLogo.alt}
                width={140}
                height={40}
                className="h-8 w-auto"
                priority
              />
            </LocaleLink>

            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <LocaleLink
                  key={link.href}
                  href={link.href}
                  aria-current={isLinkActive(link.href) ? 'page' : undefined}
                  className={navLinkClass(link.href)}
                >
                  {link.label}
                </LocaleLink>
              ))}
              <LanguageSwitcher />
              <Button
                asChild
                className="bg-brand-purple hover:bg-brand-purple-hover text-white rounded-lg px-5 hover:shadow-[0_8px_30px_rgba(124,58,237,0.25)] transition-all duration-200"
              >
                <LocaleLink href="/contact">{t("nav.letsTalk")}</LocaleLink>
              </Button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white min-h-11 min-w-11 flex items-center justify-center rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-navy-dark lg:hidden">
          <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 h-20 border-b border-white/[0.06]">
            <LocaleLink href="/" className="flex items-center" onClick={closeMobileMenu}>
              <Image
                src={brandLogo.src}
                alt={brandLogo.alt}
                width={140}
                height={40}
                className="h-8 w-auto"
              />
            </LocaleLink>
            <button
              onClick={closeMobileMenu}
              className="text-white min-h-11 min-w-11 flex items-center justify-center rounded-lg border border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex flex-col items-center gap-6 px-6 pt-8 pb-10 h-[calc(100%-5rem)] overflow-y-auto">
            {navLinks.map((link) => (
              <LocaleLink
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                aria-current={isLinkActive(link.href) ? 'page' : undefined}
                className={navLinkClass(link.href, 'lg')}
              >
                {link.label}
              </LocaleLink>
            ))}

            <div className="flex items-center gap-2 mt-4 pt-6 border-t border-white/10 w-full max-w-xs justify-center">
              <MobileLanguageSelector />
            </div>

            <Button
              asChild
              className="bg-brand-purple hover:bg-brand-purple-hover text-white rounded-lg px-8 py-3 text-lg mt-4 w-full max-w-xs"
            >
              <LocaleLink href="/contact" onClick={closeMobileMenu}>
                {t("nav.letsTalk")}
              </LocaleLink>
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
