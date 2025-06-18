import { Prisma, PrismaClient } from '@prisma/client';

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

// Extend the PrismaClient type to include our custom models
declare module '@prisma/client' {
  const PrismaClient: {
    new (options?: Prisma.PrismaClientOptions): PrismaClient;
  };
  
  // This is a workaround to make TypeScript recognize our custom models
  // The actual implementation is in the schema.prisma file
  interface PrismaClient {
    // Existing models from schema.prisma
    user: any;
    pariwisata: any;
    dokumentasi: any;
    pengaturanKontak: any;
  }
  
  // Export all types from Prisma namespace
  export * from '@prisma/client';
}

// Extend the Prisma namespace to include our custom models
declare module '.prisma/client' {
  const Prisma: {
    Prisma: typeof Prisma;
  };
  
  export interface PrismaClient {
    user: any;
    pariwisata: any;
    dokumentasi: any;
    pengaturanKontak: any;
  }
  
  export * from '@prisma/client';
}

export {};
