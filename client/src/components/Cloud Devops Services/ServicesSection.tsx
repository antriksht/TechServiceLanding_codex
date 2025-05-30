import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Workflow,
  ShieldCheck,
  CloudCog,
  Network,
  CloudUpload,
  ServerCog,
  HardDrive,
  LifeBuoy,
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
      icon: <Workflow className="text-primary text-xl" />,
      title: "DevOps Implementation",
      description:
        "Streamline software delivery with our DevOps consulting services, including CI/CD pipelines, automated testing, and continuous monitoring. We enhance collaboration between development and operations teams for faster, more reliable deployments.",
    },
    {
      icon: <ShieldCheck className="text-primary text-xl" />,
      title: "Cloud Security & Automation",
      description:
        "Protect your cloud environment with advanced Azure DevOps security and AWS DevOps solutions. Our services include DDoS protection, identity management, and automated threat detection to ensure uninterrupted operations.",
    },
    {
      icon: <CloudCog className="text-primary text-xl" />,
      title: "Cloud Design & Architecture",
      description:
        "Build a future-proof cloud strategy with cloud-native application development and tailored architecture. We design scalable, secure infrastructures optimized for performance across AWS, Azure, and hybrid environments.",
    },
    {
      icon: <Network className="text-primary text-xl" />,
      title: "Hybrid Cloud Infrastructure",
      description:
        "Maximize flexibility with hybrid cloud solutions like Azure Stack Hub and AWS Outposts. We help businesses seamlessly integrate and manage multi-cloud environments for efficiency and cost savings.",
    },
    {
      icon: <CloudUpload className="text-primary text-xl" />,
      title: "Cloud Migration Services",
      description:
        "Ensure a smooth transition with our cloud migration services, including Azure cloud migration and AWS application migration. We minimize downtime and maximize ROI with secure, end-to-end migration support.",
    },
    {
      icon: <ServerCog className="text-primary text-xl" />,
      title: "Infrastructure as Code (IaC)",
      description:
        "Automate and scale your cloud infrastructure using IaC tools like Terraform and Ansible. Achieve consistent, repeatable deployments while reducing manual errors and operational overhead.",
    },
    {
      icon: <HardDrive className="text-primary text-xl" />,
      title: "Cloud Storage Solutions",
      description:
        "Secure, scalable cloud data storage solutions ensure centralized access with cost efficiency. We implement cloud-based storage services tailored to your business needs, enabling seamless data availability.",
    },
    {
      icon: <LifeBuoy className="text-primary text-xl" />,
      title: "Disaster Recovery & Business Continuity",
      description:
        "Safeguard critical operations with disaster recovery as a service (DRaaS). Our solutions, including Azure Site Recovery and AWS CloudEndure, minimize downtime and ensure rapid recovery.",
    },
  ];



  return (
    <section className="py-12 mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-6">
          Solutions for Seamless, Scalable, and Secure Business Operations
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