import { stats } from "@/content/stats";
import { SectionHeading } from "@/components/shared/SectionHeading";

const statColors = [
  { color: "hsl(258,85%,62%)", bg: "hsl(258,85%,62%,0.08)", border: "hsl(258,85%,62%,0.2)" },
  { color: "hsl(175,75%,40%)", bg: "hsl(175,75%,40%,0.08)", border: "hsl(175,75%,40%,0.2)" },
  { color: "hsl(16,90%,58%)", bg: "hsl(16,90%,58%,0.08)", border: "hsl(16,90%,58%,0.2)" },
  { color: "hsl(290,75%,58%)", bg: "hsl(290,75%,58%,0.08)", border: "hsl(290,75%,58%,0.2)" },
];

export function MetricsSection() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading 
          label="Performance" 
          headline="Built for speed." 
          subtext="Millisecond latency. Maximum efficiency. Our infrastructure is built to handle global scale without compromising performance."
          className="mb-16"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.home.map((stat, i) => {
            const c = statColors[i % statColors.length];
            return (
              <div
                key={i}
                className="group relative flex flex-col gap-2 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "white",
                  border: `1px solid ${c.border}`,
                  boxShadow: `0 2px 12px -4px ${c.color}20`,
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 30px -6px ${c.color}30`;
                  (e.currentTarget as HTMLElement).style.background = c.bg;
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 2px 12px -4px ${c.color}20`;
                  (e.currentTarget as HTMLElement).style.background = "white";
                }}
              >
                {/* Colored top bar */}
                <div
                  className="absolute top-0 left-6 right-6 h-[3px] rounded-b-full"
                  style={{ background: c.color }}
                />
                <div
                  className="text-4xl font-semibold tracking-tighter md:text-5xl"
                  style={{ color: c.color }}
                >
                  {stat.prefix}{stat.value}{stat.suffix}
                </div>
                <div className="font-medium text-muted-foreground">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
