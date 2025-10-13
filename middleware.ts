// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

const locales = ['en', 'ar']
const defaultLocale = 'en'

function getLocale(request: NextRequest): string {
  // Get locale from Accept-Language header
  const acceptLanguage = request.headers.get('accept-language')
  if (!acceptLanguage) return defaultLocale

  const headers = { 'accept-language': acceptLanguage }
  const languages = new Negotiator({ headers }).languages()

  try {
    return match(languages, locales, defaultLocale)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return defaultLocale
  }
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if there is any supported locale in the pathname
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  // Redirect if there is no locale
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api, static files)
    '/((?!_next|api|favicon.ico|.*\\.).*)',
  ],
}