"use client";

import { useRef } from "react";
import Link from "next/link";
import { gsap, useGSAP } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Globe, Smartphone, Tv } from "lucide-react";

export function ChannelsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const channels = [
    {
      id: "web",
      title: "Web",
      icon: Globe,
      formats: ["Display", "Native", "In-stream Video", "Out-stream Video"],
      link: "/publishers/web-monetization",
      style: "rounded-t-lg border-x border-t border-border shadow-inner"
    },
    {
      id: "app",
      title: "Mobile App",
      icon: Smartphone,
      formats: ["Rewarded Video", "Interstitial", "Banner", "Native"],
      link: "/publishers/app-monetization",
      style: "rounded-[2rem] border-[4px] border-border shadow-inner px-2 pt-4"
    },
    {
      id: "ctv",
      title: "Connected TV",
      icon: Tv,
      formats: ["Pre-roll", "Mid-roll", "Pause Ads", "SSAI Stitching"],
      link: "/publishers/ctv-monetization",
      style: "rounded-lg border-[4px] border-border shadow-inner p-2"
    }
  ];

  useGSAP(
    () => {
      if (!containerRef.current || prefersReducedMotion) return;

      gsap.from(".channel-card", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      });
    },
    { scope: containerRef, dependencies: [prefersReducedMotion] }
  );

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-card/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading 
          label="Channels" 
          headline="Every screen. Every format." 
          subtext="Monetize and buy across the entire digital ecosystem through a single OpenRTB connection."
          align="center"
          className="mb-16"
        />

        <div className="grid gap-8 md:grid-cols-3">
          {channels.map((ch) => (
            <Link 
              href={ch.link} 
              key={ch.id}
              className="channel-card group flex h-96 flex-col overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all hover:-translate-y-2 hover:border-[var(--color-brand-primary)]/50 hover:shadow-2xl hover:shadow-[var(--color-brand-primary)]/10"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted text-foreground group-hover:bg-[var(--color-brand-primary)]/10 group-hover:text-[var(--color-brand-primary)] transition-colors">
                  <ch.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-medium">{ch.title}</h3>
              </div>

              {/* Stylized Device Representation */}
              <div className="flex-1 relative flex items-center justify-center">
                <div className={`absolute bottom-0 w-3/4 h-3/4 bg-muted/30 transition-transform group-hover:scale-105 ${ch.style}`}>
                   <div className="h-full w-full bg-background/50 backdrop-blur-sm flex flex-col justify-end p-4">
                      {/* Hover reveals formats */}
                      <ul className="space-y-2 opacity-50 transition-opacity group-hover:opacity-100">
                        {ch.formats.map(f => (
                          <li key={f} className="text-xs font-mono text-muted-foreground">{f}</li>
                        ))}
                      </ul>
                   </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
