import { NextResponse } from 'next/server'
import { writeFile, unlink } from 'fs/promises'
import { join } from 'path'
import { prisma } from '@/lib/prisma'

// Tambahkan tipe untuk error handling
type ErrorWithMessage = {
  message: string;
};

interface Params {
  params: {
    id: string
  }
}

export async function GET(request: Request, { params }: Params) {
  try {
    const { id } = params
    const data = await prisma.dokumentasi.findUnique({
      where: { id },
    })

    if (!data) {
      return NextResponse.json(
        { error: 'Data tidak ditemukan' },
        { status: 404 }
      )
    }

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json(
      { error: 'Gagal mengambil data dokumentasi' },
      { status: 500 }
    )
  }
}

export async function PUT(request: Request, { params }: Params) {
  try {
    const { id } = params
    const formData = await request.formData()
    const nama = formData.get('nama') as string
    const deskripsi = formData.get('deskripsi') as string
    const file = formData.get('gambar') as File | null

    // Dapatkan data lama untuk menghapus file lama jika ada file baru
    const existing = await prisma.dokumentasi.findUnique({
      where: { id },
    })

    if (!existing) {
      return NextResponse.json(
        { error: 'Data tidak ditemukan' },
        { status: 404 }
      )
    }

    let gambar = existing.gambar

    // Jika ada file baru, simpan file baru dan hapus yang lama
    if (file) {
      // Hapus file lama
      if (existing.gambar) {
        try {
          const oldPath = join(process.cwd(), 'public', existing.gambar)
          await unlink(oldPath)
        } catch (err) {
          console.error('Gagal menghapus file lama:', err)
        }
      }

      // Simpan file baru
      const bytes = await file.arrayBuffer()
      const buffer = Buffer.from(bytes)
      const filename = `${Date.now()}-${file.name}`
      const path = join(process.cwd(), 'public', 'uploads', 'dokumentasi', filename)
      
      await writeFile(path, buffer)
      
      gambar = `/uploads/dokumentasi/${filename}`
    }

    // Update data di database
    const data = await prisma.dokumentasi.update({
      where: { id },
      data: {
        nama,
        deskripsi,
        gambar,
      },
    })

    return NextResponse.json(data)
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json(
      { error: 'Gagal memperbarui dokumentasi' },
      { status: 500 }
    )
  }
}

export async function DELETE(request: Request, { params }: Params) {
  try {
    const { id } = params

    // Dapatkan data untuk menghapus file
    const existing = await prisma.dokumentasi.findUnique({
      where: { id },
    })

    if (!existing) {
      return NextResponse.json(
        { error: 'Data tidak ditemukan' },
        { status: 404 }
      )
    }

    // Hapus file gambar
    if (existing.gambar) {
      try {
        const path = join(process.cwd(), 'public', existing.gambar)
        await unlink(path)
      } catch (err) {
        console.error('Gagal menghapus file:', err)
      }
    }

    // Hapus data dari database
    await prisma.dokumentasi.delete({
      where: { id },
    })

    return new Response(null, { status: 204 })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json(
      { error: 'Gagal menghapus dokumentasi' },
      { status: 500 }
    )
  }
}
