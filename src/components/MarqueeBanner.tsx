'use client';

export default function MarqueeBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-blue-700 to-purple-700 py-3 overflow-hidden relative">
      <div className="inline-block whitespace-nowrap animate-marquee text-white font-semibold text-sm md:text-base">
        <span className="mx-8">🚀 Fast & Easy Booking</span>
        <span className="mx-8">🎉 Your Fun is Our #1 Priority</span>
        <span className="mx-8">⭐ 5-Star Google Reviews</span>
        <span className="mx-8">✅ Trusted by Thousands of Guests</span>
        <span className="mx-8">🚀 Fast & Easy Booking</span>
        <span className="mx-8">🎉 Your Fun is Our #1 Priority</span>
      </div>
    </div>
  );
}
