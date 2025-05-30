import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  CloudUpload,
  Headset,
  Shield,
  ServerCog,
} from "lucide-react";
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
      icon: <CloudUpload className="text-primary text-xl" />,
      title: "Cloud Migration & Consulting",
      description:
        "Our managed cloud services ensure secure, low-downtime migrations to hybrid/public clouds with 24/7 support.",
    },
    {
      icon: <Headset className="text-primary text-xl" />,
      title: "Global Helpdesk Support",
      description:
        "Resolve 80%+ tickets on first contact with our IT outsourcing services covering 100+ languages.",
    },
    {
      icon: <Shield className="text-primary text-xl" />,
      title: "Managed IT Services",
      description:
        "From IT infra management to cybersecurity, we modernize legacy systems with AWS/Azure integrations.",
    },
    {
      icon: <ServerCog className="text-primary text-xl" />,
      title: "Asset & Configuration Management",
      description:
        "Gain real-time visibility into IT assets with automated tracking and compliance reporting.",
    },
  ];



  return (
    <section className="py-12 mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-6">
          Enterprise-Grade IT Infrastructure Solutions
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