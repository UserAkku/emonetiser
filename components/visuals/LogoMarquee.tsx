"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "@/lib/gsap";
import { certifications } from "@/content/certifications";
import { useReducedMotion } from "@/lib/use-reduced-motion";

export function LogoMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (!trackRef.current || prefersReducedMotion) return;

      const track = trackRef.current;
      const items = Array.from(track.children);
      
      // Clone items to create seamless loop
      items.forEach((item) => {
        const clone = item.cloneNode(true);
        track.appendChild(clone);
      });

      const totalWidth = track.scrollWidth / 2;

      const tween = gsap.to(track, {
        x: -totalWidth,
        duration: 30,
        ease: "none",
        repeat: -1,
      });

      const container = containerRef.current;
      if (container) {
        container.addEventListener("mouseenter", () => tween.pause());
        container.addEventListener("mouseleave", () => tween.play());
        container.addEventListener("focusin", () => tween.pause());
        container.addEventListener("focusout", () => tween.play());
      }

      return () => {
        tween.kill();
      };
    },
    { dependencies: [prefersReducedMotion] }
  );

  return (
    <div
      ref={containerRef}
      className="relative flex w-full overflow-hidden border-y border-border/50 bg-card/30 py-6"
    >
      <div className="absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-background to-transparent sm:w-24" />
      <div className="absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-background to-transparent sm:w-24" />
      
      <div
        ref={trackRef}
        className="flex w-fit shrink-0 items-center gap-12 px-6 sm:gap-24"
      >
        {certifications.map((cert, idx) => (
          <div key={idx} className="flex shrink-0 items-center justify-center transition-all">
            {cert.placeholder ? (
              <div className="group flex h-12 items-center gap-3 rounded-full border border-slate-200 bg-white px-6 font-mono text-[11px] uppercase tracking-widest text-slate-500 shadow-sm transition-all hover:border-emerald-300 hover:text-emerald-700 hover:shadow-md hover:bg-emerald-50">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 opacity-50 group-hover:opacity-100 group-hover:animate-pulse" />
                {cert.name}
              </div>
            ) : (
              <div className="relative h-12 w-32">
                <Image
                  src={cert.logoPath}
                  alt={cert.name}
                  fill
                  className="object-contain"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
