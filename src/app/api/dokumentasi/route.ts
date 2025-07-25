import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { put } from '@vercel/blob'

export async function GET() {
  try {
    const data = await prisma.dokumentasi.findMany({
      orderBy: { createdAt: 'desc' },
    })
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json(
      { error: 'Gagal mengambil data dokumentasi' },
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
        { error: 'File gambar diperlukan' },
        { status: 400 }
      )
    }

    // Upload ke Vercel Blob
    const bytes = await file.arrayBuffer()
    const filename = `${Date.now()}-${file.name}`
    const blob = await put(filename, bytes, { access: 'public' })
    const imageUrl = blob.url

    // Simpan ke database
    const data = await prisma.dokumentasi.create({
      data: {
        nama,
        deskripsi,
        gambar: imageUrl, // Simpan URL dari Vercel Blob
      },
    })

    return NextResponse.json(data, { status: 201 })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json(
      { error: 'Gagal menambahkan dokumentasi' },
      { status: 500 }
    )
  }
}