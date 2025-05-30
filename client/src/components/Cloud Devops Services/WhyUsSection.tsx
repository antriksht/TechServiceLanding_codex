import React from "react";
import {
  Settings,
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
            <Settings className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">
              Cost-Effective and Customizable Approach 
            </h3>
            <p className="text-gray-600">
              We craft personalized cloud and DevOps strategies that align with your unique objectives. Our approach ensures seamless implementation, optimized performance, and measurable results, helping your business thrive in a dynamic digital landscape.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 p-6 bg-white rounded-lg shadow-sm">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
            <BadgeCheck className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">
              Expertise and End-to-End Solutions
            </h3>
            <p className="text-gray-600">
              At Intelegencia, we bring unmatched expertise in cloud infrastructure and security to deliver tailored, end-to-end solutions for your business. Our certified architects and engineers specialize in designing, implementing, and managing robust cloud ecosystems that ensure scalability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;