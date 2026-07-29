"use client";

import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { formatNumber } from "@/lib/utils";

interface CounterStatProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}

export function CounterStat({
  value,
  prefix = "",
  suffix = "",
  duration = 2,
}: CounterStatProps) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (!nodeRef.current) return;

      if (prefersReducedMotion) {
        nodeRef.current.textContent = `${prefix}${formatNumber(value)}${suffix}`;
        return;
      }

      const isDecimal = value % 1 !== 0;
      const proxy = { val: 0 };

      gsap.to(proxy, {
        val: value,
        duration: duration,
        ease: "power2.out",
        scrollTrigger: {
          trigger: nodeRef.current,
          start: "top 90%",
          once: true,
        },
        onUpdate: () => {
          if (nodeRef.current) {
            const formatted = isDecimal
              ? proxy.val.toFixed(1)
              : Math.floor(proxy.val).toString();
            nodeRef.current.textContent = `${prefix}${formatted}${suffix}`;
          }
        },
      });
    },
    { dependencies: [value, prefix, suffix, duration, prefersReducedMotion] }
  );

  return (
    <span ref={nodeRef} className="font-mono tabular-nums tracking-tight">
      {/* Fallback for SSR / before JS loads */}
      {prefix}0{suffix}
    </span>
  );
}
