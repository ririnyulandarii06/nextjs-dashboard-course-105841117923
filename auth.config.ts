// auth.config.ts
import type { NextAuthConfig, Session } from 'next-auth';
import type { NextRequest } from 'next/server';
import GitHub from 'next-auth/providers/github'; // Contoh provider
// Kalau mau kosong, minimal kasih array kosong di providers

export const authConfig: NextAuthConfig = {
  pages: {
    signIn: '/login',
  },
  trustHost: true, // opsional, tergantung setup kamu
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    // Bisa tambah provider lain di sini
  ],
  callbacks: {
    authorized({ auth, request: { nextUrl } }: { auth: Session | null; request: NextRequest }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      
      if (isOnDashboard) {
        return isLoggedIn; // kalau belum login, false
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }
      return true;
    },
  },
};
