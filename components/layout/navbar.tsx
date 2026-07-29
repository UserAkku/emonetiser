"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown } from "lucide-react";
import { MovingBorderButton } from "@/components/ui/moving-border-button";

import { publisherLinks, advertiserLinks, companyLinks } from "@/content/nav";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled 
          ? "bg-white border-b border-gray-100 py-3 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)]" 
          : "bg-white/90 backdrop-blur-md py-5"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <img src="/emonetiser-symbol.webp" alt="Emonetiser Logo" className="h-8 w-8 object-contain" />
            <span className="font-display text-xl font-bold tracking-tight text-[#111]">Emonetiser</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[#111]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex lg:gap-x-12">
          {/* Publishers Dropdown */}
          <div className="group relative">
            <button className="flex items-center gap-1 text-sm font-bold text-gray-600 hover:text-[var(--color-vibrant-violet)] transition-colors focus:outline-none py-2">
              Publishers <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute top-full left-0 mt-2 w-56 rounded-2xl bg-white p-2 shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              {publisherLinks.map((link) => (
                <Link key={link.path} href={link.path} className="block rounded-xl px-4 py-2.5 font-medium text-[15px] hover:bg-[var(--color-vibrant-violet)] hover:text-white transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Advertisers Dropdown */}
          <div className="group relative">
            <button className="flex items-center gap-1 text-sm font-bold text-gray-600 hover:text-[var(--color-vibrant-cyan)] transition-colors focus:outline-none py-2">
              Advertisers <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute top-full left-0 mt-2 w-56 rounded-2xl bg-white p-2 shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              {advertiserLinks.map((link) => (
                <Link key={link.path} href={link.path} className="block rounded-xl px-4 py-2.5 font-medium text-[15px] hover:bg-[var(--color-vibrant-cyan)] hover:text-white transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Company Dropdown */}
          <div className="group relative">
            <button className="flex items-center gap-1 text-sm font-bold text-gray-600 hover:text-[var(--color-vibrant-coral)] transition-colors focus:outline-none py-2">
              Company <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute top-full left-0 mt-2 w-56 rounded-2xl bg-white p-2 shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              {companyLinks.map((link) => (
                <Link key={link.path} href={link.path} className="block rounded-xl px-4 py-2.5 font-medium text-[15px] hover:bg-[var(--color-vibrant-coral)] hover:text-white transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-4 items-center">
          <Link href="/login" className="text-sm font-bold text-[#111] hover:text-[var(--color-vibrant-violet)] transition-colors">
            Sign In
          </Link>
          <MovingBorderButton href="/company/contact" className="px-5 py-2 rounded-full font-bold bg-[#111] text-white hover:bg-[var(--color-vibrant-violet)] transition-colors">
            Get Started
          </MovingBorderButton>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-2xl p-6 flex flex-col gap-6 max-h-[80vh] overflow-y-auto">
          <div className="space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--color-vibrant-violet)] font-bold">Publishers</h3>
            <div className="flex flex-col gap-2">
              {publisherLinks.map(link => (
                <Link key={link.path} href={link.path} onClick={() => setMobileMenuOpen(false)} className="text-[#111] font-bold text-lg">{link.label}</Link>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--color-vibrant-cyan)] font-bold">Advertisers</h3>
            <div className="flex flex-col gap-2">
              {advertiserLinks.map(link => (
                <Link key={link.path} href={link.path} onClick={() => setMobileMenuOpen(false)} className="text-[#111] font-bold text-lg">{link.label}</Link>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--color-vibrant-coral)] font-bold">Company</h3>
            <div className="flex flex-col gap-2">
              {companyLinks.map(link => (
                <Link key={link.path} href={link.path} onClick={() => setMobileMenuOpen(false)} className="text-[#111] font-bold text-lg">{link.label}</Link>
              ))}
            </div>
          </div>
          <div className="pt-6 border-t border-gray-100 flex flex-col gap-4">
             <Link href="/login" onClick={() => setMobileMenuOpen(false)} className="text-[#111] font-bold text-center w-full py-3 bg-gray-50 rounded-xl">Sign In</Link>
             <Link href="/company/contact" onClick={() => setMobileMenuOpen(false)} className="text-white font-bold text-center w-full py-3 bg-[#111] rounded-xl">Get Started</Link>
          </div>
        </div>
      )}
    </header>
  );
}
