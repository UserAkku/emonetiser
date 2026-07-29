"use client";

import Link from "next/link";
import { FadeUp, StaggerContainer, staggerItem } from "@/components/motion/Reveal";
import { GlassCard, GlassPanel, Eyebrow, MetricTile, PageSection, Container } from "@/components/ui/primitives";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { ArrowRight, Graph, Target, ShieldCheck, ShareNetwork, ChartLineUp, AppWindow, Globe, FileText, Certificate, HandsClapping, Lightbulb, Eyeglasses, Users } from "@phosphor-icons/react";

export default function AboutPage() {
  return (
    <main className="flex-1">
      {/* S1: HERO + MISSION */}
      <PageSection className="pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden relative">
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] glow-primary opacity-20 pointer-events-none" />
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <FadeUp>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-medium tracking-tight text-foreground mb-6">
                We own<br />the exchange.
              </h1>
              <p className="text-lg md:text-xl text-foreground/70 max-w-xl mb-10 leading-relaxed">
                Founded to eliminate the middlemen - connecting publishers and advertisers through one transparent, real-time auction infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#what-we-built" className={cn(buttonVariants({ size: "lg" }), "gap-2")}>
                  Meet the Platform <ArrowRight weight="bold" />
                </Link>
                <Link href="/company/contact" className={buttonVariants({ variant: "outline", size: "lg" })}>
                  Get in Touch
                </Link>
              </div>
            </FadeUp>
            <FadeUp delay={0.2} className="relative h-[400px] lg:h-[500px] flex items-center justify-center">
              <svg viewBox="0 0 400 400" className="w-full h-full max-w-[400px]">
                <defs>
                  <linearGradient id="blue-violet" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--color-brand-primary)" />
                    <stop offset="100%" stopColor="var(--color-brand-secondary)" />
                  </linearGradient>
                </defs>
                <circle cx="200" cy="200" r="180" fill="none" stroke="currentColor" strokeWidth="1" className="text-foreground/10" />
                <circle cx="200" cy="200" r="120" fill="none" stroke="currentColor" strokeWidth="1" className="text-foreground/20" strokeDasharray="4 4" />
                <circle cx="200" cy="200" r="60" fill="none" stroke="currentColor" strokeWidth="1" className="text-foreground/30" />
                
                <circle cx="200" cy="200" r="8" fill="url(#blue-violet)" />
                <circle cx="380" cy="200" r="6" fill="var(--color-brand-primary)" />
                <circle cx="20" cy="200" r="6" fill="var(--color-brand-secondary)" />
                <circle cx="200" cy="20" r="6" fill="var(--color-brand-primary)" />
                <circle cx="200" cy="380" r="6" fill="var(--color-brand-secondary)" />
                
                <path d="M 200 20 L 200 200 M 20 200 L 200 200 M 380 200 L 200 200 M 200 380 L 200 200" stroke="url(#blue-violet)" strokeWidth="2" strokeDasharray="4 4" opacity="0.5" />
              </svg>
            </FadeUp>
          </div>
        </Container>
      </PageSection>

      {/* S2: OUR STORY */}
      <PageSection className="py-24 md:py-32 bg-gray-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <FadeUp>
              <h2 className="text-3xl md:text-5xl font-display font-medium text-foreground mb-8">
                The problem we set out to solve.
              </h2>
              <div className="space-y-6 text-lg text-foreground/70">
                <p>
                  For too long, the programmatic ecosystem has been characterized by opacity, fragmented supply chains, and excessive margin taxes. Middlemen stacked upon middlemen eroded publisher yield and diminished advertiser return on ad spend.
                </p>
                <p>
                  We believed there had to be a better way. By owning the entire infrastructure - from the SSP that integrates directly with publishers to the DSP that ingests demand - we eliminated the hops, removed the hidden fees, and created a single, unified auction environment where value is maximized for both sides.
                </p>
              </div>
            </FadeUp>
            
            <StaggerContainer className="space-y-6">
              <motion.div variants={staggerItem}>
                <GlassPanel className="p-6 relative overflow-hidden group hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
                  <div className="absolute top-0 left-0 w-1 h-full bg-white/20 group-hover:bg-white/40 transition-colors" />
                  <h3 className="text-xl font-medium text-foreground mb-2">The Problem (2019)</h3>
                  <p className="text-muted-foreground">Fragmented exchanges causing up to 40% value loss in the supply path.</p>
                </GlassPanel>
              </motion.div>
              <motion.div variants={staggerItem}>
                <GlassPanel className="p-6 relative overflow-hidden group hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
                  <div className="absolute top-0 left-0 w-1 h-full bg-[var(--color-brand-primary)]" />
                  <h3 className="text-xl font-medium text-foreground mb-2">We Built It (2021)</h3>
                  <p className="text-muted-foreground">Launched our unified infrastructure handling both supply and demand directly.</p>
                </GlassPanel>
              </motion.div>
              <motion.div variants={staggerItem}>
                <GlassPanel className="p-6 relative overflow-hidden group hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
                  <div className="absolute top-0 left-0 w-1 h-full bg-[var(--color-brand-secondary)]" />
                  <h3 className="text-xl font-medium text-foreground mb-2">Google Certified (2022)</h3>
                  <p className="text-muted-foreground">Achieved official certification, validating our direct integration capabilities and scale.</p>
                </GlassPanel>
              </motion.div>
            </StaggerContainer>
          </div>
        </Container>
      </PageSection>

      {/* S3: WHAT WE BUILT */}
      <PageSection id="what-we-built" className="py-24 md:py-32">
        <Container>
          <FadeUp className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-medium text-foreground">Our Infrastructure</h2>
          </FadeUp>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <FadeUp>
              <GlassPanel className="p-8 h-full border-t-2 border-t-[var(--color-brand-primary)] group hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-[var(--color-brand-primary)]/10 flex items-center justify-center text-[var(--color-brand-primary)] group-hover:bg-[var(--color-brand-primary)]/20 group-hover:scale-110 transition-all duration-300">
                    <AppWindow size={28} weight="duotone" />
                  </div>
                  <h3 className="text-3xl font-display text-foreground">SSP for Publishers</h3>
                </div>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <ChartLineUp size={24} className="text-[var(--color-brand-primary)] shrink-0 mt-1" />
                    <div>
                      <h4 className="text-foreground font-medium mb-1 text-lg">Direct Integrations</h4>
                      <p className="text-sm text-muted-foreground">Prebid, OpenBidding, and direct VAST/VPAID tags with zero intermediaries.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Target size={24} className="text-[var(--color-brand-primary)] shrink-0 mt-1" />
                    <div>
                      <h4 className="text-foreground font-medium mb-1 text-lg">Yield Optimization</h4>
                      <p className="text-sm text-muted-foreground">Dynamic flooring and real-time auction mechanics to maximize eCPM.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <ShieldCheck size={24} className="text-[var(--color-brand-primary)] shrink-0 mt-1" />
                    <div>
                      <h4 className="text-foreground font-medium mb-1 text-lg">Brand Safety</h4>
                      <p className="text-sm text-muted-foreground">Automated quality scanning ensuring premium ad experiences.</p>
                    </div>
                  </li>
                </ul>
              </GlassPanel>
            </FadeUp>
            
            <FadeUp delay={0.2}>
              <GlassPanel className="p-8 h-full border-t-2 border-t-[var(--color-brand-secondary)] group hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-[var(--color-brand-secondary)]/10 flex items-center justify-center text-[var(--color-brand-secondary)] group-hover:bg-[var(--color-brand-secondary)]/20 group-hover:scale-110 transition-all duration-300">
                    <Globe size={28} weight="duotone" />
                  </div>
                  <h3 className="text-3xl font-display text-foreground">DSP for Advertisers</h3>
                </div>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <ShareNetwork size={24} className="text-[var(--color-brand-secondary)] shrink-0 mt-1" />
                    <div>
                      <h4 className="text-foreground font-medium mb-1 text-lg">Premium Supply Access</h4>
                      <p className="text-sm text-muted-foreground">Direct path to our proprietary O&O properties and premium publisher network.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Graph size={24} className="text-[var(--color-brand-secondary)] shrink-0 mt-1" />
                    <div>
                      <h4 className="text-foreground font-medium mb-1 text-lg">Algorithmic Bidding</h4>
                      <p className="text-sm text-muted-foreground">Machine-learning driven bid optimization to hit strict ROAS and CPA goals.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <FileText size={24} className="text-[var(--color-brand-secondary)] shrink-0 mt-1" />
                    <div>
                      <h4 className="text-foreground font-medium mb-1 text-lg">Transparent Reporting</h4>
                      <p className="text-sm text-muted-foreground">Log-level data access and full visibility into exactly where your budget goes.</p>
                    </div>
                  </li>
                </ul>
              </GlassPanel>
            </FadeUp>
          </div>
          <FadeUp delay={0.4} className="text-center">
            <div className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-black/5 backdrop-blur-md border border-border text-foreground font-medium shadow-2xl">
              <ShareNetwork size={20} className="mr-3 text-[var(--color-brand-primary)]" />
              Unified Exchange Architecture
            </div>
          </FadeUp>
        </Container>
      </PageSection>

      {/* S4: CERTIFICATIONS */}
      <PageSection className="py-24 md:py-32 bg-gray-50">
        <Container>
          <FadeUp className="mb-12">
            <Eyebrow>Industry Standards</Eyebrow>
            <h2 className="text-3xl md:text-5xl font-display font-medium text-foreground mt-4">Verified & Certified</h2>
          </FadeUp>
          
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div variants={staggerItem}>
              <GlassPanel className="p-6 h-full flex flex-col group hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-black/5 flex items-center justify-center text-foreground mb-6 group-hover:bg-black/5 group-hover:scale-110 transition-all duration-300">
                  <Certificate size={24} />
                </div>
                <h3 className="text-xl font-medium text-foreground mb-1">Google CPP</h3>
                <span className="text-xs font-mono text-muted-foreground mb-4">Issued 2022</span>
                <p className="text-sm text-muted-foreground mt-auto">Certified Publishing Partner for scaling and monetizing apps & websites.</p>
              </GlassPanel>
            </motion.div>
            <motion.div variants={staggerItem}>
              <GlassPanel className="p-6 h-full flex flex-col group hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-black/5 flex items-center justify-center text-foreground mb-6 group-hover:bg-black/5 group-hover:scale-110 transition-all duration-300">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="text-xl font-medium text-foreground mb-1">IAB Tech Lab</h3>
                <span className="text-xs font-mono text-muted-foreground mb-4">Member</span>
                <p className="text-sm text-muted-foreground mt-auto">Committed to developing and implementing global technical standards.</p>
              </GlassPanel>
            </motion.div>
            <motion.div variants={staggerItem}>
              <GlassPanel className="p-6 h-full flex flex-col group hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-black/5 flex items-center justify-center text-foreground mb-6 group-hover:bg-black/5 group-hover:scale-110 transition-all duration-300">
                  <FileText size={24} />
                </div>
                <h3 className="text-xl font-medium text-foreground mb-1">ads.txt Compliant</h3>
                <span className="text-xs font-mono text-muted-foreground mb-4">Continuous</span>
                <p className="text-sm text-muted-foreground mt-auto">Full support for authorized digital sellers for transparent supply chains.</p>
              </GlassPanel>
            </motion.div>
            <motion.div variants={staggerItem}>
              <GlassPanel className="p-6 h-full flex flex-col group hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-black/5 flex items-center justify-center text-foreground mb-6 group-hover:bg-black/5 group-hover:scale-110 transition-all duration-300">
                  <ShareNetwork size={24} />
                </div>
                <h3 className="text-xl font-medium text-foreground mb-1">OpenRTB 2.6</h3>
                <span className="text-xs font-mono text-muted-foreground mb-4">Supported</span>
                <p className="text-sm text-muted-foreground mt-auto">Implementing the latest real-time bidding protocols for efficiency.</p>
              </GlassPanel>
            </motion.div>
          </StaggerContainer>
        </Container>
      </PageSection>

      {/* S5: VALUES */}
      <PageSection className="py-24 md:py-32">
        <Container>
          <FadeUp className="mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-medium text-foreground">Core Values</h2>
          </FadeUp>
          
          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            <motion.div variants={staggerItem} className="md:col-span-2">
              <GlassPanel className="p-8 h-full bg-gradient-to-br from-black/5 to-transparent flex flex-col justify-end min-h-[200px] lg:min-h-[280px]">
                <Eyeglasses size={32} className="text-[var(--color-brand-secondary)] mb-6" />
                <h3 className="text-2xl font-medium text-foreground mb-2">Transparency</h3>
                <p className="text-muted-foreground">An open auction environment with no black-box mechanics, giving you complete visibility into every transaction.</p>
              </GlassPanel>
            </motion.div>
            
            <motion.div variants={staggerItem}>
              <GlassPanel className="p-8 h-full flex flex-col justify-end min-h-[200px] lg:min-h-[280px]">
                <HandsClapping size={32} className="text-[var(--color-brand-primary)] mb-6" />
                <h3 className="text-xl font-medium text-foreground mb-2">Ownership</h3>
                <p className="text-muted-foreground text-sm">We build and maintain our infrastructure entirely in-house for maximum control.</p>
              </GlassPanel>
            </motion.div>
            
            <motion.div variants={staggerItem}>
              <GlassPanel className="p-8 h-full flex flex-col justify-end min-h-[200px] lg:min-h-[280px]">
                <Lightbulb size={32} className="text-[var(--color-brand-primary)] mb-6" />
                <h3 className="text-xl font-medium text-foreground mb-2">Innovation</h3>
                <p className="text-muted-foreground text-sm">Constant optimization and rapid deployment of new AdTech capabilities.</p>
              </GlassPanel>
            </motion.div>
            
            <motion.div variants={staggerItem} className="md:col-span-2">
              <GlassPanel className="p-8 h-full bg-gradient-to-bl from-[var(--color-brand-primary)]/5 to-transparent flex flex-col justify-end min-h-[200px] lg:min-h-[280px]">
                <ChartLineUp size={32} className="text-[var(--color-brand-secondary)] mb-6" />
                <h3 className="text-2xl font-medium text-foreground mb-2">Accountability</h3>
                <p className="text-muted-foreground">Clear, granular reporting that holds our performance accountable to your bottom line.</p>
              </GlassPanel>
            </motion.div>
          </StaggerContainer>
        </Container>
      </PageSection>

      {/* S6: LEADERSHIP */}
      <PageSection className="py-24 md:py-32 bg-gray-50">
        <Container>
          <FadeUp className="mb-12 text-center">
            <h2 className="text-3xl md:text-5xl font-display font-medium text-foreground">Leadership Team</h2>
          </FadeUp>
          
          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            <motion.div variants={staggerItem}>
              <GlassPanel className="p-8 text-center h-full group hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
                <div className="w-20 h-20 rounded-2xl bg-[var(--color-brand-primary)]/10 text-[var(--color-brand-primary)] flex items-center justify-center text-2xl font-display font-medium mx-auto mb-6 group-hover:bg-[var(--color-brand-primary)]/20 group-hover:scale-110 transition-all duration-300">
                  CEO
                </div>
                <h3 className="text-2xl font-medium text-foreground mb-1">Founder & CEO</h3>
                <p className="text-sm font-mono text-[var(--color-brand-primary)] mb-6">AdTech Veteran</p>
                <p className="text-muted-foreground text-sm leading-relaxed">15+ years in programmatic advertising, building sustainable yield strategies.</p>
              </GlassPanel>
            </motion.div>
            
            <motion.div variants={staggerItem}>
              <GlassPanel className="p-8 text-center h-full group hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
                <div className="w-20 h-20 rounded-2xl bg-black/5 text-foreground flex items-center justify-center text-2xl font-display font-medium mx-auto mb-6 group-hover:bg-black/5 group-hover:scale-110 transition-all duration-300">
                  CTO
                </div>
                <h3 className="text-2xl font-medium text-foreground mb-1">Chief Technology Officer</h3>
                <p className="text-sm font-mono text-muted-foreground mb-6">OpenRTB Specialist</p>
                <p className="text-muted-foreground text-sm leading-relaxed">Architect behind our unified exchange, specializing in high-throughput infrastructure.</p>
              </GlassPanel>
            </motion.div>
            
            <motion.div variants={staggerItem}>
              <GlassPanel className="p-8 text-center h-full group hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
                <div className="w-20 h-20 rounded-2xl bg-[var(--color-brand-secondary)]/10 text-[var(--color-brand-secondary)] flex items-center justify-center text-2xl font-display font-medium mx-auto mb-6 group-hover:bg-[var(--color-brand-secondary)]/20 group-hover:scale-110 transition-all duration-300">
                  VP
                </div>
                <h3 className="text-2xl font-medium text-foreground mb-1">VP Publisher Success</h3>
                <p className="text-sm font-mono text-[var(--color-brand-secondary)] mb-6">Yield Expert</p>
                <p className="text-muted-foreground text-sm leading-relaxed">Dedicated to maximizing publisher revenue through advanced optimization techniques.</p>
              </GlassPanel>
            </motion.div>
          </StaggerContainer>
        </Container>
      </PageSection>

      {/* S7: FINAL CTA */}
      <PageSection className="py-24 md:py-32 relative overflow-hidden">
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            <FadeUp>
              <Link href="/publishers/web-monetization" className="block h-full transition-transform hover:-translate-y-2 duration-300">
                <GlassPanel className="p-12 h-full text-center border border-border hover:border-[var(--color-brand-primary)]/50 group bg-gradient-to-b from-transparent to-[var(--color-brand-primary)]/5 shadow-2xl">
                  <div className="w-20 h-20 rounded-2xl bg-[var(--color-brand-primary)]/10 flex items-center justify-center mx-auto mb-8 text-[var(--color-brand-primary)] group-hover:scale-110 transition-transform duration-300">
                    <AppWindow size={40} weight="duotone" />
                  </div>
                  <h3 className="text-4xl font-display font-medium text-foreground mb-4 group-hover:text-[var(--color-brand-primary)] transition-colors">For Publishers</h3>
                  <p className="text-muted-foreground mb-10 max-w-sm mx-auto text-lg leading-relaxed">Maximize your inventory value with our direct SSP integration.</p>
                  <span className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[var(--color-brand-primary)]/10 text-[var(--color-brand-primary)] font-medium gap-2 group-hover:bg-[var(--color-brand-primary)]/20 transition-colors">
                    Start Monetizing <ArrowRight weight="bold" className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </GlassPanel>
              </Link>
            </FadeUp>
            
            <FadeUp delay={0.1}>
              <Link href="/advertisers/programmatic-advertising" className="block h-full transition-transform hover:-translate-y-2 duration-300">
                <GlassPanel className="p-12 h-full text-center border border-border hover:border-[var(--color-brand-secondary)]/50 group bg-gradient-to-b from-transparent to-[var(--color-brand-secondary)]/5 shadow-2xl">
                  <div className="w-20 h-20 rounded-2xl bg-[var(--color-brand-secondary)]/10 flex items-center justify-center mx-auto mb-8 text-[var(--color-brand-secondary)] group-hover:scale-110 transition-transform duration-300">
                    <Globe size={40} weight="duotone" />
                  </div>
                  <h3 className="text-4xl font-display font-medium text-foreground mb-4 group-hover:text-[var(--color-brand-secondary)] transition-colors">For Advertisers</h3>
                  <p className="text-muted-foreground mb-10 max-w-sm mx-auto text-lg leading-relaxed">Access premium, brand-safe inventory at scale through our DSP.</p>
                  <span className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[var(--color-brand-secondary)]/10 text-[var(--color-brand-secondary)] font-medium gap-2 group-hover:bg-[var(--color-brand-secondary)]/20 transition-colors">
                    Start Scaling <ArrowRight weight="bold" className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </GlassPanel>
              </Link>
            </FadeUp>
          </div>
        </Container>
      </PageSection>
    </main>
  );
}
