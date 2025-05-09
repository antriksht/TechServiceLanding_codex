import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";

interface LocationCardProps {
  title: string;
  addresses: string[];
}

const LocationCard: React.FC<LocationCardProps> = ({ title, addresses }) => {
  return (
    <Card className="bg-white rounded-xl shadow-md">
      <CardContent className="p-6">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
          <MapPin className="text-primary text-xl" />
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        {addresses.map((address, index) => (
          <p
            key={index}
            className={`text-gray-600 ${index < addresses.length - 1 ? "mb-3" : ""}`}
          >
            {address}
          </p>
        ))}
      </CardContent>
    </Card>
  );
};

const LocationsSection: React.FC = () => {
  const locations = [
    {
      title: "U.S.A.",
      addresses: ["40 West Evergreen Ave, Suite 101A, Philadelphia, PA 19118"],
    },
    {
      title: "INDIA",
      addresses: [
        "A-21, Lohia Rd, A Block, Sector 63, Noida, Uttar Pradesh 201301",
        "Regus Brigade IRV, 9th & 10th Floors, Nallurhalli, Whitefield, Bangalore, Karnataka 560066",
      ],
    },
    {
      title: "PHILIPPINES",
      addresses: [
        "OTC Building, Sumulong Highway, Antipolo City, Rizal 1870",
        "ECC Building, Matatalaib, Tarlac City, Philippines 2300",
        "3503 Antel Global Corporate Center, Doña Julia Vargas Ave, Ortigas Center, Pasig City 1605",
      ],
    },
  ];

  return (
    <section className="py-12 mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-6">
          Delivering Excellence Across the Globe
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {locations.map((location, index) => (
          <LocationCard
            key={index}
            title={location.title}
            addresses={location.addresses}
          />
        ))}
      </div>
    </section>
  );
};

export default LocationsSection;
