import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Users,
  Banknote,
  ShieldCheck,
  Presentation,
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
      icon: <Users className="text-primary text-xl" />,
      title: "Recruitment & Onboarding",
      description:
        "Efficiently source, screen, and onboard top talent with our recruitment process outsourcing and onboarding solutions. We streamline hiring, background checks, and ensure seamless integration for new hires.",
    },
    {
      icon: <Banknote className="text-primary text-xl" />,
      title: "Payroll & Benefits Administration",
      description:
        "Access the best payroll service solutions for small businesses and enterprises. We handle payroll processing, employee benefits, and compliance—ensuring accuracy and satisfaction.",
    },
    {
      icon: <ShieldCheck className="text-primary text-xl" />,
      title: "Compliance & Risk Management",
      description:
        "Stay ahead of regulations with end-to-end HR compliance, certified payroll, and risk mitigation. We manage documentation, audits, and reporting to protect your business.",
    },
    {
      icon: <Presentation className="text-primary text-xl" />,
      title: "Employee Performance & Training",
      description:
        "Develop a high-performing workforce through targeted training programs, performance tracking, and growth initiatives aligned with your business goals.",
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