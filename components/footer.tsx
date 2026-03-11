"use client"

import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-navy-dark border-t border-white/[0.04] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-4">
            <Image
              src="https://www.3035tech.com/_next/static/media/logo.271ce9e4.svg"
              alt="3035TECH"
              width={100}
              height={28}
              className="h-6 w-auto"
              unoptimized
            />
            <p className="text-white/30 text-sm">
              © 2025 3035TECH. All rights reserved.
            </p>
          </div>

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
