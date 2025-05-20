import React, { useState, useEffect } from "react";
import { scrollToSection } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (id: string) => {
    console.log(`Scrolling to section: ${id}`);
    scrollToSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="top"
      className={`fixed top-0 left-0 w-full z-50 bg-white transition-all duration-300 ${
        isScrolled ? "py-2 shadow-md" : "py-3"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#" className="flex items-center space-x-2">
          <img
            src="/logo_2.svg"
            alt="Intelegencia Logo"
            className="h-15 w-auto max-h-20"
          />
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="text-lg font-bold text-gray-700 hover:text-primary transition-colors"
          >
            Overview
          </button>
          <button
            onClick={() => handleNavigation("bpocalculator")}
            className="text-lg font-bold text-gray-700 hover:text-primary transition-colors"
          >
            Calculator
          </button>
          <button
            onClick={() => handleNavigation("services")}
            className="text-lg font-bold text-gray-700 hover:text-primary transition-colors"
          >
            Services
          </button>
          <button
            onClick={() => handleNavigation("why-us")}
            className="text-lg font-bold text-gray-700 hover:text-primary transition-colors"
          >
            Why Us
          </button>
          <button
            onClick={() => handleNavigation("locations")}
            className="text-lg font-bold text-gray-700 hover:text-primary transition-colors"
          >
            Locations
          </button>
        </nav>

        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-2">
          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="block py-2 text-sm font-bold text-gray-700 hover:text-primary w-full text-left"
          >
            Overview
          </button>
          <button
            onClick={() => handleNavigation("bpocalculator")}
            className="block py-2 text-sm font-bold text-gray-700 hover:text-primary w-full text-left"
          >
            Calculator
          </button>
          <button
            onClick={() => handleNavigation("services")}
            className="block py-2 text-sm font-bold text-gray-700 hover:text-primary w-full text-left"
          >
            Services
          </button>
          <button
            onClick={() => handleNavigation("why-us")}
            className="block py-2 text-sm font-bold text-gray-700 hover:text-primary w-full text-left"
          >
            Why Us
          </button>
          <button
            onClick={() => handleNavigation("locations")}
            className="block py-2 text-sm font-bold text-gray-700 hover:text-primary w-full text-left"
          >
            Locations
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
