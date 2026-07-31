"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { gsap } from "@/lib/gsap";
import { cn } from "@/lib/utils";

interface DropdownItem {
  path: string;
  label: string;
  description: string;
  icon?: any;
}

interface NavDropdownProps {
  label: string;
  items: DropdownItem[];
  accent?: "publisher" | "advertiser" | "company";
}

export function NavDropdown({ label, items, accent = "company" }: NavDropdownProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout>(null);

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    if (!panelRef.current) return;
    
    gsap.to(panelRef.current, {
      height: "auto",
      opacity: 1,
      duration: 0.2,
      ease: "power2.out",
      display: "block",
    });
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      if (!panelRef.current) return;
      gsap.to(panelRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.12,
        ease: "power2.in",
        display: "none",
      });
    }, 100);
  };

  return (
    <div
      className="relative hidden lg:block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleMouseEnter}
      onBlur={handleMouseLeave}
    >
      <button
        ref={triggerRef}
        className={cn(
          "flex items-center gap-1.5 py-2 px-2 text-[13px] font-semibold uppercase tracking-[0.1em] text-slate-600 transition-all hover:text-slate-900",
          accent === "publisher" && "hover:text-emerald-700",
          accent === "advertiser" && "hover:text-blue-700"
        )}
      >
        {label}
        <ChevronDown className="h-3.5 w-3.5" />
      </button>

      <div
        ref={panelRef}
        className="absolute left-1/2 top-full -translate-x-1/2 pt-4 opacity-0"
        style={{ display: "none", height: 0 }}
      >
        <div className="w-[400px] overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-xl">
          <div className="grid gap-1">
            {items.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "group flex items-start gap-4 rounded-xl p-3 transition-colors hover:bg-slate-50",
                  accent === "publisher" && "hover:bg-emerald-50",
                  accent === "advertiser" && "hover:bg-blue-50"
                )}
              >
                {item.icon && (
                  <div className={cn(
                    "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-500 transition-colors",
                    accent === "publisher" && "group-hover:border-emerald-200 group-hover:bg-emerald-50 group-hover:text-emerald-600",
                    accent === "advertiser" && "group-hover:border-blue-200 group-hover:bg-blue-50 group-hover:text-blue-600"
                  )}>
                    <item.icon className="h-4 w-4" />
                  </div>
                )}
                <div className="flex flex-col">
                  <span className={cn(
                    "text-sm font-semibold text-slate-800",
                    accent === "publisher" && "group-hover:text-emerald-700",
                    accent === "advertiser" && "group-hover:text-blue-700"
                  )}>
                    {item.label}
                  </span>
                  <span className="text-xs text-slate-400 mt-0.5">
                    {item.description}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
