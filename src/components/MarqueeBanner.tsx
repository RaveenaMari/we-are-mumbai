'use client';

export default function MarqueeBanner() {
  return (
    <div className="w-full bg-rose-100 py-3 overflow-hidden">
      <div className="whitespace-nowrap animate-marquee text-center text-sm md:text-base text-rose-800 font-semibold">
        <span className="mx-8">🚀 Fast & Easy Booking</span>
        <span className="mx-8">🎉 Your Fun is Our #1 Priority</span>
        <span className="mx-8">⭐ 5-Star Google Reviews</span>
        <span className="mx-8">✅ Trusted by Thousands of Guests</span>
      </div>
    </div>
  );
}
