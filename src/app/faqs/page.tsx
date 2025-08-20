'use client';

import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact"; 

export default function FAQsPage() {
  const faqs = [
    {
      q: 'What do I bring?',
      a: 'Carry a valid ID, comfortable footwear, and your booking confirmation. We recommend a light bag and lots of good vibes!',
    },
    {
      q: "What if I'm late?",
      a: "We recommend arriving 10 minutes early. If you're late, contact the host. We may not be able to accommodate late arrivals once the activity starts.",
    },
    {
      q: 'Is there a dress code?',
      a: 'Dress casually and comfortably. Some events may specify a theme or requirement (e.g., beachwear for boat parties).',
    },
    {
      q: 'Are there safety rules?',
      a: 'Yes — we ensure host verification and group safety protocols. Follow instructions, drink responsibly, and respect other attendees.',
    },
    {
      q: "What's your cancellation/refund policy?",
      a: 'Free cancellation up to 24 hours before the event. No-shows or last-minute cancellations may not be refunded.',
    },
  ];

  return (
    <main className="bg-gray-900 text-gray-100 min-h-screen">
      <Navbar />

      {/* FAQ Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-purple-400 mb-2">
                  {faq.q}
                </h3>
                <p className="text-gray-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
}
