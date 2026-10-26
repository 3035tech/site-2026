#!/usr/bin/env node

const baseUrl = process.env.SITE_URL ?? 'https://www.3035tech.com'

const checks = [
  { path: '/en', expect: 200, contains: '3035TECH' },
  { path: '/pt/services', expect: 200, contains: 'Servi' },
  { path: '/pt/blog', expect: 200, contains: 'Insights' },
  { path: '/sitemap.xml', expect: 200, contains: '/en' },
  { path: '/image-sitemap.xml', expect: 200, contains: 'image:image' },
  { path: '/robots.txt', expect: 200, contains: 'GPTBot' },
  { path: '/en/case-studies/2gift', expect: 200, contains: '5 months' },
  { path: '/favicon.ico', expect: 200, contentType: 'image/x-icon' },
  { path: '/icon.png', expect: 200, contentType: 'image/png' },
  { path: '/apple-icon.png', expect: 200, contentType: 'image/png' },
  { path: '/icon.svg', expect: 200, contentType: 'image/svg+xml' },
  { path: '/manifest.webmanifest', expect: 200, contains: '3035tech-icon-192.png' },
  { path: '/brand/3035tech-wordmark.svg', expect: 200, contentType: 'image/svg+xml' },
  { path: '/llms.txt', expect: 200, contains: '3035TECH' },
  { path: '/feed.xml', expect: 200, contains: '<rss' },
  { path: '/og?title=Test&description=SEO', expect: 200, contentType: 'image/png' },
  { path: '/social-image?title=Test&description=SEO', expect: 200, contentType: 'image/png' },
]

let failed = 0

for (const check of checks) {
  const url = `${baseUrl}${check.path}`
  try {
    const res = await fetch(url, { redirect: 'follow' })
    const contentType = res.headers.get('content-type') ?? ''
    const body = check.contentType ? '' : await res.text()

    const statusOk = res.status === check.expect
    const typeOk = check.contentType ? contentType.includes(check.contentType) : true
    const bodyOk = check.contains ? body.includes(check.contains) : true

    if (statusOk && typeOk && bodyOk) {
      console.log(`✓ ${check.path} (${res.status})`)
    } else {
      failed++
      console.error(`✗ ${check.path}`)
      if (!statusOk) console.error(`  expected status ${check.expect}, got ${res.status}`)
      if (!typeOk) console.error(`  expected content-type ${check.contentType}, got ${contentType}`)
      if (!bodyOk) console.error(`  missing "${check.contains}" in body`)
    }
  } catch (error) {
    failed++
    console.error(`✗ ${check.path} — ${error.message}`)
  }
}

if (baseUrl === 'https://www.3035tech.com') {
  try {
    const res = await fetch('https://3035tech.com/', { redirect: 'manual' })
    const location = res.headers.get('location')
    if (res.status === 301 && location === 'https://www.3035tech.com/') {
      console.log('✓ apex → www (301)')
    } else {
      failed++
      console.error(`✗ apex → www — expected 301 to https://www.3035tech.com/, got ${res.status} to ${location}`)
    }
  } catch (error) {
    failed++
    console.error(`✗ apex → www — ${error.message}`)
  }
}

if (failed > 0) {
  console.error(`\n${failed} check(s) failed for ${baseUrl}`)
  process.exit(1)
}

console.log(`\nAll SEO checks passed for ${baseUrl}`)
