"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface UserProfile {
  name?: string;
  role?: "Programmer" | "Coach"; // 👈 Supporting your two explicit user types
}

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");
    if (!token || !storedUser) {
      localStorage.clear();
      router.push("/login");
      return;
    }
    try {
      setUser(JSON.parse(storedUser));
    } catch (e) {
      localStorage.clear();
      router.push("/login");
    } finally {
      setLoading(false);
    }
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center font-bold">
        Loading RankUp Panel...
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white p-10">
      {/* GLOBAL HEADER BAR */}
      <div className="flex justify-between items-center border-b border-slate-800 pb-6">
        <div>
          <h1 className="text-5xl font-black tracking-wide text-blue-500">
            RankUp Dashboard
          </h1>
          <p className="mt-2 text-slate-400 text-sm font-semibold uppercase tracking-wider">
            Portal Mode: <span className="text-blue-400">{user?.role || "User"}</span>
          </p>
        </div>

        <button
          onClick={() => {
            localStorage.clear();
            router.push("/login");
          }}
          className="bg-red-500 hover:bg-red-600 transition text-white font-bold px-6 py-2.5 rounded-xl text-sm shadow-lg shadow-red-500/10"
        >
          Logout
        </button>
      </div>

      <p className="mt-6 text-2xl font-medium">
        Welcome back, <span className="font-bold text-blue-400">{user?.name || "Player"}</span>!
      </p>

      {/* 👑 RENDER CONDITION: COACH VIEW */}
      {user?.role === "Coach" ? (
        <div className="mt-10 space-y-10">
          {/* Action Tools */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Action 1: Team Assignment */}
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-xl">
              <h3 className="text-xl font-bold text-blue-400 mb-2">🛡️ Assign Team Pool</h3>
              <p className="text-slate-400 text-sm mb-4">Register your competitive programming club members into a tracking pool.</p>
              <div className="flex gap-2">
                <input type="text" placeholder="Programmer username..." className="bg-slate-800 border border-slate-700 px-4 py-2 rounded-xl text-sm w-full focus:outline-none focus:border-blue-500" />
                <button className="bg-blue-600 hover:bg-blue-700 font-bold px-4 py-2 rounded-xl text-sm transition">Add</button>
              </div>
            </div>

            {/* Action 2: Problem Management */}
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-xl">
              <h3 className="text-xl font-bold text-blue-400 mb-2">🎯 Push Problem Set</h3>
              <p className="text-slate-400 text-sm mb-4">Assign problem URLs or IDs straight to your monitored student grids.</p>
              <div className="flex gap-2">
                <input type="text" placeholder="Problem title or ID..." className="bg-slate-800 border border-slate-700 px-4 py-2 rounded-xl text-sm w-full focus:outline-none focus:border-blue-500" />
                <button className="bg-blue-600 hover:bg-blue-700 font-bold px-4 py-2 rounded-xl text-sm transition">Assign</button>
              </div>
            </div>
          </div>

          {/* Monitoring Panel */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl">
            <h3 className="text-xl font-bold text-white mb-4">📊 Team Monitoring Dashboard</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-400">
                <thead className="text-xs uppercase bg-slate-800 text-slate-300">
                  <tr>
                    <th className="px-6 py-3 rounded-l-xl">Programmer Name</th>
                    <th className="px-6 py-3">Solved</th>
                    <th className="px-6 py-3">Rating</th>
                    <th className="px-6 py-3 rounded-r-xl">Activity Streak</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  <tr className="hover:bg-slate-800/30 transition">
                    <td className="px-6 py-4 font-semibold text-white">Alice_Coder</td>
                    <td className="px-6 py-4 text-blue-400 font-bold">512</td>
                    <td className="px-6 py-4 text-yellow-500 font-bold">1850</td>
                    <td className="px-6 py-4">24 Days 🔥</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30 transition">
                    <td className="px-6 py-4 font-semibold text-white">Bob_Binary</td>
                    <td className="px-6 py-4 text-blue-400 font-bold">320</td>
                    <td className="px-6 py-4 text-slate-400 font-bold">1210</td>
                    <td className="px-6 py-4">3 Days</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl hover:scale-105 transition shadow-xl">
            <h2 className="text-slate-400 font-semibold uppercase tracking-wider text-xs">Solved Problems</h2>
            <p className="text-5xl text-blue-400 font-black mt-4">420</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl hover:scale-105 transition shadow-xl">
            <h2 className="text-slate-400 font-semibold uppercase tracking-wider text-xs">Rating</h2>
            <p className="text-5xl text-blue-400 font-black mt-4">1450</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl hover:scale-105 transition shadow-xl">
            <h2 className="text-slate-400 font-semibold uppercase tracking-wider text-xs">Streak</h2>
            <p className="text-5xl text-blue-400 font-black mt-4">15 Days</p>
          </div>
        </div>
      )}
    </main>
  );
}