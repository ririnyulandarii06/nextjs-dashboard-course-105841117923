// Lokasi: middleware.ts

import NextAuth from 'next-auth';
import { authConfig } from './auth.config'; // Impor konfigurasi yang aman untuk Edge

// Middleware sekarang hanya menggunakan authConfig, bukan file auth.ts yang berat
export default NextAuth(authConfig).auth;

export const config = {
  // Matcher ini lebih baik karena melindungi semua halaman kecuali yang spesifik
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};