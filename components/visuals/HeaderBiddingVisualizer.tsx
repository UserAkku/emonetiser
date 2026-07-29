"use client";

import { motion, AnimatePresence } from "motion/react";
import { HandCoins, Broadcast, AppWindow, Lightning, Crown } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function HeaderBiddingVisualizer() {
  const [activeDsp, setActiveDsp] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDsp((prev) => (prev === null ? Math.floor(Math.random() * 4) : null));
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const dsps = [
    { name: "DSP 1", bid: "$3.50", delay: 0 },
    { name: "DSP 2", bid: "$1.20", delay: 0.2 },
    { name: "DSP 3", bid: "$4.10", delay: 0.1, winner: true },
    { name: "DSP 4", bid: "$2.80", delay: 0.3 },
  ];

  return (
    <div className="relative w-full h-[380px] flex items-center justify-between px-4 sm:px-12 bg-black/40 rounded-2xl overflow-hidden border border-white/5">
      {/* Publisher Node */}
      <div className="relative z-10 flex flex-col items-center gap-3">
        <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-[var(--color-brand-primary)] bg-[var(--color-brand-primary)]/10 shadow-[0_0_30px_rgba(var(--color-brand-primary),0.2)] backdrop-blur-md">
          <AppWindow className="h-8 w-8 text-[var(--color-brand-primary)]" weight="duotone" />
          
          {/* Pulse effect */}
          {activeDsp !== null && (
            <motion.div
              initial={{ scale: 0.8, opacity: 1 }}
              animate={{ scale: 2, opacity: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute inset-0 rounded-2xl border border-[var(--color-brand-primary)]"
            />
          )}
        </div>
        <span className="font-mono text-xs font-semibold tracking-widest text-[var(--color-brand-primary)] uppercase">
          Publisher
        </span>
      </div>

      {/* Connection Lines & Auction */}
      <div className="absolute left-[96px] right-[96px] top-1/2 -translate-y-1/2 h-full flex flex-col justify-center gap-12 sm:left-[144px] sm:right-[144px]">
        {dsps.map((dsp, i) => (
          <div key={i} className="relative w-full h-[2px] bg-white/5">
            {/* Animated Bid Beam */}
            <AnimatePresence>
              {activeDsp !== null && (
                <motion.div
                  initial={{ left: "100%", width: 0, opacity: 0 }}
                  animate={{ left: "0%", width: "100%", opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, delay: dsp.delay, ease: "easeOut" }}
                  className={cn(
                    "absolute top-1/2 h-[2px] -translate-y-1/2 shadow-[0_0_10px_currentColor]",
                    dsp.winner
                      ? "bg-[var(--color-brand-accent)] text-[var(--color-brand-accent)] z-10"
                      : "bg-[var(--color-brand-secondary)] text-[var(--color-brand-secondary)]"
                  )}
                />
              )}
            </AnimatePresence>
            
            {/* Bid Amount Badge */}
            <AnimatePresence>
              {activeDsp !== null && (
                <motion.div
                  initial={{ opacity: 0, y: 10, x: "-50%" }}
                  animate={{ opacity: 1, y: -20, x: "-50%" }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, delay: dsp.delay + 0.4 }}
                  className={cn(
                    "absolute left-1/2 flex items-center gap-1.5 rounded-full border bg-background px-3 py-1 font-mono text-[10px] font-bold shadow-xl",
                    dsp.winner
                      ? "border-[var(--color-brand-accent)] text-[var(--color-brand-accent)]"
                      : "border-white/10 text-white/50"
                  )}
                >
                  {dsp.winner && <Crown className="h-3 w-3" weight="fill" />}
                  {dsp.bid}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* DSP Nodes */}
      <div className="relative z-10 flex flex-col gap-6">
        {dsps.map((dsp, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className={cn(
              "relative flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border bg-background backdrop-blur-md transition-all duration-300",
              activeDsp !== null && dsp.winner
                ? "border-[var(--color-brand-accent)] shadow-[0_0_15px_rgba(var(--color-brand-accent),0.3)]"
                : activeDsp !== null
                ? "border-[var(--color-brand-secondary)] shadow-[0_0_10px_rgba(var(--color-brand-secondary),0.2)]"
                : "border-white/10"
            )}>
              <Broadcast className={cn(
                "h-4 w-4",
                activeDsp !== null && dsp.winner ? "text-[var(--color-brand-accent)]" : activeDsp !== null ? "text-[var(--color-brand-secondary)]" : "text-white/40"
              )} />
            </div>
          </div>
        ))}
        <div className="absolute -right-8 top-1/2 -translate-y-1/2 rotate-90">
          <span className="font-mono text-[10px] font-semibold tracking-[0.2em] text-white/40 uppercase whitespace-nowrap">
            Demand Partners
          </span>
        </div>
      </div>
    </div>
  );
}
