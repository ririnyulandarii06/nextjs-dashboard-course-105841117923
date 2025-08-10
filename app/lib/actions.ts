'use server';
 
import { AuthError } from 'next-auth';
import { signIn } from '@/auth';
 
// Pastikan ada kata kunci 'export' di sini
export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', Object.fromEntries(formData));
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Kredensial tidak valid.';
        default:
          return 'Terjadi kesalahan.';
      }
    }
    throw error;
  }
}
