import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Redirect /uber-uns to /ueber-uns
  if (request.nextUrl.pathname === '/uber-uns') {
    return NextResponse.redirect(new URL('/ueber-uns', request.url))
  }
}

export const config = {
  matcher: '/uber-uns',
}
