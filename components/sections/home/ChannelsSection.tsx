"use client";

import { useRef } from "react";
import Link from "next/link";
import { gsap, useGSAP } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Globe, Smartphone, Tv, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const channels = [
  {
    id: "web",
    title: "Web",
    icon: Globe,
    formats: ["Display", "Native", "In-stream Video", "Out-stream Video"],
    link: "/publishers/web-monetization",
    bentoClass: "bento-cyan",
    label: "Publisher SSP",
  },
  {
    id: "app",
    title: "Mobile App",
    icon: Smartphone,
    formats: ["Rewarded Video", "Interstitial", "Banner", "Native"],
    link: "/publishers/app-monetization",
    bentoClass: "bento-yellow",
    label: "App Monetisation",
  },
  {
    id: "ctv",
    title: "Connected TV",
    icon: Tv,
    formats: ["Pre-roll", "Mid-roll", "Pause Ads", "SSAI Stitching"],
    link: "/publishers/ctv-monetization",
    bentoClass: "bento-coral",
    label: "CTV / OTT",
  },
];

export function ChannelsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

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
    <section ref={containerRef} className="py-24 md:py-32 section-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading 
          label="Channels" 
          headline="Every screen. Every format." 
          subtext="Monetize and buy across the entire digital ecosystem through a single OpenRTB connection."
          align="center"
          className="mb-16"
        />

        <div className="grid gap-6 md:grid-cols-3">
          {channels.map((ch) => (
            <Link
              href={ch.link}
              key={ch.id}
              className={cn(
                "channel-card group bento-card flex flex-col min-h-[380px] justify-between",
                ch.bentoClass
              )}
            >
              <div>
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-md shadow-sm">
                  <ch.icon className="h-7 w-7 text-current" />
                </div>
                
                <h3 className="text-3xl font-display font-bold text-current">{ch.title}</h3>
                <span className="inline-block mt-2 font-mono text-[11px] uppercase tracking-[0.2em] font-bold opacity-80">
                  {ch.label}
                </span>

                <ul className="flex flex-col gap-3 mt-8">
                  {ch.formats.map((f) => (
                    <li key={f} className="flex items-center gap-3 font-medium opacity-90">
                      <span className="w-1.5 h-1.5 rounded-full bg-current" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex items-center gap-2 font-bold text-lg transition-all duration-300 group-hover:gap-3 opacity-90">
                Learn more
                <ArrowRight className="w-5 h-5" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
