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
          iframeRef.current.style.height = `${event.data.height + 50}px`;
        }
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <section id="contact-form" className="scroll-mt-32">
      <Card className="bg-white rounded-xl shadow-xl overflow-hidden border-t-4 border-primary">
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 py-4 px-6">
          <h3 className="text-xl font-semibold text-gray-800">Get Started Now</h3>
          <p className="text-gray-600">
            Fill out the form below and we'll be in touch soon.
          </p>
        </div>
        <CardContent className="p-6">
          <div className="overflow-hidden scale-[1.0] transform origin-top">
            <iframe
              ref={iframeRef}
              id="zohoFormFrame"
              src="/zoho_form.html"
              style={{
                width: "100%",
                height: "600px",
                border: "none",
                overflow: "hidden",
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
