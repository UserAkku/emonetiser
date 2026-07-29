"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { FadeUp, StaggerContainer, staggerItem } from "@/components/motion/Reveal";
import { GlassCard, GlassPanel, Eyebrow, MetricTile, PageSection, Container } from "@/components/ui/primitives";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, ShieldCheck, CheckCircle, Devices, AppWindow, Television, SealCheck } from "@phosphor-icons/react";

import { ExchangeArchitecture } from "@/components/visuals/ExchangeArchitecture";
import { UpliftStat } from "@/components/visuals/UpliftStat";
import { LogoMarquee } from "@/components/visuals/LogoMarquee";
import { CounterStat } from "@/components/visuals/CounterStat";
import { CtaDuo } from "@/components/shared/CtaDuo";
import { MovingBorderButton } from "@/components/ui/moving-border-button";
import { BorderBeam } from "@/components/magicui/border-beam";
import { Meteors } from "@/components/ui/meteors";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* SECTION 1 - HERO */}
      <PageSection className="gradient-mesh pt-32 lg:pt-40 pb-24 md:pb-32 overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <StaggerContainer className="flex flex-col items-start gap-8 z-10 relative">
              <motion.div variants={staggerItem}>
                <Eyebrow accent="green">
                  <ShieldCheck className="w-4 h-4 text-[var(--color-brand-accent)]" weight="fill" />
                  Google Certified Publisher Partner
                </Eyebrow>
              </motion.div>
              
              <motion.h1 variants={staggerItem} className="text-5xl sm:text-6xl lg:text-7xl font-display font-semibold tracking-tight leading-[1.1] text-balance">
                One exchange.<br />Both sides of the trade.
              </motion.h1>
              
              <motion.p variants={staggerItem} className="text-lg sm:text-xl text-muted-foreground max-w-lg leading-relaxed">
                Real-time OpenRTB auctions across Web, App, and CTV - connecting premium publishers with global advertisers.
              </motion.p>
              
              <motion.div variants={staggerItem} className="flex flex-wrap items-center gap-4 pt-4">
                <Link href="/company/contact?role=publisher" className="group">
                  <MovingBorderButton variant="primary">
                    Maximize Revenue <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </MovingBorderButton>
                </Link>
                <Link href="/company/contact?role=advertiser" className="group">
                  <MovingBorderButton variant="secondary">
                    Access Inventory <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </MovingBorderButton>
                </Link>
              </motion.div>
              
            </StaggerContainer>

            <FadeUp delay={0.2} className="relative z-10 w-full">
              <div className="group relative w-full overflow-hidden rounded-[2rem] border border-white/5 bg-card transition-colors hover:border-white/20 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
                <ExchangeArchitecture />
              </div>
            </FadeUp>
          </div>
        </Container>
      </PageSection>

      {/* SECTION 2 - TRUST & CERTIFICATIONS */}
      <PageSection className="py-24 border-y border-white/5 bg-black/20">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-8">
            <p className="text-center text-sm font-medium text-muted-foreground uppercase tracking-widest">
              Trusted by leading publishers & advertisers
            </p>
            <LogoMarquee />
          </div>
          
          <Container>
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { name: "Google CPP", desc: "Certified Partner", icon: ShieldCheck, color: "text-[var(--color-brand-primary)]" },
                { name: "IAB Tech Lab", desc: "Gold Member", icon: SealCheck, color: "text-[var(--color-brand-secondary)]" },
                { name: "ads.txt Verified", desc: "100% Direct", icon: CheckCircle, color: "text-[var(--color-brand-accent)]" },
                { name: "OpenRTB 2.6", desc: "Latest Standard", icon: ShieldCheck, color: "text-white" }
              ].map((cert, i) => (
                <motion.div key={i} variants={staggerItem} className="h-full">
                  <div className="group relative flex items-center gap-4 h-full w-full rounded-2xl bg-card border border-white/5 p-5 overflow-hidden transition-colors hover:border-white/20 shadow-xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
                    <BorderBeam size={120} duration={10} delay={i * 2} borderWidth={2} />
                    <cert.icon className={cn("relative z-10 w-10 h-10 drop-shadow-md transition-transform group-hover:scale-110", cert.color)} weight="duotone" />
                    <div className="relative z-10">
                      <h4 className="font-semibold text-white/90">{cert.name}</h4>
                      <p className="text-xs text-white/50 font-medium tracking-wide mt-0.5">{cert.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </StaggerContainer>
          </Container>
        </div>
      </PageSection>

      {/* SECTION 3 - PLATFORM OVERVIEW (SSP vs DSP) */}
      <PageSection className="py-24 md:py-32">
        <Container>
          <div className="flex flex-col items-center mb-16 text-center max-w-2xl mx-auto">
            <FadeUp>
              <h2 className="text-4xl md:text-5xl font-display font-semibold tracking-tight mb-4">Unified Infrastructure</h2>
              <p className="text-lg text-muted-foreground">Built to eliminate intermediaries, our platform provides a direct path between supply and demand.</p>
            </FadeUp>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
            <motion.div variants={staggerItem}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-[var(--color-brand-primary)]/20 bg-card p-8 transition-colors hover:border-[var(--color-brand-primary)]/50">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-brand-primary)]/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative z-10">
                  <h3 className="text-2xl font-display font-semibold text-[var(--color-brand-primary)] mb-6">Supply Side Platform</h3>
                  <ul className="space-y-4">
                    {[
                      "Yield optimization with machine learning",
                      "Advanced identity and audience solutions",
                      "Granular controls and transparent reporting"
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-[var(--color-brand-primary)] shrink-0" weight="fill" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div variants={staggerItem}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-[var(--color-brand-secondary)]/20 bg-card p-8 transition-colors hover:border-[var(--color-brand-secondary)]/50">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-brand-secondary)]/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative z-10">
                  <h3 className="text-2xl font-display font-semibold text-[var(--color-brand-secondary)] mb-6">Demand Side Platform</h3>
                  <ul className="space-y-4">
                    {[
                      "Direct access to premium omnichannel inventory",
                      "Custom bidding algorithms and SPO",
                      "Brand safety and anti-fraud integrations"
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-[var(--color-brand-secondary)] shrink-0" weight="fill" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </StaggerContainer>
          
          <FadeUp delay={0.2} className="mt-24">
            <UpliftStat />
          </FadeUp>
        </Container>
      </PageSection>

      {/* SECTION 4 - MONETIZATION CHANNELS */}
      <PageSection className="py-24 md:py-32 bg-black/30 border-y border-white/5">
        <Container>
          <div className="mb-16">
            <FadeUp>
              <Eyebrow accent="neutral" className="mb-6">Inventory Channels</Eyebrow>
              <h2 className="text-4xl md:text-5xl font-display font-semibold tracking-tight max-w-xl">
                Monetize every screen with zero compromise.
              </h2>
            </FadeUp>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div variants={staggerItem} className="md:col-span-2">
              <GlassPanel className="relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-brand-primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 p-4">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <AppWindow className="w-8 h-8 text-[var(--color-brand-primary)]" weight="duotone" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-1">Web Display & Video</h3>
                      <p className="text-muted-foreground">High-impact formats across desktop and mobile web environments.</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs font-mono px-3 py-1 bg-white/5 rounded-full border border-white/10">Banner</span>
                    <span className="text-xs font-mono px-3 py-1 bg-white/5 rounded-full border border-white/10">In-Stream</span>
                    <span className="text-xs font-mono px-3 py-1 bg-white/5 rounded-full border border-white/10">Native</span>
                  </div>
                </div>
              </GlassPanel>
            </motion.div>

            <motion.div variants={staggerItem}>
              <GlassPanel className="relative overflow-hidden group h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-brand-secondary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 flex flex-col h-full gap-6 p-4">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <Devices className="w-8 h-8 text-[var(--color-brand-secondary)]" weight="duotone" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-2">In-App</h3>
                    <p className="text-muted-foreground">Seamless integration for iOS and Android applications via SDK or OpenRTB.</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    <span className="text-xs font-mono px-3 py-1 bg-white/5 rounded-full border border-white/10">Interstitial</span>
                    <span className="text-xs font-mono px-3 py-1 bg-white/5 rounded-full border border-white/10">Rewarded</span>
                  </div>
                </div>
              </GlassPanel>
            </motion.div>

            <motion.div variants={staggerItem}>
              <GlassPanel className="relative overflow-hidden group h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-brand-accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 flex flex-col h-full gap-6 p-4">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <Television className="w-8 h-8 text-[var(--color-brand-accent)]" weight="duotone" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-2">Connected TV</h3>
                    <p className="text-muted-foreground">Premium video inventory on the biggest screen in the home.</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    <span className="text-xs font-mono px-3 py-1 bg-white/5 rounded-full border border-white/10">Pre-roll</span>
                    <span className="text-xs font-mono px-3 py-1 bg-white/5 rounded-full border border-white/10">Mid-roll</span>
                  </div>
                </div>
              </GlassPanel>
            </motion.div>
          </StaggerContainer>
        </Container>
      </PageSection>

      {/* SECTION 5 - HOW THE EXCHANGE WORKS */}
      <PageSection className="py-24 md:py-32">
        <Container>
          <FadeUp className="mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-semibold tracking-tight">The anatomy of<br />a 20ms transaction.</h2>
          </FadeUp>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <StaggerContainer className="flex flex-col gap-12">
              {[
                { title: "Ad Request", desc: "User loads a page or app, triggering an immediate request to our SSP." },
                { title: "Bid Request", desc: "We enrich the request with privacy-safe audience data and broadcast via OpenRTB." },
                { title: "Simultaneous Bidding", desc: "Hundreds of DSPs evaluate the opportunity and submit their bids concurrently." },
                { title: "Winning Bid", desc: "Our auction logic selects the highest valid bid in under 20 milliseconds." },
                { title: "Creative Delivery", desc: "The winning ad markup is securely delivered and rendered for the user." }
              ].map((step, i) => (
                <motion.div key={i} variants={staggerItem} className="flex gap-6 group">
                  <div className="font-mono text-xl text-[var(--color-brand-primary)] font-bold pt-1">
                    0{i + 1}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2 group-hover:text-[var(--color-brand-primary)] transition-colors">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </StaggerContainer>

            <div className="hidden lg:block relative">
              <div className="sticky top-24">
                <div className="group relative w-full overflow-hidden rounded-[2rem] border border-white/5 bg-card transition-colors hover:border-white/20 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
                  <ExchangeArchitecture />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </PageSection>

      {/* SECTION 6 - PERFORMANCE METRICS */}
      <PageSection className="py-24 md:py-32 bg-black/20 border-y border-white/5">
        <Container>
          <FadeUp className="mb-16 text-center">
            <h2 className="text-4xl font-display font-semibold tracking-tight">Scale meets speed.</h2>
          </FadeUp>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { value: <CounterStat value={20} prefix="<" suffix="ms" />, label: "Auction Latency", sub: "p99 global", color: "var(--color-brand-primary)" },
              { value: "OpenRTB 2.6", label: "Protocol Standard", sub: "IAB compliant", color: "var(--color-brand-secondary)" },
              { value: "3 Channels", label: "Web + App + CTV", sub: "Unified auction", color: "var(--color-brand-accent)" },
              { value: "Google CPP", label: "Certified Partner", sub: "Since 2022", color: "var(--color-brand-primary)" }
            ].map((metric, i) => (
              <motion.div key={i} variants={staggerItem} className="h-full">
                <div className="group relative overflow-hidden rounded-3xl bg-card border border-white/5 p-8 transition-all hover:border-white/20 h-full flex flex-col justify-center gap-1 shadow-xl">

                  {/* Subtle hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
                  
                  <div className="relative z-10 flex flex-col gap-1">
                    <span
                      className="font-display text-4xl lg:text-5xl font-bold tracking-tight mb-2"
                      style={{ color: metric.color }}
                    >
                      {metric.value}
                    </span>
                    <span className="font-semibold text-white/90 text-lg">
                      {metric.label}
                    </span>
                    <span className="text-xs font-medium text-white/40 uppercase tracking-widest font-mono">
                      {metric.sub}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </Container>
      </PageSection>

      {/* SECTION 7 - FINAL CTA */}
      <PageSection mesh className="py-24 md:py-32">
        <Container>
          <FadeUp>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-display font-semibold tracking-tight text-center mb-12">
                Ready to trade on the transparent exchange?
              </h2>
              <CtaDuo />
            </div>
          </FadeUp>
        </Container>
      </PageSection>
    </main>
  );
}
