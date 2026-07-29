"use client";

import Link from "next/link";
import { FadeUp, StaggerContainer, staggerItem } from "@/components/motion/Reveal";
import { GlassCard, GlassPanel, Eyebrow, MetricTile, PageSection, Container } from "@/components/ui/primitives";
import { buttonVariants } from "@/components/ui/button";
import React, { useRef } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, DeviceMobile, PlayCircle, AppWindow, Code, ShieldCheck, Lightning, CheckCircle, Devices } from "@phosphor-icons/react";
import { CtaDuo } from "@/components/shared/CtaDuo";
import { MovingBorderButton } from "@/components/ui/moving-border-button";
import { motion } from "motion/react";
import { AnimatedBeam } from "@/components/magicui/animated-beam";


export default function AppMonetizationPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const dspARef = useRef<HTMLDivElement>(null);
  const adNet1Ref = useRef<HTMLDivElement>(null);
  const directRef = useRef<HTMLDivElement>(null);
  const exchangeBRef = useRef<HTMLDivElement>(null);
  const mediationRef = useRef<HTMLDivElement>(null);
  const auctionRef = useRef<HTMLDivElement>(null);
  const userRef = useRef<HTMLDivElement>(null);
  return (
    <main className="flex flex-col w-full bg-background min-h-screen text-foreground">
      
      {/* S1 HERO */}
      <PageSection className="pt-32 pb-24 md:pt-40 md:pb-32 ">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeUp className="flex flex-col items-start text-left">
              <Eyebrow className="text-[var(--color-brand-primary)] mb-6">App Monetization</Eyebrow>
              <h1 className="text-5xl md:text-7xl font-display font-medium tracking-tight text-foreground mb-6">
                Monetize smarter.<br />
                Grow faster.
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg mb-10 leading-relaxed">
                Integrate our ultra-lightweight SDK for iOS and Android once, and tap into global premium demand across all formats.
              </p>
              <MovingBorderButton href="/contact" className="mt-2 group">
                Download SDK
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </MovingBorderButton>
            </FadeUp>
            
            <FadeUp delay={0.2} className="relative flex justify-center lg:justify-end w-full">
              <div className="relative w-full max-w-[300px] h-[600px] mx-auto lg:mx-0 rounded-[3rem] border-4 border-border bg-gray-100 p-4 flex flex-col gap-4 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] backdrop-blur-xl">
                {/* Phone Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-7 bg-background rounded-b-3xl z-20 flex justify-center items-center">
                   <div className="w-16 h-1 rounded-full bg-black/5" />
                </div>
                
                {/* Fake App Content / Formats */}
                <div className="flex-1 mt-8 flex flex-col gap-4 relative z-10">
                  
                  {/* Fake App Header */}
                  <div className="flex items-center justify-between px-2 mb-2">
                    <div className="flex gap-1.5 flex-col">
                      <div className="w-6 h-0.5 bg-white/20 rounded-full" />
                      <div className="w-4 h-0.5 bg-white/20 rounded-full" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[var(--color-brand-primary)]/20 border border-[var(--color-brand-primary)]/50" />
                  </div>

                  {/* App Content Skeleton */}
                  <div className="flex flex-col gap-2 px-2">
                    <div className="w-3/4 h-3 bg-black/5 rounded-full" />
                    <div className="w-1/2 h-3 bg-black/5 rounded-full" />
                  </div>

                  {/* Rewarded Video Ad Slot */}
                  <div className="w-full bg-card rounded-2xl h-36 mt-4 flex flex-col justify-center items-center p-4 border border-[var(--color-brand-primary)]/30 text-center relative overflow-hidden group hover:border-[var(--color-brand-primary)]/60 transition-colors shadow-[0_0_20px_rgba(var(--color-brand-primary),0.05)] cursor-pointer">
                    <div className="absolute top-2 left-2 bg-black/50 text-[8px] font-mono uppercase tracking-widest px-1.5 py-0.5 rounded text-foreground/50 border border-border">Ad</div>
                    <div className="absolute top-2 right-2 flex items-center gap-1 bg-amber-500/10 text-[10px] font-medium px-2 py-0.5 rounded-full text-amber-500 border border-amber-500/20">
                      +50 Coins
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-brand-primary)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <PlayCircle className="w-10 h-10 text-[var(--color-brand-primary)] mb-2 relative z-10 group-hover:scale-110 transition-transform duration-500" weight="fill" />
                    <span className="text-foreground font-semibold text-sm relative z-10 tracking-wide">Rewarded Video</span>
                  </div>
                  
                  {/* Native Ad Slot */}
                  <div className="w-full bg-card rounded-2xl h-24 flex items-center gap-4 p-4 border border-border relative overflow-hidden group hover:border-border transition-colors cursor-pointer mt-2">
                    <div className="absolute top-2 right-2 bg-black/50 text-[8px] font-mono uppercase tracking-widest px-1.5 py-0.5 rounded text-foreground/50 border border-border">Ad</div>
                    <div className="w-12 h-12 rounded-lg bg-black/5 shrink-0 flex items-center justify-center">
                       <AppWindow className="w-6 h-6 text-muted-foreground" weight="duotone" />
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                      <div className="w-full h-2.5 bg-black/5 rounded-full" />
                      <div className="w-2/3 h-2.5 bg-black/5 rounded-full" />
                    </div>
                  </div>
                  
                  {/* Banner Ad Slot (Sticky Bottom) */}
                  <div className="w-full bg-card rounded-xl h-[50px] mt-auto flex items-center justify-center border border-[var(--color-brand-secondary)]/30 text-center relative overflow-hidden group hover:border-[var(--color-brand-secondary)]/60 transition-colors cursor-pointer shadow-[0_0_15px_rgba(var(--color-brand-secondary),0.1)]">
                     <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--color-brand-secondary)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-[pulse_2s_infinite]" />
                     <span className="text-[var(--color-brand-secondary)] text-[10px] font-mono uppercase tracking-widest font-semibold">Banner Ad Slot</span>
                  </div>
                </div>
                
                {/* Decorative background mesh behind the cards */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none" />
              </div>
            </FadeUp>
          </div>
        </Container>
      </PageSection>

      {/* S2 AD FORMAT SHOWCASE */}
      <PageSection className="py-24 md:py-32 bg-white">
        <Container>
          <FadeUp className="mb-16">
            <h2 className="text-3xl md:text-5xl font-display text-foreground">Formats that convert</h2>
          </FadeUp>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Rewarded Video - Wider/Taller */}
            <div className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 lg:col-span-2 lg:row-span-2 flex flex-col min-h-[300px] lg:min-h-[400px] transition-all duration-500 hover:border-[var(--color-brand-primary)]/30 hover:shadow-[0_0_40px_rgba(var(--color-brand-primary-rgb,136,192,64),0.1)]">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-brand-primary)]/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-background transition-transform duration-500 group-hover:scale-110 group-hover:border-[var(--color-brand-primary)]/30 group-hover:bg-[var(--color-brand-primary)]/10">
                  <PlayCircle className="w-8 h-8 text-[var(--color-brand-primary)]" weight="duotone" />
                </div>
                
                <h3 className="text-3xl font-display font-medium text-foreground mb-3 tracking-tight group-hover:text-[var(--color-brand-primary)] transition-colors">Rewarded Video</h3>
                <p className="text-muted-foreground text-lg mb-8 max-w-md">2-3× higher eCPM vs banner</p>
                
                <div className="mt-auto">
                  <div className="flex justify-between items-end mb-3">
                     <span className="text-xs text-muted-foreground font-mono uppercase tracking-widest font-semibold group-hover:text-foreground transition-colors">Revenue Potential</span>
                     <span className="text-xs font-mono text-[var(--color-brand-primary)] opacity-0 group-hover:opacity-100 transition-opacity duration-500">Max Yield</span>
                  </div>
                  <div className="w-full h-2.5 bg-background border border-border rounded-full overflow-hidden relative shadow-inner">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "95%" }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: 0.1 }}
                      className="h-full bg-gradient-to-r from-[var(--color-brand-primary)]/60 to-[var(--color-brand-primary)] rounded-full relative"
                    >
                      <div className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-r from-transparent to-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full blur-[2px]" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interstitial */}
            <div className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 flex flex-col min-h-[180px] lg:min-h-[220px] transition-all duration-500 hover:border-[var(--color-brand-secondary)]/30 hover:shadow-[0_0_30px_rgba(var(--color-brand-secondary-rgb,138,180,248),0.1)]">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-brand-secondary)]/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col h-full">
                <AppWindow className="w-8 h-8 text-[var(--color-brand-secondary)] mb-4 transition-transform duration-500 group-hover:scale-110" weight="duotone" />
                <h3 className="text-2xl font-display font-medium text-foreground mb-2 group-hover:text-[var(--color-brand-secondary)] transition-colors">Interstitial</h3>
                <p className="text-muted-foreground text-sm mb-6">Natural break placements</p>
                
                <div className="mt-auto">
                  <div className="w-full h-1.5 bg-background border border-border rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "75%" }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                      className="h-full bg-[var(--color-brand-secondary)] rounded-full relative"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Banner */}
            <div className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 flex flex-col min-h-[180px] lg:min-h-[220px] transition-all duration-500 hover:border-border hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]">
              <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col h-full">
                <DeviceMobile className="w-8 h-8 text-muted-foreground mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:text-foreground" weight="duotone" />
                <h3 className="text-2xl font-display font-medium text-foreground mb-2 group-hover:text-foreground transition-colors">Banner</h3>
                <p className="text-muted-foreground text-sm mb-6">Always-on revenue</p>
                
                <div className="mt-auto">
                  <div className="w-full h-1.5 bg-background border border-border rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "40%" }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                      className="h-full bg-slate-400 rounded-full relative group-hover:bg-white transition-colors"
                    />
                  </div>
                </div>
              </div>
            </div>
          </StaggerContainer>
        </Container>
      </PageSection>

      {/* S3 SDK OVERVIEW */}
      <PageSection className="py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <Eyebrow className="text-muted-foreground mb-6">Developer First</Eyebrow>
              <h2 className="text-3xl md:text-5xl font-display text-foreground mb-10">One SDK. Endless scale.</h2>
              <ul className="space-y-6">
                {[
                  { title: "iOS & Android Support", icon: Devices },
                  { title: "<500KB SDK Size", icon: Code },
                  { title: "Privacy Compliant (GDPR/CCPA)", icon: ShieldCheck },
                  { title: "Major Mediation Supported", icon: CheckCircle },
                  { title: "5ms Average Response Time", icon: Lightning },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-lg text-muted-foreground">
                    <div className="p-2 bg-black/5 rounded-lg text-[var(--color-brand-primary)]">
                      <item.icon className="w-5 h-5" />
                    </div>
                    {item.title}
                  </li>
                ))}
              </ul>
            </FadeUp>
            
            <FadeUp delay={0.2}>
              <div className="bento-card bento-violet rounded-2xl border border-border overflow-hidden bg-card">
                <div className="flex items-center px-4 py-3 bg-white/[0.04] border-b border-border gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-4 text-xs font-mono text-slate-500">App.swift</span>
                </div>
                <div className="p-6 overflow-x-auto text-sm font-mono leading-loose">
                  <span className="text-purple-400">import</span> <span className="text-muted-foreground">UIKit</span><br />
                  <span className="text-purple-400">import</span> <span className="text-muted-foreground">EmonetiserSDK</span><br />
                  <br />
                  <span className="text-purple-400">@main</span><br />
                  <span className="text-blue-400">class</span> <span className="text-yellow-200">AppDelegate</span>: <span className="text-green-300">UIResponder</span>, <span className="text-green-300">UIApplicationDelegate</span> {'{'}<br />
                  <span className="text-slate-500">  {"//"} Initialize the SDK</span><br />
                  <span className="text-blue-400">  func</span> <span className="text-blue-200">application</span>(<br />
                  <span className="text-muted-foreground">    _ application:</span> <span className="text-green-300">UIApplication</span>,<br />
                  <span className="text-muted-foreground">    didFinishLaunchingWithOptions:</span> [<span className="text-green-300">UIApplication.LaunchOptionsKey</span>: <span className="text-purple-400">Any</span>]?<br />
                  <span className="text-muted-foreground">  )</span> -&gt; <span className="text-blue-400">Bool</span> {'{'}<br />
                  <br />
                  <span className="text-yellow-200">    Emonetiser</span>.<span className="text-blue-200">initialize</span>(<br />
                  <span className="text-muted-foreground">      appId:</span> <span className="text-orange-300">&quot;pub_123456789&quot;</span>,<br />
                  <span className="text-muted-foreground">      completion:</span> {'{'} status <span className="text-purple-400">in</span><br />
                  <span className="text-blue-200">        print</span>(<span className="text-orange-300">&quot;SDK initialized: \(status)&quot;</span>)<br />
                  <span className="text-muted-foreground">      {'}'}</span><br />
                  <span className="text-muted-foreground">    )</span><br />
                  <br />
                  <span className="text-purple-400">    return true</span><br />
                  <span className="text-muted-foreground">  {'}'}</span><br />
                  <span className="text-muted-foreground">{'}'}</span>
                </div>
              </div>
            </FadeUp>
          </div>
        </Container>
      </PageSection>

      {/* S4 MEDIATION AUCTION (CSS Diagram) */}
      <PageSection className="py-24 md:py-32 bg-white border-y border-border overflow-hidden">
        <Container>
          <FadeUp className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display text-foreground mb-6">Real-Time In-App Bidding</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Our auction dynamics ensure the highest paying ad always wins, maximizing your app revenue on every impression.</p>
          </FadeUp>
          
          <FadeUp delay={0.2} className="w-full max-w-5xl mx-auto mt-12">
            <div ref={containerRef} className="relative flex flex-col lg:flex-row w-full max-w-[1000px] items-center justify-between p-4 lg:p-10 h-[800px] lg:h-[500px] gap-12 lg:gap-0">
              
              {/* Left: Demand Sources */}
              <div className="flex flex-col gap-6 z-10">
                <div ref={dspARef} className="z-10 bg-card border border-border text-muted-foreground px-6 py-3 rounded-xl shadow-lg font-medium text-sm w-[160px] text-center hover:border-white/30 transition-colors cursor-default">DSP A</div>
                <div ref={adNet1Ref} className="z-10 bg-card border border-border text-muted-foreground px-6 py-3 rounded-xl shadow-lg font-medium text-sm w-[160px] text-center hover:border-white/30 transition-colors cursor-default">Ad Network 1</div>
                
                {/* Active Bidder */}
                <div ref={directRef} className="z-10 bg-[var(--color-brand-primary)]/10 border border-[var(--color-brand-primary)]/50 text-[var(--color-brand-primary)] px-6 py-3 rounded-xl shadow-[0_0_20px_rgba(var(--color-brand-primary-rgb,136,192,64),0.2)] font-semibold text-sm w-[160px] text-center transform scale-105 relative">
                  <span className="absolute -right-1 -top-1 w-2.5 h-2.5 rounded-full bg-[var(--color-brand-primary)] animate-ping" />
                  Direct
                </div>
                
                <div ref={exchangeBRef} className="z-10 bg-card border border-border text-muted-foreground px-6 py-3 rounded-xl shadow-lg font-medium text-sm w-[160px] text-center hover:border-white/30 transition-colors cursor-default">Exchange B</div>
                <div ref={mediationRef} className="z-10 bg-card border border-border text-muted-foreground px-6 py-3 rounded-xl shadow-lg font-medium text-sm w-[160px] text-center hover:border-white/30 transition-colors cursor-default">Mediation</div>
              </div>

              {/* Center: Unified Auction */}
              <div ref={auctionRef} className="z-10 group relative overflow-hidden bg-card border border-[var(--color-brand-primary)]/50 p-6 lg:p-8 rounded-3xl text-center shadow-[0_0_50px_rgba(var(--color-brand-primary-rgb,136,192,64),0.15)] transition-transform hover:scale-105 w-full max-w-[280px]">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-brand-primary)]/20 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-[var(--color-brand-primary)] animate-pulse" />
                    <div className="text-[var(--color-brand-primary)] font-mono text-xs uppercase tracking-widest font-semibold">Unified Auction</div>
                  </div>
                  <div className="text-2xl font-display text-foreground mb-2">Winning Bid</div>
                  <div className="text-4xl font-mono text-[var(--color-brand-primary)] font-bold tracking-tight">$4.50 <span className="text-lg text-[var(--color-brand-primary)]/70 font-normal">eCPM</span></div>
                </div>
              </div>

              {/* Right: App User */}
              <div ref={userRef} className="z-10 bg-card border border-border p-6 rounded-2xl flex flex-col items-center justify-center shadow-2xl relative overflow-hidden group hover:border-[var(--color-brand-primary)]/30 transition-colors w-[140px]">
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <DeviceMobile className="w-12 h-12 text-muted-foreground mb-3 group-hover:text-[var(--color-brand-primary)] transition-colors" weight="duotone" />
                <span className="text-base text-foreground font-medium">App User</span>
              </div>

              {/* Beams */}
              {/* Inactive Beams */}
              <AnimatedBeam containerRef={containerRef} fromRef={dspARef} toRef={auctionRef} curvature={-50} pathColor="rgba(255,255,255,0.05)" gradientStartColor="transparent" gradientStopColor="transparent" />
              <AnimatedBeam containerRef={containerRef} fromRef={adNet1Ref} toRef={auctionRef} curvature={-25} pathColor="rgba(255,255,255,0.05)" gradientStartColor="transparent" gradientStopColor="transparent" />
              <AnimatedBeam containerRef={containerRef} fromRef={exchangeBRef} toRef={auctionRef} curvature={25} pathColor="rgba(255,255,255,0.05)" gradientStartColor="transparent" gradientStopColor="transparent" />
              <AnimatedBeam containerRef={containerRef} fromRef={mediationRef} toRef={auctionRef} curvature={50} pathColor="rgba(255,255,255,0.05)" gradientStartColor="transparent" gradientStopColor="transparent" />
              
              {/* Active Beams (Winning Bid) */}
              <AnimatedBeam containerRef={containerRef} fromRef={directRef} toRef={auctionRef} duration={2} pathColor="rgba(255,255,255,0.1)" gradientStartColor="var(--color-brand-primary)" gradientStopColor="var(--color-brand-primary)" pathWidth={3} />
              <AnimatedBeam containerRef={containerRef} fromRef={auctionRef} toRef={userRef} duration={2} delay={1} pathColor="rgba(255,255,255,0.1)" gradientStartColor="var(--color-brand-primary)" gradientStopColor="var(--color-brand-primary)" pathWidth={3} />

            </div>
          </FadeUp>
        </Container>
      </PageSection>

      {/* S5 METRICS */}
      <PageSection className="py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <MetricTile value="Cross-Platform" label="iOS & Android" />
            <MetricTile value="<500KB" label="SDK Size" />
            <MetricTile value="3+" label="Ad Formats" />
            <MetricTile value="5ms" label="Avg Response" />
            <MetricTile value="Compliant" label="GDPR + CCPA" />
          </div>
        </Container>
      </PageSection>

      {/* S6 FINAL CTA */}
      <PageSection className="py-24 md:py-32  border-t border-border">
        <Container>
          <CtaDuo publisherText="Integrate SDK" />
        </Container>
      </PageSection>

    </main>
  );
}
