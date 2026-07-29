"use client";

import React, { useRef, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import { User, Browser, Database, Users, PaperPlaneRight } from "@phosphor-icons/react";

const Node = forwardRef<HTMLDivElement, { children?: React.ReactNode; className?: string; title: string; icon: React.ReactNode; highlighted?: boolean }>(
  ({ className, title, icon, highlighted }, ref) => (
    <div className="flex flex-col items-center z-10 w-32 relative">
      <div
        ref={ref}
        className={cn(
          "flex h-16 w-16 items-center justify-center rounded-2xl border transition-all duration-500 shadow-xl",
          highlighted 
            ? "bg-[var(--color-brand-secondary)]/20 border-[var(--color-brand-secondary)]/50 hover:-translate-y-2 scale-110" 
            : "glass-panel bg-background hover:-translate-y-1 border-white/10 hover:border-white/30",
          className
        )}
      >
        {icon}
      </div>
      <span className={cn(
        "mt-4 text-sm font-sans text-center transition-colors",
        highlighted ? "font-bold text-[var(--color-brand-secondary)]" : "font-medium text-white/80"
      )}>
        {title}
      </span>
    </div>
  )
);
Node.displayName = "Node";

export function RetargetingBeam() {
  const containerRef = useRef<HTMLDivElement>(null);
  const node1Ref = useRef<HTMLDivElement>(null);
  const node2Ref = useRef<HTMLDivElement>(null);
  const node3Ref = useRef<HTMLDivElement>(null);
  const node4Ref = useRef<HTMLDivElement>(null);
  const node5Ref = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full relative">
      {/* Desktop view */}
      <div ref={containerRef} className="hidden md:flex relative w-full max-w-5xl mx-auto items-start justify-between py-12 px-4">
        <Node ref={node1Ref} title="User Visits" icon={<User className="w-8 h-8 text-white/70" />} />
        <Node ref={node2Ref} title="Pixel Fires" icon={<Browser className="w-8 h-8 text-white/70" />} />
        <Node ref={node3Ref} title="Segment Built" icon={<Database className="w-8 h-8 text-white/70" />} />
        <Node ref={node4Ref} title="Matched on Exchange" icon={<Users className="w-8 h-8 text-[var(--color-brand-secondary)]" />} highlighted />
        <Node ref={node5Ref} title="Ad Delivered" icon={<PaperPlaneRight className="w-8 h-8 text-white/70" />} />

        {/* Beams */}
        <AnimatedBeam containerRef={containerRef} fromRef={node1Ref} toRef={node2Ref} pathColor="rgba(255,255,255,0.1)" gradientStartColor="rgba(255,255,255,0.4)" gradientStopColor="rgba(255,255,255,0.4)" curvature={0} strokeWidth={2} duration={2} />
        <AnimatedBeam containerRef={containerRef} fromRef={node2Ref} toRef={node3Ref} pathColor="rgba(255,255,255,0.1)" gradientStartColor="rgba(255,255,255,0.4)" gradientStopColor="rgba(255,255,255,0.4)" curvature={0} strokeWidth={2} duration={2} delay={1} />
        <AnimatedBeam containerRef={containerRef} fromRef={node3Ref} toRef={node4Ref} pathColor="rgba(255,255,255,0.1)" gradientStartColor="rgba(255,255,255,0.4)" gradientStopColor="var(--color-brand-secondary)" curvature={0} strokeWidth={3} duration={2} delay={2} />
        <AnimatedBeam containerRef={containerRef} fromRef={node4Ref} toRef={node5Ref} pathColor="rgba(255,255,255,0.1)" gradientStartColor="var(--color-brand-secondary)" gradientStopColor="rgba(255,255,255,0.4)" curvature={0} strokeWidth={2} duration={2} delay={3} />
      </div>

      {/* Mobile view */}
      <div className="flex flex-col gap-6 md:hidden px-4">
        {[
          { title: 'User Visits', icon: User },
          { title: 'Pixel Fires', icon: Browser },
          { title: 'Segment Built', icon: Database },
          { title: 'Matched on Exchange', icon: Users, highlighted: true },
          { title: 'Ad Delivered', icon: PaperPlaneRight }
        ].map((step, i) => (
          <div key={i} className={cn(
            "p-4 rounded-xl border flex items-center gap-4 transition-all duration-300",
            step.highlighted ? "bg-[var(--color-brand-secondary)]/10 border-[var(--color-brand-secondary)]/50 text-[var(--color-brand-secondary)]" : "glass-panel border-white/10 text-white"
          )}>
            <div className={cn("font-mono text-sm opacity-50", step.highlighted && "text-[var(--color-brand-secondary)] opacity-80")}>0{i+1}</div>
            <step.icon className="w-6 h-6" />
            <div className="font-bold">{step.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
