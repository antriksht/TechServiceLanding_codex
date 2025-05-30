import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  BarChart2,
  BrainCircuit,
  ShieldCheck,
  CloudUpload,
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
      icon: <BarChart2 className="text-primary text-xl" />,
      title: "Business Intelligence & Visualization",
      description:
        "Leverage our Power BI as a service and Tableau solutions to unify data sources, track KPIs, and deploy interactive dashboards. Our business intelligence consultants deliver tailored reporting for your industry.",
    },
    {
      icon: <BrainCircuit className="text-primary text-xl" />,
      title: "AI & Machine Learning",
      description:
        "From chatbots to predictive analytics, our AI consulting team builds custom solutions using Rasa, DialogFlow, and Azure ML to automate processes and reveal hidden opportunities.",
    },
    {
      icon: <ShieldCheck className="text-primary text-xl" />,
      title: "Data Governance & Strategy",
      description:
        "Implement metadata management, data quality frameworks, and compliance policies with our data strategy consulting experts.",
    },
    {
      icon: <CloudUpload className="text-primary text-xl" />,
      title: "Cloud Data Enablement",
      description:
        "Migrate, manage, and optimize analytics workloads on cloud platforms with end-to-end data analytics outsourcing support.",
    },
  ];



  return (
    <section className="py-12 mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-6">
          End-to-End Data Expertise That Drives Growth
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