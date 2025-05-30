import React from "react";
import {
  Puzzle,
  Award,
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
            <Puzzle className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">
              End-to-End Solutions for Success 
            </h3>
            <p className="text-gray-600">
              From test assessment to compliance and data management, we offer end-to-end quality engineering solutions that align with your business goals. We focus on delivering measurable value, reducing costs, and optimizing processes, all while maintaining the highest standards of quality, compliance, and security.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 p-6 bg-white rounded-lg shadow-sm">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
            <Award className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">
              Proven Expertise Across Industries
            </h3>
            <p className="text-gray-600">
              At Intelegencia, we bring years of industry experience to deliver tailored quality engineering and assurance services that drive impactful results. Our team’s deep expertise and use of advanced testing tools ensure seamless integration, faster time-to-market, and enhanced business performance for every client.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;