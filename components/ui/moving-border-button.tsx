import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface MovingBorderButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  href?: string;
}

export function MovingBorderButton({
  children,
  variant = "primary",
  className,
  href,
  ...props
}: MovingBorderButtonProps) {
  const isPrimary = variant === "primary";
  
  const content = (
    <>
      <span
        className={cn(
          "absolute inset-[-1000%] animate-[spin_3s_linear_infinite]",
          isPrimary
            ? "bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,var(--color-brand-primary)_50%,transparent_100%)] opacity-100"
            : "bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,var(--color-brand-secondary)_50%,transparent_100%)] opacity-60"
        )}
      />
      <span
        className={cn(
          "inline-flex h-full w-full items-center justify-center rounded-full px-8 py-3 text-[15px] font-semibold backdrop-blur-3xl transition-colors gap-2",
          isPrimary
            ? "bg-background text-white group-hover:bg-background/80"
            : "bg-card text-white group-hover:bg-background"
        )}
      >
        {children}
      </span>
    </>
  );

  const wrapperClass = cn(
    "group relative inline-flex h-14 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary)] focus:ring-offset-2 focus:ring-offset-background transition-transform active:scale-95 shadow-[0_0_20px_rgba(var(--color-brand-primary-rgb,0,0,0),0.2)]",
    className
  );

  if (href) {
    return (
      <Link href={href} className={wrapperClass}>
        {content}
      </Link>
    );
  }

  return (
    <button className={wrapperClass} {...props}>
      {content}
    </button>
  );
}
