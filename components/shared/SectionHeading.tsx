import { cn } from "@/lib/utils";

interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  headline: string;
  subtext?: string;
  accent?: "publisher" | "advertiser" | "both" | "coral" | "yellow";
  align?: "left" | "center";
}

export function SectionHeading({
  label,
  headline,
  subtext,
  accent = "both",
  align = "left",
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
      {...props}
    >
      {/* Label pill - bold solid colors */}
      <span
        className={cn(
          "inline-flex items-center rounded-full px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] shadow-sm",
          accent === "publisher" && "bg-[var(--color-vibrant-violet)] text-white",
          accent === "advertiser" && "bg-[var(--color-vibrant-cyan)] text-white",
          accent === "coral" && "bg-[var(--color-vibrant-coral)] text-white",
          accent === "yellow" && "bg-[var(--color-vibrant-yellow)] text-[#111111]",
          accent === "both" && "bg-[#111111] text-white"
        )}
      >
        {label}
      </span>
      
      <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-[#111111]">
        {headline}
      </h2>
      
      {subtext && (
        <p className="max-w-[42rem] text-xl font-medium leading-relaxed text-muted-foreground">
          {subtext}
        </p>
      )}
    </div>
  );
}
