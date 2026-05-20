"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "Programmer",
  });

  const register = async () => {
    if (form.name.length < 4) {
      alert("Name minimum 4 characters");
      return;
    }

    if (form.password.length < 6) {
      alert("Password minimum 6 characters");
      return;
    }

    try {
      await axios.post(
        "http://localhost:5000/auth/register",
        form
      );

      alert("Registration success");

      router.push("/login");
    } catch {
      alert("Registration failed");
    }
  };

  return (
    <main className="min-h-screen flex justify-center items-center bg-slate-900">
      <div className="bg-slate-800 p-10 rounded-3xl w-105">
        <h1 className="text-4xl text-blue-400 font-bold mb-8">
          Register
        </h1>

        <input
          placeholder="Name"
          className="w-full p-3 rounded bg-slate-700 mb-4"
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value,
            })
          }
        />

        <input
          placeholder="Email"
          className="w-full p-3 rounded bg-slate-700 mb-4"
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value,
            })
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded bg-slate-700 mb-4"
          onChange={(e) =>
            setForm({
              ...form,
              password: e.target.value,
            })
          }
        />

        <select
          className="w-full p-3 rounded bg-slate-700 mb-6"
          onChange={(e) =>
            setForm({
              ...form,
              role: e.target.value,
            })
          }
        >
          <option value="Programmer">
            Programmer
          </option>
          <option value="Coach">
            Coach
          </option>
        </select>

        <button
          onClick={register}
          className="w-full bg-blue-500 hover:bg-blue-600 transition p-3 rounded-xl"
        >
          Register
        </button>
      </div>
    </main>
  );
}