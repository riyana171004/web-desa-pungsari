// ./src/types/next-auth.d.ts
declare module 'next-auth' {
  /**
   * Extend the built-in session types
   */
  interface Session {
    user: {
      id: string;
      email: string;
      role: string;
    };
  }

  /**
   * Extend the built-in user types
   */
  interface User {
    id: string;
    email: string;
    role: string;
  }
}

declare module 'next-auth/jwt' {
  /**
   * Extend the built-in JWT types
   */
  interface JWT {
    id: string;
    email: string;
    role: string;
  }
}
