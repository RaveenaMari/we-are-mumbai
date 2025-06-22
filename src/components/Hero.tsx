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

import { useState } from 'react';

export default function Hero() {
  const [showModal, setShowModal] = useState(false);

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
          <a href="#activities">
            <button className="w-42 h-15 bg-white text-rose-600 font-semibold rounded-sm shadow hover:bg-gray-100 transition">
              Explore Activities
            </button>
          </a>
          <a href="#quote">
            <button className="w-42 h-15 bg-white text-rose-600 font-semibold rounded-sm shadow hover:bg-gray-100 transitio">Get A Quote</button>
          </a>

          <button 
            onClick={() => setShowModal(true)}
            className="w-42 h-15 bg-white text-rose-600 font-semibold rounded-sm shadow hover:bg-gray-100 transition">
            Book Now
          </button>
        </div>

        {showModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white text-black p-6 rounded-lg shadow-lg max-w-md w-full relative">
              <button
                className="absolute top-2 right-2 text-xl text-gray-600 hover:text-gray-800"
                onClick={() => setShowModal(false)}
              >
                ×
              </button>
              <h2 className="text-xl font-semibold mb-2">Bookings on Call</h2>
              <p className="mb-4">Bookings are currently done via phone call.</p>
              <p className="mb-2 font-semibold">📞 <a href="tel:+91XXXXXXXXXX" className="text-rose-600 hover:underline">+91-9920585223</a></p>
              <p className="text-sm text-gray-500">Available from 10 AM – 8 PM</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}




