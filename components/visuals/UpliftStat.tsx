import React from "react";

import { NumberTicker } from "@/components/magicui/number-ticker";

export function UpliftStat() {
  return (
    <div className="relative flex h-[350px] w-full flex-col items-center justify-center overflow-hidden rounded-3xl bg-emerald-50 border border-emerald-200 shadow-md">
      {/* Removed Meteors as requested */}
      
      <div className="z-10 flex flex-col items-center justify-center text-center space-y-4">
        <h3 className="text-xl md:text-2xl font-mono text-slate-500 uppercase tracking-widest font-semibold">
          Average eCPM Uplift
        </h3>
        
        <div className="flex items-baseline justify-center gap-1 font-display font-bold tracking-tighter">
          <span className="text-6xl md:text-8xl text-emerald-600 drop-shadow-sm">+</span>
          <NumberTicker value={191} className="text-7xl md:text-9xl text-slate-900 drop-shadow-sm" />
          <span className="text-5xl md:text-7xl text-emerald-600 drop-shadow-sm">%</span>
        </div>
        
        <p className="max-w-md text-base md:text-lg text-slate-600 mt-4 leading-relaxed">
          Publishers migrating from Legacy Waterfall to our <strong className="text-emerald-800 font-bold">Unified Auction</strong> experience massive revenue growth through simultaneous bidding.
        </p>
      </div>
      
      {/* Glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-100/50 to-transparent pointer-events-none" />
    </div>
  );
}
