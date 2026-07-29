import { cn } from "@/lib/utils";
import { ReactNode } from "react";

/** Glowing double-bezel wrapper card is removed, replaced with solid Bento Block */
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
        "bento-card",
        glow === "blue" ? "bento-cyan" : "bento-violet",
        className
      )}
    >
      {children}
    </div>
  );
}

/** Simple glass card replaced with crisp white bento block */
export function GlassPanel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("bento-card bento-white", className)}>
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
  accent?: "blue" | "violet" | "green" | "coral" | "neutral";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] shadow-sm",
        accent === "blue" && "bg-[var(--color-vibrant-cyan)] text-white",
        accent === "violet" && "bg-[var(--color-vibrant-violet)] text-white",
        accent === "green" && "bg-[#10B981] text-white",
        accent === "coral" && "bg-[var(--color-vibrant-coral)] text-white",
        accent === "neutral" && "bg-[#111111] text-white",
        className
      )}
    >
      {children}
    </span>
  );
}

/** Metric display tile — solid bento box */
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
  accent?: "blue" | "violet" | "green" | "coral";
  className?: string;
}) {
  return (
    <div className={cn(
      "bento-card flex flex-col gap-1 cursor-default justify-center min-h-[140px]",
      accent === "blue" && "bento-cyan",
      accent === "violet" && "bento-violet",
      accent === "green" && "bento-black",
      accent === "coral" && "bento-coral",
      className
    )}>
      <span className="relative z-10 font-display text-5xl font-bold tracking-tight mb-2">
        {value}
      </span>
      <span className="relative z-10 text-[15px] font-bold opacity-90">{label}</span>
      {sub && <span className="relative z-10 text-xs mt-1 font-medium opacity-70">{sub}</span>}
    </div>
  );
}

/** Section wrapper with gradient mesh removed */
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
        "relative py-24 md:py-32 section-white",
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
