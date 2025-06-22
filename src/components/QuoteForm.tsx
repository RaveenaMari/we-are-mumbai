'use client';

export default function QuoteForm() {
  return (
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
        <form className="md:w-1/2 bg-white p-8 rounded-xl shadow space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input required type="text" placeholder="First Name*" className="input" />
            <input type="text" placeholder="Last Name" className="input" />
            <input required type="email" placeholder="Email*" className="input" />
            <input type="text" placeholder="Phone Number (+91)" className="input" />
            <input type="date" placeholder="Date of Activity" className="input" />
            <input required type="number" placeholder="Number of Participants*" className="input" />
          </div>

          <select required className="input w-full">
            <option value="">Activities of interest*</option>
            <option>Pub Crawl</option>
            <option>City Tours</option>
            <option>Pottery Workshop</option>
            <option>Corporate Events</option>
            <option>Custom Experience</option>
          </select>

          <textarea
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
      </div>
    </section>
  );
}
