import React from "react";
import { UserCheck, Shield } from "lucide-react";

const WhyUsSection: React.FC = () => {
  return (
    <section className="py-12 mb-12 -mx-4 px-4 rounded-xl">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-6">Why Intelegencia?</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <div className="flex flex-col gap-4 p-6 bg-white rounded-lg shadow-sm">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
            <UserCheck className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">
              Certified NetSuite Experts, 24/7
            </h3>
            <p className="text-gray-600">
              Global delivery with certified NetSuite professionals who understand business context, not just ERP code. Response-driven and ticket-tracked.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 p-6 bg-white rounded-lg shadow-sm">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">
              Secure, Scalable Support Infrastructure
            </h3>
            <p className="text-gray-600">
              Advanced support workflows with issue routing, historical tracking, and documentation—ensuring every touchpoint is auditable and consistent.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;