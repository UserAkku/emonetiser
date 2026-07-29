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
  accent?: "blue" | "violet" | "green" | "coral" | "neutral";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em]",
        accent === "blue" &&
          "border border-[hsl(258,85%,62%,0.2)] bg-[hsl(258,85%,62%,0.08)] text-[hsl(258,85%,62%)]",
        accent === "violet" &&
          "border border-[hsl(258,85%,62%,0.2)] bg-[hsl(258,85%,62%,0.08)] text-[hsl(258,85%,62%)]",
        accent === "green" &&
          "border border-[hsl(175,75%,40%,0.2)] bg-[hsl(175,75%,40%,0.08)] text-[hsl(175,75%,40%)]",
        accent === "coral" &&
          "border border-[hsl(16,90%,58%,0.2)] bg-[hsl(16,90%,58%,0.08)] text-[hsl(16,90%,58%)]",
        accent === "neutral" &&
          "border border-gray-200 bg-gray-50 text-muted-foreground",
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
  accent?: "blue" | "violet" | "green" | "coral";
  className?: string;
}) {
  const colorMap = {
    blue: "hsl(258,85%,62%)",
    violet: "hsl(258,85%,62%)",
    green: "hsl(175,75%,40%)",
    coral: "hsl(16,90%,58%)",
  };
  const color = colorMap[accent];
  
  return (
    <div className={cn(
      "group relative overflow-hidden rounded-2xl bg-white border p-6 flex flex-col gap-1 transition-all duration-300 hover:-translate-y-1 cursor-default",
      className
    )}
    style={{
      borderColor: `${color}25`,
      boxShadow: `0 2px 12px -4px ${color}15`,
    }}
    onMouseEnter={e => {
      (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 30px -6px ${color}25`;
      (e.currentTarget as HTMLElement).style.borderColor = `${color}40`;
    }}
    onMouseLeave={e => {
      (e.currentTarget as HTMLElement).style.boxShadow = `0 2px 12px -4px ${color}15`;
      (e.currentTarget as HTMLElement).style.borderColor = `${color}25`;
    }}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{ background: `linear-gradient(135deg, ${color}06, transparent)` }} />
      {/* Colored top bar */}
      <div className="absolute top-0 left-6 right-6 h-[3px] rounded-b-full" style={{ background: color }} />
      <span
        className="relative z-10 font-display text-4xl font-semibold tracking-tight"
        style={{ color }}
      >
        {value}
      </span>
      <span className="relative z-10 text-sm font-medium text-foreground">{label}</span>
      {sub && <span className="relative z-10 text-xs text-muted-foreground mt-1">{sub}</span>}
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
