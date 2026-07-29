import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FinalCtaSection() {
  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "linear-gradient(135deg, hsl(258,85%,58%) 0%, hsl(216,90%,55%) 40%, hsl(175,75%,40%) 80%, hsl(175,75%,36%) 100%)" }}
    >
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute w-96 h-96 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%)",
            top: "-20%",
            right: "-10%",
          }}
        />
        <div
          className="absolute w-72 h-72 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)",
            bottom: "-15%",
            left: "5%",
          }}
        />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/60 mb-4">Get Started</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-white tracking-tight mb-6">
            Join the exchange.
          </h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto leading-relaxed">
            Whether you&apos;re monetizing premium inventory or reaching high-value audiences — start today.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 max-w-3xl mx-auto">
          {/* Publisher CTA */}
          <Link
            href="/company/contact?role=publisher"
            className="group relative flex flex-col gap-4 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/25 p-8 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/20"
          >
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-white/60">For Publishers</span>
              <h3 className="text-xl font-semibold text-white mt-2">Ready to maximize your yield?</h3>
            </div>
            <div className="flex items-center gap-2 text-white font-semibold text-sm group-hover:gap-3 transition-all">
              Talk to Publisher Success
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>

          {/* Advertiser CTA */}
          <Link
            href="/company/contact?role=advertiser"
            className="group relative flex flex-col gap-4 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/25 p-8 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/20"
          >
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-white/60">For Advertisers</span>
              <h3 className="text-xl font-semibold text-white mt-2">Ready to reach premium audiences?</h3>
            </div>
            <div className="flex items-center gap-2 text-white font-semibold text-sm group-hover:gap-3 transition-all">
              Talk to the Demand Desk
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
