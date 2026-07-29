import { cn } from "@/lib/utils";

interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  headline: string;
  subtext?: string;
  accent?: "publisher" | "advertiser" | "both";
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
      <div className="flex items-center gap-2">
        <span
          className={cn(
            "h-px w-6",
            accent === "publisher" && "bg-[var(--color-brand-primary)]",
            accent === "advertiser" && "bg-[var(--color-brand-secondary)]",
            accent === "both" && "bg-gradient-to-r from-[var(--color-brand-primary)] to-[var(--color-brand-secondary)]"
          )}
        />
        <span className="font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {label}
        </span>
      </div>
      <h2 className="font-display text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl">
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
