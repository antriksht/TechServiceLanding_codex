import React from "react";

const CertificationsSection: React.FC = () => {
  const certifications = [
    {
      src: "./Delloitte.png",
      alt: "Deloitte India and APAC",
    },
    {
      src: "./iso-1.png",
      alt: "ISO 9001-2015",
    },
    {
      src: "./iso-2.png",
      alt: "ISO 27001-2021",
    },
    {
      src: "./pcidss.png",
      alt: "PCIDSS",
    },
    {
      src: "./Clutch.png",
      alt: "Clutch",
    },
    {
      src: "./Great-place-to-work.png",
      alt: "Great Place To Work",
    },
  ];

  return (
    <section id="certifications" className="py-10 mb-12">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="flex justify-center items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <img
              src={cert.src}
              alt={cert.alt}
              className="h-12 md:h-16 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificationsSection;
