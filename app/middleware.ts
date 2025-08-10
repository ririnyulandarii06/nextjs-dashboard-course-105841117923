import { authConfig } from '../auth.config';
import NextAuth from 'next-auth';

// Inisialisasi NextAuth dengan konfigurasi Anda
export const { auth: middleware } = NextAuth(authConfig);

export const config = {
  // Otorisasi hanya untuk rute ini
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
