"use client";

import { useRef, useState, useEffect } from "react";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ExchangeArchitecture } from "@/components/visuals/ExchangeArchitecture";

const steps = [
  { id: "01", title: "Ad Request", desc: "Publisher's site or app loads, sending an ad request with context.", color: "hsl(258,85%,62%)" },
  { id: "02", title: "Bid Request", desc: "Emonetiser formats an OpenRTB bid request and broadcasts to DSPs.", color: "hsl(216,90%,58%)" },
  { id: "03", title: "Simultaneous Bidding", desc: "DSPs evaluate the request and return bids in under 20ms.", color: "hsl(175,75%,40%)" },
  { id: "04", title: "Winning Bid", desc: "The highest eligible bid wins the auction instantly.", color: "hsl(16,90%,58%)" },
  { id: "05", title: "Creative Delivery", desc: "The winning creative is returned and rendered for the user.", color: "hsl(290,75%,58%)" },
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
    <section ref={containerRef} className="py-24 md:py-32 overflow-hidden" style={{ background: "var(--section-teal)", borderTop: "1px solid hsl(175,75%,40%,0.12)" }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading 
          label="The Engine" 
          headline="How the exchange works"
          accent="advertiser"
          className="mb-16"
        />

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Text Steps */}
          <div ref={textRef} className="flex flex-col gap-6 relative z-10">
            {steps.map((step, i) => (
              <div 
                key={step.id} 
                className={`step-item flex gap-5 rounded-2xl p-5 transition-all duration-500 cursor-default ${
                  isMobile 
                    ? activeStep === i ? "opacity-100 bg-white shadow-md" : "opacity-40" 
                    : "opacity-30 lg:opacity-30"
                }`}
                style={
                  (isMobile && activeStep === i)
                    ? { borderLeft: `4px solid ${step.color}` }
                    : {}
                }
                onClick={() => isMobile && setActiveStep(i)}
              >
                {/* Number circle */}
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-md"
                  style={{ background: step.color, boxShadow: `0 4px 14px ${step.color}40` }}
                >
                  {step.id}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
            
            {/* Mobile tap dots */}
            {isMobile && (
              <div className="flex gap-2 justify-center mt-2">
                {steps.map((step, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveStep(i)}
                    className="h-2 rounded-full transition-all"
                    style={{
                      width: activeStep === i ? "2rem" : "0.5rem",
                      background: activeStep === i ? step.color : "hsl(220,15%,80%)",
                    }}
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
