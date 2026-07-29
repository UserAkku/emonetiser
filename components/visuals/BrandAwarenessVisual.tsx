"use client";

import { motion } from "motion/react";
import { PlayCircle, ShieldCheck, Eye, Sparkle } from "@phosphor-icons/react";

export function BrandAwarenessVisual() {
  return (
    <div className="relative w-full h-[400px] flex items-center justify-center">
      {/* Background ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="w-[300px] h-[300px] bg-[var(--color-brand-secondary)]/15 rounded-full blur-[100px]" />
      </div>

      {/* Main High-Impact Creative Mockup */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full max-w-[500px] h-[300px] rounded-2xl bg-black/60 border border-white/10 overflow-hidden shadow-2xl backdrop-blur-xl flex flex-col group"
      >
        {/* Ad Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10 bg-white/[0.03]">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-[var(--color-brand-secondary)]/20 flex items-center justify-center">
              <Sparkle weight="fill" className="text-[var(--color-brand-secondary)] w-4 h-4" />
            </div>
            <div className="flex flex-col gap-1.5">
              <div className="h-2 w-24 bg-white/20 rounded-full" />
              <div className="h-1.5 w-16 bg-white/10 rounded-full" />
            </div>
          </div>
          <div className="h-2 w-8 bg-white/10 rounded-full" />
        </div>

        {/* Ad Body (Video placeholder) */}
        <div className="flex-1 relative bg-gradient-to-br from-white/5 to-black/20 flex items-center justify-center">
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="w-16 h-16 rounded-full bg-black/40 flex items-center justify-center cursor-pointer backdrop-blur-md border border-white/20 shadow-xl z-20 group-hover:border-[var(--color-brand-secondary)]/50 transition-colors"
          >
            <PlayCircle weight="fill" className="text-white w-8 h-8 group-hover:text-[var(--color-brand-secondary)] transition-colors" />
          </motion.div>

          {/* Progress bar and CTA at bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-between z-10">
            <div className="w-full max-w-[200px] space-y-2">
              <div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
                <div className="h-full w-[45%] bg-[var(--color-brand-secondary)] rounded-full" />
              </div>
            </div>
            <div className="ml-4 h-8 px-4 rounded-full bg-[var(--color-brand-secondary)] text-black flex items-center justify-center text-xs font-semibold tracking-wide">
              Learn More
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating Badges */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="absolute top-16 -left-8 lg:-left-12 z-30 bg-[#1a1c1a]/90 backdrop-blur-xl border border-white/10 p-3.5 flex items-center gap-4 rounded-2xl shadow-2xl"
      >
        <div className="w-10 h-10 rounded-xl bg-[var(--color-brand-primary)]/20 text-[var(--color-brand-primary)] flex items-center justify-center">
          <Eye weight="fill" size={20} />
        </div>
        <div className="pr-2">
          <p className="text-[11px] uppercase tracking-wider text-white/50 mb-0.5">Viewability</p>
          <p className="text-base font-semibold text-white">98.4%</p>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="absolute bottom-16 -right-8 lg:-right-12 z-30 bg-[#1a1c1a]/90 backdrop-blur-xl border border-white/10 p-3.5 flex items-center gap-4 rounded-2xl shadow-2xl"
      >
        <div className="w-10 h-10 rounded-xl bg-[var(--color-brand-secondary)]/20 text-[var(--color-brand-secondary)] flex items-center justify-center">
          <ShieldCheck weight="fill" size={20} />
        </div>
        <div className="pr-2">
          <p className="text-[11px] uppercase tracking-wider text-white/50 mb-0.5">Environment</p>
          <p className="text-base font-semibold text-white">Brand Safe</p>
        </div>
      </motion.div>
    </div>
  );
}
