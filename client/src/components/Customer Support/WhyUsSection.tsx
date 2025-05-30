import React from "react";
import { Globe, ShieldCheck } from "lucide-react";

const WhyUsSection: React.FC = () => {
  return (
    <section className="py-12 mb-12 -mx-4 px-4 rounded-xl">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-6">Why Intelegencia?</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <div className="flex flex-col gap-4 p-6 bg-white rounded-lg shadow-sm">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
            <Globe className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">
              Omnichannel, Global Coverage
            </h3>
            <p className="text-gray-600">
              Support across time zones, platforms, and languages—built to scale with your business and consistently exceed customer expectations.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 p-6 bg-white rounded-lg shadow-sm">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
            <ShieldCheck className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">
              PCI-DSS Certified Security
            </h3>
            <p className="text-gray-600">
              Ensure compliance and safeguard customer data with secure infrastructure for payment verification, dispute resolution, and sensitive handling.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;