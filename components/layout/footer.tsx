import Link from "next/link";
import { publisherLinks, advertiserLinks, companyLinks, footerLegal, socialLinks } from "@/content/nav";

export function Footer() {
  return (
    <footer className="relative bg-[hsl(240,30%,10%)] py-16 md:py-20 overflow-hidden">
      {/* Decorative color blobs */}
      <div
        className="pointer-events-none absolute top-0 left-0 w-96 h-96 rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, hsl(258,85%,62%) 0%, transparent 70%)",
          transform: "translate(-30%, -40%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-15"
        style={{
          background: "radial-gradient(circle, hsl(175,75%,40%) 0%, transparent 70%)",
          transform: "translate(20%, 30%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 w-72 h-72 rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, hsl(16,90%,58%) 0%, transparent 70%)",
          transform: "translate(-50%, -50%)",
          filter: "blur(60px)",
        }}
      />

      {/* Colorful top border */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px]"
        style={{
          background: "linear-gradient(90deg, hsl(258,85%,62%), hsl(216,90%,58%), hsl(175,75%,40%), hsl(16,90%,58%))",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-5 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3 w-fit transition-opacity hover:opacity-80">
              <img src="/emonetiser-symbol.webp" alt="Emonetiser Logo" className="h-8 w-8 object-contain drop-shadow-[0_0_15px_rgba(139,92,246,0.4)]" />
              <span className="font-display text-xl font-bold tracking-tight text-white">Emonetiser</span>
            </Link>
            <p className="text-sm text-white/50 leading-relaxed max-w-[320px]">
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
              <h5 className="font-mono text-[11px] uppercase tracking-[0.2em] font-semibold"
                style={{ color: "hsl(258,85%,70%)" }}>
                Publishers
              </h5>
              <ul className="flex flex-col gap-3.5">
                {publisherLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.path} className="text-[14px] text-white/50 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-5">
              <h5 className="font-mono text-[11px] uppercase tracking-[0.2em] font-semibold"
                style={{ color: "hsl(175,75%,55%)" }}>
                Advertisers
              </h5>
              <ul className="flex flex-col gap-3.5">
                {advertiserLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.path} className="text-[14px] text-white/50 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-5">
              <h5 className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/70 font-semibold">Company</h5>
              <ul className="flex flex-col gap-3.5">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.path} className="text-[14px] text-white/50 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-white/30">
            © {new Date().getFullYear()} Emonetiser Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-[var(--color-brand-accent)] shadow-[0_0_10px_var(--color-brand-accent)] animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-widest text-white/50">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
