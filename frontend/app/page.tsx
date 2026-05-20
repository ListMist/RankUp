import Link from "next/link";

const contests = [
  "LeetCode Weekly Contest",
  "Codeforces Round",
  "CodeChef Starters",
  "AtCoder Beginner Contest",
];

const news = [
  "AI changing competitive programming",
  "Top programmers share interview tips",
  "Codeforces introduces new rounds",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white selection:bg-blue-500/30">
      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-6 md:px-12 py-6 border-b border-slate-900 bg-slate-950/80 backdrop-blur sticky top-0 z-50">
        <h1 className="text-2xl font-black tracking-tight text-white">
          Rank<span className="text-blue-500">Up</span>
        </h1>

        <div className="flex gap-4 items-center">
          <Link 
            href="/login" 
            className="text-slate-400 hover:text-white font-medium text-sm transition"
          >
            Sign In
          </Link>
          <Link 
            href="/register" 
            className="bg-blue-600 hover:bg-blue-700 text-sm font-semibold px-5 py-2.5 rounded-xl transition shadow-lg shadow-blue-600/20"
          >
            Create Account
          </Link>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center px-6 text-center py-28 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white mb-6 leading-tight">
          Level Up With <span className="bg-linear-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">RankUp</span>
        </h1>
        <p className="text-slate-400 max-w-xl text-lg md:text-xl mb-10 font-normal leading-relaxed">
          The ultimate dashboard helper for competitive programming teams, coaches, and statistics tracking. Stay sharp, track progress, and win the next round.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link 
            href="/register" 
            className="bg-blue-600 hover:bg-blue-700 text-center font-bold px-8 py-4 rounded-xl transition shadow-lg shadow-blue-600/20"
          >
            Get Started For Free
          </Link>
          <Link 
            href="#dashboard" 
            className="bg-slate-900 border border-slate-800 hover:bg-slate-800 text-center font-bold px-8 py-4 rounded-xl transition"
          >
            Explore Live Data
          </Link>
        </div>
      </section>

      {/* LIVE DATA GRID */}
      <section id="dashboard" className="grid lg:grid-cols-2 gap-8 px-6 md:px-12 pb-24 max-w-7xl mx-auto scroll-mt-28">
        {/* CONTESTS */}
        <div className="bg-slate-900 border border-slate-800 p-6 md:p-8 rounded-3xl shadow-xl">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Upcoming Contests
            </h2>
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
          </div>

          <div className="space-y-3">
            {contests.map((contest) => (
              <div
                key={contest}
                className="bg-slate-950 border border-slate-900 hover:border-slate-800 hover:bg-slate-900/50 transition duration-200 p-4 rounded-xl flex items-center justify-between cursor-pointer group"
              >
                <span className="text-slate-300 group-hover:text-blue-400 font-medium transition">
                  {contest}
                </span>
                <span className="text-xs text-slate-500 font-mono bg-slate-900 px-2.5 py-1 rounded-md group-hover:bg-slate-950">
                  Register ↗
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* NEWS */}
        <div className="bg-slate-900 border border-slate-800 p-6 md:p-8 rounded-3xl shadow-xl">
          <h2 className="text-2xl font-bold text-white tracking-tight mb-6">
            Programming News
          </h2>

          <div className="space-y-3">
            {news.map((item) => (
              <div
                key={item}
                className="bg-slate-950 border border-slate-900 hover:border-slate-800 hover:bg-slate-900/50 transition duration-200 p-4 rounded-xl cursor-pointer group"
              >
                <p className="text-slate-300 group-hover:text-slate-200 transition line-clamp-2">
                  {item}
                </p>
                <div className="mt-2 text-xs text-blue-500/80 font-medium">
                  Read article →
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}