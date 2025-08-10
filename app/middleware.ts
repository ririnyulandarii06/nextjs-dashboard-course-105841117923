import NextAuth from 'next-auth';
import { authConfig } from '../auth.config';
import { NextResponse } from 'next/server';

// Inisialisasi NextAuth dengan konfigurasi Anda
export const { auth: middleware } = NextAuth(authConfig);

export default middleware((req) => {
  const { auth, nextUrl } = req;
  const isLoggedIn = !!auth?.user;
  const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');

  if (isOnDashboard) {
    // Jika di dashboard tapi belum login, redirect ke halaman login
    if (!isLoggedIn) {
      return NextResponse.redirect(new URL('/login', nextUrl));
    }
  } else if (isLoggedIn) {
    // Jika sudah login dan mencoba mengakses halaman login, redirect ke dashboard
    if (nextUrl.pathname === '/login') {
      return NextResponse.redirect(new URL('/dashboard', nextUrl));
    }
  }

  // Izinkan akses ke rute publik
  return NextResponse.next();
});

export const config = {
  // Otorisasi hanya untuk rute ini
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
