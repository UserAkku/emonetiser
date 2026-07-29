"use client";

import { useRef } from "react";
import Link from "next/link";
import { gsap, useGSAP } from "@/lib/gsap";
import { ArrowRight } from "lucide-react";
import { HeaderBiddingVisualizer } from "@/components/visuals/HeaderBiddingVisualizer";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;
      
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      
      tl.from(".hero-line", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        delay: 0.2,
      })
      .from(".hero-buttons", {
        y: 20,
        opacity: 0,
        duration: 0.6,
      }, "-=0.4");
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="relative flex min-h-[90vh] items-center justify-center overflow-hidden pt-20 bg-white">
      {/* Background Visualizer — subtle, behind everything */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.05] pointer-events-none">
        <HeaderBiddingVisualizer mode="compact" className="scale-150 sm:scale-125" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8 text-center mt-12">
        <div className="flex justify-center mb-10">
          <div className="hero-line rounded-full border-2 border-black bg-white px-5 py-2 text-sm font-bold shadow-[4px_4px_0px_#111]">
            <span className="text-[var(--color-vibrant-violet)]">SSP</span>
            <span className="text-black mx-2">+</span>
            <span className="text-[var(--color-vibrant-cyan)]">DSP</span>
            <span className="text-black ml-2">· One Unified Exchange</span>
          </div>
        </div>
        
        <h1 className="font-display text-5xl font-bold tracking-tight sm:text-7xl md:text-[6.5rem] leading-[1.05]">
          <div className="hero-line overflow-hidden text-black">One exchange.</div>
          <div className="hero-line overflow-hidden text-black mt-2">
            Both sides of the trade.
          </div>
        </h1>
        
        <p className="hero-line mx-auto mt-10 max-w-2xl text-xl font-medium text-gray-500 sm:text-2xl leading-relaxed">
          Real-time OpenRTB auctions across Web, App, and CTV. Connecting premium publishers directly with global advertisers.
        </p>
        
        <div className="hero-buttons mt-14 flex flex-col items-center justify-center gap-6 sm:flex-row">
          <Link
            href="/publishers/web-monetization"
            className="group relative flex items-center justify-between w-full sm:w-[280px] h-20 px-8 text-xl font-bold text-white bg-[var(--color-vibrant-violet)] rounded-[2rem] overflow-hidden transition-transform hover:-translate-y-1 shadow-[0_15px_30px_-5px_rgba(124,58,237,0.4)]"
          >
            <span>For Publishers</span>
            <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/advertisers/programmatic-advertising"
            className="group relative flex items-center justify-between w-full sm:w-[280px] h-20 px-8 text-xl font-bold text-[#111111] bg-[var(--color-vibrant-yellow)] rounded-[2rem] overflow-hidden transition-transform hover:-translate-y-1 shadow-[0_15px_30px_-5px_rgba(251,191,36,0.4)]"
          >
            <span>For Advertisers</span>
            <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Crisp stat pills below buttons */}
        <div className="hero-buttons mt-16 flex flex-wrap items-center justify-center gap-4">
          {[
            { label: "12ms Avg Latency", color: "var(--color-vibrant-violet)" },
            { label: "OpenRTB 2.6 Compliant", color: "var(--color-vibrant-cyan)" },
            { label: "Web · App · CTV", color: "var(--color-vibrant-coral)" },
          ].map((pill) => (
            <span
              key={pill.label}
              className="inline-flex items-center gap-2 rounded-full border-2 border-gray-100 bg-gray-50 px-5 py-2 text-xs font-mono font-bold uppercase tracking-wider text-black"
            >
              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: pill.color }} />
              {pill.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
