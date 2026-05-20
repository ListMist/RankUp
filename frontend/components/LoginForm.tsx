"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginInput } from "@/hooks/useAuth";
import { useAuth } from "@/context/AuthContext";
import axios from "axios";
import { useState } from "react";
import Link from "next/link";

export default function LoginForm() {
  const { login } = useAuth();
  const [serverError, setServerError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginInput) => {
    setServerError(null);
    try {
      const response = await axios.post("http://localhost:5000/auth/login", data);
      login(response.data.token, response.data.user);
    } catch (error: any) {
      setServerError(error.response?.data?.message || "Invalid credentials. Login failed.");
    }
  };

  return (
    <div className="w-full max-w-md bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-2xl">
      <h2 className="text-3xl font-black text-center text-blue-500 mb-6">Login to RankUp</h2>
      
      {serverError && (
        <div className="bg-red-500/10 border border-red-500 text-red-500 text-sm p-3 rounded-xl mb-4">
          {serverError}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-400 mb-1">Email Address</label>
          <input
            type="text"
            {...register("email")}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-blue-500 transition"
            placeholder="coder@rankup.com"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-400 mb-1">Password</label>
          <input
            type="password"
            {...register("password")}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-blue-500 transition"
            placeholder="••••••••"
          />
          {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 hover:bg-blue-700 transition font-bold py-3 rounded-xl shadow-lg shadow-blue-500/20 disabled:opacity-50"
        >
          {isSubmitting ? "Authenticating..." : "Login"}
        </button>
      </form>

      <p className="mt-6 text-sm text-center text-slate-400">
        New to the platform?{" "}
        <Link href="/register" className="text-blue-400 hover:underline">Create an account</Link>
      </p>
    </div>
  );
}