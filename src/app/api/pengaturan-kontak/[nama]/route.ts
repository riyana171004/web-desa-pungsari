import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

type Context = {
  params: Promise<{ nama: string }>
};

// GET /api/pengaturan-kontak/[nama]
// Mendapatkan pengaturan kontak berdasarkan nama
export async function GET(request: NextRequest, context: Context) {
  try {
    const { nama } = await context.params;
    
    const pengaturan = await prisma.pengaturanKontak.findUnique({
      where: { nama }
    });

    if (!pengaturan) {
      return NextResponse.json(
        { error: 'Pengaturan tidak ditemukan' },
        { status: 404 }
      );
    }

    return NextResponse.json(pengaturan);
  } catch (error) {
    console.error('Error in GET /api/pengaturan-kontak:', error);
    return NextResponse.json(
      { error: 'Gagal mengambil data pengaturan' },
      { status: 500 }
    );
  }
}

// PUT /api/pengaturan-kontak/[nama]
// Memperbarui pengaturan kontak berdasarkan nama
export async function PUT(request: NextRequest, context: Context) {
  try {
    const { nama } = await context.params;
    const { nilai, keterangan } = await request.json();
    
    if (nilai === undefined) {
      return NextResponse.json(
        { error: 'Nilai pengaturan harus diisi' },
        { status: 400 }
      );
    }
    
    const updated = await prisma.pengaturanKontak.update({
      where: { nama },
      data: { 
        nilai,
        ...(keterangan !== undefined && { keterangan })
      }
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error('Error in PUT /api/pengaturan-kontak:', error);
    return NextResponse.json(
      { error: 'Gagal memperbarui pengaturan' },
      { status: 500 }
    );
  }
}

// DELETE /api/pengaturan-kontak/[nama]
// Menghapus pengaturan kontak berdasarkan nama
export async function DELETE(request: NextRequest, context: Context) {
  try {
    const { nama } = await context.params;
    
    await prisma.pengaturanKontak.delete({
      where: { nama }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error in DELETE /api/pengaturan-kontak:', error);
    return NextResponse.json(
      { error: 'Gagal menghapus pengaturan' },
      { status: 500 }
    );
  }
}