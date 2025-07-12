'use client';

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">About Us</h2>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          <strong>Born from a love for Mumbai&apos;s nightlife</strong>, Ultimate Mumbai is a passion project turned movement — dedicated to connecting people through unique, curated experiences across the city. Whether you're a local or just visiting, our goal is simple: help you feel the pulse of Mumbai like a true insider.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mb-10">
          From bustling bar crawls to peaceful sunset cruises, we believe in <strong>safe, fun, and social exploration</strong>. Every event is designed to bring strangers together, turn nights into memories, and show off the energy that defines Mumbai.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold text-purple-600 mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To create unforgettable experiences that make exploring Mumbai easy, exciting, and inclusive for all.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold text-purple-600 mb-2">Our Promise</h3>
            <p className="text-gray-600">
              Fun-first. Safety always. We prioritize comfort, community, and trusted hosts in every event.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold text-purple-600 mb-2">Our City</h3>
            <p className="text-gray-600">
              Mumbai is more than a destination — it&apos;s a feeling. And we&apos;re here to help you feel every beat of it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
