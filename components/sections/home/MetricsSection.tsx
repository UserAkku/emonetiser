import { stats } from "@/content/stats";
import { StatGrid } from "@/components/shared/StatGrid";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function MetricsSection() {
  return (
    <section className="py-24 md:py-32 section-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading 
          label="Performance" 
          headline="Built for speed." 
          subtext="Millisecond latency. Maximum efficiency. Our infrastructure is built to handle global scale without compromising performance."
          className="mb-16"
          accent="coral"
        />
        <StatGrid stats={stats.home} />
      </div>
    </section>
  );
}
