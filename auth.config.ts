import type { NextAuthConfig } from 'next-auth';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import bcrypt from 'bcrypt';
import Credentials from 'next-auth/providers/credentials';

// Fungsi untuk mengambil pengguna dari database
async function getUser(email: string) {
  try {
    const user = await sql`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0];
  } catch (error) {
    console.error('Gagal mengambil pengguna:', error);
    throw new Error('Gagal mengambil pengguna.');
  }
}

// Konfigurasi utama untuk NextAuth
export const authConfig: NextAuthConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    // Callback ini memeriksa apakah pengguna diizinkan mengakses halaman dashboard
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect pengguna yang belum terautentikasi ke halaman login
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }
      return true;
    },
    // Callback ini menambahkan ID pengguna ke token JWT
    async jwt({ token, user }) {
      if (user) {
        token.userId = user.id;
      }
      return token;
    },
    // Callback ini menambahkan ID pengguna dari token ke objek sesi
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.userId as string;
      }
      return session;
    },
  },
  // Menentukan penyedia (provider) autentikasi
  providers: [
    Credentials({
      async authorize(credentials) {
        // Validasi input email dan sandi
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          
          // Ambil pengguna dari database berdasarkan email
          const user = await getUser(email);
          if (!user) {
            console.log('Pengguna tidak ditemukan.');
            return null;
          }

          // Verifikasi sandi dengan bcrypt
          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (passwordsMatch) {
            console.log('Sandi cocok!');
            return user; // Berhasil login
          } else {
            console.log('Sandi tidak valid.');
            return null; // Gagal login
          }
        }

        console.log('Kredensial tidak valid');
        return null;
      },
    }),
  ],
  // NextAuth memerlukan secret untuk mengenkripsi sesi
  secret: process.env.AUTH_SECRET,
};
