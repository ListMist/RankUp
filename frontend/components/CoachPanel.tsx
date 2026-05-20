"use client";

export default function CoachPanel() {
  return (
    <div className="mt-10 space-y-10">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-xl">
          <h3 className="text-xl font-bold text-blue-400 mb-2">🛡️ Assign Team Pool</h3>
          <p className="text-slate-400 text-sm mb-4">Register club members into your tracking roster.</p>
          <div className="flex gap-2">
            <input type="text" placeholder="Username..." className="bg-slate-950 border border-slate-800 px-4 py-2 rounded-xl text-sm w-full focus:outline-none focus:border-blue-500" />
            <button className="bg-blue-600 hover:bg-blue-700 font-bold px-4 py-2 rounded-xl text-sm transition">Add</button>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-xl">
          <h3 className="text-xl font-bold text-blue-400 mb-2">🎯 Push Problem Set</h3>
          <p className="text-slate-400 text-sm mb-4">Assign competitive tasks straight to your students.</p>
          <div className="flex gap-2">
            <input type="text" placeholder="Problem ID..." className="bg-slate-950 border border-slate-800 px-4 py-2 rounded-xl text-sm w-full focus:outline-none focus:border-blue-500" />
            <button className="bg-blue-600 hover:bg-blue-700 font-bold px-4 py-2 rounded-xl text-sm transition">Assign</button>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl">
        <h3 className="text-xl font-bold text-white mb-4">📊 Team Monitoring Dashboard</h3>
        <table className="w-full text-left text-sm text-slate-400">
          <thead className="text-xs uppercase bg-slate-800 text-slate-300">
            <tr>
              <th className="px-6 py-3 rounded-l-xl">Programmer</th>
              <th className="px-6 py-3">Solved</th>
              <th className="px-6 py-3">Rating</th>
              <th className="px-6 py-3 rounded-r-xl">Streak</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            <tr className="hover:bg-slate-800/30">
              <td className="px-6 py-4 font-semibold text-white">Alice_Coder</td>
              <td className="px-6 py-4 text-blue-400 font-bold">512</td>
              <td className="px-6 py-4 text-yellow-500 font-bold">1850</td>
              <td className="px-6 py-4">24 Days 🔥</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}