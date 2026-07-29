import { certifications } from "@/content/certifications";

export function BadgeRow() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      {certifications.slice(0, 4).map((cert, i) => (
        <div
          key={i}
          className="flex h-8 items-center rounded border border-border bg-card/50 px-3 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
        >
          {cert.name}
        </div>
      ))}
    </div>
  );
}
