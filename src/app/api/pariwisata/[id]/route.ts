import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { writeFile, unlink } from 'fs/promises'
import { join } from 'path'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params
    const pariwisata = await prisma.pariwisata.findUnique({
      where: { id },
    })

    if (!pariwisata) {
      return NextResponse.json(
        { error: 'Data tidak ditemukan' },
        { status: 404 }
      )
    }

    return NextResponse.json(pariwisata)
  } catch (error) {
    console.error('Error fetching pariwisata:', error)
    return NextResponse.json(
      { error: 'Gagal mengambil data pariwisata' },
      { status: 500 }
    )
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params
    const formData = await request.formData()
    const nama = formData.get('nama') as string
    const deskripsi = formData.get('deskripsi') as string
    const file = formData.get('gambar') as File | null

    const existing = await prisma.pariwisata.findUnique({
      where: { id },
    })

    if (!existing) {
      return NextResponse.json(
        { error: 'Data tidak ditemukan' },
        { status: 404 }
      )
    }

    let gambar = existing.gambar

    // Jika ada file baru diupload
    if (file && file.size > 0) {
      // Hapus file lama jika ada
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
      const uploadDir = join(process.cwd(), 'public', 'uploads')
      const path = join(uploadDir, filename)
      
      await writeFile(path, buffer)
      gambar = `/uploads/${filename}`
    }

    // Update data
    const updated = await prisma.pariwisata.update({
      where: { id },
      data: {
        nama,
        deskripsi,
        gambar,
      },
    })

    return NextResponse.json(updated)
  } catch (error) {
    console.error('Error updating pariwisata:', error)
    return NextResponse.json(
      { error: 'Gagal memperbarui data pariwisata' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params
    
    // Hapus file gambar terkait
    const existing = await prisma.pariwisata.findUnique({
      where: { id },
    })

    if (!existing) {
      return NextResponse.json(
        { error: 'Data tidak ditemukan' },
        { status: 404 }
      )
    }

    // Hapus file gambar jika ada
    if (existing.gambar) {
      try {
        const path = join(process.cwd(), 'public', existing.gambar)
        await unlink(path)
      } catch (err) {
        console.error('Gagal menghapus file:', err)
      }
    }

    // Hapus data dari database
    await prisma.pariwisata.delete({
      where: { id },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting pariwisata:', error)
    return NextResponse.json(
      { error: 'Gagal menghapus data pariwisata' },
      { status: 500 }
    )
  }
}
