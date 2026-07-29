import React from "react";

import { NumberTicker } from "@/components/magicui/number-ticker";

export function UpliftStat() {
  return (
    <div className="relative flex h-[350px] w-full flex-col items-center justify-center overflow-hidden rounded-3xl bg-card border border-[var(--color-brand-primary)]/20 shadow-2xl">
      {/* Removed Meteors as requested */}
      
      <div className="z-10 flex flex-col items-center justify-center text-center space-y-4">
        <h3 className="text-xl md:text-2xl font-mono text-muted-foreground uppercase tracking-widest">
          Average eCPM Uplift
        </h3>
        
        <div className="flex items-baseline justify-center gap-1 font-display font-bold tracking-tighter">
          <span className="text-6xl md:text-8xl text-[var(--color-brand-primary)] drop-shadow-[0_0_15px_rgba(var(--color-brand-primary),0.5)]">+</span>
          <NumberTicker value={191} className="text-7xl md:text-9xl text-white drop-shadow-lg" />
          <span className="text-5xl md:text-7xl text-[var(--color-brand-primary)] drop-shadow-[0_0_15px_rgba(var(--color-brand-primary),0.5)]">%</span>
        </div>
        
        <p className="max-w-md text-base md:text-lg text-muted-foreground mt-4 leading-relaxed">
          Publishers migrating from Legacy Waterfall to our <strong className="text-white font-medium">Unified Auction</strong> experience massive revenue growth through simultaneous bidding.
        </p>
      </div>
      
      {/* Glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-primary)]/10 to-transparent pointer-events-none" />
    </div>
  );
}
