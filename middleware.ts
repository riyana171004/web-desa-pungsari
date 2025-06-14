import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const isAdminRoute = request.nextUrl.pathname.startsWith('/admin')
  const isLoginRoute = request.nextUrl.pathname.startsWith('/login')
  const isLoggedIn = request.cookies.get('admin_session')?.value === 'true'

  // Jika user belum login dan mencoba mengakses rute admin
  if (isAdminRoute && !isLoggedIn) {
    const loginUrl = new URL('/login', request.url)
    // Simpan URL yang dituju untuk redirect setelah login
    loginUrl.searchParams.set('from', request.nextUrl.pathname)
    return NextResponse.redirect(loginUrl)
  }

  // Jika user sudah login tapi mencoba mengakses halaman login
  if (isLoginRoute && isLoggedIn) {
    const redirectTo = request.nextUrl.searchParams.get('from') || '/admin'
    return NextResponse.redirect(new URL(redirectTo, request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*', '/login'], // Proteksi semua route /admin dan /login
}
