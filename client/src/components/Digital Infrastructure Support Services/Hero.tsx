import React, { useLayoutEffect, useRef } from "react";
import { scrollToSection } from "@/lib/utils";
import {
  CloudArrowUpIcon,
  LifebuoyIcon,
  ShieldCheckIcon,
  AdjustmentsHorizontalIcon,
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
      icon: <CloudArrowUpIcon className="w-6 h-6 text-primary flex-shrink-0" />,
      text: "Seamless Cloud Migration – Secure, ISO-certified transitions to AWS/Azure/GCP",
    },
    {
      icon: <LifebuoyIcon className="w-6 h-6 text-primary flex-shrink-0" />,
      text: "24/7 Global Helpdesk – 'Follow-the-sun' support with first-contact resolution",
    },
    {
      icon: <ShieldCheckIcon className="w-6 h-6 text-primary flex-shrink-0" />,
      text: "Proactive IT Management – End-to-end infrastructure monitoring & cybersecurity",
    },
    {
      icon: <AdjustmentsHorizontalIcon className="w-6 h-6 text-primary flex-shrink-0" />,
      text: "Intelligent Asset Optimization – Full lifecycle tracking to reduce costs by 30%+",
    },
  ];



  return (
    <section className="container mx-auto px-4 mb-12">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
        Future-Proof Your Business with Scalable <br />
        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          IT Infrastructure
        </span>
      </h1>
      <p className="text-lg font-bold text-gray-600 mb-8">
        End-to-end digital support services that minimize disruptions and maximize efficiency.
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
