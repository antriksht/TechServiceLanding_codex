import React from "react";
import { scrollToSection } from "@/lib/utils";

const TrustedBySection: React.FC = () => {
  return (
    <section id="trusted-by" className="py-10 mb-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-6">
            Trusted By The World's Most Innovative Businesses – Big & Small
          </h2>
        </div>
        {/* Mobile: Centered CTA-style button */}
                <div className="flex lg:hidden justify-center mb-4">
                  <button
                    onClick={() => scrollToSection("contact-form")}
                    className="bg-primary text-white font-semibold text-lg px-6 py-2 rounded-full hover:bg-primary/90 transition"
                  >
                    Let&apos;s Collaborate
                  </button>
                </div>

        <div className="overflow-hidden rounded-lg shadow-sm">
          <img
            src="https://d9hhrg4mnvzow.cloudfront.net/cta.intelegencia.com/dm_customer_care/d29a6750-banner-logos_11g40cq000000000000028.png"
            alt="Trusted companies logos"
            className="w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;