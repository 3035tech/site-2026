import { generateOgImage, ogContentType } from '@/lib/og-image'

export const runtime = 'edge'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get('title')?.trim() || '3035TECH'
  const description = searchParams.get('description')?.trim() || undefined
  const label = searchParams.get('label')?.trim() || undefined

  return generateOgImage({ title, description, label })
}

export { ogContentType as contentType }
