import { cn } from "@/lib/utils";
import { CounterStat } from "@/components/visuals/CounterStat";

export interface StatItem {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

interface StatGridProps {
  stats: StatItem[];
  accent?: "publisher" | "advertiser" | "both";
  className?: string;
}

export function StatGrid({ stats, accent = "both", className }: StatGridProps) {
  return (
    <div className={cn("grid gap-4 sm:grid-cols-2 lg:grid-cols-4", className)}>
      {stats.map((stat, i) => (
        <div
          key={i}
          className={cn(
            "flex flex-col gap-2 rounded-2xl border bg-card p-6 transition-colors",
            accent === "publisher" && "hover:border-[var(--color-brand-primary)]/50",
            accent === "advertiser" && "hover:border-[var(--color-brand-secondary)]/50",
            accent === "both" && "hover:border-border/80"
          )}
        >
          <div
            className={cn(
              "text-4xl font-semibold tracking-tighter md:text-5xl",
              accent === "publisher" && "text-[var(--color-brand-primary)]",
              accent === "advertiser" && "text-[var(--color-brand-secondary)]",
              accent === "both" && "text-foreground"
            )}
          >
            <CounterStat value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
          </div>
          <div className="font-medium text-muted-foreground">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
