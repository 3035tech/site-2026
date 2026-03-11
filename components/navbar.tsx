"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
    { label: "Services", href: "#services" },
    { label: "Cases", href: "#cases" },
    { label: "3035TEACH", href: "#teach" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
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
                src="https://www.3035tech.com/_next/static/media/logo.271ce9e4.svg"
                alt="3035TECH"
                width={140}
                height={40}
                className="h-8 w-auto"
                unoptimized
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className="text-white/70 hover:text-brand-purple-light transition-colors duration-200 text-sm font-medium cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
              <Button
                asChild
                className="bg-brand-purple hover:bg-brand-purple-hover text-white rounded-lg px-5 hover:shadow-[0_8px_30px_rgba(124,58,237,0.25)] transition-all duration-200"
              >
                <a href="#contact" onClick={(e) => handleSmoothScroll(e, "#contact")}>{"Let's Talk"}</a>
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
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="text-white/70 hover:text-brand-purple-light transition-colors duration-200 text-2xl font-medium cursor-pointer"
              >
                {link.label}
              </a>
            ))}
            <Button
              asChild
              className="bg-brand-purple hover:bg-brand-purple-hover text-white rounded-lg px-8 py-3 text-lg mt-4"
            >
              <a href="#contact" onClick={(e) => handleSmoothScroll(e, "#contact")}>
                {"Let's Talk"}
              </a>
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
