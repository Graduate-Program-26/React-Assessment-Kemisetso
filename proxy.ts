import { auth } from '@/app/auth'
import { NextResponse } from 'next/server'

export default auth((req) => {
  if (!req.auth && req.nextUrl.pathname !== '/') {
    return NextResponse.redirect(new URL('/', req.url))
  }
})
export const config = {
  matcher: ['/dashboard/:path*'],
}
