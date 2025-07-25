import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { put } from '@vercel/blob'

export async function GET() {
  try {
    const pariwisata = await prisma.pariwisata.findMany({
      orderBy: { createdAt: 'desc' },
    })
    return NextResponse.json(pariwisata)
  } catch (error) {
    console.error('Error fetching pariwisata:', error)
    return NextResponse.json(
      { error: 'Gagal mengambil data pariwisata' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const nama = formData.get('nama') as string
    const deskripsi = formData.get('deskripsi') as string
    const file = formData.get('gambar') as File | null

    if (!file) {
      return NextResponse.json(
        { error: 'Gambar wajib diunggah' },
        { status: 400 }
      )
    }

    // Upload ke Vercel Blob
    const bytes = await file.arrayBuffer()
    const filename = `${Date.now()}-${file.name}`
    const blob = await put(filename, bytes, { access: 'public' })
    const imageUrl = blob.url

    // Simpan ke database
    const pariwisata = await prisma.pariwisata.create({
      data: {
        nama,
        deskripsi,
        gambar: imageUrl, // Simpan URL dari Vercel Blob
      },
    })

    return NextResponse.json(pariwisata)
  } catch (error) {
    console.error('Error creating pariwisata:', error)
    return NextResponse.json(
      { error: 'Gagal menambahkan data pariwisata' },
      { status: 500 }
    )
  }
}