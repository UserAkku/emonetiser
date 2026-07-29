"use client";

import { useRef } from "react";
import Link from "next/link";
import { gsap, useGSAP } from "@/lib/gsap";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AuctionVisualizer } from "@/components/visuals/AuctionVisualizer";

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
    <section ref={containerRef} className="relative flex min-h-[90vh] items-center justify-center overflow-hidden pt-20">
      {/* Background Visualizer */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-30">
        <div className="absolute inset-0 bg-background/50 backdrop-blur-[2px] z-10" />
        <AuctionVisualizer mode="compact" className="scale-150 sm:scale-100" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-8">
          <div className="hero-line rounded-full border border-border bg-card/50 px-4 py-1.5 text-sm font-medium backdrop-blur-md">
            <span className="text-[var(--color-brand-primary)]">SSP</span> + <span className="text-[var(--color-brand-secondary)]">DSP</span>
          </div>
        </div>
        
        <h1 className="font-display text-5xl font-medium tracking-tight sm:text-7xl md:text-8xl">
          <div className="hero-line overflow-hidden">One exchange.</div>
          <div className="hero-line overflow-hidden text-muted-foreground">Both sides of the trade.</div>
        </h1>
        
        <p className="hero-line mx-auto mt-8 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          Real-time OpenRTB auctions across Web, App, and CTV. Connecting premium publishers directly with global advertisers.
        </p>
        
        <div className="hero-buttons mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/publishers/web-monetization" className={cn(buttonVariants({ size: "lg", variant: "publisher" }), "w-full sm:w-auto h-12 px-8 text-base")}>
            I'm a Publisher
          </Link>
          <Link href="/advertisers/programmatic-advertising" className={cn(buttonVariants({ size: "lg", variant: "advertiser" }), "w-full sm:w-auto h-12 px-8 text-base")}>
            I'm an Advertiser
          </Link>
        </div>
      </div>
    </section>
  );
}
