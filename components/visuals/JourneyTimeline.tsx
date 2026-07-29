"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { Smartphone, Monitor, Tv } from "lucide-react";
import { useReducedMotion } from "@/lib/use-reduced-motion";

export function JourneyTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (!containerRef.current || prefersReducedMotion) return;

      const items = containerRef.current.querySelectorAll(".journey-item");
      const line = containerRef.current.querySelector(".journey-line");

      gsap.from(items, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
      });

      gsap.fromTo(
        line,
        { scaleX: 0, transformOrigin: "left center" },
        {
          scaleX: 1,
          duration: 1.5,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          },
        }
      );
    },
    { dependencies: [prefersReducedMotion] }
  );

  return (
    <div ref={containerRef} className="relative flex w-full flex-col py-16 sm:flex-row sm:items-center sm:justify-between">
      <div className="journey-line absolute left-0 top-1/2 -z-10 hidden h-[2px] w-full bg-gradient-to-r from-border via-[var(--color-brand-secondary)] to-border sm:block" />
      
      {[
        { time: "08:00 AM", device: "Mobile App", icon: Smartphone, label: "Morning Commute" },
        { time: "02:00 PM", device: "Desktop Web", icon: Monitor, label: "Workday Browsing" },
        { time: "08:00 PM", device: "Connected TV", icon: Tv, label: "Evening Streaming" },
      ].map((item, i) => (
        <div key={i} className="journey-item flex flex-col items-center gap-4 bg-background p-4 sm:p-0">
          <span className="font-mono text-xs text-muted-foreground">{item.time}</span>
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[var(--color-brand-secondary)]/30 bg-card text-[var(--color-brand-secondary)] shadow-[0_0_20px_rgba(155,107,255,0.1)]">
            <item.icon className="h-8 w-8" />
          </div>
          <div className="text-center">
            <div className="font-medium">{item.device}</div>
            <div className="text-sm text-muted-foreground">{item.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
