"use client";

import React, { useRef, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";

const Node = forwardRef<HTMLDivElement, { children: React.ReactNode; className?: string; subText?: string }>(
  ({ children, className, subText }, ref) => (
    <div className="flex flex-col items-center gap-3 z-10">
      <div
        ref={ref}
        className={cn(
          "flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-background shadow-xl text-foreground font-semibold font-display text-xl transition-transform hover:scale-110",
          className
        )}
      >
        {children}
      </div>
      {subText && <span className="text-[11px] text-muted-foreground uppercase tracking-widest font-medium">{subText}</span>}
    </div>
  )
);
Node.displayName = "Node";

export function ChainCompare() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Refs for legacy chain
  const oldAdvRef = useRef<HTMLDivElement>(null);
  const oldAgyRef = useRef<HTMLDivElement>(null);
  const oldDspRef = useRef<HTMLDivElement>(null);
  const oldExcRef = useRef<HTMLDivElement>(null);
  const oldSspRef = useRef<HTMLDivElement>(null);
  const oldPubRef = useRef<HTMLDivElement>(null);

  // Refs for Emonetiser chain
  const newAdvRef = useRef<HTMLDivElement>(null);
  const newEmoRef = useRef<HTMLDivElement>(null);
  const newPubRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="relative flex w-full flex-col items-center justify-center gap-24 py-12">
      
      {/* LEGACY SUPPLY CHAIN */}
      <div className="relative flex w-full max-w-5xl flex-row items-center justify-between opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700 group">
        
        {/* Overhead Labels */}
        <div className="absolute -top-12 left-0 w-full flex justify-between px-16 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <span className="text-[10px] font-mono text-red-500 bg-red-500/10 px-2 py-1 rounded-full">-15% Rev Share</span>
          <span className="text-[10px] font-mono text-red-500 bg-red-500/10 px-2 py-1 rounded-full">-10% Tech Fee</span>
          <span className="text-[10px] font-mono text-red-500 bg-red-500/10 px-2 py-1 rounded-full">-15% Rev Share</span>
        </div>

        <Node ref={oldAdvRef} subText="Advertiser" className="h-12 w-12 text-sm text-slate-400">A</Node>
        <Node ref={oldAgyRef} subText="Agency" className="h-12 w-12 text-sm text-red-400 border-red-500/20 bg-red-500/5 group-hover:shadow-[0_0_20px_rgba(239,68,68,0.2)]">A</Node>
        <Node ref={oldDspRef} subText="DSP" className="h-12 w-12 text-sm text-red-400 border-red-500/20 bg-red-500/5 group-hover:shadow-[0_0_20px_rgba(239,68,68,0.2)]">D</Node>
        <Node ref={oldExcRef} subText="Exchange" className="h-12 w-12 text-sm text-red-400 border-red-500/20 bg-red-500/5 group-hover:shadow-[0_0_20px_rgba(239,68,68,0.2)]">E</Node>
        <Node ref={oldSspRef} subText="SSP" className="h-12 w-12 text-sm text-red-400 border-red-500/20 bg-red-500/5 group-hover:shadow-[0_0_20px_rgba(239,68,68,0.2)]">S</Node>
        <Node ref={oldPubRef} subText="Publisher" className="h-12 w-12 text-sm text-slate-400">P</Node>

        <AnimatedBeam containerRef={containerRef} fromRef={oldAdvRef} toRef={oldAgyRef} pathColor="rgba(255,255,255,0.05)" gradientStartColor="rgba(239,68,68,0)" gradientStopColor="rgba(239,68,68,1)" />
        <AnimatedBeam containerRef={containerRef} fromRef={oldAgyRef} toRef={oldDspRef} pathColor="rgba(255,255,255,0.05)" gradientStartColor="rgba(239,68,68,0)" gradientStopColor="rgba(239,68,68,1)" />
        <AnimatedBeam containerRef={containerRef} fromRef={oldDspRef} toRef={oldExcRef} pathColor="rgba(255,255,255,0.05)" gradientStartColor="rgba(239,68,68,0)" gradientStopColor="rgba(239,68,68,1)" />
        <AnimatedBeam containerRef={containerRef} fromRef={oldExcRef} toRef={oldSspRef} pathColor="rgba(255,255,255,0.05)" gradientStartColor="rgba(239,68,68,0)" gradientStopColor="rgba(239,68,68,1)" />
        <AnimatedBeam containerRef={containerRef} fromRef={oldSspRef} toRef={oldPubRef} pathColor="rgba(255,255,255,0.05)" gradientStartColor="rgba(239,68,68,0)" gradientStopColor="rgba(239,68,68,1)" />
      </div>

      {/* EMONETISER SUPPLY CHAIN */}
      <div className="relative flex w-full max-w-3xl flex-row items-center justify-between p-10 rounded-[2rem] bg-card/80 border border-[var(--color-brand-primary)]/20 shadow-[0_0_60px_rgba(var(--color-brand-primary-rgb,136,192,64),0.1)] backdrop-blur-xl group">
        
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-background border border-[var(--color-brand-primary)]/30 text-[var(--color-brand-primary)] text-[10px] font-mono px-4 py-1.5 rounded-full shadow-[0_0_20px_rgba(var(--color-brand-primary-rgb,136,192,64),0.3)] tracking-widest uppercase flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-primary)] animate-pulse" />
          The Unified Exchange
        </div>

        <Node ref={newAdvRef} subText="Advertiser" className="h-16 w-16">A</Node>
        
        <Node ref={newEmoRef} subText="Emonetiser" className="h-20 w-20 text-3xl bg-gradient-to-b from-[var(--color-brand-primary)]/20 to-[var(--color-brand-primary)]/5 border-[var(--color-brand-primary)]/50 text-[var(--color-brand-primary)] shadow-[0_0_40px_rgba(var(--color-brand-primary-rgb,136,192,64),0.4)] group-hover:scale-110 transition-transform duration-500">
          E
        </Node>
        
        <Node ref={newPubRef} subText="Publisher" className="h-16 w-16">P</Node>

        <AnimatedBeam containerRef={containerRef} fromRef={newAdvRef} toRef={newEmoRef} duration={2} pathColor="rgba(255,255,255,0.1)" gradientStartColor="rgba(136,192,64,0)" gradientStopColor="rgba(136,192,64,1)" pathWidth={4} />
        <AnimatedBeam containerRef={containerRef} fromRef={newEmoRef} toRef={newPubRef} duration={2} pathColor="rgba(255,255,255,0.1)" gradientStartColor="rgba(136,192,64,0)" gradientStopColor="rgba(136,192,64,1)" pathWidth={4} />
      </div>
    </div>
  );
}
