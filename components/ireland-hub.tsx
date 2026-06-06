'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { LinkifiedContactText } from '@/components/linkified-contact-text'
import { LinkedClientName } from '@/components/linked-client-name'
import { LocaleLink } from '@/components/locale-link'
import { SectionHeader } from '@/components/section-header'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { useLanguage } from '@/lib/i18n'
import {
  IRELAND_FAQ_COUNT,
  irelandBlogSlug,
  irelandCaseStudySlugs,
} from '@/lib/ireland-seo'
import { dublinMapsUrl } from '@/lib/org-locations'
import { getCaseStudyPages } from '@/lib/pages-data'

const whyKeys = ['why1', 'why2', 'why3'] as const

export function IrelandHub() {
  const { t, language } = useLanguage()
  const caseStudies = getCaseStudyPages(language).filter((c) =>
    irelandCaseStudySlugs.includes(c.slug as (typeof irelandCaseStudySlugs)[number]),
  )

  const faqItems = Array.from({ length: IRELAND_FAQ_COUNT }, (_, i) => {
    const n = i + 1
    return {
      id: `ireland-faq-${n}`,
      question: t(`ireland.faq.${n}.q`),
      answer: t(`ireland.faq.${n}.a`),
    }
  })

  return (
    <>
      <section className="bg-white py-12 sm:py-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-brand-purple text-xs font-bold uppercase tracking-[0.15em]">
                {t('ireland.hub.label')}
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl font-serif text-navy-dark text-balance">
                {t('ireland.hub.title')}
              </h2>
              <p className="mt-4 text-text-body-light leading-relaxed">{t('ireland.hub.desc')}</p>
              <Link
                href={dublinMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 text-sm text-brand-purple hover:text-brand-purple-hover transition-colors"
              >
                Dublin, Ireland
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-4">
              {whyKeys.map((key) => (
                <div key={key} className="rounded-2xl border border-border bg-off-white p-6">
                  <h3 className="font-medium text-navy-dark">{t(`ireland.${key}.title`)}</h3>
                  <p className="mt-2 text-sm text-text-body-light leading-relaxed">
                    {t(`ireland.${key}.desc`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-off-white py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label={t('ireland.services.label')} title={t('ireland.services.title')} />
          <p className="mt-4 max-w-3xl text-text-body-light leading-relaxed">
            {t('ireland.services.desc')}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <LocaleLink
              href="/services/managed-squads"
              className="rounded-full border border-border bg-white px-4 py-2 text-sm text-navy-dark hover:border-brand-purple/30 hover:text-brand-purple transition-colors"
            >
              {t('services.managedSquads.title')}
            </LocaleLink>
            <LocaleLink
              href="/services/staff-augmentation"
              className="rounded-full border border-border bg-white px-4 py-2 text-sm text-navy-dark hover:border-brand-purple/30 hover:text-brand-purple transition-colors"
            >
              {t('services.staffAug.title')}
            </LocaleLink>
            <LocaleLink
              href="/services/custom-development"
              className="rounded-full border border-border bg-white px-4 py-2 text-sm text-navy-dark hover:border-brand-purple/30 hover:text-brand-purple transition-colors"
            >
              {t('services.customDev.title')}
            </LocaleLink>
            <LocaleLink
              href="/services/support-evolution"
              className="rounded-full border border-border bg-white px-4 py-2 text-sm text-navy-dark hover:border-brand-purple/30 hover:text-brand-purple transition-colors"
            >
              {t('services.support.title')}
            </LocaleLink>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-20 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label={t('ireland.clients.label')} title={t('ireland.clients.title')} />
          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            {caseStudies.map((study) => (
              <div
                key={study.slug}
                className="group rounded-2xl border border-border p-6 hover:border-brand-purple/25 hover:shadow-md transition-all"
              >
                <p className="text-xs uppercase tracking-wider text-brand-purple font-bold">
                  {study.location}
                </p>
                <h3 className="mt-2 text-xl font-serif text-navy-dark">
                  <LinkedClientName
                    name={study.client}
                    linkClassName="text-navy-dark group-hover:text-brand-purple transition-colors"
                  />
                </h3>
                <p className="mt-3 text-sm text-text-body-light leading-relaxed line-clamp-3">
                  {study.description}
                </p>
                <LocaleLink
                  href={`/case-studies/${study.slug}`}
                  className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-brand-purple hover:text-brand-purple-hover transition-colors"
                >
                  {t('cases.readFull')}
                  <ArrowRight className="h-4 w-4" />
                </LocaleLink>
              </div>
            ))}
          </div>
          <LocaleLink
            href={`/blog/${irelandBlogSlug}`}
            className="inline-flex items-center gap-2 mt-10 text-brand-purple hover:text-brand-purple-hover font-medium transition-colors"
          >
            {t('ireland.blogLink')}
            <ArrowRight className="h-4 w-4" />
          </LocaleLink>
        </div>
      </section>

      <section className="bg-off-white py-12 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label={t('faq.label')} title={t('ireland.faq.title')} className="mb-10" />
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item) => (
              <AccordionItem key={item.id} value={item.id} className="border-border bg-white px-4">
                <AccordionTrigger className="min-h-11 py-5 text-base font-medium text-navy-dark hover:no-underline hover:text-brand-purple">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-text-body-light leading-relaxed text-base pb-5">
                  <LinkifiedContactText text={item.answer} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  )
}
