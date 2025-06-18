import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import type { Prisma } from '@prisma/client';

// GET /api/pengaturan-kontak
// Mendapatkan semua pengaturan kontak
export async function GET() {
  try {
    const pengaturan = await prisma.pengaturanKontak.findMany({
      orderBy: {
        nama: 'asc'
      }
    });
    return NextResponse.json(pengaturan);
  } catch (error) {
    console.error('Error in GET /api/pengaturan-kontak:', error);
    return NextResponse.json(
      { error: 'Gagal mengambil data pengaturan kontak' },
      { status: 500 }
    );
  }
}

// POST /api/pengaturan-kontak
// Membuat pengaturan kontak baru
export async function POST(request: Request) {
  try {
    const { nama, nilai, keterangan } = await request.json();
    
    if (!nama || nilai === undefined) {
      return NextResponse.json(
        { error: 'Nama dan nilai pengaturan harus diisi' },
        { status: 400 }
      );
    }
    
    // Buat pengaturan baru
    const result = await prisma.pengaturanKontak.create({
      data: { 
        nama, 
        nilai, 
        keterangan: keterangan || null 
      }
    });

    return NextResponse.json(result, { status: 201 });
  } catch (error: any) {
    console.error('Error in POST /api/pengaturan-kontak:', error);
    
    // Handle duplicate entry error
    if (error.code === 'P2002') {
      return NextResponse.json(
        { error: 'Pengaturan dengan nama tersebut sudah ada' },
        { status: 409 }
      );
    }
    
    return NextResponse.json(
      { error: 'Gagal membuat pengaturan kontak' },
      { status: 500 }
    );
  }
}
