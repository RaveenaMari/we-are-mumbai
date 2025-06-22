'use client';

import ActivityCard from "./ActivityCard";

const activities = [
  {
    title: "Ultimate Parties",
    imageUrl: "/images/PubCrawl.jpg",
    description: "Explore the city's best bars in one wild night.",
  },
  {
    title: "Workshops",
    imageUrl: "/images/Pottery.png",
    description: "Cruise along the Arabian Sea with music and drinks.",
  },
  {
    title: "Unique Experiences",
    imageUrl: "/images/beerbike.jpg",
    description: "Learn energetic moves from pro Bollywood choreographers.",
  },
  {
    title: "City Tours",
    imageUrl: "/images/trek.jpg",
    description: "Taste authentic Mumbai street food from local spots.",
  },
  {
    title: "Corporate Events",
    imageUrl: "/images/corporateevent.jpg",
    description: "Taste authentic Mumbai street food from local spots.",
  },
];

export default function Activities() {
  return (
    <section id="activities" className="py-16 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Popular Activities
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {activities.map((activity, idx) => (
          <ActivityCard key={idx} {...activity} />
        ))}
      </div>
    </section>
  );
}
