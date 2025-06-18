import { PrismaClient } from '@prisma/client';

// Test Prisma Client types
export async function testPrismaClient() {
  const prisma = new PrismaClient() as any;
  
  try {
    // Test query for each model
    const users = await prisma.user.findMany();
    console.log('Users:', users.length);
    
    const pariwisata = await prisma.pariwisata.findMany();
    console.log('Pariwisata:', pariwisata.length);
    
    const dokumentasi = await prisma.dokumentasi.findMany();
    console.log('Dokumentasi:', dokumentasi.length);
    
    const pengaturan = await prisma.pengaturanKontak.findMany();
    console.log('Pengaturan Kontak:', pengaturan.length);
    
    return {
      users: users.length,
      pariwisata: pariwisata.length,
      dokumentasi: dokumentasi.length,
      pengaturanKontak: pengaturan.length,
    };
  } catch (error) {
    console.error('Error testing Prisma Client:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Run the test if this file is executed directly
if (require.main === module) {
  testPrismaClient()
    .then((result) => {
      console.log('Prisma Client test completed successfully:', result);
      process.exit(0);
    })
    .catch((error) => {
      console.error('Prisma Client test failed:', error);
      process.exit(1);
    });
}
