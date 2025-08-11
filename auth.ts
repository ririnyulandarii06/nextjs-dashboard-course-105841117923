import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import { getUser } from '@/app/lib/data';
import bcrypt from 'bcryptjs'; // Pastikan ini menggunakan bcryptjs

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email);
          // Jika user tidak ditemukan, kembalikan null
          if (!user) return null;

          const passwordsMatch = await bcrypt.compare(password, user.password);

          // Jika password cocok, kembalikan user
          if (passwordsMatch) return user;
        }
        
        // Jika kredensial tidak valid atau password salah, kembalikan null
        console.log('Invalid credentials');
        return null;
      },
    }),
  ],
});