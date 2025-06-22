// 'use client';

// export default function Hero() {
//   return (
//     // <section className="bg-[url('/images/mumbaiBg.jpg')] bg-cover bg-center h-[90vh] flex items-center justify-center">
//     <section className="bg-gradient-to-br from-indigo-800 to-purple-700 h-[90vh] flex items-center justify-center">
//       <div className="text-center bg-black/50 p-8 rounded-xl text-white max-w-2xl">
//         <h2 className="text-4xl font-bold mb-4">Discover Mumbai Like Never Before</h2>
//         <p className="mb-6">Fun events, curated experiences, unforgettable nights.</p>
//         <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-xl font-semibold">
//           Explore Activities
//         </button>
//       </div>
//     </section>
//   );
// }


'use client';

export default function Hero() {
  return (
    <section
      className="relative h-[90vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/img2.jpg')" }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-800 to-purple-700 opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6">
        <h2 className="text-4xl font-bold mb-4">Discover Mumbai Like Never Before</h2>
        <p className="mb-6">Fun events, curated experiences, unforgettable nights.</p>

        {/* Square Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <button className="w-42 h-15 bg-white text-rose-600 font-semibold rounded-sm shadow hover:bg-gray-100 transition">
            Explore Activities
          </button>
          <button className="w-42 h-15 bg-white text-rose-600 font-semibold rounded-sm shadow hover:bg-gray-100 transition">
            Get A Quote
          </button>
          <button className="w-42 h-15 bg-white text-rose-600 font-semibold rounded-sm shadow hover:bg-gray-100 transition">
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
}



