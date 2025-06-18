import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Path yang tidak memerlukan autentikasi
const publicPaths = [
  '/',
  '/login',
  '/api/login',
  '/_next',
  '/favicon.ico',
  '/api/auth',
  '/pariwisata',
  // Tambahkan path public lainnya di sini
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip middleware untuk path public
  if (publicPaths.some(path => 
    pathname === path || 
    pathname.startsWith(`${path}/`) ||
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/api/auth/') ||
    pathname.match(/\.(svg|png|jpg|jpeg|gif|webp|css|js)$/)
  )) {
    return NextResponse.next();
  }

  // Cek session untuk rute admin
  if (pathname.startsWith('/admin')) {
    const session = request.cookies.get('admin_session')?.value;

    if (!session) {
      // Redirect ke halaman login jika tidak ada session
      const loginUrl = new URL('/login', request.url);
      // Simpan URL yang dituju untuk redirect setelah login
      loginUrl.searchParams.set('callbackUrl', pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api/auth (Auth routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!api/auth|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
