#!/usr/bin/env node

const baseUrl = process.env.SITE_URL ?? 'https://www.3035tech.com'

const checks = [
  { path: '/en', expect: 200, contains: '3035TECH' },
  { path: '/pt/services', expect: 200, contains: 'Servi' },
  { path: '/pt/blog', expect: 200, contains: 'Insights' },
  { path: '/sitemap.xml', expect: 200, contains: '/en' },
  { path: '/robots.txt', expect: 200, contains: 'GPTBot' },
  { path: '/llms.txt', expect: 200, contains: '3035TECH' },
  { path: '/feed.xml', expect: 200, contains: '<rss' },
  { path: '/og?title=Test&description=SEO', expect: 200, contentType: 'image/png' },
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

if (failed > 0) {
  console.error(`\n${failed} check(s) failed for ${baseUrl}`)
  process.exit(1)
}

console.log(`\nAll SEO checks passed for ${baseUrl}`)
