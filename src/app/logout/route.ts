// app/logout/route.ts
import { NextResponse } from 'next/server'

export async function POST() {
  const res = NextResponse.redirect(new URL('/login', process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'))
  res.cookies.set('admin_session', '', {
    maxAge: 0,
    path: '/',
  })
  return res
}
