'use client';

import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { FaFacebookF, FaInstagram, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import Link from 'next/link';

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
      <section
        id="contact"
        className="py-20 px-6 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-gray-100 relative"
      >
        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-4xl font-extrabold text-white mb-12 text-center tracking-wide">
            Contact Us
          </h2>

          <div className="grid md:grid-cols-2 gap-10 mb-16">
            {/* Contact Info */}
            <div className="space-y-6 text-gray-300">
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-full bg-purple-600/20 text-purple-400">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-sm uppercase text-gray-400">Email</p>
                  <a href="mailto:test@example.com" className="hover:text-purple-300">
                    {process.env.NEXT_PUBLIC_EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-2 rounded-full bg-pink-600/20 text-pink-400">
                  <FaPhoneAlt />
                </div>
                <div>
                  <p className="text-sm uppercase text-gray-400">Phone</p>
                  <a href="tel:+911234567890" className="hover:text-pink-300">
                    {process.env.NEXT_PUBLIC_BOOKING_CONTACT_NO}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-2 rounded-full bg-green-600/20 text-green-400">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-sm uppercase text-gray-400">Address</p>
                  <p>Mumbai, Maharashtra</p>
                </div>
              </div>
            </div>

            {/* Social Media Buttons */}
            <div className="flex flex-col gap-4 mt-6 w-48">
              <a
                href={process.env.NEXT_PUBLIC_FACEBOOK_URL}
                className="flex items-center justify-center gap-2 border border-blue-500 text-blue-500 py-2 px-4 rounded-md hover:bg-blue-500 hover:text-black transition"
              >
                <FaFacebookF />
                FACEBOOK
              </a>

              <a
                href={process.env.NEXT_PUBLIC_BOOKMYSHOW_URL}
                className="flex items-center justify-center gap-2 border border-red-500 text-red-500 py-2 px-4 rounded-md hover:bg-red-500 hover:text-black transition"
              >
                BOOKMYSHOW
              </a>

              <a
                href={process.env.NEXT_PUBLIC_INSTAGRAM_URL}
                className="flex items-center justify-center gap-2 border border-purple-500 text-purple-500 py-2 px-4 rounded-md hover:bg-purple-500 hover:text-white transition"
              >
                <FaInstagram />
                INSTAGRAM
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800/80 border border-purple-500/30 p-6 rounded-xl shadow-lg hover:shadow-purple-500/40 transition">
            <form
              onSubmit={handleSubmit}
              action={process.env.NEXT_PUBLIC_FORMSPREE_FORM}
              method="POST"
              className="space-y-4"
            >
              <input type="hidden" name="form-source" value="Contact Form" />

              <InputField
                label="Name"
                name="name"
                type="text"
                placeholder="Your Name*"
                required
              />
              <InputField
                label="Email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
              />

              <div>
                <label className="block mb-1 text-sm font-medium">Message</label>
                <textarea
                  name="message"
                  required
                  placeholder="Type your message here..."
                  className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-black/40 text-gray-100 focus:border-purple-400 focus:ring focus:ring-purple-500/30 h-32 resize-none"
                />
              </div>

              <button
                type="submit"
                className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-500 transition shadow-lg hover:shadow-purple-500/50"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Quick Links Section */}
          <section className="my-16 px-4 md:px-12 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-10">
              Quick Links
            </h3>

            <div className="flex flex-wrap justify-center gap-6 text-lg">
              <Link href="/faqs" className="text-purple-400 hover:text-purple-300">
                FAQs
              </Link>
              <Link href="/terms" className="text-purple-400 hover:text-purple-300">
                Terms & Conditions
              </Link>
              <Link href="/disclaimer" className="text-purple-400 hover:text-purple-300">
                Disclaimer
              </Link>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

/* Input Field Component */
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
      className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-black/40 text-gray-100 focus:border-purple-400 focus:ring focus:ring-purple-500/30"
    />
  </div>
);
