'use client';

type Props = {
  title: string;
  imageUrl: string;
  description: string;
  comingSoon?: boolean; // 👈 new optional prop
};

export default function ActivityCard({ title, imageUrl, description, comingSoon }: Props) {
  return (
    <div
      className={`relative bg-white/10 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden 
      ${comingSoon ? 'opacity-80 cursor-not-allowed' : 'hover:scale-105 transition-transform duration-300'}
      border border-purple-500/30`}
    >
      {/* Image */}
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />

      {/* Coming Soon Ribbon */}
      {comingSoon && (
        <div className="absolute top-4 right-[-40px] rotate-45 bg-red-600 text-white text-xs font-bold px-16 py-2 shadow-lg">
          Coming Soon
        </div>
      )}

      {/* Content */}
      <div className="p-5 flex flex-col h-[calc(100%-12rem)]">
        <h3 className="text-xl font-bold mb-2 text-white drop-shadow-[0_0_10px_#ff00ff]">
          {title}
        </h3>
        <p className="text-gray-300 text-sm flex-grow">{description}</p>

        {/* Buttons */}
        <div className="mt-4 flex flex-col gap-2">
          <button
            disabled={comingSoon}
            className={`w-full py-2 rounded-lg font-semibold shadow-lg transition
              ${comingSoon
                ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:shadow-xl hover:scale-105'}
            `}
          >
            🎟 {comingSoon ? 'Not Available' : 'Book Now'}
          </button>

          <button
            disabled={comingSoon}
            className={`w-full border py-2 rounded-lg font-medium transition
              ${comingSoon
                ? 'border-gray-600 text-gray-500 cursor-not-allowed'
                : 'border-purple-400/50 text-purple-300 hover:bg-purple-500/20'}
            `}
          >
            🔍 {comingSoon ? 'Coming Soon' : 'View More'}
          </button>
        </div>
      </div>
    </div>
  );
}
