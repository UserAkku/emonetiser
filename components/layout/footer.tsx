import Link from "next/link";
import { publisherLinks, advertiserLinks, companyLinks, footerLegal, socialLinks } from "@/content/nav";

export function Footer() {
  return (
    <footer className="relative bg-[#0F172A] py-16 md:py-24 text-white overflow-hidden">
      {/* Massive subtle gradient in background to make it feel premium */}
      <div 
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 0%, rgba(124, 58, 237, 0.15) 0%, transparent 70%)"
        }}
      />
      
      {/* Crisp colored border at top to anchor the white page above it */}
      <div className="absolute top-0 left-0 right-0 h-[4px] flex">
        <div className="h-full flex-1 bg-[var(--color-vibrant-violet)]" />
        <div className="h-full flex-1 bg-[var(--color-vibrant-cyan)]" />
        <div className="h-full flex-1 bg-[var(--color-vibrant-coral)]" />
        <div className="h-full flex-1 bg-[var(--color-vibrant-yellow)]" />
        <div className="h-full flex-1 bg-[var(--color-vibrant-pink)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-5 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3 w-fit transition-opacity hover:opacity-80">
              <img src="/emonetiser-symbol.webp" alt="Emonetiser Logo" className="h-8 w-8 object-contain" />
              <span className="font-display text-2xl font-bold tracking-tight text-white">Emonetiser</span>
            </Link>
            <p className="text-base text-white/60 leading-relaxed max-w-[320px]">
              The unified SSP + DSP programmatic exchange. Real-time OpenRTB auctions across Web, App, and CTV.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-4 pt-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.path}
                  className="text-sm font-medium text-white/40 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Nav cols */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div className="flex flex-col gap-5">
              <h5 className="font-mono text-xs uppercase tracking-[0.2em] font-bold text-[var(--color-vibrant-violet)]">
                Publishers
              </h5>
              <ul className="flex flex-col gap-3.5">
                {publisherLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.path} className="text-[15px] font-medium text-white/60 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-5">
              <h5 className="font-mono text-xs uppercase tracking-[0.2em] font-bold text-[var(--color-vibrant-cyan)]">
                Advertisers
              </h5>
              <ul className="flex flex-col gap-3.5">
                {advertiserLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.path} className="text-[15px] font-medium text-white/60 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-5">
              <h5 className="font-mono text-xs uppercase tracking-[0.2em] font-bold text-[var(--color-vibrant-coral)]">Company</h5>
              <ul className="flex flex-col gap-3.5">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.path} className="text-[15px] font-medium text-white/60 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-white/40 font-medium">
            © {new Date().getFullYear()} Emonetiser Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-[var(--color-vibrant-yellow)] shadow-[0_0_10px_var(--color-vibrant-yellow)] animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-widest text-white/60 font-bold">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
