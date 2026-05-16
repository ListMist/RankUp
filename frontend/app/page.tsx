import Navbar from '@/components/layout/navbar';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="space-y-8">
          <h1 className="text-7xl font-bold tracking-tight leading-tight">
            Competitive Programming
            Analytics Platform
          </h1>

          <p className="text-zinc-400 text-xl max-w-2xl">
            Track contests, monitor progress,
            analyze ratings and improve your
            competitive programming journey.
          </p>

          <div className="flex gap-4">
            <button className="bg-white text-black px-6 py-3 rounded-2xl font-semibold">
              Get Started
            </button>

            <button className="border border-zinc-700 px-6 py-3 rounded-2xl">
              Explore
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}