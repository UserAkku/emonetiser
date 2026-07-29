import { cn } from "@/lib/utils";
import { ReactNode } from "react";

/** Glowing double-bezel wrapper card used across the design system */
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
        "bezel-outer",
        glow === "blue" && "glow-primary",
        glow === "violet" && "glow-secondary",
        className
      )}
    >
      <div className="bezel-inner p-6 md:p-8">
        {children}
      </div>
    </div>
  );
}

/** Simple glass card without double-bezel for lighter contexts */
export function GlassPanel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("glass-card rounded-2xl p-6", className)}>
      {children}
    </div>
  );
}

/** Pill-shaped eyebrow label — used sparingly (max 1 per 3 sections) */
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
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em]",
        accent === "blue" &&
          "border border-[var(--color-brand-primary)]/25 bg-[var(--color-brand-primary)]/10 text-[var(--color-brand-primary)]",
        accent === "violet" &&
          "border border-[var(--color-brand-secondary)]/25 bg-[var(--color-brand-secondary)]/10 text-[var(--color-brand-secondary)]",
        accent === "green" &&
          "border border-[var(--color-brand-accent)]/25 bg-[var(--color-brand-accent)]/10 text-[var(--color-brand-accent)]",
        accent === "neutral" &&
          "border border-white/10 bg-white/5 text-muted-foreground",
        className
      )}
    >
      {children}
    </span>
  );
}

/** Metric display tile */
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
  accent?: "blue" | "violet" | "green";
  className?: string;
}) {
  return (
    <div className={cn(
      "group relative overflow-hidden glass-card rounded-2xl p-6 flex flex-col gap-1 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:border-white/20 cursor-default",
      className
    )}>
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <span
        className={cn(
          "relative z-10 font-display text-4xl font-semibold tracking-tight transition-transform duration-300 group-hover:scale-[1.02] origin-left",
          accent === "blue" && "text-[var(--color-brand-primary)]",
          accent === "violet" && "text-[var(--color-brand-secondary)]",
          accent === "green" && "text-[var(--color-brand-accent)]"
        )}
      >
        {value}
      </span>
      <span className="relative z-10 text-sm font-medium text-foreground group-hover:text-white transition-colors duration-300">{label}</span>
      {sub && <span className="relative z-10 text-xs text-muted-foreground mt-1 group-hover:text-slate-300 transition-colors duration-300">{sub}</span>}
    </div>
  );
}

/** Section wrapper with gradient mesh */
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
        mesh && "gradient-mesh-subtle",
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
