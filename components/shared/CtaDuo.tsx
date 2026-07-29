import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { MovingBorderButton } from "@/components/ui/moving-border-button";

interface CtaDuoProps {
  publisherText?: string;
  publisherLink?: string;
  advertiserText?: string;
  advertiserLink?: string;
}

export function CtaDuo({
  publisherText = "Talk to Publisher Success",
  publisherLink = "/company/contact?role=publisher",
  advertiserText = "Talk to the Demand Desk",
  advertiserLink = "/company/contact?role=advertiser",
}: CtaDuoProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="group relative overflow-hidden rounded-2xl border border-[var(--color-brand-primary)]/20 bg-card p-8 transition-colors hover:border-[var(--color-brand-primary)]/50">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-brand-primary)]/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        <div className="relative z-10 flex flex-col items-start gap-4">
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--color-brand-primary)]">
            For Publishers
          </span>
          <h3 className="text-xl font-medium">Ready to maximize your yield?</h3>
          <Link href={publisherLink} className="mt-2 group/btn">
            <MovingBorderButton variant="primary">
              {publisherText}
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
            </MovingBorderButton>
          </Link>
        </div>
      </div>
      <div className="group relative overflow-hidden rounded-2xl border border-[var(--color-brand-secondary)]/20 bg-card p-8 transition-colors hover:border-[var(--color-brand-secondary)]/50">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-brand-secondary)]/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        <div className="relative z-10 flex flex-col items-start gap-4">
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--color-brand-secondary)]">
            For Advertisers
          </span>
          <h3 className="text-xl font-medium">Ready to reach premium audiences?</h3>
          <Link href={advertiserLink} className="mt-2 group/btn">
            <MovingBorderButton variant="secondary">
              {advertiserText}
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
            </MovingBorderButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
