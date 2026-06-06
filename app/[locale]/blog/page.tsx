import type { Metadata } from 'next'
import Link from 'next/link'
import { createPageMetadata } from '@/lib/metadata'
import { getBlogIndexMeta, getBlogPosts } from '@/lib/blog-data'
import { InnerPageHero, PageCta, SiteShell } from '@/components/site-shell'
import { getLocaleOrDefault } from '@/lib/i18n/server'
import { localizedPath, type Locale } from '@/lib/i18n/config'
import { buildBreadcrumbs } from '@/lib/breadcrumbs'
import { translations } from '@/lib/i18n/translations'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: rawLocale } = await params
  const locale = getLocaleOrDefault(rawLocale) as Locale
  const meta = getBlogIndexMeta(locale)

  return createPageMetadata({
    locale,
    title: meta.title,
    description: meta.description,
    path: '/blog',
    ogLabel: translations[locale]['blog.label'],
  })
}

export default async function BlogIndexPage({ params }: Props) {
  const { locale: rawLocale } = await params
  const locale = getLocaleOrDefault(rawLocale) as Locale
  const t = translations[locale]
  const meta = getBlogIndexMeta(locale)
  const posts = getBlogPosts(locale)

  return (
    <SiteShell>
      <InnerPageHero
        label={t['blog.label']}
        title={meta.title}
        description={meta.description}
        backHref={localizedPath(locale, '/')}
        backLabel={t['pages.backHome']}
        breadcrumbItems={buildBreadcrumbs(locale, [
          { name: t['pages.home'], path: '/' },
          { name: t['blog.label'], path: '/blog' },
        ])}
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group rounded-[20px] border border-border p-6 sm:p-8 hover:border-brand-purple/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-wrap items-center gap-3 text-sm text-text-caption-light">
                <span className="inline-flex px-3 py-1 rounded-full text-xs font-medium bg-brand-purple/10 text-brand-purple">
                  {post.tag}
                </span>
                <time dateTime={post.publishedAt}>
                  {new Date(post.publishedAt).toLocaleDateString(locale === 'pt' ? 'pt-BR' : locale === 'de' ? 'de-DE' : locale === 'es' ? 'es-ES' : 'en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                <span>
                  {post.readingTimeMinutes} {t['blog.minRead']}
                </span>
              </div>
              <h2 className="mt-4 text-xl sm:text-2xl font-serif text-navy-dark group-hover:text-brand-purple transition-colors">
                <Link href={localizedPath(locale, `/blog/${post.slug}`)}>
                  {post.title}
                </Link>
              </h2>
              <p className="mt-3 text-text-body-light leading-relaxed">
                {post.description}
              </p>
              <Link
                href={localizedPath(locale, `/blog/${post.slug}`)}
                className="inline-flex mt-4 text-sm font-medium text-brand-purple hover:text-brand-purple-hover transition-colors"
              >
                {t['blog.readMore']} →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <PageCta />
    </SiteShell>
  )
}
