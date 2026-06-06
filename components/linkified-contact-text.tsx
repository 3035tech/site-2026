'use client'

import {
  contactLinkPattern,
  contactMailtoUrl,
  contactTelUrl,
  contactWhatsAppUrl,
} from '@/lib/contact'

type LinkifiedContactTextProps = {
  text: string
  linkClassName?: string
}

export function LinkifiedContactText({
  text,
  linkClassName = 'text-brand-purple hover:text-brand-purple-hover underline underline-offset-2 transition-colors',
}: LinkifiedContactTextProps) {
  const segments: Array<
    | { type: 'text'; value: string }
    | { type: 'email'; value: string }
    | { type: 'phone'; value: string; index: number }
  > = []

  let lastIndex = 0
  for (const match of text.matchAll(contactLinkPattern)) {
    const value = match[0]
    const index = match.index ?? 0

    if (index > lastIndex) {
      segments.push({ type: 'text', value: text.slice(lastIndex, index) })
    }

    if (value.includes('@')) {
      segments.push({ type: 'email', value })
    } else {
      segments.push({ type: 'phone', value, index })
    }

    lastIndex = index + value.length
  }

  if (lastIndex < text.length) {
    segments.push({ type: 'text', value: text.slice(lastIndex) })
  }

  if (segments.length === 0) {
    return <>{text}</>
  }

  return (
    <>
      {segments.map((segment, i) => {
        if (segment.type === 'email') {
          return (
            <a key={i} href={contactMailtoUrl} className={linkClassName}>
              {segment.value}
            </a>
          )
        }

        if (segment.type === 'phone') {
          const before = text
            .slice(Math.max(0, segment.index - 40), segment.index)
            .toLowerCase()
          const isWhatsApp = before.includes('whatsapp')
          const href = isWhatsApp ? contactWhatsAppUrl : contactTelUrl

          return (
            <a
              key={i}
              href={href}
              className={linkClassName}
              {...(isWhatsApp
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
            >
              {segment.value}
            </a>
          )
        }

        return <span key={i}>{segment.value}</span>
      })}
    </>
  )
}
