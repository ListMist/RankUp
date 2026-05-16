export default function Navbar() {
  return (
    <nav className="border-b border-zinc-800 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">
          RankUp
        </h1>

        <div className="flex items-center gap-6 text-zinc-300">
          <button>
            Login
          </button>

          <button className="bg-white text-black px-4 py-2 rounded-xl">
            Register
          </button>
        </div>
      </div>
    </nav>
  );
}