import React from "react";
import {
  PiggyBank,
  BadgeCheck,
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
            <PiggyBank className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">
              Cost-Effective Expertise 
            </h3>
            <p className="text-gray-600">
              Get enterprise-grade data science services without in-house overhead. Our ISO-certified team delivers data analytics outsourcing with cost savings.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 p-6 bg-white rounded-lg shadow-sm">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
            <BadgeCheck className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">
              Trusted by Global Brands
            </h3>
            <p className="text-gray-600">
              200+ clients rely on our big data consulting and Power BI reporting services to drive revenue growth and operational efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;