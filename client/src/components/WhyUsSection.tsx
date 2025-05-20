import React from "react";
import { Lightbulb, Shield } from "lucide-react";

const WhyUsSection: React.FC = () => {
  return (
    <section className="py-12 mb-12 -mx-4 px-4 rounded-xl">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-6">Why Intelegencia?</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <div className="flex flex-col gap-4 p-6 bg-white rounded-lg shadow-sm">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">
              Reliable Support for Every Stage
            </h3>
            <p className="text-gray-600">
              From development to ongoing maintenance, we provide unwavering
              support to ensure your applications remain efficient, secure, and
              scalable as your business grows.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 p-6 bg-white rounded-lg shadow-sm">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
            <Lightbulb className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">
              Expertise in Custom Application
            </h3>
            <p className="text-gray-600">
              Our team combines technical expertise and industry insights to
              deliver applications that are tailored to your business goals,
              ensuring innovative and impactful solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
