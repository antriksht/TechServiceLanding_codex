import React from "react";
import { BarChart3, Megaphone } from "lucide-react";

const WhyUsSection: React.FC = () => {
  return (
    <section className="py-12 mb-12 -mx-4 px-4 rounded-xl">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-6">Why Intelegencia?</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <div className="flex flex-col gap-4 p-6 bg-white rounded-lg shadow-sm">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
            <BarChart3 className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">
              Scalable and Cost-Effective Solutions 
            </h3>
            <p className="text-gray-600">
              Intelegencia offers scalable HR outsourcing solutions that grow with your business. Our cost-effective services allow organizations to access high-quality HR management without the overhead of in-house teams, ensuring you can allocate resources effectively to drive business success.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 p-6 bg-white rounded-lg shadow-sm">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
            <Megaphone className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">
              Expert HR Professionals
            </h3>
            <p className="text-gray-600">
              Intelegencia’s team of HR experts works closely with you to provide tailored solutions that meet your unique organizational needs. We combine industry knowledge with advanced technology to enhance the efficiency of HR processes, reducing administrative costs while improving employee experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;