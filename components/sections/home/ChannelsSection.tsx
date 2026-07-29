"use client";

import { useRef } from "react";
import Link from "next/link";
import { gsap, useGSAP } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Globe, Smartphone, Tv } from "lucide-react";

const channels = [
  {
    id: "web",
    title: "Web",
    icon: Globe,
    formats: ["Display", "Native", "In-stream Video", "Out-stream Video"],
    link: "/publishers/web-monetization",
    accentColor: "hsl(258,85%,62%)",
    accentBg: "hsl(258,85%,62%,0.08)",
    accentBorder: "hsl(258,85%,62%,0.25)",
    accentShadow: "hsl(258,85%,62%,0.2)",
    label: "Publisher SSP",
  },
  {
    id: "app",
    title: "Mobile App",
    icon: Smartphone,
    formats: ["Rewarded Video", "Interstitial", "Banner", "Native"],
    link: "/publishers/app-monetization",
    accentColor: "hsl(175,75%,40%)",
    accentBg: "hsl(175,75%,40%,0.08)",
    accentBorder: "hsl(175,75%,40%,0.25)",
    accentShadow: "hsl(175,75%,40%,0.2)",
    label: "App Monetisation",
  },
  {
    id: "ctv",
    title: "Connected TV",
    icon: Tv,
    formats: ["Pre-roll", "Mid-roll", "Pause Ads", "SSAI Stitching"],
    link: "/publishers/ctv-monetization",
    accentColor: "hsl(16,90%,58%)",
    accentBg: "hsl(16,90%,58%,0.08)",
    accentBorder: "hsl(16,90%,58%,0.25)",
    accentShadow: "hsl(16,90%,58%,0.2)",
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
    <section ref={containerRef} className="py-24 md:py-32" style={{ background: "var(--section-purple)" }}>
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
              className="channel-card group relative flex flex-col overflow-hidden rounded-3xl bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              style={{
                border: `1px solid ${ch.accentBorder}`,
                boxShadow: `0 2px 12px -4px ${ch.accentShadow}`,
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 50px -10px ${ch.accentShadow}`;
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = `0 2px 12px -4px ${ch.accentShadow}`;
              }}
            >
              {/* Colorful gradient wash on hover */}
              <div
                className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(135deg, ${ch.accentBg}, transparent 60%)` }}
              />

              {/* Colored top accent bar */}
              <div
                className="absolute top-0 left-8 right-8 h-[3px] rounded-b-full"
                style={{ background: ch.accentColor }}
              />

              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-6 flex items-center gap-4">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110"
                    style={{ background: ch.accentBg, border: `1px solid ${ch.accentBorder}` }}
                  >
                    <ch.icon className="h-6 w-6" style={{ color: ch.accentColor }} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{ch.title}</h3>
                    <span
                      className="text-[10px] font-mono uppercase tracking-widest"
                      style={{ color: ch.accentColor }}
                    >
                      {ch.label}
                    </span>
                  </div>
                </div>

                {/* Format list */}
                <ul className="flex-1 flex flex-col gap-2.5 mt-2">
                  {ch.formats.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                      <span
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: ch.accentColor }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Arrow */}
                <div
                  className="mt-8 flex items-center gap-1.5 text-sm font-semibold transition-all duration-300 group-hover:gap-3"
                  style={{ color: ch.accentColor }}
                >
                  Learn more
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
                    <path d="M3 8h10m0 0-3.5-3.5M13 8l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
