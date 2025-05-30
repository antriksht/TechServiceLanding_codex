import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Bot,
  ShieldCheck,
  CheckCircle,
  Link2,
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
      icon: <Bot className="text-primary text-xl" />,
      title: "AI-Driven Test Automation",
      description:
        "Our software testing services leverage machine learning to prioritize high-impact test cases, reducing manual effort by 60%.",
    },
    {
      icon: <ShieldCheck className="text-primary text-xl" />,
      title: "Compliance & Security Testing",
      description:
        "Stay audit-ready with penetration testing services and regulatory checks for healthcare/finance sectors.",
    },
    {
      icon: <CheckCircle className="text-primary text-xl" />,
      title: "User Acceptance Testing (UAT)",
      description:
        "Validate solutions with real business scenarios through our outsourced QA testing experts.",
    },
    {
      icon: <Link2 className="text-primary text-xl" />,
      title: "Integration Testing",
      description:
        "Ensure seamless connectivity between systems with rigorous system integration testing.",
    },
  ];



  return (
    <section className="py-12 mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-6">
          End-to-End Quality Engineering Services
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