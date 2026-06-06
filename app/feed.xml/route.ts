import { blogSlugs, getBlogPost } from '@/lib/blog-data'
import { siteUrl } from '@/lib/site'

export async function GET() {
  const posts = blogSlugs.flatMap((slug) => {
    const post = getBlogPost('en', slug)
    if (!post) return []
    return [post]
  })

  const items = posts
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
    .map(
      (post) => `    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${siteUrl}/en/blog/${post.slug}</link>
      <guid isPermaLink="true">${siteUrl}/en/blog/${post.slug}</guid>
      <description><![CDATA[${post.description}]]></description>
      <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
    </item>`
    )
    .join('\n')

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>3035TECH Insights</title>
    <link>${siteUrl}/en/blog</link>
    <description>Technical articles on nearshore engineering, managed squads, and enterprise software from 3035TECH.</description>
    <language>en</language>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`

  return new Response(feed, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
