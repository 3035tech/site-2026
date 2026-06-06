import { type Locale } from '@/lib/i18n/config'

export type BlogSection = {
  heading?: string
  paragraphs: string[]
}

export type BlogPostContent = {
  title: string
  description: string
  tag: string
  sections: BlogSection[]
}

export type BlogPost = {
  slug: string
  publishedAt: string
  readingTimeMinutes: number
  content: Record<Locale, BlogPostContent>
}
