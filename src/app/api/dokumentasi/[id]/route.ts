import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { put, del } from '@vercel/blob'

type Context = {
  params: Promise<{ id: string }>
}

export async function GET(_request: NextRequest, context: Context) {
  try {
    const { id } = await context.params

    const data = await prisma.dokumentasi.findUnique({ where: { id } })

    if (!data) {
      return NextResponse.json({ error: 'Data tidak ditemukan' }, { status: 404 })
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error('GET Error:', error)
    return NextResponse.json(
      { error: 'Gagal mengambil data dokumentasi' },
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

    const existing = await prisma.dokumentasi.findUnique({ where: { id } })

    if (!existing) {
      return NextResponse.json({ error: 'Data tidak ditemukan' }, { status: 404 })
    }

    let gambar = existing.gambar

    // Jika ada file baru, hapus file lama di Blob dan upload yang baru
    if (file) {
      if (existing.gambar) {
        try {
          await del(existing.gambar)
        } catch (err) {
          console.error('Gagal menghapus file lama dari Vercel Blob:', err)
        }
      }

      const bytes = await file.arrayBuffer()
      const filename = `${Date.now()}-${file.name}`
      const blob = await put(filename, bytes, { access: 'public' })
      gambar = blob.url
    }

    const updated = await prisma.dokumentasi.update({
      where: { id },
      data: { nama, deskripsi, gambar },
    })

    return NextResponse.json(updated)
  } catch (error) {
    console.error('PUT Error:', error)
    return NextResponse.json(
      { error: 'Gagal memperbarui dokumentasi' },
      { status: 500 }
    )
  }
}

export async function DELETE(_request: NextRequest, context: Context) {
  try {
    const { id } = await context.params

    const existing = await prisma.dokumentasi.findUnique({ where: { id } })

    if (!existing) {
      return NextResponse.json({ error: 'Data tidak ditemukan' }, { status: 404 })
    }

    if (existing.gambar) {
      try {
        await del(existing.gambar)
      } catch (err) {
        console.error('Gagal menghapus file dari Vercel Blob:', err)
      }
    }

    await prisma.dokumentasi.delete({ where: { id } })
    return new Response(null, { status: 204 })
  } catch (error) {
    console.error('DELETE Error:', error)
    return NextResponse.json(
      { error: 'Gagal menghapus dokumentasi' },
      { status: 500 }
    )
  }
}