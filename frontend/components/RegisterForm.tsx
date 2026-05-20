"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, RegisterInput } from "@/hooks/useAuth";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterForm() {
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
    defaultValues: { role: "Programmer" }
  });

  const onSubmit = async (data: RegisterInput) => {
    setServerError(null);
    try {
      await axios.post("http://localhost:5000/auth/register", data);
      router.push("/login");
    } catch (error: any) {
      setServerError(error.response?.data?.message || "Registration processing failure.");
    }
  };

  return (
    <div className="w-full max-w-md bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-2xl">
      <h2 className="text-3xl font-black text-center text-blue-500 mb-6">Join RankUp</h2>
      
      {serverError && (
        <div className="bg-red-500/10 border border-red-500 text-red-500 text-sm p-3 rounded-xl mb-4">
          {Array.isArray(serverError) ? serverError.join(", ") : serverError}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-400 mb-1">Full Name</label>
          <input
            type="text"
            {...register("name")}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-blue-500 transition"
            placeholder="Alex Coder"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-400 mb-1">Email Address</label>
          <input
            type="text"
            {...register("email")}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-blue-500 transition"
            placeholder="alex@rankup.com"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-400 mb-1">Password (Min 6 chars)</label>
          <input
            type="password"
            {...register("password")}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-blue-500 transition"
            placeholder="••••••••"
          />
          {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-400 mb-1">Platform Account Role</label>
          <select
            {...register("role")}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-blue-500 transition"
          >
            <option value="Programmer">Programmer</option>
            <option value="Coach">Coach</option>
          </select>
          {errors.role && <p className="text-red-500 text-xs mt-1">{errors.role.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 hover:bg-blue-700 transition font-bold py-3 rounded-xl shadow-lg shadow-blue-500/20 disabled:opacity-50"
        >
          {isSubmitting ? "Creating Account..." : "Register"}
        </button>
      </form>

      <p className="mt-6 text-sm text-center text-slate-400">
        Already have an account?{" "}
        <Link href="/login" className="text-blue-400 hover:underline">Log in here</Link>
      </p>
    </div>
  );
}