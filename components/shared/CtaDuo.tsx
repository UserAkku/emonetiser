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
    <div className="grid gap-6 sm:grid-cols-2">
      {/* Publisher Block */}
      <div className="bento-card bento-pink group flex flex-col items-start gap-4 p-10 min-h-[280px]">
        <span className="inline-block rounded-full bg-black/20 px-4 py-1.5 font-mono text-xs uppercase tracking-wider font-bold">
          For Publishers
        </span>
        <h3 className="text-3xl font-display font-bold mt-2 leading-tight">Ready to maximize your yield?</h3>
        
        <Link href={publisherLink} className="mt-auto group/btn flex items-center gap-2 bg-white text-[#EC4899] px-6 py-3.5 rounded-xl font-bold text-lg hover:shadow-lg transition-all">
          {publisherText}
          <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
        </Link>
      </div>

      {/* Advertiser Block */}
      <div className="bento-card bento-cyan group flex flex-col items-start gap-4 p-10 min-h-[280px]">
        <span className="inline-block rounded-full bg-black/20 px-4 py-1.5 font-mono text-xs uppercase tracking-wider font-bold">
          For Advertisers
        </span>
        <h3 className="text-3xl font-display font-bold mt-2 leading-tight">Ready to reach premium audiences?</h3>
        
        <Link href={advertiserLink} className="mt-auto group/btn flex items-center gap-2 bg-white text-[#06B6D4] px-6 py-3.5 rounded-xl font-bold text-lg hover:shadow-lg transition-all">
          {advertiserText}
          <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
