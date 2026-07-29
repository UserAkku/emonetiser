"use client";

import { useRef } from "react";
import Link from "next/link";
import { gsap, useGSAP } from "@/lib/gsap";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
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
      {/* Floating color blobs — the hero's personality */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Purple blob — top left */}
        <div
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(258,85%,62%,0.18) 0%, transparent 70%)",
            top: "-15%",
            left: "-10%",
            animation: "blob-drift 9s ease-in-out infinite",
            filter: "blur(1px)",
          }}
        />
        {/* Teal blob — bottom right */}
        <div
          className="absolute w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(175,75%,40%,0.15) 0%, transparent 70%)",
            bottom: "-10%",
            right: "-5%",
            animation: "blob-drift 11s ease-in-out infinite",
            animationDelay: "-4s",
            filter: "blur(1px)",
          }}
        />
        {/* Coral blob — center right */}
        <div
          className="absolute w-[380px] h-[380px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(16,90%,58%,0.12) 0%, transparent 70%)",
            top: "30%",
            right: "15%",
            animation: "blob-drift 13s ease-in-out infinite",
            animationDelay: "-8s",
            filter: "blur(1px)",
          }}
        />
        {/* Light grid overlay for texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(hsl(222,35%,10%) 1px, transparent 1px), linear-gradient(90deg, hsl(222,35%,10%) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Background Visualizer — subtle, behind everything */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.06]">
        <HeaderBiddingVisualizer mode="compact" className="scale-150 sm:scale-100" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-8">
          <div className="hero-line rounded-full border border-[var(--color-brand-primary)]/20 bg-[var(--color-brand-primary)]/8 px-4 py-1.5 text-sm font-medium">
            <span className="text-[var(--color-brand-primary)]">SSP</span>
            <span className="text-muted-foreground mx-1.5">+</span>
            <span className="text-[var(--color-brand-secondary)]">DSP</span>
            <span className="text-muted-foreground ml-1.5">· One Unified Exchange</span>
          </div>
        </div>
        
        <h1 className="font-display text-5xl font-semibold tracking-tight sm:text-7xl md:text-8xl">
          <div className="hero-line overflow-hidden text-foreground">One exchange.</div>
          <div className="hero-line overflow-hidden">
            <span className="text-gradient">Both sides of the trade.</span>
          </div>
        </h1>
        
        <p className="hero-line mx-auto mt-8 max-w-2xl text-lg text-muted-foreground sm:text-xl leading-relaxed">
          Real-time OpenRTB auctions across Web, App, and CTV. Connecting premium publishers directly with global advertisers.
        </p>
        
        <div className="hero-buttons mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/publishers/web-monetization"
            className="group relative inline-flex items-center justify-center w-full sm:w-auto h-13 px-8 text-base font-semibold text-white rounded-xl overflow-hidden transition-all hover:shadow-lg hover:shadow-[var(--color-brand-primary)]/30 hover:-translate-y-0.5"
            style={{ background: "linear-gradient(135deg, hsl(258,85%,62%), hsl(275,85%,60%))" }}
          >
            <span className="relative z-10">I&apos;m a Publisher</span>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ background: "linear-gradient(135deg, hsl(258,85%,55%), hsl(275,85%,53%))" }} />
          </Link>
          <Link
            href="/advertisers/programmatic-advertising"
            className="group relative inline-flex items-center justify-center w-full sm:w-auto h-13 px-8 text-base font-semibold text-white rounded-xl overflow-hidden transition-all hover:shadow-lg hover:shadow-[var(--color-brand-secondary)]/30 hover:-translate-y-0.5"
            style={{ background: "linear-gradient(135deg, hsl(175,75%,40%), hsl(196,80%,42%))" }}
          >
            <span className="relative z-10">I&apos;m an Advertiser</span>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ background: "linear-gradient(135deg, hsl(175,75%,34%), hsl(196,80%,36%))" }} />
          </Link>
        </div>

        {/* Floating stat pills below buttons */}
        <div className="hero-buttons mt-12 flex flex-wrap items-center justify-center gap-3">
          {[
            { label: "12ms Avg Latency", color: "hsl(258,85%,62%)" },
            { label: "OpenRTB 2.6 Compliant", color: "hsl(175,75%,40%)" },
            { label: "Web · App · CTV", color: "hsl(16,90%,58%)" },
          ].map((pill) => (
            <span
              key={pill.label}
              className="inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-mono font-medium uppercase tracking-wider"
              style={{
                borderColor: pill.color + "30",
                backgroundColor: pill.color + "0D",
                color: pill.color,
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: pill.color }} />
              {pill.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
