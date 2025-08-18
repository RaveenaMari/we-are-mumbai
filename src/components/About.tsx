'use client';

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-gray-100 relative"
    >
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2 className="text-4xl font-extrabold text-white mb-6 tracking-wide">
          About Us
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          <strong className="text-purple-400">Born from a love for Mumbai&apos;s nightlife</strong>, 
          Ultimate Mumbai is a passion project turned movement — dedicated to connecting people 
          through unique, curated experiences across the city. Whether you&apos;re a local or just visiting, 
          our goal is simple: help you feel the pulse of Mumbai like a true insider.
        </p>

        <p className="text-gray-300 text-lg leading-relaxed mb-10">
          From bustling bar crawls to peaceful sunset cruises, we believe in{" "}
          <strong className="text-pink-400">safe, fun, and social exploration</strong>. 
          Every event is designed to bring strangers together, turn nights into memories, 
          and show off the energy that defines Mumbai.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-gray-800/80 border border-purple-500/30 rounded-xl p-6 shadow-lg hover:shadow-purple-500/50 transition">
            <h3 className="text-xl font-semibold text-purple-400 mb-2">Our Mission</h3>
            <p className="text-gray-300">
              To create unforgettable experiences that make exploring Mumbai easy, 
              exciting, and inclusive for all.
            </p>
          </div>

          <div className="bg-gray-800/80 border border-pink-500/30 rounded-xl p-6 shadow-lg hover:shadow-pink-500/50 transition">
            <h3 className="text-xl font-semibold text-pink-400 mb-2">Our Promise</h3>
            <p className="text-gray-300">
              Fun-first. Safety always. We prioritize comfort, community, 
              and trusted hosts in every event.
            </p>
          </div>

          <div className="bg-gray-800/80 border border-blue-500/30 rounded-xl p-6 shadow-lg hover:shadow-blue-500/50 transition">
            <h3 className="text-xl font-semibold text-blue-400 mb-2">Our City</h3>
            <p className="text-gray-300">
              Mumbai is more than a destination — it&apos;s a feeling. 
              And we&apos;re here to help you feel every beat of it.
            </p>
          </div>
        </div>
      </div>

      {/* Optional funky glowing effect in background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(128,0,128,0.2),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(0,191,255,0.2),transparent_60%)]" />
    </section>
  );
}
