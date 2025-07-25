import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { put, del } from '@vercel/blob'

type Context = {
  params: Promise<{ id: string }>
}

export async function GET(request: NextRequest, context: Context) {
  try {
    const { id } = await context.params
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

export async function PUT(request: NextRequest, context: Context) {
  try {
    const { id } = await context.params
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
      // Hapus file lama dari Vercel Blob jika ada
      if (existing.gambar) {
        try {
          await del(existing.gambar)
        } catch (err) {
          console.error('Gagal menghapus file lama dari Vercel Blob:', err)
        }
      }

      // Upload file baru ke Vercel Blob
      const bytes = await file.arrayBuffer()
      const filename = `${Date.now()}-${file.name}`
      const blob = await put(filename, bytes, { access: 'public' })
      gambar = blob.url // Simpan URL dari Vercel Blob
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

export async function DELETE(request: NextRequest, context: Context) {
  try {
    const { id } = await context.params

    // Hapus file gambar terkait dari Vercel Blob
    const existing = await prisma.pariwisata.findUnique({
      where: { id },
    })

    if (!existing) {
      return NextResponse.json(
        { error: 'Data tidak ditemukan' },
        { status: 404 }
      )
    }

    // Hapus file gambar dari Vercel Blob jika ada
    if (existing.gambar) {
      try {
        await del(existing.gambar)
      } catch (err) {
        console.error('Gagal menghapus file dari Vercel Blob:', err)
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