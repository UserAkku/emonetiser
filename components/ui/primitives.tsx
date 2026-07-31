import { cn } from "@/lib/utils";
import { ReactNode } from "react";

/** Card with subtle border and shadow for light theme */
export function GlassCard({
  children,
  className,
  glow,
}: {
  children: ReactNode;
  className?: string;
  glow?: "blue" | "violet" | "none";
}) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-slate-200 bg-white shadow-sm",
        glow === "blue" && "shadow-[0_0_30px_-6px_rgba(34,211,238,0.3)]",
        glow === "violet" && "shadow-[0_0_30px_-6px_rgba(139,92,246,0.3)]",
        className
      )}
    >
      <div className="p-6 md:p-8">
        {children}
      </div>
    </div>
  );
}

/** Simple panel card — white with light border */
export function GlassPanel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("rounded-2xl border border-slate-200 bg-white p-6 shadow-sm", className)}>
      {children}
    </div>
  );
}

/** Pill-shaped eyebrow label */
export function Eyebrow({
  children,
  accent = "blue",
  className,
}: {
  children: ReactNode;
  accent?: "blue" | "violet" | "green" | "neutral";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em]",
        accent === "blue" &&
          "border border-blue-200 bg-blue-50 text-blue-600",
        accent === "violet" &&
          "border border-violet-200 bg-violet-50 text-violet-600",
        accent === "green" &&
          "border border-emerald-200 bg-emerald-50 text-emerald-600",
        accent === "neutral" &&
          "border border-slate-200 bg-slate-50 text-slate-500",
        className
      )}
    >
      {children}
    </span>
  );
}

/** Metric display tile — colorful on white */
export function MetricTile({
  value,
  label,
  sub,
  accent = "blue",
  className,
}: {
  value: React.ReactNode;
  label: string;
  sub?: string;
  accent?: "blue" | "violet" | "green" | "amber" | "rose" | "sky";
  className?: string;
}) {
  const colors = {
    blue: {
      bg: "bg-blue-50 border-blue-200 hover:border-blue-300",
      value: "text-blue-600",
    },
    violet: {
      bg: "bg-violet-50 border-violet-200 hover:border-violet-300",
      value: "text-violet-600",
    },
    green: {
      bg: "bg-emerald-50 border-emerald-200 hover:border-emerald-300",
      value: "text-emerald-600",
    },
    amber: {
      bg: "bg-amber-50 border-amber-200 hover:border-amber-300",
      value: "text-amber-600",
    },
    rose: {
      bg: "bg-rose-50 border-rose-200 hover:border-rose-300",
      value: "text-rose-600",
    },
    sky: {
      bg: "bg-sky-50 border-sky-200 hover:border-sky-300",
      value: "text-sky-600",
    },
  };

  const c = colors[accent] || colors.blue;

  return (
    <div className={cn(
      "group relative overflow-hidden rounded-2xl border p-6 flex flex-col gap-1 transition-all duration-300 hover:-translate-y-1 cursor-default",
      c.bg,
      className
    )}>
      <span
        className={cn(
          "relative z-10 font-display text-4xl font-bold tracking-tight mb-2",
          c.value
        )}
      >
        {value}
      </span>
      <span className="relative z-10 text-sm font-semibold text-slate-700">{label}</span>
      {sub && <span className="relative z-10 text-xs text-slate-400 mt-1 uppercase tracking-widest font-mono">{sub}</span>}
    </div>
  );
}

/** Section wrapper */
export function PageSection({
  children,
  className,
  mesh = false,
  id,
}: {
  children: ReactNode;
  className?: string;
  mesh?: boolean;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-24 md:py-32",
        mesh && "gradient-mesh",
        className
      )}
    >
      {children}
    </section>
  );
}

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto max-w-7xl px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}
