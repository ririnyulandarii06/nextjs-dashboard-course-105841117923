    import NextAuth from 'next-auth';
    import { authConfig } from './auth.config';

    // Mengekspor auth, signIn, signOut, dan handlers dari NextAuth
    export const {
      auth,
      signIn,
      signOut,
      handlers, // Tambahkan 'handlers' di sini
    } = NextAuth(authConfig);
    