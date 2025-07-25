import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const setting = await prisma.pengaturanKontak.findUnique({
      where: { nama: 'whatsapp' },
    });

    if (!setting) {
      // Buat pengaturan default jika belum ada nomor
      const newSetting = await prisma.pengaturanKontak.create({
        data: {
          nama: 'whatsapp',
          nilai: '681226785140', // Nomor default
          keterangan: 'Nomor WhatsApp untuk kontak',
        },
      });
      return NextResponse.json(newSetting);
    }

    return NextResponse.json(setting);
  } catch (error) {
    console.error('Error fetching WhatsApp setting:', error);
    return NextResponse.json(
      { error: 'Gagal mengambil pengaturan WhatsApp' },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const { nama, nilai, keterangan } = await request.json();

    if (nama !== 'whatsapp') {
      return NextResponse.json(
        { error: 'Nama pengaturan tidak valid' },
        { status: 400 }
      );
    }

    // Validasi nomor WhatsApp
    const cleanNumber = nilai.replace(/\D/g, '');
    if (!cleanNumber) {
      return NextResponse.json(
        { error: 'Nomor WhatsApp tidak valid' },
        { status: 400 }
      );
    }

    // Update atau buat pengaturan
    const setting = await prisma.pengaturanKontak.upsert({
      where: { nama: 'whatsapp' },
      update: {
        nilai: cleanNumber,
        keterangan: keterangan || 'Nomor WhatsApp untuk kontak',
      },
      create: {
        nama: 'whatsapp',
        nilai: cleanNumber,
        keterangan: keterangan || 'Nomor WhatsApp untuk kontak',
      },
    });

    return NextResponse.json(setting);
  } catch (error) {
    console.error('Error updating WhatsApp setting:', error);
    return NextResponse.json(
      { error: 'Gagal memperbarui pengaturan WhatsApp' },
      { status: 500 }
    );
  }
}

// Tambahkan handler untuk method lain yang tidak didukung
export function POST() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}

export function DELETE() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}

export function PATCH() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}
