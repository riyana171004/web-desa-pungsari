import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { writeFile } from 'fs/promises'
import { join } from 'path'
import { existsSync, mkdirSync } from 'fs'

// Pastikan folder uploads ada
const uploadDir = join(process.cwd(), 'public', 'uploads')
if (!existsSync(uploadDir)) {
  mkdirSync(uploadDir, { recursive: true })
}

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

    // Simpan file
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    const filename = `${Date.now()}-${file.name}`
    const path = join(uploadDir, filename)
    
    await writeFile(path, buffer)

    // Simpan ke database
    const pariwisata = await prisma.pariwisata.create({
      data: {
        nama,
        deskripsi,
        gambar: `/uploads/${filename}`,
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
