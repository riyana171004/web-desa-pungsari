const { PrismaClient } = require('@prisma/client');

async function main() {
  const prisma = new PrismaClient();
  
  try {
    console.log('Checking Prisma Client models...');
    
    // List all available models in Prisma Client
    console.log('Available models:', Object.keys(prisma));
    
    // Check if pengaturanKontak model exists
    console.log('pengaturanKontak exists:', 'pengaturanKontak' in prisma);
    
    // Try to query the pengaturanKontak table
    const count = await prisma.pengaturanKontak.count();
    console.log(`Found ${count} records in pengaturan_kontak table`);
    
    // List all records
    const records = await prisma.pengaturanKontak.findMany();
    console.log('Records:', records);
    
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
