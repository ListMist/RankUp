"use client";

export default function ProgrammerPanel() {
  return (
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
  );
}