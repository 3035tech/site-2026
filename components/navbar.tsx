"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage, Language } from "@/lib/i18n"

const mobileLanguages: { code: Language; flag: string }[] = [
  { code: "en", flag: "🇺🇸" },
  { code: "es", flag: "🇪🇸" },
  { code: "pt", flag: "🇧🇷" },
  { code: "de", flag: "🇩🇪" },
]

function MobileLanguageSelector() {
  const { language, setLanguage } = useLanguage()
  
  return (
    <div className="flex items-center gap-3">
      {mobileLanguages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const element = document.getElementById(targetId)
    if (element) {
      const navbarHeight = 80
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: "smooth"
      })
    }
    setIsMobileMenuOpen(false)
  }

  const navLinks = [
    { label: t("nav.services"), href: "#services" },
    { label: t("nav.cases"), href: "#cases" },
    { label: t("nav.teach"), href: "#teach" },
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.contact"), href: "#contact" },
  ]

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0F172A]/95 backdrop-blur-xl border-b border-white/[0.06]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logos/3035tech-logo.svg"
                alt="3035TECH"
                width={140}
                height={40}
                className="h-8 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className="text-white/70 hover:text-brand-purple-light transition-colors duration-200 text-sm font-medium cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
              <LanguageSwitcher />
              <Button
                asChild
                className="bg-brand-purple hover:bg-brand-purple-hover text-white rounded-lg px-5 hover:shadow-[0_8px_30px_rgba(124,58,237,0.25)] transition-all duration-200"
              >
                <a href="#contact" onClick={(e) => handleSmoothScroll(e, "#contact")}>{t("nav.letsTalk")}</a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-navy-dark md:hidden">
          {/* Header with logo and close button */}
          <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 h-20">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logos/3035tech-logo.svg"
                alt="3035TECH"
                width={140}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white p-2 rounded-lg border border-white/10"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          
          {/* Navigation content */}
          <div className="flex flex-col items-center justify-center h-[calc(100%-80px)] gap-6 px-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="text-white/70 hover:text-brand-purple-light transition-colors duration-200 text-2xl font-medium cursor-pointer"
              >
                {link.label}
              </a>
            ))}
            
            {/* Language selector - horizontal buttons */}
            <div className="flex items-center gap-2 mt-4 pt-6 border-t border-white/10 w-full max-w-xs justify-center">
              <MobileLanguageSelector />
            </div>
            
            <Button
              asChild
              className="bg-brand-purple hover:bg-brand-purple-hover text-white rounded-lg px-8 py-3 text-lg mt-4 w-full max-w-xs"
            >
              <a href="#contact" onClick={(e) => handleSmoothScroll(e, "#contact")}>
                {t("nav.letsTalk")}
              </a>
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
