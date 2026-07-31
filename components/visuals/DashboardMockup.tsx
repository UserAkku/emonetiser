"use client";

import { motion } from "motion/react";
import { ChartLineUp, CurrencyDollar, Lightning, Users } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

export function DashboardMockup() {
  return (
    <div className="relative w-full h-[380px] bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xl shadow-slate-200/50 flex flex-col">
      {/* Dashboard Content */}
      <div className="flex-1 p-6 flex flex-col gap-6 overflow-hidden relative">
        {/* Top Stats */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4">
          {[
            { label: "Revenue", value: "$124,500", trend: "+24.5%", icon: CurrencyDollar, color: "text-[var(--color-brand-primary)]" },
            { label: "eCPM", value: "$4.80", trend: "+12.2%", icon: ChartLineUp, color: "text-[var(--color-brand-secondary)]" },
            { label: "Win Rate", value: "98.4%", trend: "+2.1%", icon: Lightning, color: "text-[var(--color-brand-accent)]" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 + 0.2 }}
              className="flex flex-col gap-1 sm:gap-1.5 p-2 sm:p-3 rounded-xl bg-slate-50 border border-slate-100 min-w-0"
            >
              <div className="flex items-center justify-between">
                <stat.icon className={cn("w-3 h-3 sm:w-4 sm:h-4", stat.color)} weight="duotone" />
                <span className="text-[8px] sm:text-[10px] font-medium text-emerald-600 bg-emerald-100 px-1 sm:px-1.5 py-0.5 rounded truncate ml-1">
                  {stat.trend}
                </span>
              </div>
              <span className="text-sm sm:text-lg md:text-xl font-display font-semibold text-slate-900 mt-1 truncate" title={stat.value}>{stat.value}</span>
              <span className="text-[8px] sm:text-[10px] uppercase tracking-wider text-slate-500 font-mono truncate">{stat.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Chart Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex-1 rounded-xl bg-slate-50 border border-slate-100 relative overflow-hidden p-5 flex flex-col"
        >
          <div className="flex justify-between items-center mb-6">
            <span className="text-xs font-semibold tracking-wide text-slate-700">Yield Performance</span>
            <div className="flex gap-2 items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-primary)] animate-pulse" />
              <span className="text-[10px] text-slate-400 uppercase tracking-widest font-mono">Unified Auction</span>
            </div>
          </div>

          {/* Fake Chart Bars */}
          <div className="flex-1 flex items-end justify-between gap-3 mt-auto">
            {[40, 55, 45, 70, 65, 85, 75, 100].map((height, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${height}%` }}
                transition={{ delay: 0.6 + i * 0.1, duration: 0.8, ease: "easeOut" }}
                className="w-full bg-gradient-to-t from-emerald-100 to-emerald-400 rounded-t-sm relative group border-t border-emerald-500"
              >
                <div className="absolute inset-0 bg-white/30 rounded-t-sm opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
