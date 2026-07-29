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
    <div className="grid gap-5 sm:grid-cols-2">
      <div className="group relative overflow-hidden rounded-3xl border border-emerald-200 bg-emerald-50 p-8 transition-all hover:border-emerald-300 hover:shadow-md hover:-translate-y-0.5">
        <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-emerald-100 blur-3xl opacity-60 pointer-events-none" />
        <div className="relative z-10 flex flex-col items-start gap-4">
          <span className="font-mono text-xs uppercase tracking-wider text-emerald-600 font-semibold">
            For Publishers
          </span>
          <h3 className="text-xl font-semibold text-slate-900">Ready to maximize your yield?</h3>
          <Link href={publisherLink} className="mt-2 group/btn">
            <MovingBorderButton variant="primary">
              {publisherText}
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
            </MovingBorderButton>
          </Link>
        </div>
      </div>
      <div className="group relative overflow-hidden rounded-3xl border border-blue-200 bg-blue-50 p-8 transition-all hover:border-blue-300 hover:shadow-md hover:-translate-y-0.5">
        <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-blue-100 blur-3xl opacity-60 pointer-events-none" />
        <div className="relative z-10 flex flex-col items-start gap-4">
          <span className="font-mono text-xs uppercase tracking-wider text-blue-600 font-semibold">
            For Advertisers
          </span>
          <h3 className="text-xl font-semibold text-slate-900">Ready to reach premium audiences?</h3>
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
