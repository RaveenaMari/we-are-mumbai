'use client';

import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export default function Contact() {
  const [submitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: { Accept: 'application/json' },
    });

    if (response.ok) {
      toast.success('🎉 Thank you! Your message has been sent.');
      form.reset();
    } else {
      toast.error('❌ Something went wrong. Please try again later.');
    }
  };

  return (
    <>
      <Toaster position="top-right" />

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">Contact Us</h2>

          <div className="grid md:grid-cols-2 gap-10 mb-16">
            {/* Contact Info */}
            <div className="space-y-4 text-gray-700">
              <p><strong>Email:</strong> test@example.com</p>
              <p><strong>Phone:</strong> +91 1234567890</p>
              <p><strong>Location:</strong> Mumbai, Maharashtra, India</p>

              {/* Social Icons */}
              <div className="flex items-center gap-4 mt-4">
              <a href={process.env.FacebookPage} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg width="28" height="28" fill="currentColor" className="text-blue-600 hover:text-blue-800 transition" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.406.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
              </a>
              <a href="https://www.instagram.com/ultimatemumbai" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="28" height="28" fill="currentColor" className="text-pink-500 hover:text-pink-700 transition" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.13 4.602.402 3.635 1.37 2.668 2.337 2.396 3.51 2.338 4.788 2.279 6.068 2.266 6.477 2.266 12c0 5.523.013 5.932.072 7.212.058 1.278.33 2.451 1.297 3.418.967.967 2.14 1.239 3.418 1.297 1.28.059 1.689.072 7.212.072s5.932-.013 7.212-.072c1.278-.058 2.451-.33 3.418-1.297.967-.967 1.239-2.14 1.297-3.418.059-1.28.072-1.689.072-7.212s-.013-5.932-.072-7.212c-.058-1.278-.33-2.451-1.297-3.418C21.451.402 20.278.13 19 .072 17.721.013 17.312 0 14.053 0h-4.106zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg>
              </a>
              <a href={process.env.LinkedInPage} target="_blank" rel="noopener noreferrer" aria-label="Whatsapp">
                <svg width="28" height="28" fill="currentColor" className="text-blue-700 hover:text-blue-900 transition" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.845-1.563 3.042 0 3.604 2.003 3.604 4.605v5.591z"/></svg>
              </a>
            </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-100 p-6 rounded-lg shadow space-y-4">
              <form
                onSubmit={handleSubmit}
                action={process.env.NEXT_PUBLIC_FORMSPREE_FORM}
                method="POST"
                className="space-y-4"
              >
                <input type="hidden" name="form-source" value="Contact Form" />

                <InputField label="Name" name="name" type="text" placeholder="Your Name*" required />
                <InputField label="Email" name="email" type="email" placeholder="you@example.com" required />

                <div>
                  <label className="block mb-1 text-sm font-medium">Message</label>
                  <textarea
                    name="message"
                    required
                    placeholder="Type your message here..."
                    className="w-full px-4 py-2 rounded border h-32 resize-none"
                  />
                </div>

                <button type="submit" className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* FAQ Section */}
          <section className="my-16 px-4 md:px-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 text-center">
              Frequently Asked Questions
            </h3>

            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-gray-100 rounded-lg shadow-sm">
                  <AccordionItem question={faq.q} answer={faq.a} />
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

const InputField = ({
  label,
  name,
  type,
  placeholder,
  required = false,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  required?: boolean;
}) => (
  <div>
    <label className="block mb-1 text-sm font-medium">{label}</label>
    <input
      name={name}
      required={required}
      type={type}
      placeholder={placeholder}
      className="w-full px-4 py-2 rounded border"
    />
  </div>
);

const SocialIcon = ({
  href,
  label,
  color,
  icon,
}: {
  href: string;
  label: string;
  color: string;
  icon: string;
}) => (
  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
    <svg width="28" height="28" fill="currentColor" className={`${color} hover:opacity-80 transition`} viewBox="0 0 24 24">
      <path d={icon} />
    </svg>
  </a>
);

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

// AccordionItem Component
function AccordionItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-t border-gray-300">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full text-left py-4 px-4 flex justify-between items-center focus:outline-none transition-colors duration-200"
      >
        <span className="text-base md:text-lg font-medium text-gray-900">{question}</span>
        <span className="text-gray-500 text-2xl leading-none select-none">{open ? '−' : '+'}</span>
      </button>

      <div className={`overflow-hidden transition-all duration-300 ease-in-out px-4 pb-4 text-sm text-gray-700 ${open ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
        {answer}
      </div>
    </div>
  );
}
