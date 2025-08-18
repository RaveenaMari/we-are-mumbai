'use client';

export default function MarqueeBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-blue-700 to-purple-700 py-3 overflow-hidden relative">
      <div className="animate-marquee">
        {/* Track 1 */}
        <div className="flex whitespace-nowrap text-white font-semibold text-sm md:text-base">
          <span className="mx-8">🚀 Fast & Easy Booking</span>
          <span className="mx-8">🎉 Your Fun is Our #1 Priority</span>
          <span className="mx-8">⭐ 5-Star Google Reviews</span>
        </div>

        {/* Track 2 (duplicate) */}
        <div className="flex whitespace-nowrap text-white font-semibold text-sm md:text-base">
          <span className="mx-8">🚀 Fast & Easy Booking</span>
          <span className="mx-8">🎉 Your Fun is Our #1 Priority</span>
          <span className="mx-8">⭐ 5-Star Google Reviews</span>
        </div>
      </div>
    </div>
  );
}
