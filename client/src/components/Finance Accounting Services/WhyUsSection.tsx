import React from "react";
import {
  Briefcase,
  ShieldCheck,
} from "lucide-react";
const WhyUsSection: React.FC = () => {
  return (
    <section className="py-12 mb-12 -mx-4 px-4 rounded-xl">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-6">Why Intelegencia?</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <div className="flex flex-col gap-4 p-6 bg-white rounded-lg shadow-sm">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
            <Briefcase className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">
              Expertise at Your Fingertips 
            </h3>
            <p className="text-gray-600">
              Our seasoned professionals bring decades of experience in financial services, ensuring seamless operations and in-depth insights into your financial health.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 p-6 bg-white rounded-lg shadow-sm">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
            <ShieldCheck className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">
              Scalable, Secure, and Compliant
            </h3>
            <p className="text-gray-600">
              As an ISO 9001 and ISO 27001 certified provider, we offer outsourced accounting companies with robust security and regulatory adherence. From ecommerce bookkeeping to real estate accounting services, we support diverse industries with tailored expertise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;