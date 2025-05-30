import React from "react";
import {
  Layers3,
  Sliders,
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
            <Layers3 className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">
              End-to-End Expertise 
            </h3>
            <p className="text-gray-600">
              With comprehensive expertise in Digital Infrastructure & Support Services, we provide solutions that span the entire lifecycle of IT operations. From proactive issue resolution to efficient service management, we ensure your IT infrastructure runs smoothly, minimizes disruptions, and meets service level agreements (SLAs).
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 p-6 bg-white rounded-lg shadow-sm">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
            <Sliders className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">
              Tailored Solutions for Your IT Needs
            </h3>
            <p className="text-gray-600">
              At Intelegencia, we align IT service management with your business goals by tailoring solutions to your unique challenges. Our expertise enhances efficiency, streamlines processes like incident and change management, and improves service delivery for seamless operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;