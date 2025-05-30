import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Megaphone, PhoneCall, MailCheck, Wrench } from "lucide-react";
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
      icon: <PhoneCall className="text-primary text-xl" />,
      title: "Inbound & Outbound Support",
      description:
        "Deliver personalized service across industries—from banking to e-commerce—with trained agents equipped to handle high volumes, resolve queries, and drive loyalty.",
    },
    {
      icon: <MailCheck className="text-primary text-xl" />,
      title: "Email & Live Chat Support",
      description:
        "Provide real-time, efficient support via email and chat to ensure seamless resolution, faster response times, and improved customer satisfaction.",
    },
    {
      icon: <Megaphone className="text-primary text-xl" />,
      title: "Sales & Telemarketing",
      description:
        "Maximize conversions with Cold Calling 2.0, upsell/cross-sell strategies, and pipeline-building campaigns to boost revenue through tailored outreach.",
    },
    {
      icon: <Wrench className="text-primary text-xl" />,
      title: "Social Media & Marketplace Support",
      description:
        "Provide Tier 1–3 technical resolution, from basic FAQs to complex troubleshooting—helping businesses across domains improve support SLAs.",
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