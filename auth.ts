import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
 
// Mengekspor auth, signIn, signOut, dan handler dari NextAuth
export const {
  auth,
  signIn,
  signOut,
  handlers, // Export handlers di sini
} = NextAuth(authConfig);
