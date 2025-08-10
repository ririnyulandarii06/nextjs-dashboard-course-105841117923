import type { NextAuthConfig } from 'next-auth';
import type { Session } from 'next-auth';
import type { NextRequest } from 'next/server';

export const authConfig: NextAuthConfig = {
  pages: {
    signIn: '/login',
  },
  // Tambahkan properti providers yang kosong di sini
  providers: [],
  callbacks: {
    authorized({ auth, request: { nextUrl } }: { auth: Session | null; request: NextRequest }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false;
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }
      return true;
    },
  },
};
