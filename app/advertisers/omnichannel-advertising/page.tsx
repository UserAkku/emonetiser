"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { FadeUp, StaggerContainer, staggerItem } from "@/components/motion/Reveal";
import { GlassCard, GlassPanel, Eyebrow, MetricTile, PageSection, Container } from "@/components/ui/primitives";
import { buttonVariants } from "@/components/ui/button";
import { CtaDuo } from "@/components/shared/CtaDuo";
import { MovingBorderButton } from "@/components/ui/moving-border-button";
import { cn } from "@/lib/utils";
import { 
  ArrowRight, 
  Desktop, 
  DeviceMobile, 
  Television, 
  Target, 
  ChartBar, 
  Stack, 
  Money, 
  Path, 
  TreeStructure, 
  Database,
  Link as LinkIcon
} from "@phosphor-icons/react";
import { JourneyTimeline } from "@/components/visuals/JourneyTimeline";
import { JourneyBeam } from "@/components/visuals/JourneyBeam";

export default function OmnichannelAdvertisingPage() {
  return (
    <div className="bg-background text-white min-h-screen">
      {/* S1: HERO */}
      <PageSection className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32 gradient-mesh">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeUp>
              <div className="flex flex-col items-start text-left">
                <Eyebrow className="text-[var(--color-brand-secondary)] mb-6">Omnichannel</Eyebrow>
                <h1 className="text-5xl md:text-7xl font-display font-medium tracking-tight text-white mb-6">
                  One campaign.<br />
                  Every screen.
                </h1>
                <p className="text-xl text-slate-400 max-w-lg mb-10 leading-relaxed font-sans">
                  Reach your most valuable audiences continuously across Web, App, and Connected TV - all managed from a single, unified platform.
                </p>
                <MovingBorderButton href="/contact" className="mt-2 group">
                  Plan Your Campaign
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 ml-2" />
                </MovingBorderButton>
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="w-full h-full relative z-10 flex items-center justify-center min-h-[300px]">
                <JourneyTimeline />
              </div>
            </FadeUp>
          </div>
        </Container>
      </PageSection>

      {/* S2: MULTI-SCREEN JOURNEY */}
      <PageSection className="py-24 md:py-32 bg-white/[0.02]">
        <Container>
          <FadeUp>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Follow the consumer journey</h2>
              <p className="text-lg text-white/60 font-sans">Users don&apos;t think in channels. Neither should your advertising. Engage them contextually throughout their day.</p>
            </div>
          </FadeUp>
          
          <div className="relative max-w-5xl mx-auto mt-8">
            <JourneyBeam />
          </div>
        </Container>
      </PageSection>

      {/* S3: UNIFIED MANAGEMENT */}
      <PageSection className="py-24 md:py-32">
        <Container>
          <FadeUp className="mb-12 text-center lg:text-left">
            <h2 className="font-display text-4xl md:text-5xl font-bold">Unified management.</h2>
          </FadeUp>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch">
            <div className="order-2 lg:order-1 h-full">
              <StaggerContainer className="flex flex-col gap-4 h-full">
                {[
                  { icon: Money, title: 'Shared Budgeting', desc: 'Fluidly shift spend to the best performing channels in real-time.' },
                  { icon: Target, title: 'Unified Frequency Cap', desc: 'Stop hitting the same user across different devices unnecessarily.' },
                  { icon: Stack, title: 'Cross-Screen Creatives', desc: 'Manage display, video, and native assets in one central library.' },
                  { icon: ChartBar, title: 'Single Dashboard', desc: 'Consolidated reporting without stitching together Excel files.' }
                ].map((item, i) => (
                  <motion.div key={i} variants={staggerItem} className="h-full">
                    <GlassPanel className="p-6 flex items-start gap-4 h-full">
                      <div className="p-3 rounded-lg bg-white/5 text-[var(--color-brand-secondary)] shrink-0">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                        <p className="text-slate-400 text-sm font-sans">{item.desc}</p>
                      </div>
                    </GlassPanel>
                  </motion.div>
                ))}
              </StaggerContainer>
            </div>
            
            <FadeUp delay={0.2} className="order-1 lg:order-2 h-full">
              <GlassPanel className="p-8 md:p-12 border-[var(--color-brand-secondary)]/20 h-full flex flex-col justify-center">
                <div className="text-sm font-mono text-white/40 mb-10 border-b border-white/10 pb-4">Omni-Campaign Pacing</div>
                <div className="flex flex-col justify-center gap-10 flex-grow">
                  <div>
                    <div className="flex justify-between text-sm mb-4">
                      <span className="flex items-center gap-2"><Desktop className="w-5 h-5 text-[var(--color-brand-primary)]" /> Web</span>
                      <span className="font-mono">45%</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-[var(--color-brand-primary)] w-[45%]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-4">
                      <span className="flex items-center gap-2"><DeviceMobile className="w-5 h-5 text-[var(--color-brand-secondary)]" /> App</span>
                      <span className="font-mono">35%</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-[var(--color-brand-secondary)] w-[35%]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-4">
                      <span className="flex items-center gap-2"><Television className="w-5 h-5 text-[var(--color-brand-accent)]" /> CTV</span>
                      <span className="font-mono">20%</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-[var(--color-brand-accent)] w-[20%]" />
                    </div>
                  </div>
                </div>
              </GlassPanel>
            </FadeUp>
          </div>
        </Container>
      </PageSection>

      {/* S4: WHY EMONETISER */}
      <PageSection className="py-24 md:py-32 bg-white/[0.02]">
        <Container>
          <FadeUp>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-12 text-center">The omnichannel advantage</h2>
          </FadeUp>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Database, title: 'Owned Exchange', desc: 'Because we operate both SSP and DSP layers, you get better data fidelity across all environments.' },
              { icon: ChartBar, title: 'Unified Reporting', desc: 'No more data silos. See exactly how channels interact and influence conversions.' },
              { icon: TreeStructure, title: 'Cross-Screen Attribution', desc: 'Connect the dots between a CTV impression and a mobile conversion seamlessly.' },
              { icon: LinkIcon, title: 'Zero Fee Arbitrage', desc: 'Our transparent model means more of your budget goes to actual media, across every screen.' }
            ].map((feature, i) => (
              <motion.div key={i} variants={staggerItem}>
                <GlassCard className="p-8 h-full">
                  <feature.icon className="w-8 h-8 text-[var(--color-brand-secondary)] mb-4" />
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-white/60 font-sans text-sm leading-relaxed">{feature.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </StaggerContainer>
        </Container>
      </PageSection>

      {/* S5: CROSS-CHANNEL MEASUREMENT */}
      <PageSection className="py-24 md:py-32">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <FadeUp>
              <h2 className="font-display text-4xl font-bold mb-6">Built for scale</h2>
              <p className="text-lg text-white/60 font-sans">
                Consolidated reporting means faster optimization cycles. Measure true incremental lift across the entire media plan without relying on third-party stitchers.
              </p>
            </FadeUp>
          </div>
          
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <motion.div variants={staggerItem}>
              <MetricTile value="Unified" label="Dashboard" />
            </motion.div>
            <motion.div variants={staggerItem}>
              <MetricTile value="Real-Time" label="Attribution" />
            </motion.div>
            <motion.div variants={staggerItem}>
              <MetricTile value="3" label="Channels" />
            </motion.div>
            <motion.div variants={staggerItem}>
              <MetricTile value="1" label="Single Seat" />
            </motion.div>
          </StaggerContainer>
        </Container>
      </PageSection>

      {/* S6: FINAL CTA */}
      <PageSection className="py-24 md:py-32 gradient-mesh-subtle border-t border-white/5">
        <Container>
          <CtaDuo advertiserText="Launch Omnichannel" />
        </Container>
      </PageSection>
    </div>
  );
}
