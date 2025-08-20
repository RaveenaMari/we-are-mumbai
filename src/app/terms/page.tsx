'use client';

import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact"; 

export default function TermsPage() {
  return (
    <main className="bg-gray-900 text-gray-100 min-h-screen">
      <Navbar />

      {/* Terms & Conditions Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-10">
            Terms & Conditions
          </h2>

          <div className="bg-gray-800 p-8 rounded-lg shadow-md space-y-6 text-gray-300">
            <p>
              Welcome to <strong>Ultimate Mumbai</strong>. By accessing or using our website, 
              booking events, or participating in activities, you agree to comply with the 
              following Terms & Conditions. Please read them carefully.
            </p>

            <h3 className="text-xl font-semibold text-purple-400">1. Eligibility</h3>
            <p>
              You must be at least 18 years old to participate in our events. 
              By booking, you confirm that you meet this requirement.
            </p>

            <h3 className="text-xl font-semibold text-purple-400">2. Bookings & Payments</h3>
            <p>
              All bookings are subject to availability. Payments made via our platform 
              (or partners like BookMyShow) are final unless otherwise stated in our 
              cancellation/refund policy.
            </p>

            <h3 className="text-xl font-semibold text-purple-400">3. Conduct</h3>
            <p>
              Participants are expected to behave responsibly. We reserve the right to 
              deny participation to anyone engaging in disruptive, unsafe, or inappropriate 
              behavior without refund.
            </p>

            <h3 className="text-xl font-semibold text-purple-400">4. Safety & Liability</h3>
            <p>
              We prioritize safety, but participation is at your own risk. 
              <strong>Ultimate Mumbai</strong> is not liable for accidents, injuries, 
              or losses during events, including third-party services.
            </p>

            <h3 className="text-xl font-semibold text-purple-400">5. Changes & Cancellations</h3>
            <p>
              We reserve the right to reschedule, modify, or cancel events due to 
              unforeseen circumstances. In such cases, refunds or alternatives will 
              be offered at our discretion.
            </p>

            <h3 className="text-xl font-semibold text-purple-400">6. Governing Law</h3>
            <p>
              These Terms & Conditions are governed by the laws of India. 
              Any disputes will be subject to the jurisdiction of Mumbai courts.
            </p>
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
}
