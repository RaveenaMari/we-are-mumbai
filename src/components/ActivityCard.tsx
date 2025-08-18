'use client';

type Props = {
  title: string;
  imageUrl: string;
  description: string;
};

export default function ActivityCard({ title, imageUrl, description }: Props) {
  return (
    <div className="relative bg-white/10 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 border border-purple-500/30">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-5 flex flex-col h-[calc(100%-12rem)]">
        <h3 className="text-xl font-bold mb-2 text-white drop-shadow-[0_0_10px_#ff00ff]">
          {title}
        </h3>
        <p className="text-gray-300 text-sm flex-grow">{description}</p>

        <div className="mt-4 flex flex-col gap-2">
          <button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 rounded-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition">
            🎟 Book Now
          </button>
          <button className="w-full border border-purple-400/50 text-purple-300 py-2 rounded-lg font-medium hover:bg-purple-500/20 transition">
            🔍 View More
          </button>
        </div>
      </div>
    </div>
  );
}
