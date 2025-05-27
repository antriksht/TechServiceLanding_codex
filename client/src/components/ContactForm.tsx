import React, { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";

const ContactForm: React.FC = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (
        event.data?.type === "ZOHO_FORM_HEIGHT" &&
        typeof event.data.height === "number"
      ) {
        if (iframeRef.current) {
          // Ensure it never exceeds visible viewport height
          const maxHeight = window.innerHeight - 120; // 120 = header + some spacing
          iframeRef.current.style.height = `${Math.min(event.data.height, maxHeight)}px`;
        }
      }
      if (event.data?.type === "ZOHO_FORM_SUBMITTED") {
      alert("Thank you! Your form was submitted.");
    }
  };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <section id="contact-form" className="scroll-mt-28 md:scroll-mt-32 lg:scroll-mt-40">
      <Card className="bg-white rounded-xl shadow-xl overflow-hidden border-t-4 border-primary">
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 py-4 px-6">
          <h3 className="text-xl font-semibold text-gray-800">Get Started Now</h3>
        </div>
        <CardContent className="p-0"> {/* Remove padding to save vertical space */}
          <div
            style={{
              maxHeight: "calc(100vh - 120px)", // adjust based on actual header height
              overflowY: "auto",
            }}
            className="overflow-hidden transform origin-top"
          >
            <iframe
              ref={iframeRef}
              id="zohoFormFrame"
              src={`/zoho_form_raw_html.html${typeof window !== "undefined" ? window.location.search : ""}`}
              style={{
                width: "100%",
                border: "none",
                display: "block",
              }}
              allowFullScreen
            />
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default ContactForm;
