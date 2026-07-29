"use client";

import React, { useRef, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import { Desktop, DeviceMobile, Television } from "@phosphor-icons/react";

const Node = forwardRef<HTMLDivElement, { children?: React.ReactNode; className?: string; time: string; title: string; desc: string; icon: React.ReactNode; colorClass: string }>(
  ({ children, className, time, title, desc, icon, colorClass }, ref) => (
    <div className="flex flex-col items-center z-10 w-full max-w-[240px]">
      <div
        ref={ref}
        className={cn(
          "flex h-24 w-24 items-center justify-center rounded-full glass-panel border bg-background shadow-xl transition-transform hover:-translate-y-2 hover:shadow-2xl duration-500",
          className
        )}
      >
        {icon}
      </div>
      <div className="mt-8 flex flex-col items-center text-center">
        <span className={cn("font-mono text-sm uppercase tracking-wider mb-2", colorClass)}>{time}</span>
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-slate-400 text-sm font-sans leading-relaxed">{desc}</p>
      </div>
    </div>
  )
);
Node.displayName = "Node";

export function JourneyBeam() {
  const containerRef = useRef<HTMLDivElement>(null);
  const node1Ref = useRef<HTMLDivElement>(null);
  const node2Ref = useRef<HTMLDivElement>(null);
  const node3Ref = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="relative flex w-full flex-col items-center justify-center py-12 px-4 md:px-12">
      
      <div className="relative flex w-full max-w-5xl flex-col md:flex-row items-center md:items-start justify-between gap-16 md:gap-8">
        
        <Node 
          ref={node1Ref} 
          time="Morning" 
          title="Web Research" 
          desc="Reaching professionals on desktop and mobile web during early hours."
          colorClass="text-[var(--color-brand-primary)]"
          icon={<Desktop className="w-10 h-10 text-[var(--color-brand-primary)]" />}
          className="border-[var(--color-brand-primary)]/30 hover:shadow-[0_0_40px_rgba(var(--color-brand-primary-rgb,136,192,64),0.2)]"
        />
        
        <Node 
          ref={node2Ref} 
          time="Afternoon" 
          title="App Browsing" 
          desc="Engaging users in high-attention mobile gaming and utility environments."
          colorClass="text-[var(--color-brand-secondary)]"
          icon={<DeviceMobile className="w-10 h-10 text-[var(--color-brand-secondary)]" />}
          className="border-[var(--color-brand-secondary)]/30 hover:shadow-[0_0_40px_rgba(var(--color-brand-secondary-rgb,56,189,248),0.2)]"
        />
        
        <Node 
          ref={node3Ref} 
          time="Evening" 
          title="CTV Streaming" 
          desc="High-impact brand messaging on the biggest screen in the house."
          colorClass="text-[var(--color-brand-accent)]"
          icon={<Television className="w-10 h-10 text-[var(--color-brand-accent)]" />}
          className="border-[var(--color-brand-accent)]/30 hover:shadow-[0_0_40px_rgba(var(--color-brand-accent-rgb,250,204,21),0.2)]"
        />

      </div>

      {/* Animated Beams connecting the nodes (only visible on md+ screens where it flows horizontally) */}
      <div className="hidden md:block">
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={node1Ref}
          toRef={node2Ref}
          pathColor="rgba(255,255,255,0.05)"
          gradientStartColor="var(--color-brand-primary)"
          gradientStopColor="var(--color-brand-secondary)"
          curvature={0}
          duration={3}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={node2Ref}
          toRef={node3Ref}
          pathColor="rgba(255,255,255,0.05)"
          gradientStartColor="var(--color-brand-secondary)"
          gradientStopColor="var(--color-brand-accent)"
          curvature={0}
          duration={3}
          delay={1.5}
        />
      </div>
    </div>
  );
}
