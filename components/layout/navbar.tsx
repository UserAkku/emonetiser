"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { NavDropdown } from "./nav-dropdown";
import { publisherLinks, advertiserLinks, companyLinks } from "@/content/nav";
import {
  List,
  X,
} from "@phosphor-icons/react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500",
        )}
      >
        <nav
          className={cn(
            "w-full transition-all duration-500 backdrop-blur-2xl border-b",
            scrolled
              ? "bg-white/90 border-gray-200/80 shadow-sm shadow-gray-100"
              : "bg-white/70 border-transparent"
          )}
        >
          {/* Colorful gradient accent line at bottom of nav */}
          <div
            className="absolute bottom-0 left-0 right-0 h-[2px] opacity-60"
            style={{
              background: "linear-gradient(90deg, var(--brand-primary), hsl(216,90%,58%), var(--brand-secondary), var(--brand-accent))",
            }}
          />

          <div className={cn("mx-auto max-w-7xl px-6 lg:px-8 w-full flex items-center transition-all duration-500", scrolled ? "h-16" : "h-20")}>
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 shrink-0 mr-4">
              <img src="/emonetiser-symbol.webp" alt="Emonetiser Logo" className="h-7 w-7 object-contain" />
              <span className="font-display text-base font-semibold tracking-tight text-foreground">Emonetiser</span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-8 ml-auto">
              <NavDropdown label="For Publishers" items={publisherLinks} accent="publisher" />
              <NavDropdown label="For Advertisers" items={advertiserLinks} accent="advertiser" />
              <NavDropdown label="Company" items={companyLinks} accent="company" />
            </div>

            {/* Mobile toggle */}
            <button
              className="ml-auto lg:hidden flex items-center justify-center h-8 w-8 rounded-lg border border-gray-200 bg-white text-muted-foreground hover:text-foreground hover:border-[var(--color-brand-primary)]/40 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.span
                    key="x"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-4 w-4" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <List className="h-4 w-4" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white/97 backdrop-blur-2xl pt-24 px-6 flex flex-col"
          >
            {/* Decorative blobs in mobile menu */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="blob blob-purple w-64 h-64 -top-16 -right-16 opacity-40" />
              <div className="blob blob-teal w-48 h-48 bottom-16 -left-8 opacity-30" />
            </div>

            <motion.div
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.06 } } }}
              className="relative flex flex-col gap-1"
            >
              {[
                { label: "For Publishers", links: publisherLinks, color: "text-[var(--color-brand-primary)]" },
                { label: "For Advertisers", links: advertiserLinks, color: "text-[var(--color-brand-secondary)]" },
                { label: "Company", links: companyLinks, color: "text-foreground" },
              ].map((group) => (
                <div key={group.label} className="mb-6">
                  <motion.p
                    variants={{
                      hidden: { opacity: 0, y: 12 },
                      show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
                    }}
                    className={cn("font-mono text-[10px] uppercase tracking-[0.18em] mb-3 font-semibold", group.color)}
                  >
                    {group.label}
                  </motion.p>
                  <div className="flex flex-col gap-1">
                    {group.links.map((link) => (
                      <motion.div
                        key={link.path}
                        variants={{
                          hidden: { opacity: 0, y: 12 },
                          show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
                        }}
                      >
                        <Link
                          href={link.path}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-gray-50 transition-colors"
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
