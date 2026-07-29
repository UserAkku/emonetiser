"use client";

import { useRef, useState, useEffect } from "react";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ExchangeArchitecture } from "@/components/visuals/ExchangeArchitecture";

const steps = [
  { id: "01", title: "Ad Request", desc: "Publisher's site or app loads, sending an ad request with context." },
  { id: "02", title: "Bid Request", desc: "Emonetiser formats an OpenRTB bid request and broadcasts to DSPs." },
  { id: "03", title: "Simultaneous Bidding", desc: "DSPs evaluate the request and return bids in under 20ms." },
  { id: "04", title: "Winning Bid", desc: "The highest eligible bid wins the auction instantly." },
  { id: "05", title: "Creative Delivery", desc: "The winning creative is returned and rendered for the user." },
];

export function ExchangeWorkSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [activeStep, setActiveStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useGSAP(
    () => {
      if (!containerRef.current || prefersReducedMotion || isMobile) return;

      const items = textRef.current?.querySelectorAll(".step-item");
      if (!items) return;

      // Create scroll-linked highlight effect
      items.forEach((item, i) => {
        gsap.to(item, {
          opacity: 1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: `top+=${i * 20}% center`,
            end: `top+=${(i + 1) * 20}% center`,
            scrub: true,
            onEnter: () => setActiveStep(i),
            onEnterBack: () => setActiveStep(i),
          }
        });
      });
      
      // Pin the section
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "+=200%", // scroll distance
        pin: true,
        pinSpacing: true,
      });

    },
    { scope: containerRef, dependencies: [prefersReducedMotion, isMobile] }
  );

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-background border-t border-border overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading 
          label="The Engine" 
          headline="How the exchange works" 
          className="mb-16"
        />

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Text Steps */}
          <div ref={textRef} className="flex flex-col gap-8 relative z-10">
            {steps.map((step, i) => (
              <div 
                key={step.id} 
                className={`step-item flex gap-6 transition-all duration-300 ${
                  isMobile 
                    ? activeStep === i ? "opacity-100" : "opacity-40" 
                    : "opacity-30 lg:opacity-30" // handled by GSAP on desktop
                }`}
                onClick={() => isMobile && setActiveStep(i)}
              >
                <div className="font-mono text-2xl font-light text-[var(--color-brand-primary)]">{step.id}</div>
                <div>
                  <h3 className="text-xl font-medium mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.desc}</p>
                </div>
              </div>
            ))}
            
            {/* Mobile tap affordance */}
            {isMobile && (
              <div className="flex gap-2 justify-center mt-4">
                {steps.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveStep(i)}
                    className={`h-2 rounded-full transition-all ${
                      activeStep === i ? "w-8 bg-[var(--color-brand-primary)]" : "w-2 bg-border"
                    }`}
                    aria-label={`Go to step ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Visualizer */}
          <div className="lg:sticky lg:top-1/4 h-[400px] flex items-center justify-center -mx-6 lg:mx-0">
             <ExchangeArchitecture />
          </div>

        </div>
      </div>
    </section>
  );
}
