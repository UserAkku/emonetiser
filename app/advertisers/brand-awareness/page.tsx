"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { FadeUp, StaggerContainer, staggerItem } from "@/components/motion/Reveal";
import { GlassCard, GlassPanel, MetricTile, PageSection, Container } from "@/components/ui/primitives";
import { buttonVariants } from "@/components/ui/button";
import { CtaDuo } from "@/components/shared/CtaDuo";
import { MovingBorderButton } from "@/components/ui/moving-border-button";
import { cn } from "@/lib/utils";
import { 
  ArrowRight, 
  Eye, 
  VideoCamera, 
  Newspaper, 
  Television, 
  ShieldCheck,
  CheckCircle,
  WarningOctagon,
  ChartBar
} from "@phosphor-icons/react";
import { BrandAwarenessVisual } from "@/components/visuals/BrandAwarenessVisual";

export default function BrandAwarenessPage() {
  return (
    <div className="bg-background text-white min-h-screen">
      {/* S1: HERO */}
      <PageSection className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32 gradient-mesh">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeUp>
              <div className="flex flex-col items-start text-left">
                <h1 className="text-5xl md:text-7xl font-display font-medium tracking-tight text-white mb-6">
                  Be remembered.<br />
                  Not just seen.
                </h1>
                <p className="text-xl text-slate-400 max-w-lg mb-10 leading-relaxed font-sans">
                  Command attention in premium, brand-safe environments. Deliver high-impact creatives to engaged audiences and drive measurable lift.
                </p>
                <MovingBorderButton href="/contact" className="mt-2 group">
                  Launch Brand Campaign
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 ml-2" />
                </MovingBorderButton>
              </div>
            </FadeUp>
            <FadeUp delay={0.2} className="hidden lg:block">
              <div className="w-full h-full flex items-center justify-center lg:pl-12">
                <BrandAwarenessVisual />
              </div>
            </FadeUp>
          </div>
        </Container>
      </PageSection>

      {/* S2: WHY PREMIUM INVENTORY */}
      <PageSection className="py-24 md:py-32 bg-white/[0.02]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">The attention economy.</h2>
              <p className="text-lg text-white/60 font-sans mb-6">
                Not all impressions are created equal. Ad placements on cluttered, low-quality sites might be cheap, but they fail to capture meaningful attention or build brand affinity.
              </p>
              <p className="text-lg text-white/60 font-sans">
                Our premium publisher network ensures your ads appear alongside quality content, driving significantly higher engagement rates, active viewability, and ultimately, brand recall.
              </p>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="flex flex-col gap-4">
                <GlassPanel className="p-6 flex justify-between items-center border-[var(--color-brand-secondary)]/20">
                  <span className="font-bold">Premium CPM vs Average</span>
                  <span className="font-mono text-xl text-[var(--color-brand-secondary)]">2-3×</span>
                </GlassPanel>
                <GlassPanel className="p-6 flex justify-between items-center border-[var(--color-brand-primary)]/20">
                  <span className="font-bold">Active Viewability</span>
                  <div className="text-right">
                    <span className="font-mono text-xl text-[var(--color-brand-primary)]">85%+</span>
                    <span className="text-xs text-white/40 block">vs 55% avg</span>
                  </div>
                </GlassPanel>
                <GlassPanel className="p-6 flex justify-between items-center border-[var(--color-brand-accent)]/20">
                  <span className="font-bold">Video Completion (VCR)</span>
                  <div className="text-right">
                    <span className="font-mono text-xl text-[var(--color-brand-accent)]">75%+</span>
                    <span className="text-xs text-white/40 block">vs 40% avg</span>
                  </div>
                </GlassPanel>
              </div>
            </FadeUp>
          </div>
        </Container>
      </PageSection>

      {/* S3: AD FORMATS */}
      <PageSection className="py-24 md:py-32">
        <Container>
          <FadeUp>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-12 text-center">Formats that perform</h2>
          </FadeUp>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div variants={staggerItem}>
              <GlassPanel className="h-full p-8 group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl bg-gradient-to-br from-[var(--color-brand-secondary)]/10 to-transparent border border-white/5 hover:border-[var(--color-brand-secondary)]/30">
                <Eye className="w-10 h-10 text-[var(--color-brand-secondary)] mb-6 transition-transform group-hover:scale-110" />
                <h3 className="text-xl font-medium text-white mb-2">High-Impact Display</h3>
                <p className="text-slate-400 font-sans text-sm mb-6 leading-relaxed">Rich media, takeovers, and large format banners designed to stop the scroll.</p>
                <div className="text-xs font-mono text-[var(--color-brand-secondary)] px-3 py-1.5 bg-black/40 rounded-lg border border-white/5 inline-block">Awareness Focus</div>
              </GlassPanel>
            </motion.div>
            <motion.div variants={staggerItem}>
              <GlassPanel className="h-full p-8 group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl bg-gradient-to-br from-[var(--color-brand-primary)]/10 to-transparent border border-white/5 hover:border-[var(--color-brand-primary)]/30">
                <VideoCamera className="w-10 h-10 text-[var(--color-brand-primary)] mb-6 transition-transform group-hover:scale-110" />
                <h3 className="text-xl font-medium text-white mb-2">Pre-Roll Video</h3>
                <p className="text-slate-400 font-sans text-sm mb-6 leading-relaxed">Captivate audiences with unskippable, premium video placements before content.</p>
                <div className="text-xs font-mono text-[var(--color-brand-primary)] px-3 py-1.5 bg-black/40 rounded-lg border border-white/5 inline-block">Storytelling Focus</div>
              </GlassPanel>
            </motion.div>
            <motion.div variants={staggerItem}>
              <GlassPanel className="h-full p-8 group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl bg-gradient-to-br from-white/10 to-transparent border border-white/5 hover:border-white/20">
                <Newspaper className="w-10 h-10 text-white/80 mb-6 transition-transform group-hover:scale-110" />
                <h3 className="text-xl font-medium text-white mb-2">Native Advertising</h3>
                <p className="text-slate-400 font-sans text-sm mb-6 leading-relaxed">In-feed placements that match the form and function of the editorial content.</p>
                <div className="text-xs font-mono text-white/60 px-3 py-1.5 bg-black/40 rounded-lg border border-white/5 inline-block">Engagement Focus</div>
              </GlassPanel>
            </motion.div>
            <motion.div variants={staggerItem}>
              <GlassPanel className="h-full p-8 group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl bg-gradient-to-br from-[var(--color-brand-accent)]/10 to-transparent border border-white/5 hover:border-[var(--color-brand-accent)]/30">
                <Television className="w-10 h-10 text-[var(--color-brand-accent)] mb-6 transition-transform group-hover:scale-110" />
                <h3 className="text-xl font-medium text-white mb-2">Connected TV</h3>
                <p className="text-slate-400 font-sans text-sm mb-6 leading-relaxed">The prestige of traditional TV commercials with the targeting of digital.</p>
                <div className="text-xs font-mono text-[var(--color-brand-accent)] px-3 py-1.5 bg-black/40 rounded-lg border border-white/5 inline-block">Reach Focus</div>
              </GlassPanel>
            </motion.div>
          </StaggerContainer>
        </Container>
      </PageSection>

      {/* S4: MEASUREMENT */}
      <PageSection className="py-24 md:py-32 bg-white/[0.02]">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeUp>
              <h2 className="font-display text-4xl font-bold mb-6">Prove your brand impact</h2>
              <p className="text-lg text-white/60 font-sans">
                Brand awareness shouldn&apos;t be a black box. We partner with leading measurement firms to provide actionable brand lift studies, proving exactly how your campaign shifted perception.
              </p>
            </FadeUp>
          </div>
          
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <motion.div variants={staggerItem}>
              <MetricTile value="85%+" label="Viewability" />
            </motion.div>
            <motion.div variants={staggerItem}>
              <MetricTile value="75%" label="VCR" />
            </motion.div>
            <motion.div variants={staggerItem}>
              <MetricTile value="3×" label="Recall Lift" className="border-t-[var(--color-brand-secondary)]/50" />
            </motion.div>
            <motion.div variants={staggerItem}>
              <MetricTile value="Measured" label="Share of Voice" />
            </motion.div>
          </StaggerContainer>
        </Container>
      </PageSection>

      {/* S5: BRAND SAFETY */}
      <PageSection className="py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp className="order-2 lg:order-1">
              <h2 className="font-display text-4xl font-bold mb-10">Pillars of protection</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <CheckCircle className="w-6 h-6 text-[var(--color-brand-accent)] mb-3" />
                  <h4 className="font-bold mb-1">Verified Inventory</h4>
                  <p className="text-sm text-white/60 font-sans">Direct integrations with top-tier SSPs and premium publishers.</p>
                </div>
                <div>
                  <CheckCircle className="w-6 h-6 text-[var(--color-brand-accent)] mb-3" />
                  <h4 className="font-bold mb-1">Category Controls</h4>
                  <p className="text-sm text-white/60 font-sans">Strict content categorization to avoid misaligned contexts.</p>
                </div>
                <div>
                  <ShieldCheck className="w-6 h-6 text-[var(--color-brand-primary)] mb-3" />
                  <h4 className="font-bold mb-1">Fraud Prevention</h4>
                  <p className="text-sm text-white/60 font-sans">Real-time filtering of bots and invalid traffic before bidding.</p>
                </div>
                <div>
                  <ChartBar className="w-6 h-6 text-[var(--color-brand-secondary)] mb-3" />
                  <h4 className="font-bold mb-1">Transparent Reporting</h4>
                  <p className="text-sm text-white/60 font-sans">Domain-level visibility into exactly where every ad ran.</p>
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={0.2} className="order-1 lg:order-2">
              <GlassPanel className="p-8 border-[var(--color-brand-accent)]/20 text-center relative overflow-hidden bg-gradient-to-br from-white/5 to-transparent border group hover:border-[var(--color-brand-accent)]/40 transition-all duration-300 hover:shadow-[0_0_40px_rgba(217,119,87,0.1)]">
                <ShieldCheck className="w-16 h-16 text-[var(--color-brand-accent)] mx-auto mb-6 transition-transform group-hover:scale-110" />
                <h3 className="text-2xl font-bold mb-2">Platform Trust Score</h3>
                <div className="text-5xl font-mono font-bold text-[var(--color-brand-accent)] mb-6">99.8%</div>
                <div className="flex justify-center gap-2">
                  <div className="w-1/4 h-2 bg-[var(--color-brand-accent)] rounded-l-full" />
                  <div className="w-1/4 h-2 bg-[var(--color-brand-accent)]" />
                  <div className="w-1/4 h-2 bg-[var(--color-brand-accent)]" />
                  <div className="w-1/4 h-2 bg-[var(--color-brand-accent)] rounded-r-full" />
                </div>
                <p className="text-sm text-white/60 mt-4">Brand Safe Delivery Rate</p>
              </GlassPanel>
            </FadeUp>
          </div>
        </Container>
      </PageSection>

      {/* S6: FINAL CTA */}
      <PageSection className="py-24 md:py-32 gradient-mesh-subtle border-t border-white/5">
        <Container>
          <CtaDuo advertiserText="Launch Brand Campaign" />
        </Container>
      </PageSection>
    </div>
  );
}
