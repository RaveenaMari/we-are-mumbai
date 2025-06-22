'use client';

type Props = {
  title: string;
  imageUrl: string;
  description: string;
};

export default function ActivityCard({ title, imageUrl, description }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition duration-300">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <button className="bg-rose-600 text-white px-4 py-2 rounded-md hover:bg-rose-700 text-sm">
          View More
        </button>
      </div>
    </div>
  );
}
