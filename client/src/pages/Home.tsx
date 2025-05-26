import React, { useEffect, useLayoutEffect, useRef } from "react";
import Header from "@/components/Header";
import CertificationsSection from "@/components/CertificationsSection";
import TrustedBySection from "@/components/TrustedBySection";
import ServicesSection from "@/components/ServicesSection";
import WhyUsSection from "@/components/WhyUsSection";
import LocationsSection from "@/components/LocationsSection";
import CTASection from "@/components/CTASection";
import ScrollToTop from "@/components/ScrollToTop";
import ContactForm from "@/components/ContactForm";
import {
  CodeBracketIcon,
  ArrowPathIcon,
  CircleStackIcon,
  ShieldCheckIcon
} from "@heroicons/react/24/outline";
import { scrollToSection } from "@/lib/utils";
import BPOCalculator from "@/components/BPOCalculator";

const MainHeading: React.FC = () => {
  const boxRefs = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const updateHeights = () => {
      // Reset all heights
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
      icon: <CodeBracketIcon className="w-6 h-6 text-primary flex-shrink-0" />,
      text: "End-to-end software development for web, mobile, and cloud",
    },
    {
      icon: <ArrowPathIcon className="w-6 h-6 text-primary flex-shrink-0" />,
      text: "Legacy system modernization with minimal disruption",
    },
    {
      icon: <CircleStackIcon className="w-6 h-6 text-primary flex-shrink-0" />,
      text: "Scalable architecture using microservices and APIs",
    },
    {
      icon: <ShieldCheckIcon className="w-6 h-6 text-primary flex-shrink-0" />,
      text: "Secure, compliant, and high-performance applications",
    },
  ];

  return (
    <div className="mb-8">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
        Power Growth with Expert-Led <br />
        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Application Engineering
        </span>
      </h1>
      <p className="text-lg font-bold text-gray-600 mb-8">
        Transform legacy systems or build next-gen platforms — custom-built to
        fuel your business goals.
      </p>
      {/* Mobile-only CTA */}
      <div className="flex lg:hidden justify-center mb-6">
        <button
          onClick={() => scrollToSection("contact-form")}
          className="bg-primary text-white font-semibold text-base px-6 py-2 rounded-full hover:bg-primary/90 transition"
        >
          Let&apos;s Collaborate
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
    </div>
  );
};

const Home: React.FC = () => {
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }
      }
    };

    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow pt-24 md:pt-32">

        {/* Mobile view - Form appears after heading */}
        <div className="container mx-auto px-4">
          <div className="lg:hidden">
            <MainHeading />
            <div className="mb-12">
              <ContactForm />
            </div>
            <CertificationsSection />
            <TrustedBySection />
            {typeof window !== "undefined" && window.innerWidth < 1024 ? (
                <section id="bpocalculator" className="scroll-mt-32">
                  <BPOCalculator />
                </section>
              ) : (
                <BPOCalculator />
              )}
            {typeof window !== "undefined" && window.innerWidth < 1024 ? (
                <section id="services" className="scroll-mt-32">
                  <ServicesSection />
                </section>
              ) : (
                <ServicesSection />
              )}
            {typeof window !== "undefined" && window.innerWidth < 1024 ? (
                <section id="why-us" className="scroll-mt-32">
                  <WhyUsSection />
                </section>
              ) : (
                <WhyUsSection />
              )}

              {typeof window !== "undefined" && window.innerWidth < 1024 ? (
                <section id="locations" className="scroll-mt-32">
                  <LocationsSection />
                </section>
              ) : (
                <LocationsSection />
              )}
            <CTASection />
          </div>

          {/* Desktop view - Two column layout */}
          <div className="hidden lg:flex lg:flex-row lg:gap-8">
            {/* Left Column - Content */}
            <div className="w-2/3">
              <MainHeading />
              <CertificationsSection />
              <TrustedBySection />
              {typeof window !== "undefined" && window.innerWidth >= 1024 ? (
                  <section id="bpocalculator" className="scroll-mt-32">
                    <BPOCalculator />
                  </section>
                ) : (
                  <BPOCalculator />
                )}
              {typeof window !== "undefined" && window.innerWidth >= 1024 ? (
                  <section id="services" className="scroll-mt-32">
                    <ServicesSection />
                  </section>
                ) : (
                  <ServicesSection />
                )}
              {typeof window !== "undefined" && window.innerWidth >= 1024 ? (
                  <section id="why-us" className="scroll-mt-32">
                    <WhyUsSection />
                  </section>
                ) : (
                  <WhyUsSection />
                )}

                {typeof window !== "undefined" && window.innerWidth >= 1024 ? (
                  <section id="locations" className="scroll-mt-32">
                    <LocationsSection />
                  </section>
                ) : (
                  <LocationsSection />
                )}
              <CTASection />
            </div>

            {/* Right Column - Sticky Form */}
              <div className="w-1/3 pl-12 pr-4">
                <div className="sticky top-24 max-h-screen h-[calc(100vh-150px)] flex items-center">
                  {/* ✅ Make ContactForm stretch fully */}
                  <div className="w-full min-w-0">
                    <ContactForm />
                  </div>
                </div>
              </div>
          </div>
        </div>
      </main>

      <ScrollToTop />
    </div>
  );
};

export default Home;