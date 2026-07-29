"use client";

import { useRef, useState, useEffect } from "react";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ExchangeArchitecture } from "@/components/visuals/ExchangeArchitecture";
import { cn } from "@/lib/utils";

const steps = [
  { id: "01", title: "Ad Request", desc: "Publisher's site or app loads, sending an ad request with context.", bentoClass: "bento-violet" },
  { id: "02", title: "Bid Request", desc: "Emonetiser formats an OpenRTB bid request and broadcasts to DSPs.", bentoClass: "bento-cyan" },
  { id: "03", title: "Simultaneous Bidding", desc: "DSPs evaluate the request and return bids in under 20ms.", bentoClass: "bento-coral" },
  { id: "04", title: "Winning Bid", desc: "The highest eligible bid wins the auction instantly.", bentoClass: "bento-yellow" },
  { id: "05", title: "Creative Delivery", desc: "The winning creative is returned and rendered for the user.", bentoClass: "bento-pink" },
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
      
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "+=200%",
        pin: true,
        pinSpacing: true,
      });

    },
    { scope: containerRef, dependencies: [prefersReducedMotion, isMobile] }
  );

  return (
    <section ref={containerRef} className="py-24 md:py-32 section-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading 
          label="The Engine" 
          headline="How the exchange works"
          accent="yellow"
          className="mb-16"
        />

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Text Steps */}
          <div ref={textRef} className="flex flex-col gap-6 relative z-10">
            {steps.map((step, i) => {
              const isActive = isMobile ? activeStep === i : true;
              return (
                <div 
                  key={step.id} 
                  className={cn(
                    "step-item flex gap-6 p-6 rounded-3xl transition-all duration-500 cursor-default",
                    isActive ? `bento-card ${step.bentoClass} shadow-xl scale-100 opacity-100` : "bg-gray-50 scale-[0.98]",
                    !isMobile && "opacity-30" // Desktop handled by GSAP
                  )}
                  onClick={() => isMobile && setActiveStep(i)}
                >
                  <div className={cn(
                    "flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-lg",
                    isActive ? "bg-black/20 text-current" : "bg-gray-200 text-gray-500"
                  )}>
                    {step.id}
                  </div>
                  <div>
                    <h3 className={cn("text-2xl font-bold mb-1", isActive ? "text-current" : "text-gray-900")}>
                      {step.title}
                    </h3>
                    <p className={cn("font-medium", isActive ? "opacity-90" : "text-gray-500")}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
            
            {/* Mobile tap dots */}
            {isMobile && (
              <div className="flex gap-2 justify-center mt-4">
                {steps.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveStep(i)}
                    className="h-2 rounded-full transition-all"
                    style={{
                      width: activeStep === i ? "2rem" : "0.5rem",
                      background: activeStep === i ? "#111" : "#E5E7EB",
                    }}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Visualizer */}
          <div className="lg:sticky lg:top-1/4 h-[400px] flex items-center justify-center -mx-6 lg:mx-0 bento-card bento-white border-2 border-gray-100">
             <ExchangeArchitecture />
          </div>

        </div>
      </div>
    </section>
  );
}
