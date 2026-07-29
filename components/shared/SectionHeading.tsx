import { cn } from "@/lib/utils";

interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  headline: string;
  subtext?: string;
  accent?: "publisher" | "advertiser" | "both" | "coral";
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
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
      {...props}
    >
      {/* Label pill */}
      <span
        className={cn(
          "inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em]",
          accent === "publisher" && "text-[hsl(258,85%,62%)] bg-[hsl(258,85%,62%,0.1)] border border-[hsl(258,85%,62%,0.2)]",
          accent === "advertiser" && "text-[hsl(175,75%,40%)] bg-[hsl(175,75%,40%,0.1)] border border-[hsl(175,75%,40%,0.2)]",
          accent === "coral" && "text-[hsl(16,90%,58%)] bg-[hsl(16,90%,58%,0.1)] border border-[hsl(16,90%,58%,0.2)]",
          accent === "both" && "text-[hsl(258,85%,62%)] bg-[hsl(258,85%,62%,0.08)] border border-[hsl(258,85%,62%,0.15)]"
        )}
      >
        <span
          className="w-1.5 h-1.5 rounded-full"
          style={{
            background: accent === "advertiser"
              ? "hsl(175,75%,40%)"
              : accent === "coral"
              ? "hsl(16,90%,58%)"
              : "hsl(258,85%,62%)"
          }}
        />
        {label}
      </span>
      <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl text-foreground">
        {headline}
      </h2>
      {subtext && (
        <p className="max-w-[42rem] text-lg leading-relaxed text-muted-foreground">
          {subtext}
        </p>
      )}
    </div>
  );
}
