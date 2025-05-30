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
      title: "Accounts Payable & Receivable",
      description:
        "Ensure smooth cash flow with our accounts payable outsourcing services and accounts receivable management. We handle invoice processing, payment collections, and transaction verification, reducing administrative burdens while maintaining accuracy.",
    },
    {
      icon: <Banknote className="text-primary text-xl" />,
      title: "Bookkeeping & Financial Reporting",
      description:
        "Maintain precise records with our bookkeeping services and accounting bookkeeping solutions. We track income, expenses, and ensure compliance, providing financial accounting and reporting for clear insights into your business health.",
    },
    {
      icon: <ShieldCheck className="text-primary text-xl" />,
      title: "Payroll Processing & Compliance",
      description:
        "Streamline payroll with our payroll accounting services, ensuring timely paychecks, tax compliance, and detailed management reports. Our payroll and bookkeeping services integrate seamlessly for hassle-free operations.",
    },
    {
      icon: <Presentation className="text-primary text-xl" />,
      title: "Financial Analysis & Planning",
      description:
        "Leverage financial management analysis for budgeting, forecasting, and strategic planning. Our experts optimize resource allocation, track commissions, and enhance profitability through data-driven decisions.",
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