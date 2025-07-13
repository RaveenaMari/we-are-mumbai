'use client';

import { useState } from 'react';
import 'react-phone-input-2/lib/style.css';
import toast, { Toaster } from 'react-hot-toast';  


export default function QuoteForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [participants, setParticipants] = useState('');
  const [activity, setActivity] = useState('');
  const [details, setDetails] = useState('');
  const [submitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = {
    firstName,
    lastName,
    email,
    phone,
    date,
    participants,
    activity,
    details,
    formSource: 'quote-form',
  };

    // const form = e.currentTarget;
    // const formData = new FormData(form);
    // const data = Object.fromEntries(formData.entries());

    console.log('Sending data:', formData);

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

    console.log('Response status:', response.status);
    if (response.ok) {
      toast.success("🎉 Thanks! We’ve received your request.");
      console.log('Server response:', response);
    } else {
      toast.error("❌ Something went wrong. Please try again later.");
      // alert('Something went wrong. Please try again later.');
    }
  } catch (error) {
    toast.error("❌ Failed to submit. Try again later.");
    console.error('Quote form error:', error);
    }
  };

  return (
  <>
    <Toaster position="top-right" />
    <section id="quote" className="py-16 px-6 bg-purple-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left: Description */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-600 mb-4">Get A Quick Quote</h2>
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
          onSubmit={handleSubmit}
          action="/api/quote"
          method="POST" 
          className="space-y-4">
            {/* Hidden tag for tracking */}
            <input type="hidden" name="form-source" value="Quote Form" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input name="firstName" required type="text" placeholder="First Name*" className="input" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
              <input name="lastName" type="text" placeholder="Last Name" className="input" onChange={(e) => setLastName(e.target.value)} value={lastName} />
              <input name="email" required type="email" placeholder="Email*" className="input" onChange={(e) => setEmail(e.target.value)} value={email} />
              <input name="phone" type="text" placeholder="Phone Number (+91)" className="input" onChange={(e) => setPhone(e.target.value)} value={phone} />
              <input name="date" type="date" placeholder="Date of Activity" className="input" onChange={(e) => setDate(e.target.value)} value={date} />
              <input name="participants" required type="number" placeholder="Number of Participants*" className="input" onChange={(e) => setParticipants(e.target.value)} value={participants} />
            </div>

            <select name="activity" required className="input w-full" onChange={(e) => setActivity(e.target.value)} value={activity}>
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
              onChange={(e) => setDetails(e.target.value)}
              value={details}
            ></textarea>

            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-xl transition"
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
