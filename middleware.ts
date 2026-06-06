import { NextRequest, NextResponse } from 'next/server'
import {
  defaultLocale,
  isValidLocale,
  type Locale,
} from '@/lib/i18n/config'

const LOCALE_COOKIE = 'NEXT_LOCALE'

function getPreferredLocale(request: NextRequest): Locale {
  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value
  if (cookieLocale && isValidLocale(cookieLocale)) {
    return cookieLocale
  }

  const acceptLanguage = request.headers.get('accept-language') ?? ''
  if (acceptLanguage.toLowerCase().includes('pt')) return 'pt'
  if (acceptLanguage.toLowerCase().includes('de')) return 'de'
  if (acceptLanguage.toLowerCase().includes('es')) return 'es'
  return defaultLocale
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname === '/robots.txt' ||
    pathname === '/sitemap.xml' ||
    pathname === '/llms.txt' ||
    pathname === '/feed.xml' ||
    pathname === '/og' ||
    pathname === '/opengraph-image' ||
    pathname === '/icon' ||
    pathname.startsWith('/icon?') ||
    pathname === '/apple-icon' ||
    pathname.startsWith('/apple-icon?') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  const segments = pathname.split('/').filter(Boolean)
  const firstSegment = segments[0]

  if (firstSegment && isValidLocale(firstSegment)) {
    const response = NextResponse.next()
    response.cookies.set(LOCALE_COOKIE, firstSegment, { path: '/' })
    return response
  }

  const locale = getPreferredLocale(request)
  const url = request.nextUrl.clone()
  url.pathname = pathname === '/' ? `/${locale}` : `/${locale}${pathname}`

  const response = NextResponse.redirect(url, 308)
  response.cookies.set(LOCALE_COOKIE, locale, { path: '/' })
  return response
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
