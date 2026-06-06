import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { createArticleMetadata } from '@/lib/metadata'
import {
  blogPostUrl,
  blogSlugs,
  getBlogPost,
  getRelatedBlogPosts,
} from '@/lib/blog-data'
import { brandLogo } from '@/lib/images'
import { siteUrl } from '@/lib/site'
import { InnerPageHero, PageCta, SiteShell } from '@/components/site-shell'
import { getLocaleOrDefault } from '@/lib/i18n/server'
import { locales, localizedPath, type Locale } from '@/lib/i18n/config'
import { buildBreadcrumbs } from '@/lib/breadcrumbs'
import { translations } from '@/lib/i18n/translations'

type Props = {
  params: Promise<{ locale: string; slug: string }>
}

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    blogSlugs.map((slug) => ({ locale, slug }))
  )
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params
  const locale = getLocaleOrDefault(rawLocale) as Locale
  const post = getBlogPost(locale, slug)
  if (!post) return {}

  return createArticleMetadata({
    locale,
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    publishedAt: post.publishedAt,
    ogLabel: post.tag,
  })
}

export default async function BlogPostPage({ params }: Props) {
  const { locale: rawLocale, slug } = await params
  const locale = getLocaleOrDefault(rawLocale) as Locale
  const t = translations[locale]
  const post = getBlogPost(locale, slug)
  if (!post) notFound()

  const relatedPosts = getRelatedBlogPosts(locale, slug)

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    author: {
      '@type': 'Organization',
      name: '3035TECH',
      url: siteUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: '3035TECH',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}${brandLogo.src}`,
      },
    },
    inLanguage: locale === 'pt' ? 'pt-BR' : locale,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': blogPostUrl(locale, post.slug),
    },
    url: blogPostUrl(locale, post.slug),
  }

  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <InnerPageHero
        label={post.tag}
        title={post.title}
        description={post.description}
        backHref={localizedPath(locale, '/blog')}
        backLabel={t['blog.allPosts']}
        breadcrumbItems={buildBreadcrumbs(locale, [
          { name: t['pages.home'], path: '/' },
          { name: t['blog.label'], path: '/blog' },
          { name: post.title, path: `/blog/${post.slug}` },
        ])}
      />

      <article className="bg-white py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 text-sm text-text-caption-light mb-10 pb-10 border-b border-border">
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString(
                locale === 'pt' ? 'pt-BR' : locale === 'de' ? 'de-DE' : locale === 'es' ? 'es-ES' : 'en-US',
                { year: 'numeric', month: 'long', day: 'numeric' }
              )}
            </time>
            <span>
              {post.readingTimeMinutes} {t['blog.minRead']}
            </span>
          </div>

          <div className="space-y-10">
            {post.sections.map((section, index) => (
              <section key={index}>
                {section.heading && (
                  <h2 className="text-lg sm:text-xl font-serif text-navy-dark mb-4">
                    {section.heading}
                  </h2>
                )}
                <div className="space-y-4">
                  {section.paragraphs.map((paragraph, pIndex) => (
                    <p
                      key={pIndex}
                      className="text-text-body-light leading-relaxed text-base sm:text-lg"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {relatedPosts.length > 0 && (
            <aside className="mt-16 pt-10 border-t border-border">
              <h2 className="text-xl font-serif text-navy-dark mb-6">
                {t['blog.relatedPosts']}
              </h2>
              <ul className="space-y-4">
                {relatedPosts.map((related) => (
                  <li key={related.slug}>
                    <Link
                      href={localizedPath(locale, `/blog/${related.slug}`)}
                      className="group block rounded-xl border border-border p-5 hover:border-brand-purple/30 hover:shadow-md transition-all"
                    >
                      <span className="text-xs font-medium text-brand-purple uppercase tracking-wider">
                        {related.tag}
                      </span>
                      <p className="mt-2 font-medium text-navy-dark group-hover:text-brand-purple transition-colors">
                        {related.title}
                      </p>
                      <p className="mt-1 text-sm text-text-body-light line-clamp-2">
                        {related.description}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          )}
        </div>
      </article>

      <PageCta />
    </SiteShell>
  )
}
