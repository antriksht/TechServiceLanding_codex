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
              Full-Funnel Growth Strategy
            </h3>
            <p className="text-gray-600">
              From brand awareness to lead generation and conversion optimization, 
              we craft integrated digital marketing strategies that drive measurable 
              business outcomes across every stage of your customer journey.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 p-6 bg-white rounded-lg shadow-sm">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
            <Megaphone className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">
              Performance-Driven Execution
            </h3>
            <p className="text-gray-600">
              Our marketing decisions are rooted in data. With real-time performance tracking 
              and iterative testing, we ensure your ad spend translates into ROI and sustained 
              digital visibility across platforms like Google, Meta, and LinkedIn.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;