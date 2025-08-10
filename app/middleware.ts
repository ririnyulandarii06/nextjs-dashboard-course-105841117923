import { auth } from '@/auth';

export default auth;

export const config = {
  // Hanya mengizinkan middleware untuk rute yang tidak termasuk dalam daftar ini
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
