import React, { useLayoutEffect, useRef } from "react";
import { scrollToSection } from "@/lib/utils";
import {
  ArrowPathIcon,
  SparklesIcon,
  ShieldCheckIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";

const Hero: React.FC = () => {
  const boxRefs = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const updateHeights = () => {
      boxRefs.current.forEach((ref) => {
        if (ref) ref.style.height = "auto";
      });

      const maxHeight = Math.max(
        ...boxRefs.current.map((ref) => ref?.offsetHeight || 0)
      );

      boxRefs.current.forEach((ref) => {
        if (ref) ref.style.height = `${maxHeight}px`;
      });
    };

    updateHeights();
    window.addEventListener("resize", updateHeights);
    return () => window.removeEventListener("resize", updateHeights);
  }, []);

  const features = [
    {
      icon: <ArrowPathIcon className="w-6 h-6 text-primary flex-shrink-0" />,
      text: "Shift-Left Testing Approach – Catch defects early with continuous regression testing",
    },
    {
      icon: <SparklesIcon className="w-6 h-6 text-primary flex-shrink-0" />,
      text: "AI-Powered Test Automation – Cut testing cycles by 50%+ with smart analytics",
    },
    {
      icon: <ShieldCheckIcon className="w-6 h-6 text-primary flex-shrink-0" />,
      text: "Regulatory Compliance Assurance – GDPR/HIPAA/CCPA-ready validation",
    },
    {
      icon: <EyeIcon className="w-6 h-6 text-primary flex-shrink-0" />,
      text: "Real-World User Validation – UAT and accessibility testing for market-ready products",
    },
  ];



  return (
    <section className="container mx-auto px-4 mb-12">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
        Elevate Software Quality with Intelligent <br />
        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Testing Solutions
        </span>
      </h1>
      <p className="text-lg font-bold text-gray-600 mb-8">
        Reduce risks, accelerate releases, and ensure compliance through comprehensive QA engineering.
      </p>

      {/* Mobile-only CTA */}
      <div className="flex lg:hidden justify-center mb-6">
        <button
          onClick={() => scrollToSection("contact-form")}
          className="bg-primary text-white font-semibold text-base px-6 py-2 rounded-full hover:bg-primary/90 transition"
        >
          Let&apos;s Connect
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
        {features.map((item, index) => (
          <div
            key={index}
            ref={(el) => (boxRefs.current[index] = el)}
            className="flex items-start space-x-4 p-4 rounded-lg bg-white shadow-sm border border-gray-400 transition-all hover:shadow-md"
          >
            {item.icon}
            <span className="text-gray-600">{item.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;