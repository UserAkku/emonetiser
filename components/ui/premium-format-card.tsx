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

const cardColors = [
  { bg: "bg-emerald-50 border-emerald-200 hover:border-emerald-300", icon: "bg-emerald-100 text-emerald-600", dot: "bg-emerald-500", tag: "border-emerald-200 bg-white text-emerald-700" },
  { bg: "bg-blue-50 border-blue-200 hover:border-blue-300", icon: "bg-blue-100 text-blue-600", dot: "bg-blue-500", tag: "border-blue-200 bg-white text-blue-700" },
  { bg: "bg-violet-50 border-violet-200 hover:border-violet-300", icon: "bg-violet-100 text-violet-600", dot: "bg-violet-500", tag: "border-violet-200 bg-white text-violet-700" },
  { bg: "bg-amber-50 border-amber-200 hover:border-amber-300", icon: "bg-amber-100 text-amber-600", dot: "bg-amber-500", tag: "border-amber-200 bg-white text-amber-700" },
  { bg: "bg-rose-50 border-rose-200 hover:border-rose-300", icon: "bg-rose-100 text-rose-600", dot: "bg-rose-500", tag: "border-rose-200 bg-white text-rose-700" },
];

let colorIndex = 0;

export function PremiumFormatCard({ name, desc, sizes, icon: Icon, className, delay = 0 }: FormatCardProps) {
  const c = cardColors[colorIndex % cardColors.length];
  colorIndex++;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: delay }}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-3xl border p-8 transition-all hover:-translate-y-1 hover:shadow-md",
        c.bg,
        className
      )}
    >
      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        <div className={cn("mb-6 flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110", c.icon)}>
          <Icon className="w-7 h-7" weight="duotone" />
        </div>
        
        <h3 className="text-2xl font-display font-semibold text-slate-900 mb-3 tracking-tight">{name}</h3>
        <p className="text-slate-500 text-base leading-relaxed mb-8 flex-grow">{desc}</p>
        
        <div className="mt-auto pt-4">
          <div className={cn("inline-flex items-start gap-2.5 rounded-xl border px-4 py-2.5", c.tag)}>
            <span className={cn("w-1.5 h-1.5 rounded-full shrink-0 mt-1.5 animate-pulse", c.dot)} />
            <span className="text-[11px] font-mono tracking-wide uppercase leading-relaxed">{sizes}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
