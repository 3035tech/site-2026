import { NextResponse } from 'next/server'
import { contactFormSchema } from '@/lib/contact-form-schema'
import { contactEmail } from '@/lib/contact'

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const parsed = contactFormSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json({ error: 'invalid' }, { status: 400 })
    }

    const { name, email, company, message, website, locale } = parsed.data

    if (website?.trim()) {
      return NextResponse.json({ ok: true })
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      return NextResponse.json({ error: 'unavailable' }, { status: 503 })
    }

    const to = process.env.CONTACT_TO_EMAIL ?? contactEmail
    const from =
      process.env.CONTACT_FROM_EMAIL ?? '3035TECH Website <contact@3035tech.com>'

    const subjectCompany = company ? ` (${company})` : ''
    const html = `
      <h2>New contact form submission</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      ${company ? `<p><strong>Company:</strong> ${escapeHtml(company)}</p>` : ''}
      ${locale ? `<p><strong>Locale:</strong> ${escapeHtml(locale)}</p>` : ''}
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, '<br />')}</p>
    `

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Contact form: ${name}${subjectCompany}`,
        html,
      }),
    })

    if (!response.ok) {
      return NextResponse.json({ error: 'send_failed' }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'server' }, { status: 500 })
  }
}
