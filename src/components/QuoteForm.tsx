'use client';

import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import toast, { Toaster } from 'react-hot-toast';


export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const data = new FormData(form);
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: {
        Accept: 'application/json',
      },
    });

    if (response.ok) {
      // setSubmitted(true);
      toast.success("🎉 Thank you! Your message has been sent.");
      form.reset();
    } else {
      toast.error("❌ Something went wrong. Please try again later.");
      // alert('Something went wrong. Please try again later.');
    }
  };

  return (
  <>
    <Toaster position="top-right" />
    <section id="quote" className="py-16 px-6 bg-rose-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left: Description */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-rose-600 mb-4">Get A Quick Quote</h2>
          <p className="text-gray-700">
            Our Fun Agents are always ready to help you book the best activities in town.
          </p>
        </div>

        {/* Right: Form */}
        <div className="md:w-1/2 bg-white p-8 rounded-xl shadow space-y-4">
          {submitted ? (
            <div className="text-green-600 font-medium text-center">
              🎉 Thank you! We’ve received your quote request.
            </div>
          ) : (
        <form 
          action="https://formspree.io/f/xvgrwono"
          method="POST" 
          className="space-y-4">
            {/* Hidden tag for tracking */}
            <input type="hidden" name="form-source" value="Quote Form" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input name="firstName" required type="text" placeholder="First Name*" className="input" />
              <input name="lastName" type="text" placeholder="Last Name" className="input" />
              <input name="email" required type="email" placeholder="Email*" className="input" />
              <input name="phone" type="text" placeholder="Phone Number (+91)" className="input" />
              <input name="date" type="date" placeholder="Date of Activity" className="input" />
              <input name="participants" required type="number" placeholder="Number of Participants*" className="input" />
            </div>

            <select name="activity" required className="input w-full">
              <option value="">Activities of interest*</option>
              <option>Pub Crawl</option>
              <option>City Tours</option>
              <option>Pottery Workshop</option>
              <option>Corporate Events</option>
              <option>Custom Experience</option>
            </select>

            <textarea
              name="details"
              rows={4}
              className="input w-full"
              placeholder="Which activities are you interested in? (Optional)"
            ></textarea>

            <button
              type="submit"
              className="bg-rose-600 hover:bg-rose-700 text-white font-semibold px-6 py-3 rounded-xl transition"
            >
              Submit Quote Request
            </button>
        </form>
      )}
        </div>
      </div>
  </section>
  </>
  );
}
