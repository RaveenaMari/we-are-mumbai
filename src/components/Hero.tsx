'use client';

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Animated Disco Lights */}
      <div className="absolute inset-0">
        <div className="w-[200%] h-[200%] animate-spotlight bg-[radial-gradient(circle_at_center,rgba(255,0,150,0.4),transparent_60%)]"></div>
        <div className="absolute inset-0 w-[200%] h-[200%] animate-spotlight-delay bg-[radial-gradient(circle_at_top_left,rgba(0,200,255,0.3),transparent_70%)]"></div>
      </div>

      {/* ✅ Logo top-left */}
      <div className="absolute top-6 left-6 z-20">
        <Image
          src="/images/logo2.jpeg"
          alt="Ultimate Mumbai Logo"
          width={100} // adjust size as needed
          height={100}
          className="rounded-full shadow-lg"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h2
          className="text-5xl md:text-6xl font-extrabold mb-4 text-white"
          style={{ textShadow: "0 0 15px #ff00ff, 0 0 30px #8000ff" }}
        >
          Ultimate Mumbai
        </h2>

        <p className="mb-6 text-lg md:text-xl text-gray-200">
          Nightlife 🌃 · Pub Crawls 🍻 · Ultimate Experiences 🎶
        </p>

        {/* Funky Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <a href="#activities">
            <button className="px-8 py-3 rounded-full font-bold text-white bg-gradient-to-r from-pink-500 to-purple-600 shadow-lg hover:scale-110 hover:shadow-2xl transition transform">
              🚀 Explore Activities
            </button>
          </a>

          <a href="#contact">
            <button className="px-8 py-3 rounded-full font-bold text-white bg-gradient-to-r from-blue-500 to-cyan-600 shadow-lg hover:scale-110 hover:shadow-2xl transition transform">
              ✨ Contact Us
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
