const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  try {
    console.log('Checking WhatsApp setting...');
    
    // Cek apakah pengaturan WhatsApp sudah ada
    const existingSetting = await prisma.pengaturanKontak.findUnique({
      where: { nama: 'whatsapp' }
    });

    if (!existingSetting) {
      console.log('Creating default WhatsApp setting...');
      // Buat pengaturan WhatsApp default jika belum ada
      await prisma.pengaturanKontak.create({
        data: {
          nama: 'whatsapp',
          nilai: '6281226785140', // Nomor default
          keterangan: 'Nomor WhatsApp untuk kontak'
        }
      });
      console.log('Default WhatsApp setting created successfully!');
    } else {
      console.log('WhatsApp setting already exists:', existingSetting);
    }
  } catch (error) {
    console.error('Error initializing WhatsApp setting:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
