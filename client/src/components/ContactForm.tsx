import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const ContactForm: React.FC = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Adjust iframe height on form content change
      if (
        event.data?.type === "ZOHO_FORM_HEIGHT" &&
        typeof event.data.height === "number"
      ) {
        if (iframeRef.current) {
          const maxHeight = window.innerHeight - 120; // Adjust based on layout
          iframeRef.current.style.height = `${Math.min(event.data.height, maxHeight)}px`;
        }
      }

      // On form submission
      if (event.data?.type === "ZOHO_FORM_SUBMITTED") {
        //alert("Thank you for submitting your response. We will reach out to you soon.");
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "zoho_form_submit",
          submittedAt: new Date().toISOString(),
        });

        setTimeout(() => {
          setSubmitted(true);
        }, 2000);
      }

      // Forward GTM click events from iframe
      if (event.data?.type === "GTM_CLICK_EVENT") {
        console.log("Iframe GTM click event received:", event.data.data);
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push(event.data.data);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);


    let iframeSrc = "/zoho_form_raw_html.html"; // zoho_form_raw_html.html or zoho_form_no_validation.html
      if (typeof window !== "undefined") {
        const queryParams = new URLSearchParams(window.location.search);
        const pathname = window.location.pathname.replace(/^\//, ""); // remove leading slash
        queryParams.set("utm_path", pathname); // append utm_path
        iframeSrc += `?${queryParams.toString()}`; // combine base and updated query string
      }



  return (
    <section id="contact-form" className="scroll-mt-28 md:scroll-mt-32 lg:scroll-mt-40">
      <Card className="bg-white rounded-xl shadow-xl overflow-hidden border-t-4 border-primary">
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 py-4 px-6">
          <h3 className="text-xl text-center font-semibold text-gray-800">Get Started Now</h3>
        </div>
        <CardContent className="p-0">
          {submitted ? (
            <div className="text-center space-y-2">
              <p className="text-xl font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Thank you for submitting your response.</p>
              <p className="text-gray-600">We will reach out to you soon.</p><br />
            </div>
          ) : (
            <div style={{ maxHeight: "calc(100vh - 120px)", overflowY: "auto" }}>
              <iframe
                ref={iframeRef}
                id="zohoFormFrame"
                src={iframeSrc}
                style={{
                  width: "100%",
                  border: "none",
                  display: "block",
                }}
                allowFullScreen
              />
            </div>
          )}
        </CardContent>
      </Card>
    </section>
  );
};

export default ContactForm;