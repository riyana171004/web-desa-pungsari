import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Cek session dari cookie
    // Di sini Anda bisa menambahkan logika untuk memeriksa validitas session
    // Contoh sederhana, hanya memeriksa keberadaan cookie
    
    // Jika ingin lebih aman, bisa verifikasi session dengan database
    // const session = await prisma.session.findUnique({...})
    
    // Untuk saat ini, kita asumsikan jika request sampai ke sini, session valid
    return NextResponse.json({ 
      isLoggedIn: true,
      user: {
        // Tambahkan informasi user jika diperlukan
        email: 'desapungsariadminn@example.com' // Ganti dengan data user yang sesuai
      }
    })
    
  } catch (error) {
    console.error('Error checking auth status:', error)
    return NextResponse.json(
      { isLoggedIn: false, error: 'Failed to check auth status' },
      { status: 500 }
    )
  }
}
