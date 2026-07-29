import { CtaDuo } from "@/components/shared/CtaDuo";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function FinalCtaSection() {
  return (
    <section className="py-24 md:py-32 bg-card/50 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading 
          label="Get Started" 
          headline="Join the exchange." 
          align="center"
          className="mb-16"
        />
        <CtaDuo />
      </div>
    </section>
  );
}
