"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface FormatCardProps {
  name: string;
  desc: string;
  sizes: string;
  icon: any;
  className?: string;
  delay?: number;
}

export function PremiumFormatCard({ name, desc, sizes, icon: Icon, className, delay = 0 }: FormatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: delay }}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-3xl bg-card border border-white/5 p-8 transition-colors hover:border-[var(--color-brand-primary)]/50",
        className
      )}
    >
      {/* Home Page Style Hover Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-brand-primary)]/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/5 bg-background transition-transform duration-500 group-hover:scale-110 group-hover:border-[var(--color-brand-primary)]/30 group-hover:bg-[var(--color-brand-primary)]/10">
          <Icon className="w-8 h-8 text-muted-foreground group-hover:text-[var(--color-brand-primary)] transition-colors" weight="duotone" />
        </div>
        
        <h3 className="text-2xl font-display font-semibold text-foreground mb-3 tracking-tight group-hover:text-[var(--color-brand-primary)] transition-colors">{name}</h3>
        <p className="text-muted-foreground text-base leading-relaxed mb-8 flex-grow pr-4">{desc}</p>
        
        <div className="mt-auto pt-4">
          <div className="inline-flex items-start gap-2.5 rounded-xl border border-white/5 bg-background/50 px-4 py-2.5 transition-colors group-hover:border-[var(--color-brand-primary)]/30 group-hover:bg-background">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-primary)] opacity-50 group-hover:opacity-100 group-hover:animate-pulse shrink-0 mt-1.5" />
            <span className="text-[11px] font-mono tracking-wide text-muted-foreground group-hover:text-foreground uppercase leading-relaxed">{sizes}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
