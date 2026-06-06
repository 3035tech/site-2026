import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { BreadcrumbJsonLd, type BreadcrumbItem } from '@/components/breadcrumb-json-ld'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { PageCta } from '@/components/page-cta'

export { PageCta }

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export function InnerPageHero({
  label,
  title,
  description,
  backHref = '/',
  backLabel = 'Back to home',
  breadcrumbItems,
}: {
  label: string
  title: string
  description: string
  backHref?: string
  backLabel?: string
  breadcrumbItems?: BreadcrumbItem[]
}) {
  return (
    <section className="bg-navy-dark pt-28 sm:pt-32 pb-14 sm:pb-20">
      {breadcrumbItems && breadcrumbItems.length > 0 && (
        <BreadcrumbJsonLd items={breadcrumbItems} />
      )}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          aria-label="Breadcrumb"
          className="pb-8 sm:pb-10 mb-8 sm:mb-10 border-b border-white/[0.08]"
        >
          <Link
            href={backHref}
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-white/60 hover:text-white hover:border-white/20 hover:bg-white/[0.08] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple focus-visible:ring-offset-2 focus-visible:ring-offset-navy-dark"
          >
            <ArrowLeft className="h-4 w-4 shrink-0" />
            {backLabel}
          </Link>
        </nav>

        <div className="space-y-5 sm:space-y-6">
          <span className="block text-brand-purple-light text-xs sm:text-sm font-bold uppercase tracking-[0.15em]">
            {label}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white leading-tight text-balance">
            {title}
          </h1>
          <p className="text-base sm:text-lg text-white/55 leading-relaxed max-w-3xl">
            {description}
          </p>
        </div>
      </div>
    </section>
  )
}
