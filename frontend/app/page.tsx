export default function HomePage() {
  return (
    <main className = "min-h-screen bg-black text-white">
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="space-y-6">
          <h1 className="text-7x1 front-bold tracking-tight">
            RankUp 
          </h1>
          <p className="text-xl text-gray-400 text-xl max-w-2xl">
           [Real-Time Competitive Programming Analytics Platform]
          </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
              <h2 className="text-2xl font-semibold">
                Live Contest
                </h2>

                <p className="mt-4 text-zinc-400">
                   Track Codeforces, LeetCode, AtCoder and CodeChef contests.
                </p>
            </div>
            
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
              <h2 className ="text-2xl font-semibold">
                Smart Analytics
                </h2>
                <p className="mt-4 text-zinc-400">
                  Analyze your solving habits and rating growth.
                </p>
            </div>
            
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
              <h2 className="text-2xl font-semibold">
                Real-Time Update
                </h2>
                <p className="mt-4 text-zinc-400">
                  Get real-time updates on your performance and progress.
                </p>
            </div>
          </div>
      </section>
    </main>
  );
} 

