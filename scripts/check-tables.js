const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  try {
    console.log('Checking database connection...');
    await prisma.$connect();
    console.log('Database connected successfully!');

    console.log('\nListing all tables in the database:');
    const result = await prisma.$queryRaw`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public';
    `;
    console.log('Tables:', result);

    console.log('\nChecking if pengaturan_kontak table exists and has data:');
    const pengaturanKontak = await prisma.$queryRaw`
      SELECT * FROM information_schema.tables 
      WHERE table_schema = 'public' AND table_name = 'pengaturan_kontak';
    `;
    console.log('pengaturan_kontak table exists:', pengaturanKontak.length > 0);

    if (pengaturanKontak.length > 0) {
      const data = await prisma.$queryRaw`SELECT * FROM pengaturan_kontak;`;
      console.log('Data in pengaturan_kontak:', data);
    }
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
