import React from "react";
import { scrollToSection } from "@/lib/utils";

const CTASection: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-12 -mx-4 px-4 bg-gradient-to-r from-primary to-accent rounded-xl"
    >
      <img
        src="./logo_white_full.png"
        alt="Intelegencia Logo"
        className="h-20 w-auto mx-auto mb-4"
      />
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          Ready to Transform Your Business?
        </h2>

        {/* ✅ Mobile-only CTA with updated styles */}
        <div className="flex lg:hidden justify-center mb-6">
          <button
            onClick={() => scrollToSection("contact-form")}
            className="bg-white text-primary font-semibold text-base px-6 py-2 rounded-full hover:bg-white/90 transition"
          >
            Let&apos;s Collaborate
          </button>
        </div>

        <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
          Let's discuss how our services can help you accelerate growth, improve efficiency, and achieve your business goals.
        </p>
      </div>
      <div className="text-center mt-8 text-white text-sm opacity-100">
        © {new Date().getFullYear()} Intelegencia. All rights reserved.
      </div>
    </section>
  );
};

export default CTASection;