import { NextResponse } from 'next/server'
import { writeFile } from 'fs/promises'
import { join } from 'path'
import { prisma } from '@/lib/prisma'

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

    // Simpan file
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    const filename = `${Date.now()}-${file.name}`
    const path = join(process.cwd(), 'public', 'uploads', 'dokumentasi', filename)
    
    // Buat direktori jika belum ada
    const fs = await import('fs')
    const dir = join(process.cwd(), 'public', 'uploads', 'dokumentasi')
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }
    
    await writeFile(path, buffer)

    // Simpan ke database
    const data = await prisma.dokumentasi.create({
      data: {
        nama,
        deskripsi,
        gambar: `/uploads/dokumentasi/${filename}`,
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
