/** @type {import('next').NextConfig} */
const nextConfig = {
    // Tambahkan ini untuk mengizinkan otentikasi NextAuth.js
    experimental: {
      serverActions: true,
      auth: {
        unstable_redirect: true,
      },
    },
};
 
export default nextConfig;
