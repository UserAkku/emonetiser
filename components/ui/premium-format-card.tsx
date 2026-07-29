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

const bentoClasses = [
  "bento-violet",
  "bento-cyan",
  "bento-coral",
  "bento-yellow",
  "bento-pink",
];

let cardIndex = 0;

export function PremiumFormatCard({ name, desc, sizes, icon: Icon, className, delay = 0, accentColor }: FormatCardProps) {
  const bentoClass = accentColor ? `bento-${accentColor}` : bentoClasses[cardIndex++ % bentoClasses.length];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: delay }}
      className={cn(
        "bento-card flex flex-col min-h-[300px]",
        bentoClass,
        className
      )}
    >
      <div className="flex flex-col h-full">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-md shadow-sm">
          <Icon className="w-7 h-7 text-current" weight="duotone" />
        </div>
        
        <h3 className="text-3xl font-display font-bold mb-3 tracking-tight">
          {name}
        </h3>
        
        <p className="text-base leading-relaxed mb-8 flex-grow opacity-90 font-medium">
          {desc}
        </p>
        
        <div className="mt-auto pt-4 border-t border-current/20">
          <div className="flex items-center gap-2.5 pt-2">
            <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
            <span className="text-[11px] font-mono tracking-wider uppercase font-bold opacity-90">
              {sizes}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
