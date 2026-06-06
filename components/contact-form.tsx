'use client'

import { useState } from 'react'
import { Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { LocaleLink } from '@/components/locale-link'
import { useLanguage } from '@/lib/i18n'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error' | 'unavailable'

export function ContactForm() {
  const { t, language } = useLanguage()
  const [status, setStatus] = useState<FormStatus>('idle')

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')

    const form = event.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          company: formData.get('company'),
          message: formData.get('message'),
          website: formData.get('website'),
          locale: language,
        }),
      })

      if (response.status === 503) {
        setStatus('unavailable')
        return
      }

      if (!response.ok) {
        setStatus('error')
        return
      }

      form.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="mt-12 text-left max-w-xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="absolute left-[-9999px]" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="contact-name" className="text-white/80">
            {t('contact.form.name')}
          </Label>
          <Input
            id="contact-name"
            name="name"
            required
            autoComplete="name"
            className="border-white/15 bg-white/[0.04] text-white placeholder:text-white/35"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="contact-email" className="text-white/80">
            {t('contact.form.email')}
          </Label>
          <Input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="border-white/15 bg-white/[0.04] text-white placeholder:text-white/35"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="contact-company" className="text-white/80">
            {t('contact.form.company')}
          </Label>
          <Input
            id="contact-company"
            name="company"
            autoComplete="organization"
            className="border-white/15 bg-white/[0.04] text-white placeholder:text-white/35"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="contact-message" className="text-white/80">
            {t('contact.form.message')}
          </Label>
          <Textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            className="border-white/15 bg-white/[0.04] text-white placeholder:text-white/35 min-h-32"
          />
        </div>

        <p className="text-xs text-white/40 leading-relaxed">
          {t('contact.form.privacyNotice')}{' '}
          <LocaleLink
            href="/privacy"
            className="text-brand-purple-light underline underline-offset-2 hover:text-brand-purple transition-colors"
          >
            {t('footer.privacy')}
          </LocaleLink>
        </p>

        <Button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full sm:w-auto bg-brand-purple hover:bg-brand-purple-hover text-white rounded-xl px-8"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              {t('contact.form.sending')}
            </>
          ) : (
            t('contact.form.submit')
          )}
        </Button>

        {status === 'success' && (
          <p role="status" className="text-sm text-emerald-400">
            {t('contact.form.success')}
          </p>
        )}
        {status === 'error' && (
          <p role="alert" className="text-sm text-red-400">
            {t('contact.form.error')}
          </p>
        )}
        {status === 'unavailable' && (
          <p role="alert" className="text-sm text-amber-400">
            {t('contact.form.errorUnavailable')}
          </p>
        )}
      </form>
    </div>
  )
}
