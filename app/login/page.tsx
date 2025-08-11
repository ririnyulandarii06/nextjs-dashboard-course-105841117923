"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signIn("credentials", {
      redirect: true,
      email,
      password,
      callbackUrl: "/dashboard",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="border p-2"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="border p-2"
      />
      <button type="submit" className="bg-blue-500 text-white p-2">
        Login
      </button>
    </form>
  );
}
