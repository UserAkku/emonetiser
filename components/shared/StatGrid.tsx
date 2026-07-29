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

const bentoClasses = [
  "bento-violet",
  "bento-yellow",
  "bento-coral",
  "bento-black"
];

export function StatGrid({ stats, accent = "both", className }: StatGridProps) {
  return (
    <div className={cn("grid gap-6 sm:grid-cols-2 lg:grid-cols-4", className)}>
      {stats.map((stat, i) => {
        const bentoClass = bentoClasses[i % bentoClasses.length];
        return (
          <div
            key={i}
            className={cn(
              "bento-card flex flex-col gap-3 justify-center min-h-[160px]",
              bentoClass
            )}
          >
            <div className="text-5xl font-bold tracking-tighter md:text-6xl">
              <CounterStat value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
            </div>
            <div className="font-bold text-lg opacity-90">{stat.label}</div>
          </div>
        );
      })}
    </div>
  );
}
