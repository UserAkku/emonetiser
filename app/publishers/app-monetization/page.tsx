"use client";

import Link from "next/link";
import { FadeUp, StaggerContainer, staggerItem } from "@/components/motion/Reveal";
import { Eyebrow, MetricTile, PageSection, Container } from "@/components/ui/primitives";
import { cn } from "@/lib/utils";
import { ArrowRight, DeviceMobile, PlayCircle, AppWindow, Code, ShieldCheck, Lightning, CheckCircle, Devices } from "@phosphor-icons/react";
import { CtaDuo } from "@/components/shared/CtaDuo";
import { MovingBorderButton } from "@/components/ui/moving-border-button";
import { motion } from "motion/react";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import React, { useRef } from "react";

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
    <main className="flex flex-col w-full bg-white min-h-screen text-foreground">
      
      {/* S1 HERO */}
      <PageSection className="pt-12 pb-24 md:pt-40 md:pb-32 gradient-mesh">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeUp className="flex flex-col items-start text-left">
              <Eyebrow accent="green" className="mb-6">App Monetization</Eyebrow>
              <h1 className="text-5xl md:text-7xl font-display font-medium tracking-tight text-slate-900 mb-6">
                Monetize smarter.<br />
                Grow faster.
              </h1>
              <p className="text-xl text-slate-500 max-w-lg mb-10 leading-relaxed">
                Integrate our ultra-lightweight SDK for iOS and Android once, and tap into global premium demand across all formats.
              </p>
              <MovingBorderButton href="/contact" className="mt-2 group">
                Download SDK
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </MovingBorderButton>
            </FadeUp>
            
            <FadeUp delay={0.2} className="relative flex justify-center lg:justify-end w-full">
              <div className="relative w-full max-w-[260px] h-[560px] mx-auto lg:mx-0 rounded-[2.5rem] border-4 border-slate-200 bg-slate-50 p-3 flex flex-col gap-3 overflow-hidden shadow-2xl">
                {/* Phone Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] h-6 bg-slate-200 rounded-b-2xl z-20 flex justify-center items-center">
                  <div className="w-12 h-1 rounded-full bg-slate-300" />
                </div>
                
                <div className="flex-1 mt-8 flex flex-col gap-3 relative z-10">
                  {/* App Header */}
                  <div className="flex items-center justify-between px-2 mb-2">
                    <div className="flex gap-1.5 flex-col">
                      <div className="w-6 h-0.5 bg-slate-300 rounded-full" />
                      <div className="w-4 h-0.5 bg-slate-300 rounded-full" />
                    </div>
                    <div className="w-7 h-7 rounded-full bg-emerald-100 border border-emerald-200" />
                  </div>

                  {/* App Content Skeleton */}
                  <div className="flex flex-col gap-2 px-2">
                    <div className="w-3/4 h-3 bg-slate-200 rounded-full" />
                    <div className="w-1/2 h-3 bg-slate-200 rounded-full" />
                  </div>

                  {/* Rewarded Video Ad Slot */}
                  <div className="w-full bg-white rounded-2xl h-32 mt-3 flex flex-col justify-center items-center p-4 border-2 border-emerald-200 text-center relative overflow-hidden cursor-pointer shadow-sm">
                    <div className="absolute top-2 left-2 bg-slate-100 text-[8px] font-mono uppercase tracking-widest px-1.5 py-0.5 rounded text-slate-400 border border-slate-200">Ad</div>
                    <div className="absolute top-2 right-2 flex items-center gap-1 bg-amber-50 text-[9px] font-semibold px-2 py-0.5 rounded-full text-amber-600 border border-amber-200">
                      +50 Coins
                    </div>
                    <PlayCircle className="w-9 h-9 text-emerald-500 mb-2" weight="fill" />
                    <span className="text-slate-700 font-semibold text-xs">Rewarded Video</span>
                  </div>
                  
                  {/* Native Ad Slot */}
                  <div className="w-full bg-white rounded-2xl h-20 flex items-center gap-3 p-3 border border-slate-200 cursor-pointer">
                    <div className="absolute top-2 right-2 bg-slate-100 text-[8px] font-mono uppercase px-1.5 py-0.5 rounded text-slate-400 border border-slate-200">Ad</div>
                    <div className="w-10 h-10 rounded-lg bg-slate-100 shrink-0 flex items-center justify-center">
                      <AppWindow className="w-5 h-5 text-slate-400" weight="duotone" />
                    </div>
                    <div className="flex flex-col gap-1.5 w-full">
                      <div className="w-full h-2 bg-slate-200 rounded-full" />
                      <div className="w-2/3 h-2 bg-slate-200 rounded-full" />
                    </div>
                  </div>
                  
                  {/* Banner */}
                  <div className="w-full bg-blue-50 rounded-xl h-[44px] mt-auto flex items-center justify-center border border-blue-200 cursor-pointer">
                    <span className="text-blue-600 text-[10px] font-mono uppercase tracking-widest font-semibold">Banner Ad Slot</span>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </Container>
      </PageSection>

      {/* S2 AD FORMAT SHOWCASE */}
      <PageSection className="py-24 md:py-32 bg-slate-50 border-y border-slate-100">
        <Container>
          <FadeUp className="mb-16">
            <h2 className="text-3xl md:text-5xl font-display text-slate-900 font-semibold">Formats that convert</h2>
          </FadeUp>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Rewarded Video */}
            <div className="group relative overflow-hidden rounded-3xl border border-emerald-200 bg-emerald-50 p-8 lg:col-span-2 flex flex-col min-h-[280px] transition-all hover:shadow-md hover:border-emerald-300 hover:-translate-y-0.5">
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 border border-emerald-200">
                  <PlayCircle className="w-7 h-7 text-emerald-600" weight="duotone" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-2">Rewarded Video</h3>
                <p className="text-slate-500 mb-8">2–3× higher eCPM vs banner</p>
                <div className="mt-auto">
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-xs text-slate-400 font-mono uppercase tracking-widest">Revenue Potential</span>
                    <span className="text-xs font-mono text-emerald-600">Max Yield</span>
                  </div>
                  <div className="w-full h-2 bg-emerald-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "95%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Interstitial */}
            <div className="group relative overflow-hidden rounded-3xl border border-blue-200 bg-blue-50 p-8 flex flex-col min-h-[200px] transition-all hover:shadow-md hover:border-blue-300 hover:-translate-y-0.5">
              <div className="relative z-10 flex flex-col h-full">
                <AppWindow className="w-7 h-7 text-blue-600 mb-4" weight="duotone" />
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Interstitial</h3>
                <p className="text-slate-500 text-sm mb-6">Natural break placements</p>
                <div className="mt-auto">
                  <div className="w-full h-1.5 bg-blue-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "75%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                      className="h-full bg-blue-500 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Banner */}
            <div className="group relative overflow-hidden rounded-3xl border border-violet-200 bg-violet-50 p-8 flex flex-col min-h-[200px] transition-all hover:shadow-md hover:border-violet-300 hover:-translate-y-0.5">
              <div className="relative z-10 flex flex-col h-full">
                <DeviceMobile className="w-7 h-7 text-violet-600 mb-4" weight="duotone" />
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Banner</h3>
                <p className="text-slate-500 text-sm mb-6">Always-on revenue</p>
                <div className="mt-auto">
                  <div className="w-full h-1.5 bg-violet-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "40%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                      className="h-full bg-violet-500 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-3xl border border-amber-200 bg-amber-50 p-8 flex flex-col min-h-[200px] transition-all hover:shadow-md hover:border-amber-300 hover:-translate-y-0.5">
              <div className="relative z-10 flex flex-col h-full">
                <Devices className="w-7 h-7 text-amber-600 mb-4" weight="duotone" />
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Native</h3>
                <p className="text-slate-500 text-sm mb-6">Blends with app UI</p>
                <div className="mt-auto">
                  <div className="w-full h-1.5 bg-amber-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "60%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, ease: "easeOut", delay: 0.15 }}
                      className="h-full bg-amber-500 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </StaggerContainer>
        </Container>
      </PageSection>

      {/* S3 SDK OVERVIEW */}
      <PageSection className="py-24 md:py-32 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <Eyebrow accent="neutral" className="mb-6">Developer First</Eyebrow>
              <h2 className="text-3xl md:text-5xl font-display text-slate-900 font-semibold mb-10">One SDK. Endless scale.</h2>
              <ul className="space-y-5">
                {[
                  { title: "iOS & Android Support", icon: Devices, color: "bg-emerald-100 text-emerald-600" },
                  { title: "<500KB SDK Size", icon: Code, color: "bg-blue-100 text-blue-600" },
                  { title: "Privacy Compliant (GDPR/CCPA)", icon: ShieldCheck, color: "bg-violet-100 text-violet-600" },
                  { title: "Major Mediation Supported", icon: CheckCircle, color: "bg-amber-100 text-amber-600" },
                  { title: "5ms Average Response Time", icon: Lightning, color: "bg-rose-100 text-rose-600" },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-base text-slate-700">
                    <div className={cn("p-2.5 rounded-xl", item.color)}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    {item.title}
                  </li>
                ))}
              </ul>
            </FadeUp>
            
            <FadeUp delay={0.2}>
              <div className="code-block rounded-2xl overflow-hidden border">
                <div className="flex items-center px-4 py-3 bg-slate-800 border-b border-slate-700 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-4 text-xs font-mono text-slate-400">App.swift</span>
                </div>
                <div className="p-6 overflow-x-auto text-sm font-mono leading-loose">
                  <span className="text-purple-400">import</span> <span className="text-slate-300">UIKit</span><br />
                  <span className="text-purple-400">import</span> <span className="text-slate-300">EmonetiserSDK</span><br />
                  <br />
                  <span className="text-blue-400">class</span> <span className="text-yellow-200">AppDelegate</span>: <span className="text-green-300">UIResponder</span> {'{'}<br />
                  <span className="text-slate-500">  {"// Initialize the SDK"}</span><br />
                  <span className="text-blue-400">  func</span> <span className="text-blue-200">application</span>(<br />
                  <span className="text-slate-300">    _ application:</span> <span className="text-green-300">UIApplication</span><br />
                  <span className="text-slate-300">  )</span> -&gt; <span className="text-blue-400">Bool</span> {'{'}<br />
                  <span className="text-yellow-200">    Emonetiser</span>.<span className="text-blue-200">initialize</span>(<br />
                  <span className="text-slate-300">      appId:</span> <span className="text-orange-300">&quot;pub_123456789&quot;</span><br />
                  <span className="text-slate-300">    )</span><br />
                  <span className="text-purple-400">    return true</span><br />
                  <span className="text-slate-300">  {'}'}</span><br />
                  <span className="text-slate-300">{'}'}</span>
                </div>
              </div>
            </FadeUp>
          </div>
        </Container>
      </PageSection>

      {/* S4 BIDDING DIAGRAM */}
      <PageSection className="py-24 md:py-32 bg-slate-50 border-y border-slate-100 overflow-hidden">
        <Container>
          <FadeUp className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display text-slate-900 font-semibold mb-4">Real-Time In-App Bidding</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Our auction dynamics ensure the highest paying ad always wins, maximizing your app revenue on every impression.</p>
          </FadeUp>
          
          <FadeUp delay={0.2} className="w-full max-w-4xl mx-auto">
            <div ref={containerRef} className="relative flex flex-col lg:flex-row w-full items-center justify-between p-4 lg:p-8 h-[700px] lg:h-[420px] gap-8 lg:gap-0">
              
              {/* Left: Demand Sources */}
              <div className="flex flex-col gap-4 z-10">
                {[
                  { ref: dspARef, label: "DSP A", classes: "bg-white border-slate-200 text-slate-600 shadow-sm" },
                  { ref: adNet1Ref, label: "Ad Network 1", classes: "bg-white border-slate-200 text-slate-600 shadow-sm" },
                  { ref: directRef, label: "Direct", classes: "bg-emerald-50 border-emerald-300 text-emerald-700 shadow-emerald-100 shadow-md font-semibold scale-105", pulse: true },
                  { ref: exchangeBRef, label: "Exchange B", classes: "bg-white border-slate-200 text-slate-600 shadow-sm" },
                  { ref: mediationRef, label: "Mediation", classes: "bg-white border-slate-200 text-slate-600 shadow-sm" },
                ].map((item, i) => (
                  <div key={i} ref={item.ref} className={cn("z-10 border px-5 py-2.5 rounded-xl font-medium text-sm w-[150px] text-center relative transition-all", item.classes)}>
                    {item.pulse && <span className="absolute -right-1 -top-1 w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />}
                    {item.label}
                  </div>
                ))}
              </div>

              {/* Center: Unified Auction */}
              <div ref={auctionRef} className="z-10 group relative overflow-hidden bg-white border-2 border-emerald-300 p-6 lg:p-8 rounded-3xl text-center shadow-xl hover:shadow-2xl transition-all hover:scale-105 w-full max-w-[260px]">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent opacity-80 pointer-events-none" />
                <div className="relative z-10">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <div className="text-emerald-600 font-mono text-xs uppercase tracking-widest font-semibold">Unified Auction</div>
                  </div>
                  <div className="text-xl font-display text-slate-900 mb-2 font-semibold">Winning Bid</div>
                  <div className="text-3xl font-mono text-emerald-600 font-bold tracking-tight">$4.50 <span className="text-base text-emerald-400 font-normal">eCPM</span></div>
                </div>
              </div>

              {/* Right: App User */}
              <div ref={userRef} className="z-10 bg-white border border-slate-200 p-5 rounded-2xl flex flex-col items-center justify-center shadow-md w-[120px]">
                <DeviceMobile className="w-10 h-10 text-slate-400 mb-2" weight="duotone" />
                <span className="text-sm text-slate-700 font-medium">App User</span>
              </div>

              {/* Beams */}
              <AnimatedBeam containerRef={containerRef} fromRef={dspARef} toRef={auctionRef} curvature={-50} pathColor="rgba(0,0,0,0.05)" gradientStartColor="transparent" gradientStopColor="transparent" />
              <AnimatedBeam containerRef={containerRef} fromRef={adNet1Ref} toRef={auctionRef} curvature={-25} pathColor="rgba(0,0,0,0.05)" gradientStartColor="transparent" gradientStopColor="transparent" />
              <AnimatedBeam containerRef={containerRef} fromRef={exchangeBRef} toRef={auctionRef} curvature={25} pathColor="rgba(0,0,0,0.05)" gradientStartColor="transparent" gradientStopColor="transparent" />
              <AnimatedBeam containerRef={containerRef} fromRef={mediationRef} toRef={auctionRef} curvature={50} pathColor="rgba(0,0,0,0.05)" gradientStartColor="transparent" gradientStopColor="transparent" />
              <AnimatedBeam containerRef={containerRef} fromRef={directRef} toRef={auctionRef} duration={2} pathColor="rgba(16,185,129,0.15)" gradientStartColor="var(--color-brand-primary)" gradientStopColor="var(--color-brand-primary)" pathWidth={2} />
              <AnimatedBeam containerRef={containerRef} fromRef={auctionRef} toRef={userRef} duration={2} delay={1} pathColor="rgba(16,185,129,0.15)" gradientStartColor="var(--color-brand-primary)" gradientStopColor="var(--color-brand-primary)" pathWidth={2} />
            </div>
          </FadeUp>
        </Container>
      </PageSection>

      {/* S5 METRICS */}
      <PageSection className="py-24 md:py-32 bg-white">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <MetricTile value="Cross-Platform" label="iOS & Android" accent="green" />
            <MetricTile value="<500KB" label="SDK Size" accent="blue" />
            <MetricTile value="3+" label="Ad Formats" accent="violet" />
            <MetricTile value="5ms" label="Avg Response" accent="green" />
            <MetricTile value="Compliant" label="GDPR + CCPA" accent="blue" />
          </div>
        </Container>
      </PageSection>

      {/* S6 FINAL CTA */}
      <PageSection className="py-24 md:py-32 gradient-mesh border-t border-slate-100">
        <Container>
          <CtaDuo publisherText="Integrate SDK" />
        </Container>
      </PageSection>

    </main>
  );
}
