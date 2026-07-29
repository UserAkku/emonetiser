"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { FadeUp, StaggerContainer, staggerItem } from "@/components/motion/Reveal";
import { GlassCard, GlassPanel, Eyebrow, PageSection, Container } from "@/components/ui/primitives";
import { buttonVariants } from "@/components/ui/button";
import { CtaDuo } from "@/components/shared/CtaDuo";
import { PremiumFormatCard } from "@/components/ui/premium-format-card";
import { MovingBorderButton } from "@/components/ui/moving-border-button";
import { cn } from "@/lib/utils";
import { 
  ArrowRight, 
  Users, 
  MapPin, 
  Devices, 
  BookOpenText, 
  IdentificationCard,
  Target,
  ShieldCheck,
  MagnifyingGlass,
  Warning,
  ChartLineUp,
  Faders,
  ClockCounterClockwise
} from "@phosphor-icons/react";
// Assuming AudienceBuilder exists or creating a placeholder if not
// import AudienceBuilder from "@/components/visuals/AudienceBuilder";

export default function AudienceTargetingPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* S1: HERO */}
      <PageSection className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32 ">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeUp>
              <div className="flex flex-col items-start text-left">
                <Eyebrow className="text-[var(--color-brand-secondary)] mb-6">Audience Targeting</Eyebrow>
                <h1 className="text-5xl md:text-7xl font-display font-medium tracking-tight text-foreground mb-6">
                  Right person.<br />
                  Right moment.
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg mb-10 leading-relaxed font-sans">
                  Combine powerful demographic, behavioral, and contextual signals to zero in on the precise audience most likely to engage with your brand.
                </p>
                <MovingBorderButton href="/contact" className="mt-2 group">
                  Explore Audiences
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 ml-2" />
                </MovingBorderButton>
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="bento-card bento-cyan bezel-inner p-8 rounded-3xl relative h-[300px] lg:h-[400px] flex flex-col justify-center gap-4">
                <div className="absolute inset-0 bg-[var(--color-brand-secondary)]/10 blur-3xl -z-10 rounded-full" />
                <div className="flex items-center gap-3 p-3 bg-black/5 border border-border rounded-lg">
                  <Users className="w-5 h-5 text-[var(--color-brand-secondary)]" />
                  <span className="font-mono text-sm">Tech Enthusiasts (US)</span>
                  <span className="ml-auto text-xs bg-[var(--color-brand-secondary)]/20 px-2 py-1 rounded text-[var(--color-brand-secondary)]">AND</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-black/5 border border-border rounded-lg ml-8">
                  <BookOpenText className="w-5 h-5 text-[var(--color-brand-primary)]" />
                  <span className="font-mono text-sm">Context: Finance/Business</span>
                  <span className="ml-auto text-xs bg-[var(--color-brand-primary)]/20 px-2 py-1 rounded text-[var(--color-brand-primary)]">OR</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-black/5 border border-border rounded-lg ml-8">
                  <Target className="w-5 h-5 text-[var(--color-brand-accent)]" />
                  <span className="font-mono text-sm">Behavior: In-market Auto</span>
                </div>
                <div className="mt-4 p-4 border-t border-border flex justify-between items-center">
                  <span className="text-sm text-foreground/60 font-sans">Est. Reach</span>
                  <span className="font-mono font-bold text-xl">4.2M Users</span>
                </div>
              </div>
            </FadeUp>
          </div>
        </Container>
      </PageSection>

      {/* S2: TARGETING SIGNALS */}
      <PageSection className="py-24 md:py-32 bg-white">
        <Container>
          <FadeUp>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-12 text-center">Comprehensive signals</h2>
          </FadeUp>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Demographic", icon: Users, sizes: "Ex: Women 25-34, HHI $100k+", desc: "Age, gender, household income, and education levels.", span: "md:col-span-2 lg:col-span-1" },
              { name: "Behavioral", icon: Target, sizes: "Ex: Frequent business travelers", desc: "Past browsing history, purchase intent, and interests." },
              { name: "Contextual", icon: BookOpenText, sizes: "Ex: Articles about EVs", desc: "Target based on the content of the page actively being read." },
              { name: "Geographic", icon: MapPin, sizes: "Ex: 5-mile radius of retail stores", desc: "Country, state, city, zip code, or specific lat/long radius." },
              { name: "Device", icon: Devices, sizes: "Ex: iOS 16+ on 5G connection", desc: "OS, browser, connection type, and specific device models.", span: "md:col-span-2 lg:col-span-1" },
              { name: "First-Party", icon: IdentificationCard, sizes: "Ex: Lapsed subscribers list", desc: "Onboard your own CRM data to target existing customers." },
            ].map((signal, i) => (
              <PremiumFormatCard
                key={i}
                name={signal.name}
                desc={signal.desc}
                sizes={signal.sizes}
                icon={signal.icon}
                className={signal.span}
                delay={i * 0.1}
              />
            ))}
          </StaggerContainer>
        </Container>
      </PageSection>

      {/* S4: BRAND SAFETY */}
      <PageSection className="py-24 md:py-32">
        <Container>
          <FadeUp>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-display text-4xl font-bold mb-6">Uncompromising brand safety</h2>
              <p className="text-lg text-foreground/60 font-sans">Finding the right user doesn&apos;t matter if the environment isn&apos;t safe. Protect your brand reputation with ironclad controls.</p>
            </div>
          </FadeUp>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeUp delay={0.1}>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-black/5 flex items-center justify-center mb-6">
                  <ShieldCheck className="w-8 h-8 text-[var(--color-brand-accent)]" />
                </div>
                <h4 className="text-xl font-bold mb-2">Category Exclusions</h4>
                <p className="text-foreground/60 font-sans text-sm">Automatically block ad placement near sensitive topics, violence, or adult content.</p>
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-black/5 flex items-center justify-center mb-6">
                  <MagnifyingGlass className="w-8 h-8 text-foreground/80" />
                </div>
                <h4 className="text-xl font-bold mb-2">Domain Filtering</h4>
                <p className="text-foreground/60 font-sans text-sm">Deploy strict allowlists or blocklists to control exactly which publisher sites represent you.</p>
              </div>
            </FadeUp>
            <FadeUp delay={0.3}>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-black/5 flex items-center justify-center mb-6">
                  <Warning className="w-8 h-8 text-[var(--color-brand-secondary)]" />
                </div>
                <h4 className="text-xl font-bold mb-2">IVT Detection</h4>
                <p className="text-foreground/60 font-sans text-sm">Pre-bid integration with leading verification partners to filter out invalid traffic and bots.</p>
              </div>
            </FadeUp>
          </div>
        </Container>
      </PageSection>

      {/* S5: OPTIMIZATION */}
      <PageSection className="py-24 md:py-32 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-10">Continuous optimization</h2>
              <div className="flex flex-col gap-8 relative border-l border-border ml-4 pl-8">
                <div className="relative">
                  <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-[var(--color-brand-secondary)]" />
                  <h4 className="text-xl font-bold mb-2 flex items-center gap-2"><Faders className="w-5 h-5 text-[var(--color-brand-secondary)]" /> Audience Analysis</h4>
                  <p className="text-foreground/60 font-sans">Discover which segments are driving the best engagement and shift budget automatically.</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-[var(--color-brand-primary)]" />
                  <h4 className="text-xl font-bold mb-2 flex items-center gap-2"><ChartLineUp className="w-5 h-5 text-[var(--color-brand-primary)]" /> Bid Adjustment</h4>
                  <p className="text-foreground/60 font-sans">Modify bids based on device, time of day, and audience value to ensure optimal ROAS.</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-[var(--color-brand-accent)]" />
                  <h4 className="text-xl font-bold mb-2 flex items-center gap-2"><ClockCounterClockwise className="w-5 h-5 text-[var(--color-brand-accent)]" /> Creative Rotation</h4>
                  <p className="text-foreground/60 font-sans">A/B test different messaging against specific segments to find the perfect resonance.</p>
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <GlassPanel className="bento-violet p-8 relative overflow-hidden bg-gradient-to-br from-black/5 to-transparent border border-border group hover:border-border transition-all duration-300 hover:shadow-2xl">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--color-brand-secondary)] to-[var(--color-brand-accent)]" />
                <div className="text-sm font-mono text-foreground/40 mb-8 border-b border-border pb-4">Campaign Performance Trend</div>
                
                <div className="flex flex-col gap-6 relative z-10">
                  <div className="flex items-end justify-between group/metric hover:bg-black/5 p-2 -mx-2 rounded transition-colors">
                    <div>
                      <div className="text-sm text-foreground/60 font-sans mb-1">CPA (Cost per Action)</div>
                      <div className="text-3xl font-mono font-bold">$18.42</div>
                    </div>
                    <div className="text-[var(--color-brand-accent)] flex items-center gap-1 font-mono text-sm bg-[var(--color-brand-accent)]/10 px-2 py-1 rounded">
                      ↓ 24%
                    </div>
                  </div>
                  <div className="flex items-end justify-between group/metric hover:bg-black/5 p-2 -mx-2 rounded transition-colors">
                    <div>
                      <div className="text-sm text-foreground/60 font-sans mb-1">Conversion Rate</div>
                      <div className="text-3xl font-mono font-bold">2.8%</div>
                    </div>
                    <div className="text-[var(--color-brand-accent)] flex items-center gap-1 font-mono text-sm bg-[var(--color-brand-accent)]/10 px-2 py-1 rounded">
                      ↑ 1.2%
                    </div>
                  </div>
                  <div className="flex items-end justify-between group/metric hover:bg-black/5 p-2 -mx-2 rounded transition-colors">
                    <div>
                      <div className="text-sm text-foreground/60 font-sans mb-1">CTR</div>
                      <div className="text-3xl font-mono font-bold">0.45%</div>
                    </div>
                    <div className="text-[var(--color-brand-accent)] flex items-center gap-1 font-mono text-sm bg-[var(--color-brand-accent)]/10 px-2 py-1 rounded">
                      ↑ 0.15%
                    </div>
                  </div>
                </div>
              </GlassPanel>
            </FadeUp>
          </div>
        </Container>
      </PageSection>

      {/* S6: FINAL CTA */}
      <PageSection className="py-24 md:py-32  border-t border-border">
        <Container>
          <CtaDuo advertiserText="Build Your Audience" />
        </Container>
      </PageSection>
    </div>
  );
}
