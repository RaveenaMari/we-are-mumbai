'use client';

import ActivityCard from "./ActivityCard";

const activities = [
  {
    title: "Ultimate Parties",
    imageUrl: "/images/PubCrawl.jpg",
    description: "Dance the night away at Mumbai's hottest parties.",
  },
  {
    title: "Ultimate Pub Crawls",
    imageUrl: "/images/PubCrawl.jpg",
    description: "Hop through the best bars in one unforgettable night.",
  },
  {
    title: "Unique Experiences",
    imageUrl: "/images/beerbike.jpg",
    description: "Bollywood moves, beer bikes & more crazy memories.",
  },
];

export default function Activities() {
  return (
    <section
      id="activities"
      className="py-20 px-6 bg-gradient-to-b from-black via-[#0a0015] to-black text-white"
    >
      <h2 className="text-4xl font-extrabold text-center mb-14 drop-shadow-[0_0_15px_#ff00ff]">
        Popular Activities
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {activities.map((activity, idx) => (
          <ActivityCard key={idx} {...activity} />
        ))}
      </div>
    </section>
  );
}
