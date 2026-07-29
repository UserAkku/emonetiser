import { CtaDuo } from "@/components/shared/CtaDuo";

export function FinalCtaSection() {
  return (
    <section className="py-24 md:py-32 section-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="font-display text-4xl md:text-6xl font-bold text-[#111]">Ready to scale?</h2>
          <p className="text-xl text-gray-500 mt-4 font-medium">Join the unified exchange connecting premium supply with global demand.</p>
        </div>
        <CtaDuo />
      </div>
    </section>
  );
}
