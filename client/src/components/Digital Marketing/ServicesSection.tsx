import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Megaphone, Globe, MousePointerClick, BarChart3 } from "lucide-react";
import { scrollToSection } from "@/lib/utils";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <Card className="bg-white rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg group">
      <div className="h-3 bg-gradient-to-r from-primary to-accent"></div>
      <CardContent className="p-6">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <Megaphone className="text-primary text-xl" />,
      title: "Performance Marketing",
      description:
        "Launch high-converting paid campaigns across Google, Meta, LinkedIn, and more. We optimize every ad dollar to drive measurable ROI and scalable growth for your business.",
    },
    {
      icon: <Globe className="text-primary text-xl" />,
      title: "Search Engine Optimization (SEO)",
      description:
        "Improve your visibility with deep keyword research, on-page fixes, and content strategies tailored to your niche. We help you dominate organic rankings and capture long-term traffic.",
    },
    {
      icon: <MousePointerClick className="text-primary text-xl" />,
      title: "Conversion Rate Optimization",
      description:
        "Transform traffic into leads and sales. From A/B testing to landing page design, we improve funnel performance by optimizing every touchpoint in the user journey.",
    },
    {
      icon: <BarChart3 className="text-primary text-xl" />,
      title: "Marketing Automation & Analytics",
      description:
        "Connect GA4, GTM, CRM, and ad platforms to build an automated, insight-rich marketing engine. We enable smart targeting, real-time dashboards, and campaign attribution.",
    },
  ];


  return (
    <section className="py-12 mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-6">
          Services Designed to Drive Innovation, Efficiency, and Growth
        </h2>

        {/* Mobile: Centered CTA-style button */}
        <div className="flex lg:hidden justify-center mb-4">
          <button
            onClick={() => scrollToSection("contact-form")}
            className="bg-primary text-white font-semibold text-lg px-6 py-2 rounded-full hover:bg-primary/90 transition"
          >
            Let&apos;s Collaborate
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;