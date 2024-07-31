import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const cookieAUth = request.cookies.get('access_token')
  const response = NextResponse.next()

  // Redirect unauthenticated users to login (except login and excluded paths)
  if (!cookieAUth && !request.nextUrl.pathname.startsWith('/login')) {
    // return NextResponse.redirect(new URL('/login', request.url))
  }

  // Redirect authenticated users to home if they try to access login
  if (cookieAUth && request.nextUrl.pathname.startsWith('/login')) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return response
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/((?!login|_next/static|_next/image|favicon.ico|img|icons|svg).*)'],
}
