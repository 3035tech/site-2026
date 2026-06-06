import { siteUrl } from '@/lib/site'

export function buildDynamicOgImageUrl(input: {
  title: string
  description?: string
  label?: string
}) {
  const params = new URLSearchParams()
  params.set('title', input.title.slice(0, 100))
  if (input.description) params.set('description', input.description.slice(0, 180))
  if (input.label) params.set('label', input.label.slice(0, 50))
  return `${siteUrl}/og?${params.toString()}`
}

export function resolveAbsoluteImageUrl(image?: string) {
  if (!image) return undefined
  return image.startsWith('http') ? image : `${siteUrl}${image}`
}
