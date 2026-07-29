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
  accentColor?: string;
}

const defaultColors = [
  "hsl(258,85%,62%)",
  "hsl(175,75%,40%)",
  "hsl(16,90%,58%)",
  "hsl(216,90%,58%)",
  "hsl(290,75%,58%)",
];

let cardIndex = 0;

export function PremiumFormatCard({ name, desc, sizes, icon: Icon, className, delay = 0, accentColor }: FormatCardProps) {
  const color = accentColor || defaultColors[cardIndex++ % defaultColors.length];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: delay }}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-3xl bg-white p-8 transition-all duration-300 hover:-translate-y-2",
        className
      )}
      style={{
        border: `1px solid ${color}25`,
        boxShadow: `0 2px 16px -4px ${color}15`,
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 50px -10px ${color}30`;
        (e.currentTarget as HTMLElement).style.borderColor = `${color}40`;
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.boxShadow = `0 2px 16px -4px ${color}15`;
        (e.currentTarget as HTMLElement).style.borderColor = `${color}25`;
      }}
    >
      {/* Colored top stripe */}
      <div
        className="absolute top-0 left-8 right-8 h-[3px] rounded-b-full transition-all duration-300 group-hover:left-6 group-hover:right-6"
        style={{ background: color }}
      />

      {/* Hover gradient wash */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
        style={{ background: `linear-gradient(135deg, ${color}08, transparent 60%)` }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        <div
          className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl transition-all duration-500 group-hover:scale-110"
          style={{
            background: `${color}12`,
            border: `1px solid ${color}25`,
          }}
        >
          <Icon
            className="w-8 h-8 transition-colors"
            weight="duotone"
            style={{ color: color }}
          />
        </div>
        
        <h3
          className="text-2xl font-display font-semibold mb-3 tracking-tight transition-colors"
          style={{ color: "hsl(222,35%,10%)" }}
        >
          {name}
        </h3>
        <p className="text-muted-foreground text-base leading-relaxed mb-8 flex-grow pr-4">{desc}</p>
        
        <div className="mt-auto pt-4">
          <div
            className="inline-flex items-start gap-2.5 rounded-xl px-4 py-2.5 transition-all group-hover:opacity-100"
            style={{
              border: `1px solid ${color}20`,
              background: `${color}08`,
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5 animate-pulse group-hover:animate-pulse"
              style={{ background: color }}
            />
            <span
              className="text-[11px] font-mono tracking-wide uppercase leading-relaxed"
              style={{ color: color }}
            >
              {sizes}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
