import { LogoMarquee } from "@/components/visuals/LogoMarquee";

export function TrustSection() {
  return (
    <section className="pb-12 pt-6">
      <div className="mb-8 text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Verified & Compliant
        </p>
      </div>
      <LogoMarquee />
    </section>
  );
}
