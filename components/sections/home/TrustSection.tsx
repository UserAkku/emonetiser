import { LogoMarquee } from "@/components/visuals/LogoMarquee";

export function TrustSection() {
  return (
    <section className="py-12 border-y" style={{ background: "hsl(220,20%,98%)", borderColor: "hsl(220,15%,92%)" }}>
      <div className="mb-8 text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Verified &amp; Compliant
        </p>
        <div className="mt-2 flex items-center justify-center gap-2">
          <span className="h-px w-12" style={{ background: "linear-gradient(90deg, transparent, hsl(258,85%,62%,0.4))" }} />
          <span className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground/60">Trusted by global partners</span>
          <span className="h-px w-12" style={{ background: "linear-gradient(90deg, hsl(175,75%,40%,0.4), transparent)" }} />
        </div>
      </div>
      <LogoMarquee />
    </section>
  );
}
