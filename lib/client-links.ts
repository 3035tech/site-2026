import { clientLogos } from '@/lib/images'

export type ClientLink = {
  name: string
  url: string
}

/** Known client / partner names → official websites (longest names first for matching). */
export const clientLinks: ClientLink[] = [
  ...clientLogos.map(({ name, url }) => ({ name, url })),
  { name: 'Arezzo / AZZAS 2154', url: 'https://www.arezzo.com.br' },
  { name: 'DrAnjo', url: 'https://dranjo.com.br' },
].sort((a, b) => b.name.length - a.name.length)

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

const clientLinkPattern = new RegExp(
  `(${clientLinks.map(({ name }) => escapeRegExp(name)).join('|')})`,
  'g'
)

export type TextSegment =
  | { type: 'text'; value: string }
  | { type: 'link'; value: string; href: string }

const linkByName = new Map(clientLinks.map(({ name, url }) => [name, url]))

export function getClientUrl(clientName: string): string | undefined {
  const exact = linkByName.get(clientName)
  if (exact) return exact

  for (const { name, url } of clientLinks) {
    if (clientName.includes(name)) return url
  }

  return undefined
}

export function splitTextWithClientLinks(text: string): TextSegment[] {
  const segments: TextSegment[] = []
  let lastIndex = 0

  for (const match of text.matchAll(clientLinkPattern)) {
    const value = match[0]
    const index = match.index ?? 0
    const href = linkByName.get(value)

    if (!href) continue

    if (index > lastIndex) {
      segments.push({ type: 'text', value: text.slice(lastIndex, index) })
    }

    segments.push({ type: 'link', value, href })
    lastIndex = index + value.length
  }

  if (lastIndex < text.length) {
    segments.push({ type: 'text', value: text.slice(lastIndex) })
  }

  if (segments.length === 0) {
    return [{ type: 'text', value: text }]
  }

  return segments
}
