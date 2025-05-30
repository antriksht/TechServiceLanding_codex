import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { PlaySquare, Database, BarChart4, ServerCog, Plug, Bug} from "lucide-react";
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
      icon: <PlaySquare className="text-primary text-xl" />,
      title: "Implementation & SuiteSuccess Rollouts",
      description:
        "Accelerate your NetSuite onboarding with certified implementation experts. We support global OneWorld, two-tier ERP, and advanced module configurations.",
    },
    {
      icon: <Database className="text-primary text-xl" />,
      title: "Data Migration",
      description:
        "Seamless migration from SAP, Oracle, AWS, or third-party systems—minimizing disruption and ensuring secure, compliant data handling.",
    },
    {
      icon: <BarChart4 className="text-primary text-xl" />,
      title: "Business Intelligence & Analytics",
      description:
        "Drive decisions with role-based dashboards, NetSuite Data Warehouse, and advanced visualizations tailored to your ops and finance teams.",
    },
    {
      icon: <ServerCog className="text-primary text-xl" />,
      title: "Managed Services",
      description:
        "Ongoing NetSuite support, including sandbox management, update readiness, and proactive monitoring—so your system evolves with your business.",
    },
    {
      icon: <Plug className="text-primary text-xl" />,
      title: "Integrations",
      description:
        "Custom-built connections across eCommerce, accounting, POS, and logistics. Leverage Celigo, Dell Boomi, and more for seamless flow of data.",
    },
    {
      icon: <Bug className="text-primary text-xl" />,
      title: "Application Support",
      description:
        "From fiscal close support to bug fixes, our remote team resolves workflow errors, report issues, and custom app challenges with minimal delay.",
    },
  ];


  return (
    <section className="py-12 mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-6">
          Services Designed to Optimize, Integrate, and Scale NetSuite
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