'use client';

import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact"; 

export default function DisclaimerPage() {
  return (
    <main className="bg-gray-900 text-gray-100 min-h-screen">
      <Navbar />

      {/* Disclaimer Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-10">
            Disclaimer
          </h2>

          <div className="bg-gray-800 p-8 rounded-lg shadow-md space-y-6 text-gray-300">
            <p>
              The information provided on <strong>Ultimate Mumbai</strong> is for general 
              informational purposes only. While we strive to keep all details accurate 
              and up to date, we make no warranties of any kind regarding the completeness, 
              accuracy, reliability, or availability of the events and services listed.
            </p>

            <p>
              Participation in events is at your own discretion and risk. 
              <strong> Ultimate Mumbai</strong> is not liable for any direct or indirect 
              loss, injury, or inconvenience arising from participation, including but not 
              limited to issues related to transport, alcohol consumption, or third-party 
              services.
            </p>

            <p>
              External links, such as those to partners or ticketing platforms (e.g., 
              BookMyShow), are provided for convenience only. We do not have control over 
              their content or policies, and their inclusion does not imply endorsement.
            </p>

            <p>
              By using our platform and attending our events, you acknowledge and agree 
              to this disclaimer and our terms of service.
            </p>
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
}
