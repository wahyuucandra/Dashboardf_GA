import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware (request: NextRequest) {
  const cookieAuth = request.cookies.get('access_token')

  // Redirect unauthenticated users to login (except login and excluded paths)
  if (!cookieAuth && !['/login', '/excluded-path'].includes(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // Redirect authenticated users to home if they try to access login
  if (cookieAuth && request.nextUrl.pathname.startsWith('/login')) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}

// Configure paths to include or exclude from the middleware
export const config = {
  matcher: ['/((?!login|_next/static|_next/image|favicon.ico|img|icons|svg).*)'],
}
