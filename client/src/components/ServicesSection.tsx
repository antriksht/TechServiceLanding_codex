import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Cog, Activity, Network } from "lucide-react";
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
      icon: <Code className="text-primary text-xl" />,
      title: "Application Development",
      description:
        "Turn your ideas into reality with custom-built applications tailored to your unique business requirements. Whether creating new solutions or modernizing enterprise software, our expert team ensures efficiency, scalability, and innovation in every project.",
    },
    {
      icon: <Cog className="text-primary text-xl" />,
      title: "Application Maintenance & Support",
      description:
        "Maintain peak application performance with a robust support team and proactive monitoring. We handle all your app-related needs, ensuring uninterrupted access, reduced downtime, and reliable operations for your critical business systems.",
    },
    {
      icon: <Activity className="text-primary text-xl" />,
      title: "Quality Assurance & Performance Engineering",
      description:
        "Elevate software quality with thorough testing and performance optimization. Our services minimize risks, maximize efficiency, and ensure seamless user experiences, all while integrating seamlessly with your development processes.",
    },
    {
      icon: <Network className="text-primary text-xl" />,
      title: "Enterprise Integration",
      description:
        "Connect your enterprise systems, data, and devices for streamlined operations. From API management to microservices and data integration, we enable a unified digital ecosystem that enhances operational efficiency.",
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