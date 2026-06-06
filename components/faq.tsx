'use client'

import { useLanguage } from '@/lib/i18n'
import { LinkifiedContactText } from '@/components/linkified-contact-text'
import { SectionHeader } from '@/components/section-header'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const FAQ_COUNT = 13

export function Faq() {
  const { t } = useLanguage()

  const items = Array.from({ length: FAQ_COUNT }, (_, i) => {
    const n = i + 1
    return {
      id: `faq-${n}`,
      question: t(`faq.${n}.q`),
      answer: t(`faq.${n}.a`),
    }
  })

  return (
    <section id="faq" className="bg-white py-24 sm:py-32 border-t border-border">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader label={t('faq.label')} title={t('faq.title')} className="mb-12" />

        <Accordion type="single" collapsible className="w-full">
          {items.map((item) => (
            <AccordionItem key={item.id} value={item.id} className="border-border">
              <AccordionTrigger className="min-h-11 py-5 text-base sm:text-lg font-medium text-navy-dark hover:no-underline hover:text-brand-purple [&[data-state=open]]:text-brand-purple">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-text-body-light leading-relaxed text-base">
                <LinkifiedContactText text={item.answer} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
