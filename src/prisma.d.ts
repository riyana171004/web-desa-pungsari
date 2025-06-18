// This file is used to extend the PrismaClient type with our custom models
// This is necessary because of a known issue with Prisma and Next.js 13+

import { PrismaClient } from '@prisma/client';

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

// Extend the NodeJS namespace to include our custom properties
declare global {
  namespace NodeJS {
    interface Global {
      prisma: PrismaClient | undefined;
    }
  }
}

// Extend the PrismaClient type to include our custom models
declare module '@prisma/client' {
  const PrismaClient: {
    new (options?: Prisma.PrismaClientOptions): PrismaClient;
  };
  
  // This is a workaround to make TypeScript recognize our custom models
  interface PrismaClient {
    user: any;
    pariwisata: any;
    dokumentasi: any;
    pengaturanKontak: any;
  }
}

// This is needed to make TypeScript happy with our global prisma client
export {};
