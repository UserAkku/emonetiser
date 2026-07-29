"use client";

import Link from "next/link";
import { FadeUp, StaggerContainer, staggerItem } from "@/components/motion/Reveal";
import { GlassCard, GlassPanel, Eyebrow, MetricTile, PageSection, Container } from "@/components/ui/primitives";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, Television, Eye, ShieldCheck, CurrencyDollar, ArrowRight as ArrowRightIcon, Crosshair, Browser, Devices, PlayCircle, CheckCircle } from "@phosphor-icons/react";
import { CtaDuo } from "@/components/shared/CtaDuo";
import { MovingBorderButton } from "@/components/ui/moving-border-button";


export default function CtvMonetizationPage() {
  return (
    <main className="flex flex-col w-full bg-background min-h-screen text-slate-200">
      
      {/* S1 HERO */}
      <PageSection className="pt-32 pb-24 md:pt-40 md:pb-32 gradient-mesh">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeUp className="flex flex-col items-start text-left">
              <Eyebrow className="text-[var(--color-brand-primary)] mb-6">CTV Monetization</Eyebrow>
              <h1 className="text-5xl md:text-7xl font-display font-medium tracking-tight text-white mb-6">
                Premium TV.<br />
                Premium revenue.
              </h1>
              <p className="text-xl text-slate-400 max-w-lg mb-10 leading-relaxed">
                Maximize OTT revenue with seamless Server-Side Ad Insertion (SSAI) and OpenRTB programmatic demand for the big screen.
              </p>
              <MovingBorderButton href="/contact" className="mt-2 group">
                Talk to Video Specialists
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </MovingBorderButton>
            </FadeUp>
            
            <FadeUp delay={0.2} className="relative w-full aspect-video rounded-2xl bg-card/50 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden flex flex-col justify-between group">
              {/* Simulated Video Content Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-brand-primary)]/5 via-transparent to-black/50 pointer-events-none" />
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none" />
              
              {/* Screen Top Bar */}
              <div className="flex justify-between items-start p-6 relative z-10">
                <div className="bg-background/60 backdrop-blur-md border border-white/5 text-foreground text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest flex items-center gap-2 shadow-sm transition-colors group-hover:border-white/10">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
                  LIVE
                </div>
                
                {/* SSAI Ad Indicator */}
                <div className="bg-background/60 backdrop-blur-md border border-[var(--color-brand-primary)]/30 px-3 py-1.5 rounded-full flex items-center gap-3 shadow-[0_0_15px_rgba(var(--color-brand-primary-rgb,136,192,64),0.1)] transition-transform duration-500 group-hover:scale-105">
                  <span className="text-[10px] text-[var(--color-brand-primary)] font-mono uppercase tracking-widest font-semibold flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-[var(--color-brand-primary)] animate-ping" />
                    SSAI Active
                  </span>
                  <div className="w-[1px] h-3 bg-white/10" />
                  <span className="text-xs font-medium text-foreground">Ad 1 of 2</span>
                </div>
              </div>
              
              {/* Play UI overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                <div className="w-16 h-16 rounded-full bg-background/40 backdrop-blur-md border border-white/10 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:border-[var(--color-brand-primary)]/30 group-hover:bg-[var(--color-brand-primary)]/10 shadow-xl">
                  <PlayCircle className="w-8 h-8 text-[var(--color-brand-primary)]" weight="duotone" />
                </div>
              </div>

              {/* Bottom Scrubber & Info */}
              <div className="flex flex-col gap-5 mt-auto relative z-10 p-6 bg-gradient-to-t from-background/90 via-background/40 to-transparent">
                
                {/* Title / Show Info */}
                <div className="flex flex-col gap-2">
                  <div className="w-1/3 h-2.5 bg-foreground/80 rounded-full" />
                  <div className="w-1/5 h-2 bg-foreground/40 rounded-full" />
                </div>

                {/* Scrubber Bar */}
                <div className="w-full h-1 bg-white/10 rounded-full relative overflow-visible flex items-center group-hover:h-1.5 transition-all duration-300">
                  <div className="h-full bg-[var(--color-brand-primary)] w-[45%] rounded-full absolute left-0 shadow-[0_0_10px_rgba(var(--color-brand-primary-rgb,136,192,64),0.5)]" />
                  
                  {/* Scrubber Playhead */}
                  <div className="w-3 h-3 bg-white rounded-full absolute left-[45%] -translate-x-1/2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Ad Pod Markers (SSAI visualization) */}
                  <div className="w-1.5 h-1.5 bg-white/60 rounded-full absolute left-[20%] -translate-x-1/2 group-hover:h-2 group-hover:bg-white transition-all duration-300" />
                  <div className="w-2 h-2 bg-[var(--color-brand-primary)] rounded-full absolute left-[45%] -translate-x-1/2 shadow-[0_0_8px_rgba(var(--color-brand-primary-rgb,136,192,64),0.8)] z-10" />
                  <div className="w-1.5 h-1.5 bg-white/60 rounded-full absolute left-[75%] -translate-x-1/2 group-hover:h-2 group-hover:bg-white transition-all duration-300" />
                </div>
                
                <div className="flex justify-between text-[10px] font-mono text-muted-foreground">
                  <span>14:30</span>
                  <span>45:00</span>
                </div>
              </div>
            </FadeUp>
          </div>
        </Container>
      </PageSection>

      {/* S2 WHY CTV IS DIFFERENT */}
      <PageSection className="py-24 md:py-32 bg-white/[0.02]">
        <Container>
          <FadeUp>
            <h2 className="text-3xl md:text-5xl font-display text-white mb-16 text-center">The Big Screen Advantage</h2>
          </FadeUp>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <GlassPanel className="p-8 md:col-span-2 bg-gradient-to-r from-white/5 to-transparent flex flex-col justify-end min-h-[320px]">
              <div className="flex-1 flex items-start">
                <Eye className="w-10 h-10 text-[var(--color-brand-primary)] mb-6" />
              </div>
              <div className="flex flex-col md:flex-row md:items-end gap-4 justify-between">
                <div>
                  <h3 className="text-2xl font-medium text-white mb-2">Premium Attention</h3>
                  <p className="text-slate-400">Captive audiences leading to higher engagement.</p>
                </div>
                <div className="text-4xl md:text-6xl font-mono text-white">85% <span className="text-sm md:text-base text-slate-500 font-sans tracking-widest uppercase block md:inline">Completion Rate</span></div>
              </div>
            </GlassPanel>
            
            <GlassPanel className="p-8">
              <Crosshair className="w-8 h-8 text-[var(--color-brand-secondary)] mb-4" />
              <h3 className="text-xl font-medium text-white mb-2">First-Party Targeting</h3>
              <p className="text-slate-400 text-sm">Household-level targeting based on verified logged-in user data.</p>
            </GlassPanel>
            
            <GlassPanel className="p-8">
              <ShieldCheck className="w-8 h-8 text-[var(--color-brand-secondary)] mb-4" />
              <h3 className="text-xl font-medium text-white mb-2">No Ad Blockers</h3>
              <p className="text-slate-400 text-sm">Server-side stitched ads cannot be blocked by traditional network filters.</p>
            </GlassPanel>
            
            <GlassPanel className="p-8 md:col-span-2 flex flex-col md:flex-row items-center gap-8 bg-gradient-to-bl from-[var(--color-brand-primary)]/5 to-transparent">
              <div className="flex-1">
                <CurrencyDollar className="w-8 h-8 text-[var(--color-brand-primary)] mb-4" />
                <h3 className="text-xl font-medium text-white mb-2">Higher Yields</h3>
                <p className="text-slate-400 text-sm">CTV inventory commands premium pricing due to scarcity and high impact.</p>
              </div>
              <div className="bg-black/20 p-6 rounded-xl border border-white/5">
                <div className="text-4xl md:text-5xl font-mono text-white font-semibold">3-5×</div>
                <span className="text-sm text-slate-500 font-sans tracking-widest uppercase mt-1 block">vs Web CPM</span>
              </div>
            </GlassPanel>
          </StaggerContainer>
        </Container>
      </PageSection>

      {/* S3 SSAI EXPLANATION */}
      <PageSection className="py-24 md:py-32 overflow-hidden border-y border-white/5">
        <Container>
          <FadeUp className="mb-16">
            <h2 className="text-3xl md:text-5xl font-display text-white text-center">Seamless Server-Side Delivery</h2>
          </FadeUp>
          
          <div className="relative w-full max-w-5xl mx-auto hidden md:block">
            {/* Connecting Line */}
            <div className="absolute top-[40%] left-0 w-full h-[2px] bg-slate-800 z-0" />
            
            <StaggerContainer className="grid grid-cols-5 gap-4 relative z-10">
              {[
                { title: "Content Stream", desc: "Original HLS/DASH manifest" },
                { title: "Ad Marker", desc: "SCTE-35 trigger detected" },
                { title: "SSAI Engine", desc: "Real-time RTB auction", highlight: true },
                { title: "Ad Stitching", desc: "Ads transcoded & inserted" },
                { title: "Viewer", desc: "Buffer-free continuous playback" }
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className={cn(
                    "w-16 h-16 rounded-2xl flex items-center justify-center mb-6 relative",
                    step.highlight ? "bg-[var(--color-brand-primary)]/20 border border-[var(--color-brand-primary)] shadow-[0_0_30px_rgba(227,93,46,0.3)] glow-primary" : "bg-white/[0.04] border border-white/10"
                  )}>
                    <div className={cn("text-lg font-bold", step.highlight ? "text-[var(--color-brand-primary)]" : "text-white")}>{i + 1}</div>
                  </div>
                  <h4 className={cn("font-medium mb-2", step.highlight ? "text-[var(--color-brand-primary)]" : "text-slate-200")}>{step.title}</h4>
                  <p className="text-xs text-slate-400">{step.desc}</p>
                </div>
              ))}
            </StaggerContainer>
          </div>

          {/* Mobile view of SSAI */}
          <div className="md:hidden space-y-6">
             {[
                { title: "Content Stream", desc: "Original HLS/DASH manifest" },
                { title: "Ad Marker", desc: "SCTE-35 trigger detected" },
                { title: "SSAI Engine", desc: "Real-time RTB auction", highlight: true },
                { title: "Ad Stitching", desc: "Ads transcoded & inserted" },
                { title: "Viewer", desc: "Buffer-free continuous playback" }
              ].map((step, i) => (
                <div key={i} className={cn("p-4 rounded-xl border flex gap-4 items-center", step.highlight ? "border-[var(--color-brand-primary)] bg-[var(--color-brand-primary)]/10" : "border-white/10 bg-white/5")}>
                   <div className="w-10 h-10 shrink-0 rounded-lg bg-black/30 flex items-center justify-center font-bold text-white">{i + 1}</div>
                   <div>
                     <h4 className="font-medium text-white">{step.title}</h4>
                     <p className="text-sm text-slate-400">{step.desc}</p>
                   </div>
                </div>
              ))}
          </div>
        </Container>
      </PageSection>

      {/* S4 PLATFORMS & FORMATS */}
      <PageSection className="py-24 md:py-32 bg-white/[0.02]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <FadeUp>
              <h3 className="text-2xl font-display text-white mb-8">Supported Platforms</h3>
              <div className="flex flex-wrap gap-4">
                {['Roku', 'Apple TV', 'Fire TV', 'Android TV', 'Samsung Tizen', 'LG webOS', 'Web OTT'].map((platform, i) => (
                  <div key={i} className="flex items-center gap-2 px-4 py-3 bg-white/5 border border-white/10 rounded-full text-slate-300 font-medium">
                    <Television className="w-5 h-5 text-slate-400" />
                    {platform}
                  </div>
                ))}
              </div>
            </FadeUp>
            
            <StaggerContainer>
              <h3 className="text-2xl font-display text-white mb-8">Video Formats</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Pre-Roll', 'Mid-Roll', 'Post-Roll', 'Companion Ads', 'Overlay/Squeeze'].map((format, i) => (
                  <div key={i} className="p-4 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-xl">
                    <div className="text-white font-medium">{format}</div>
                  </div>
                ))}
              </div>
            </StaggerContainer>
          </div>
        </Container>
      </PageSection>

      {/* S5 PREMIUM DEMAND */}
      <PageSection className="py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <Eyebrow className="text-purple-400 mb-6">Quality Control</Eyebrow>
              <h2 className="text-3xl md:text-5xl font-display text-white mb-6">Keep your streams pristine.</h2>
              <p className="text-lg text-slate-400 leading-relaxed">
                We understand that CTV requires television-level quality. Our demand filtering ensures only high-bitrate, brand-safe commercials reach your audience - never buffering or dropping frames.
              </p>
            </FadeUp>
            
            <StaggerContainer className="space-y-4">
              <GlassPanel className="p-6 flex items-start gap-4">
                <ShieldCheck className="w-8 h-8 text-[var(--color-brand-secondary)] shrink-0" />
                <div>
                  <h4 className="text-lg font-medium text-white mb-1">Brand Safety</h4>
                  <p className="text-sm text-slate-400">Strict category blocking and competitive separation.</p>
                </div>
              </GlassPanel>
              <GlassPanel className="p-6 flex items-start gap-4">
                <CurrencyDollar className="w-8 h-8 text-[var(--color-brand-primary)] shrink-0" />
                <div>
                  <h4 className="text-lg font-medium text-white mb-1">100% Direct Demand</h4>
                  <p className="text-sm text-slate-400">Premium PMPs and direct integrations, no resellers.</p>
                </div>
              </GlassPanel>
              <GlassPanel className="p-6 flex items-start gap-4">
                <CheckCircle className="w-8 h-8 text-[var(--color-brand-secondary)] shrink-0" />
                <div>
                  <h4 className="text-lg font-medium text-white mb-1">IAB Compliant</h4>
                  <p className="text-sm text-slate-400">Full support for Open Measurement and VAST 4.0 specs.</p>
                </div>
              </GlassPanel>
            </StaggerContainer>
          </div>
        </Container>
      </PageSection>

      {/* S6 METRICS */}
      <PageSection className="py-24 md:py-32 bg-white/[0.02] border-t border-white/5">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricTile value="85%+" label="Completion Rate" />
            <MetricTile value="$25-80" label="CPM Range" />
            <MetricTile value="VAST 4.0" label="Standard Support" />
            <MetricTile value="4K Ready" label="Stream Quality" />
          </div>
        </Container>
      </PageSection>

      {/* S7 FINAL CTA */}
      <PageSection className="py-24 md:py-32 gradient-mesh-subtle border-t border-white/5">
        <Container>
          <CtaDuo publisherText="Start CTV Monetization" />
        </Container>
      </PageSection>

    </main>
  );
}

