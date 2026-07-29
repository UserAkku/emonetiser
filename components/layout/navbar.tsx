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
          "fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500"
        )}
      >
        <nav
          className={cn(
            "w-full transition-all duration-500 border-b",
            scrolled
              ? "bg-white/95 backdrop-blur-xl border-slate-200 shadow-sm"
              : "bg-white/80 backdrop-blur-md border-transparent"
          )}
        >
          <div className={cn("mx-auto max-w-7xl px-6 lg:px-8 w-full flex items-center transition-all duration-500", scrolled ? "h-16" : "h-20")}>
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 shrink-0 mr-4">
              <img src="/emonetiser-symbol.webp" alt="Emonetiser Logo" className="h-7 w-7 object-contain" />
              <span className="font-display text-base font-semibold tracking-tight text-slate-900">Emonetiser</span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-8 ml-auto">
              <NavDropdown label="For Publishers" items={publisherLinks} accent="publisher" />
              <NavDropdown label="For Advertisers" items={advertiserLinks} accent="advertiser" />
              <NavDropdown label="Company" items={companyLinks} accent="company" />
            </div>

            {/* Mobile toggle */}
            <button
              className="ml-auto lg:hidden flex items-center justify-center h-8 w-8 rounded-lg border border-slate-200 bg-slate-50 text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
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
            className="fixed inset-0 z-40 bg-white pt-24 px-6 flex flex-col border-r border-slate-100"
          >
            <motion.div
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.06 } } }}
              className="flex flex-col gap-1"
            >
              {[
                { label: "For Publishers", links: publisherLinks },
                { label: "For Advertisers", links: advertiserLinks },
                { label: "Company", links: companyLinks },
              ].map((group) => (
                <div key={group.label} className="mb-6">
                  <motion.p
                    variants={{
                      hidden: { opacity: 0, y: 12 },
                      show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
                    }}
                    className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400 mb-3"
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
                          className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors"
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
