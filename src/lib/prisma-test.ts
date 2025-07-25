import { PrismaClient } from '@prisma/client';

// This script tests if Prisma Client is properly generated and can connect to the database

async function testPrisma() {
  const prisma = new PrismaClient();
  
  try {
    console.log('Testing Prisma Client...');
    
    // Test query for each model
    const users = await prisma.user.findMany();
    console.log(`Found ${users.length} users`);
    
    const pariwisata = await prisma.pariwisata.findMany();
    console.log(`Found ${pariwisata.length} pariwisata`);
    
    const dokumentasi = await prisma.dokumentasi.findMany();
    console.log(`Found ${dokumentasi.length} dokumentasi`);
    
    const pengaturan = await prisma.pengaturanKontak.findMany();
    console.log(`Found ${pengaturan.length} pengaturan kontak`);
    
    console.log('Prisma Client test completed successfully!');
    console.log('All models are accessible and queries work correctly.');
    
  } catch (error) {
    console.error('Error testing Prisma Client:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the test
if (require.main === module) {
  testPrisma()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error('Test failed:', error);
      process.exit(1);
    });
}

export { testPrisma };
