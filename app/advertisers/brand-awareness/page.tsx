"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { FadeUp, StaggerContainer, staggerItem } from "@/components/motion/Reveal";
import { Eyebrow, MetricTile, PageSection, Container } from "@/components/ui/primitives";
import { CtaDuo } from "@/components/shared/CtaDuo";
import { MovingBorderButton } from "@/components/ui/moving-border-button";
import { cn } from "@/lib/utils";
import { 
  ArrowRight, Eye, VideoCamera, Newspaper, Television, 
  ShieldCheck, CheckCircle, WarningOctagon, ChartBar
} from "@phosphor-icons/react";
import { BrandAwarenessVisual } from "@/components/visuals/BrandAwarenessVisual";

export default function BrandAwarenessPage() {
  return (
    <main className="bg-white text-foreground min-h-screen">
      {/* S1: HERO */}
      <PageSection className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32 gradient-mesh">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeUp>
              <div className="flex flex-col items-start text-left">
                <Eyebrow accent="violet" className="mb-6">Brand Awareness</Eyebrow>
                <h1 className="text-5xl md:text-7xl font-display font-medium tracking-tight text-slate-900 mb-6">
                  Be remembered.<br />
                  Not just seen.
                </h1>
                <p className="text-xl text-slate-500 max-w-lg mb-10 leading-relaxed">
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
      <PageSection className="py-24 md:py-32 bg-slate-50 border-y border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-slate-900">The attention economy.</h2>
              <p className="text-lg text-slate-500 mb-6">
                Not all impressions are created equal. Ad placements on cluttered, low-quality sites might be cheap, but they fail to capture meaningful attention or build brand affinity.
              </p>
              <p className="text-lg text-slate-500">
                Our premium publisher network ensures your ads appear alongside quality content, driving significantly higher engagement rates, active viewability, and ultimately, brand recall.
              </p>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="flex flex-col gap-4">
                <div className="rounded-2xl border border-violet-200 bg-violet-50 p-6 flex justify-between items-center transition-all hover:shadow-sm">
                  <span className="font-semibold text-slate-900">Premium CPM vs Average</span>
                  <span className="font-mono text-xl text-violet-600 font-bold tracking-tight">2-3×</span>
                </div>
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 flex justify-between items-center transition-all hover:shadow-sm">
                  <span className="font-semibold text-slate-900">Active Viewability</span>
                  <div className="text-right">
                    <span className="font-mono text-xl text-emerald-600 font-bold tracking-tight">85%+</span>
                    <span className="text-xs text-slate-400 block font-mono uppercase tracking-widest mt-1">vs 55% avg</span>
                  </div>
                </div>
                <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6 flex justify-between items-center transition-all hover:shadow-sm">
                  <span className="font-semibold text-slate-900">Video Completion (VCR)</span>
                  <div className="text-right">
                    <span className="font-mono text-xl text-rose-600 font-bold tracking-tight">75%+</span>
                    <span className="text-xs text-slate-400 block font-mono uppercase tracking-widest mt-1">vs 40% avg</span>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </Container>
      </PageSection>

      {/* S3: AD FORMATS */}
      <PageSection className="py-24 md:py-32 bg-white">
        <Container>
          <FadeUp>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-12 text-center text-slate-900">Formats that perform</h2>
          </FadeUp>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div variants={staggerItem}>
              <div className="h-full rounded-3xl border border-amber-200 bg-amber-50 p-8 flex flex-col transition-all hover:shadow-md hover:-translate-y-0.5">
                <Eye className="w-10 h-10 text-amber-600 mb-6" weight="duotone" />
                <h3 className="text-xl font-semibold text-slate-900 mb-2">High-Impact Display</h3>
                <p className="text-slate-500 text-sm mb-8 flex-1 leading-relaxed">Rich media, takeovers, and large format banners designed to stop the scroll.</p>
                <div className="text-[11px] font-mono font-bold tracking-widest uppercase text-amber-700 px-3 py-1.5 bg-white border border-amber-200 rounded-lg inline-block w-fit">Awareness Focus</div>
              </div>
            </motion.div>
            <motion.div variants={staggerItem}>
              <div className="h-full rounded-3xl border border-blue-200 bg-blue-50 p-8 flex flex-col transition-all hover:shadow-md hover:-translate-y-0.5">
                <VideoCamera className="w-10 h-10 text-blue-600 mb-6" weight="duotone" />
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Pre-Roll Video</h3>
                <p className="text-slate-500 text-sm mb-8 flex-1 leading-relaxed">Captivate audiences with unskippable, premium video placements before content.</p>
                <div className="text-[11px] font-mono font-bold tracking-widest uppercase text-blue-700 px-3 py-1.5 bg-white border border-blue-200 rounded-lg inline-block w-fit">Storytelling Focus</div>
              </div>
            </motion.div>
            <motion.div variants={staggerItem}>
              <div className="h-full rounded-3xl border border-emerald-200 bg-emerald-50 p-8 flex flex-col transition-all hover:shadow-md hover:-translate-y-0.5">
                <Newspaper className="w-10 h-10 text-emerald-600 mb-6" weight="duotone" />
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Native Advertising</h3>
                <p className="text-slate-500 text-sm mb-8 flex-1 leading-relaxed">In-feed placements that match the form and function of the editorial content.</p>
                <div className="text-[11px] font-mono font-bold tracking-widest uppercase text-emerald-700 px-3 py-1.5 bg-white border border-emerald-200 rounded-lg inline-block w-fit">Engagement Focus</div>
              </div>
            </motion.div>
            <motion.div variants={staggerItem}>
              <div className="h-full rounded-3xl border border-violet-200 bg-violet-50 p-8 flex flex-col transition-all hover:shadow-md hover:-translate-y-0.5">
                <Television className="w-10 h-10 text-violet-600 mb-6" weight="duotone" />
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Connected TV</h3>
                <p className="text-slate-500 text-sm mb-8 flex-1 leading-relaxed">The prestige of traditional TV commercials with the targeting of digital.</p>
                <div className="text-[11px] font-mono font-bold tracking-widest uppercase text-violet-700 px-3 py-1.5 bg-white border border-violet-200 rounded-lg inline-block w-fit">Reach Focus</div>
              </div>
            </motion.div>
          </StaggerContainer>
        </Container>
      </PageSection>

      {/* S4: MEASUREMENT */}
      <PageSection className="py-24 md:py-32 bg-slate-50 border-y border-slate-100">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeUp>
              <h2 className="font-display text-4xl font-bold mb-6 text-slate-900">Prove your brand impact</h2>
              <p className="text-lg text-slate-500">
                Brand awareness shouldn&apos;t be a black box. We partner with leading measurement firms to provide actionable brand lift studies, proving exactly how your campaign shifted perception.
              </p>
            </FadeUp>
          </div>
          
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <motion.div variants={staggerItem}>
              <MetricTile value="85%+" label="Viewability" accent="green" />
            </motion.div>
            <motion.div variants={staggerItem}>
              <MetricTile value="75%" label="VCR" accent="blue" />
            </motion.div>
            <motion.div variants={staggerItem}>
              <MetricTile value="3×" label="Recall Lift" accent="violet" />
            </motion.div>
            <motion.div variants={staggerItem}>
              <MetricTile value="Measured" label="Share of Voice" accent="blue" />
            </motion.div>
          </StaggerContainer>
        </Container>
      </PageSection>

      {/* S5: BRAND SAFETY */}
      <PageSection className="py-24 md:py-32 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp className="order-2 lg:order-1">
              <h2 className="font-display text-4xl font-bold mb-10 text-slate-900">Pillars of protection</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <CheckCircle className="w-8 h-8 text-emerald-500 mb-4" weight="duotone" />
                  <h4 className="font-semibold text-slate-900 mb-2">Verified Inventory</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">Direct integrations with top-tier SSPs and premium publishers.</p>
                </div>
                <div>
                  <CheckCircle className="w-8 h-8 text-emerald-500 mb-4" weight="duotone" />
                  <h4 className="font-semibold text-slate-900 mb-2">Category Controls</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">Strict content categorization to avoid misaligned contexts.</p>
                </div>
                <div>
                  <ShieldCheck className="w-8 h-8 text-blue-500 mb-4" weight="duotone" />
                  <h4 className="font-semibold text-slate-900 mb-2">Fraud Prevention</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">Real-time filtering of bots and invalid traffic before bidding.</p>
                </div>
                <div>
                  <ChartBar className="w-8 h-8 text-violet-500 mb-4" weight="duotone" />
                  <h4 className="font-semibold text-slate-900 mb-2">Transparent Reporting</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">Domain-level visibility into exactly where every ad ran.</p>
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={0.2} className="order-1 lg:order-2">
              <div className="rounded-3xl border border-rose-200 bg-rose-50 p-10 text-center relative overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="absolute top-0 right-0 w-48 h-48 bg-rose-100 blur-3xl rounded-full opacity-60 pointer-events-none" />
                <ShieldCheck className="w-16 h-16 text-rose-600 mx-auto mb-6 relative z-10" weight="duotone" />
                <h3 className="text-2xl font-bold text-slate-900 mb-2 relative z-10">Platform Trust Score</h3>
                <div className="text-6xl font-mono font-bold text-rose-600 mb-8 tracking-tighter relative z-10">99.8%</div>
                <div className="flex justify-center gap-2 relative z-10">
                  <div className="w-1/4 h-2 bg-rose-500 rounded-l-full opacity-100" />
                  <div className="w-1/4 h-2 bg-rose-500 opacity-100" />
                  <div className="w-1/4 h-2 bg-rose-500 opacity-100" />
                  <div className="w-1/4 h-2 bg-rose-200 rounded-r-full" />
                </div>
                <p className="text-sm text-slate-500 mt-4 relative z-10 font-medium">Brand Safe Delivery Rate</p>
              </div>
            </FadeUp>
          </div>
        </Container>
      </PageSection>

      {/* S6: FINAL CTA */}
      <PageSection className="py-24 md:py-32 gradient-mesh border-t border-slate-100">
        <Container>
          <CtaDuo advertiserText="Launch Brand Campaign" />
        </Container>
      </PageSection>
    </main>
  );
}
