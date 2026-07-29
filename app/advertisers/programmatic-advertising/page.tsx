"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { FadeUp, StaggerContainer, staggerItem } from "@/components/motion/Reveal";
import { GlassCard, GlassPanel, Eyebrow, MetricTile, PageSection, Container } from "@/components/ui/primitives";
import { buttonVariants } from "@/components/ui/button";
import { CtaDuo } from "@/components/shared/CtaDuo";
import { MovingBorderButton } from "@/components/ui/moving-border-button";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { cn } from "@/lib/utils";
import { 
  ArrowRight, 
  Crosshair, 
  Target, 
  ChartBar, 
  CurrencyDollar, 
  Lightning, 
  Desktop, 
  DeviceMobile, 
  Television, 
  ShieldCheck, 
  Sliders
} from "@phosphor-icons/react";
import { ChainCompare } from "@/components/visuals/ChainCompare";

export default function ProgrammaticAdvertisingPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* S1: HERO */}
      <PageSection className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32 ">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeUp>
              <div className="flex flex-col items-start text-left">
                <Eyebrow className="text-[var(--color-brand-secondary)] mb-6">Programmatic DSP</Eyebrow>
                <h1 className="text-5xl md:text-7xl font-display font-medium tracking-tight text-foreground mb-6">
                  Direct access.<br />
                  Zero margin tax.
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg mb-10 leading-relaxed font-sans">
                  Buy premium inventory directly through Emonetiser&apos;s exchange. Skip the intermediaries and maximize your working media budget.
                </p>
                <MovingBorderButton href="/contact" className="mt-2 group">
                  Set Up Your Seat
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 ml-2" />
                </MovingBorderButton>
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="w-full h-full relative z-10">
                <ChainCompare />
              </div>
            </FadeUp>
          </div>
        </Container>
      </PageSection>

      {/* S2: THE PROBLEM */}
      <PageSection className="py-24 md:py-32 relative">
        <Container>
          <FadeUp>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-16 text-center">The programmatic tax problem</h2>
          </FadeUp>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            <FadeUp delay={0.1} className="h-full">
              <GlassPanel className="bento-violet p-8 h-full flex flex-col bg-gradient-to-br from-black/5 to-transparent min-h-[350px] lg:min-h-[500px]">
                <div className="text-sm font-mono text-slate-500 mb-8 uppercase tracking-wider text-center">Traditional Supply Chain</div>
                <div className="flex-1 flex flex-col justify-between items-center w-full max-w-sm mx-auto">
                  {['SSP (15%)', 'Exchange (10%)', 'DSP (20%)', 'Trading Desk (10%)', 'Advertiser'].map((node, i) => (
                    <React.Fragment key={i}>
                      <div className="h-12 w-full glass-panel rounded-xl flex items-center justify-center text-sm font-medium border border-border bg-background shadow-lg text-muted-foreground">
                        {node}
                      </div>
                      {i < 4 && <ArrowRight className="text-foreground/20 w-5 h-5 shrink-0 rotate-90 my-2" />}
                    </React.Fragment>
                  ))}
                </div>
              </GlassPanel>
            </FadeUp>
            
            <FadeUp delay={0.2} className="h-full">
              <GlassPanel className="bento-cyan p-8 h-full flex flex-col bg-gradient-to-br from-[var(--color-brand-secondary)]/10 to-transparent min-h-[350px] lg:min-h-[500px] border-[var(--color-brand-secondary)]/20 shadow-[0_0_40px_rgba(var(--color-brand-secondary-rgb,56,189,248),0.05)]">
                <div className="text-sm font-mono text-[var(--color-brand-secondary)] mb-8 uppercase tracking-wider text-center">Emonetiser Exchange</div>
                <div className="flex-1 flex flex-col justify-between items-center w-full max-w-sm mx-auto">
                  <div className="h-20 w-full bg-gradient-to-b from-[var(--color-brand-secondary)]/20 to-[var(--color-brand-secondary)]/5 border border-[var(--color-brand-secondary)]/40 rounded-xl flex items-center justify-center text-lg font-medium text-[var(--color-brand-secondary)] shadow-[0_0_20px_rgba(var(--color-brand-secondary-rgb,56,189,248),0.1)]">
                    Emonetiser Exchange
                  </div>
                  
                  <ArrowRight className="text-[var(--color-brand-secondary)] w-8 h-8 rotate-90 my-6" />
                  
                  <div className="h-20 w-full glass-panel rounded-xl flex items-center justify-center text-lg font-medium border border-border bg-background shadow-lg text-foreground">
                    Advertiser
                  </div>
                  
                  <div className="mt-8 text-center w-full">
                    <span className="inline-block px-5 py-2.5 rounded-full bg-[var(--color-brand-accent)]/10 text-[var(--color-brand-accent)] text-xs font-mono font-bold tracking-widest uppercase border border-[var(--color-brand-accent)]/20 shadow-[0_0_15px_rgba(var(--color-brand-accent-rgb,250,204,21),0.1)]">
                      + More working media
                    </span>
                  </div>
                </div>
              </GlassPanel>
            </FadeUp>
          </div>
        </Container>
      </PageSection>

      {/* S3: DSP CAPABILITIES */}
      <PageSection className="py-24 md:py-32 bg-white">
        <Container>
          <FadeUp>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-12">Powerful DSP capabilities</h2>
          </FadeUp>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div variants={staggerItem} className="md:col-span-2 lg:col-span-2">
              <GlassPanel className="bento-coral h-full p-8 flex flex-col justify-end min-h-[200px] lg:min-h-[280px] bg-gradient-to-br from-black/5 to-transparent">
                <Target className="w-10 h-10 text-[var(--color-brand-secondary)] mb-6" />
                <div>
                  <h3 className="text-2xl font-medium text-foreground mb-2">Cross-Channel Access</h3>
                  <p className="text-muted-foreground">Reach your audience across desktop, mobile, and connected TV environments from a single unified interface with consolidated reporting and attribution.</p>
                </div>
              </GlassPanel>
            </motion.div>
            <motion.div variants={staggerItem}>
              <GlassPanel className="bento-yellow h-full p-8 flex flex-col justify-end min-h-[200px] lg:min-h-[280px] bg-gradient-to-br from-[var(--color-brand-primary)]/5 to-transparent">
                <Lightning className="w-8 h-8 text-[var(--color-brand-primary)] mb-6" />
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-2">OpenRTB Bidding</h3>
                  <p className="text-muted-foreground text-sm">Lightning-fast bid evaluation and submission using standard OpenRTB protocols.</p>
                </div>
              </GlassPanel>
            </motion.div>
            <motion.div variants={staggerItem}>
              <GlassPanel className="bento-pink h-full p-8 flex flex-col justify-end min-h-[200px] lg:min-h-[280px]">
                <Sliders className="w-8 h-8 text-[var(--color-brand-secondary)] mb-6" />
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-2">Frequency Capping</h3>
                  <p className="text-muted-foreground text-sm">Control exposure across all channels to avoid ad fatigue and wasted spend.</p>
                </div>
              </GlassPanel>
            </motion.div>
            <motion.div variants={staggerItem}>
              <GlassPanel className="bento-violet h-full p-8 flex flex-col justify-end min-h-[200px] lg:min-h-[280px]">
                <Crosshair className="w-8 h-8 text-[var(--color-brand-primary)] mb-6" />
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-2">Bid Optimization</h3>
                  <p className="text-muted-foreground text-sm">Algorithmic bidding to ensure you win the right impressions at the right price.</p>
                </div>
              </GlassPanel>
            </motion.div>
            <motion.div variants={staggerItem} className="md:col-span-2 lg:col-span-2">
              <GlassPanel className="bento-cyan h-full p-8 flex flex-col justify-end min-h-[200px] lg:min-h-[280px] bg-gradient-to-bl from-black/5 to-transparent">
                <ChartBar className="w-10 h-10 text-[var(--color-brand-secondary)] mb-6" />
                <div>
                  <h3 className="text-2xl font-medium text-foreground mb-2">Transparent Reporting</h3>
                  <p className="text-muted-foreground">Log-level data access and real-time dashboards give you absolute clarity on where your ads ran, what you paid, and how they performed.</p>
                </div>
              </GlassPanel>
            </motion.div>
            <motion.div variants={staggerItem}>
              <GlassPanel className="bento-coral h-full p-8 flex flex-col justify-end min-h-[200px] lg:min-h-[280px]">
                <CurrencyDollar className="w-8 h-8 text-[var(--color-brand-primary)] mb-6" />
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-2">Campaign Pacing</h3>
                  <p className="text-muted-foreground text-sm">Intelligent budget distribution to ensure smooth delivery over your campaign flight.</p>
                </div>
              </GlassPanel>
            </motion.div>
          </StaggerContainer>
        </Container>
      </PageSection>

      {/* S4: INVENTORY ACCESS */}
      <PageSection className="py-24 md:py-32">
        <Container>
          <FadeUp>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-12 text-center">Premium inventory everywhere</h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FadeUp delay={0.1}>
              <GlassPanel className="bento-yellow p-8 h-full flex flex-col min-h-[220px] lg:min-h-[300px] bg-gradient-to-br from-black/5 to-transparent">
                <Desktop className="w-10 h-10 text-[var(--color-brand-primary)] mb-6" />
                <div className="flex-1">
                  <h3 className="text-2xl font-medium mb-4">Web</h3>
                  <p className="text-muted-foreground font-sans mb-8">Access premium desktop and mobile web inventory with high viewability and rich media support.</p>
                </div>
                <div className="flex items-center gap-2 text-sm font-mono text-[var(--color-brand-primary)]/70">
                  <ShieldCheck className="w-4 h-4" />
                  Brand Safe
                </div>
              </GlassPanel>
            </FadeUp>
            <FadeUp delay={0.2}>
              <GlassPanel className="bento-pink p-8 h-full flex flex-col min-h-[220px] lg:min-h-[300px] bg-gradient-to-br from-[var(--color-brand-secondary)]/5 to-transparent border-[var(--color-brand-secondary)]/10">
                <DeviceMobile className="w-10 h-10 text-[var(--color-brand-secondary)] mb-6" />
                <div className="flex-1">
                  <h3 className="text-2xl font-medium mb-4">Mobile App</h3>
                  <p className="text-muted-foreground font-sans mb-8">Engage users in high-attention in-app environments across gaming, utility, and lifestyle apps.</p>
                </div>
                <div className="flex items-center gap-2 text-sm font-mono text-[var(--color-brand-secondary)]/70">
                  <ShieldCheck className="w-4 h-4" />
                  SDK Integrated
                </div>
              </GlassPanel>
            </FadeUp>
            <FadeUp delay={0.3}>
              <GlassPanel className="bento-violet p-8 h-full flex flex-col min-h-[220px] lg:min-h-[300px] bg-gradient-to-bl from-[var(--color-brand-primary)]/5 to-transparent border-[var(--color-brand-primary)]/10">
                <Television className="w-10 h-10 text-[var(--color-brand-primary)] mb-6" />
                <div className="flex-1">
                  <h3 className="text-2xl font-medium mb-4">CTV</h3>
                  <p className="text-muted-foreground font-sans mb-8">Deliver high-impact video ads on the biggest screen in the house with household-level targeting.</p>
                </div>
                <div className="flex items-center gap-2 text-sm font-mono text-[var(--color-brand-primary)]/70">
                  <ShieldCheck className="w-4 h-4" />
                  Fraud Protected
                </div>
              </GlassPanel>
            </FadeUp>
          </div>
        </Container>
      </PageSection>

      {/* S5: REPORTING */}
      <PageSection className="py-24 md:py-32 relative overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <div className="max-w-xl">
                <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Complete transparency.</h2>
                <p className="text-lg text-foreground/60 font-sans mb-8">
                  We believe in zero black boxes. Our platform provides granular reporting down to the log level, giving you the insights needed to verify delivery and optimize performance confidently.
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <GlassPanel className="bento-cyan p-8 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-brand-primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
                
                <div className="text-sm font-mono text-slate-500 mb-8 flex justify-between items-center border-b border-border pb-4 relative z-10">
                  <span className="uppercase tracking-wider">Real-time Exchange Metrics</span>
                  <span className="flex items-center gap-2 text-foreground/80">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-brand-accent)] shadow-[0_0_8px_rgba(var(--color-brand-accent-rgb,250,204,21),0.8)] animate-pulse" /> Live
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-6 relative z-10">
                  {/* Win Rate */}
                  <div className="group/metric p-6 bg-background/50 rounded-2xl border border-border transition-all duration-500 hover:-translate-y-1 hover:bg-[var(--color-brand-secondary)]/5 hover:border-[var(--color-brand-secondary)]/30 hover:shadow-[0_0_30px_rgba(var(--color-brand-secondary-rgb,56,189,248),0.1)] cursor-default">
                    <div className="text-sm text-muted-foreground mb-3 font-sans transition-colors group-hover/metric:text-foreground">Win Rate</div>
                    <div className="text-3xl md:text-4xl font-mono text-foreground group-hover/metric:text-[var(--color-brand-secondary)] transition-colors duration-300">
                      <NumberTicker value={42} /><span className="text-2xl md:text-3xl">.8%</span>
                    </div>
                  </div>
                  
                  {/* Avg CPM */}
                  <div className="group/metric p-6 bg-background/50 rounded-2xl border border-border transition-all duration-500 hover:-translate-y-1 hover:bg-[var(--color-brand-primary)]/5 hover:border-[var(--color-brand-primary)]/30 hover:shadow-[0_0_30px_rgba(var(--color-brand-primary-rgb,136,192,64),0.1)] cursor-default">
                    <div className="text-sm text-muted-foreground mb-3 font-sans transition-colors group-hover/metric:text-foreground">Avg CPM</div>
                    <div className="text-3xl md:text-4xl font-mono text-foreground group-hover/metric:text-[var(--color-brand-primary)] transition-colors duration-300">
                      $1.24
                    </div>
                  </div>
                  
                  {/* Fill Rate */}
                  <div className="group/metric p-6 bg-background/50 rounded-2xl border border-border transition-all duration-500 hover:-translate-y-1 hover:bg-[var(--color-brand-accent)]/5 hover:border-[var(--color-brand-accent)]/30 hover:shadow-[0_0_30px_rgba(var(--color-brand-accent-rgb,250,204,21),0.1)] cursor-default">
                    <div className="text-sm text-muted-foreground mb-3 font-sans transition-colors group-hover/metric:text-foreground">Fill Rate</div>
                    <div className="text-3xl md:text-4xl font-mono text-foreground group-hover/metric:text-[var(--color-brand-accent)] transition-colors duration-300">
                      <NumberTicker value={98} /><span className="text-2xl md:text-3xl">.2%</span>
                    </div>
                  </div>
                  
                  {/* p99 Latency */}
                  <div className="group/metric p-6 bg-background/50 rounded-2xl border border-border transition-all duration-500 hover:-translate-y-1 hover:bg-black/5 hover:border-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] cursor-default">
                    <div className="text-sm text-muted-foreground mb-3 font-sans transition-colors group-hover/metric:text-foreground">p99 Latency</div>
                    <div className="text-3xl md:text-4xl font-mono text-foreground transition-colors duration-300">
                      <NumberTicker value={45} /><span className="text-2xl md:text-3xl text-muted-foreground group-hover/metric:text-foreground transition-colors">ms</span>
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
          <CtaDuo advertiserText="Access the Exchange" />
        </Container>
      </PageSection>
    </div>
  );
}
