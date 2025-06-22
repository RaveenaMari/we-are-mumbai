'use client';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">Contact Us</h2>

        <div className="grid md:grid-cols-2 gap-10 mb-16">
          {/* Contact Info */}
          <div className="space-y-4 text-gray-700">
            <p><strong>Email:</strong> test@example.com</p>
            <p><strong>Phone:</strong> +91 1234567890</p>
            <p><strong>Location:</strong> Mumbai, Maharashtra, India</p>
          </div>

          {/* Contact Form */}
          <form className="bg-gray-100 p-6 rounded-lg shadow space-y-4">
            <div>
              <label className="block mb-1 text-sm font-medium">Name</label>
              <input type="text" className="w-full px-4 py-2 rounded border" />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">Email</label>
              <input type="email" className="w-full px-4 py-2 rounded border" />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">Message</label>
              <textarea className="w-full px-4 py-2 rounded border h-32 resize-none"></textarea>
            </div>
            <button type="submit" className="bg-rose-600 text-white px-6 py-2 rounded hover:bg-rose-700 transition">
              Send Message
            </button>
          </form>
        </div>

        {/* FAQs */}
        <div className="mt-10">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Frequently Asked Questions</h3>
          <div className="space-y-6 max-w-3xl mx-auto text-gray-700 text-base">
            <div>
              <h4 className="font-semibold">What do I bring?</h4>
              <p>Carry a valid ID, comfortable footwear, and your booking confirmation. We recommend a light bag and lots of good vibes!</p>
            </div>
            <div>
              <h4 className="font-semibold">What if I’m late?</h4>
              <p>We recommend arriving 10 minutes early. If you're late, contact the host. We may not be able to accommodate late arrivals once the activity starts.</p>
            </div>
            <div>
              <h4 className="font-semibold">Is there a dress code?</h4>
              <p>Dress casually and comfortably. Some events may specify a theme or requirement (e.g., beachwear for boat parties).</p>
            </div>
            <div>
              <h4 className="font-semibold">Are there safety rules?</h4>
              <p>Yes — we ensure host verification and group safety protocols. Follow instructions, drink responsibly, and respect other attendees.</p>
            </div>
            <div>
              <h4 className="font-semibold">What’s your cancellation/refund policy?</h4>
              <p>Free cancellation up to 24 hours before the event. No-shows or last-minute cancellations may not be refunded.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
