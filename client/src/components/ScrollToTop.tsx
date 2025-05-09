import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down 300px
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set up scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    if (window.innerWidth < 1024) {
      // Mobile: scroll to contact form
      const formEl = document.getElementById("contact-form");
      if (formEl) {
        formEl.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Desktop: scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  

  return (
    <Button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg bg-primary hover:bg-primary/90 transition-all duration-300 transform",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0 pointer-events-none"
      )}
      size="icon"
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-5 w-5 text-white" />
    </Button>
  );
};

export default ScrollToTop;