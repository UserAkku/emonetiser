"use client";

import Link from "next/link";
import { FadeUp, StaggerContainer, staggerItem } from "@/components/motion/Reveal";
import { Eyebrow, MetricTile, PageSection, Container } from "@/components/ui/primitives";
import { cn } from "@/lib/utils";
import { ArrowRight, Television, Eye, ShieldCheck, CurrencyDollar, Crosshair, Browser, Devices, PlayCircle, CheckCircle } from "@phosphor-icons/react";
import { CtaDuo } from "@/components/shared/CtaDuo";
import { MovingBorderButton } from "@/components/ui/moving-border-button";
import { motion } from "motion/react";


export default function CtvMonetizationPage() {
  return (
    <main className="flex flex-col w-full bg-white min-h-screen text-foreground">
      
      {/* S1 HERO */}
      <PageSection className="pt-32 pb-24 md:pt-40 md:pb-32 gradient-mesh">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeUp className="flex flex-col items-start text-left">
              <Eyebrow accent="violet" className="mb-6">CTV Monetization</Eyebrow>
              <h1 className="text-5xl md:text-7xl font-display font-medium tracking-tight text-slate-900 mb-6">
                Premium TV.<br />
                Premium revenue.
              </h1>
              <p className="text-xl text-slate-500 max-w-lg mb-10 leading-relaxed">
                Maximize OTT revenue with seamless Server-Side Ad Insertion (SSAI) and OpenRTB programmatic demand for the big screen.
              </p>
              <MovingBorderButton href="/contact" className="mt-2 group">
                Talk to Video Specialists
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </MovingBorderButton>
            </FadeUp>
            
            <FadeUp delay={0.2} className="relative w-full aspect-video rounded-3xl bg-slate-900 border border-slate-700 shadow-2xl overflow-hidden flex flex-col justify-between group">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-900/30 via-transparent to-slate-900/80 pointer-events-none" />
              
              {/* Screen Top Bar */}
              <div className="flex justify-between items-start p-6 relative z-10">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
                  LIVE
                </div>
                
                <div className="bg-white/10 backdrop-blur-md border border-violet-400/40 px-3 py-1.5 rounded-full flex items-center gap-3">
                  <span className="text-[10px] text-violet-300 font-mono uppercase tracking-widest font-semibold flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-violet-400 animate-ping" />
                    SSAI Active
                  </span>
                  <div className="w-[1px] h-3 bg-white/20" />
                  <span className="text-xs font-medium text-white/80">Ad 1 of 2</span>
                </div>
              </div>
              
              {/* Play UI overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 shadow-xl">
                  <PlayCircle className="w-8 h-8 text-violet-300" weight="duotone" />
                </div>
              </div>

              {/* Bottom Scrubber */}
              <div className="flex flex-col gap-4 mt-auto relative z-10 p-6 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent">
                <div className="flex flex-col gap-2">
                  <div className="w-1/3 h-2.5 bg-white/70 rounded-full" />
                  <div className="w-1/5 h-2 bg-white/30 rounded-full" />
                </div>
                <div className="w-full h-1 bg-white/10 rounded-full relative overflow-visible flex items-center">
                  <div className="h-full bg-violet-400 w-[45%] rounded-full absolute left-0 shadow-[0_0_10px_rgba(167,139,250,0.5)]" />
                  <div className="w-1.5 h-1.5 bg-white/50 rounded-full absolute left-[20%] -translate-x-1/2" />
                  <div className="w-2 h-2 bg-violet-400 rounded-full absolute left-[45%] -translate-x-1/2 shadow-[0_0_8px_rgba(167,139,250,0.8)] z-10" />
                  <div className="w-1.5 h-1.5 bg-white/50 rounded-full absolute left-[75%] -translate-x-1/2" />
                </div>
                <div className="flex justify-between text-[10px] font-mono text-white/40">
                  <span>14:30</span>
                  <span>45:00</span>
                </div>
              </div>
            </FadeUp>
          </div>
        </Container>
      </PageSection>

      {/* S2 WHY CTV IS DIFFERENT */}
      <PageSection className="py-24 md:py-32 bg-slate-50 border-y border-slate-100">
        <Container>
          <FadeUp>
            <h2 className="text-3xl md:text-5xl font-display text-slate-900 mb-16 text-center">The Big Screen Advantage</h2>
          </FadeUp>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <motion.div variants={staggerItem} className="md:col-span-2">
              <div className="rounded-3xl border border-violet-200 bg-gradient-to-r from-violet-50 to-white p-8 flex flex-col md:flex-row md:items-end justify-between gap-6 min-h-[220px]">
                <div>
                  <Eye className="w-10 h-10 text-violet-600 mb-5" />
                  <h3 className="text-2xl font-semibold text-slate-900 mb-2">Premium Attention</h3>
                  <p className="text-slate-500">Captive audiences leading to higher engagement and brand recall.</p>
                </div>
                <div className="text-4xl md:text-5xl font-mono font-bold text-slate-900">85% <span className="text-sm text-slate-400 font-sans tracking-widest uppercase block md:inline">Completion Rate</span></div>
              </div>
            </motion.div>
            
            <motion.div variants={staggerItem}>
              <div className="h-full rounded-3xl border border-blue-200 bg-blue-50 p-7 transition-all hover:shadow-md hover:border-blue-300">
                <Crosshair className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 mb-2">First-Party Targeting</h3>
                <p className="text-slate-500 text-sm">Household-level targeting based on verified logged-in user data.</p>
              </div>
            </motion.div>
            
            <motion.div variants={staggerItem}>
              <div className="h-full rounded-3xl border border-emerald-200 bg-emerald-50 p-7 transition-all hover:shadow-md hover:border-emerald-300">
                <ShieldCheck className="w-8 h-8 text-emerald-600 mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 mb-2">No Ad Blockers</h3>
                <p className="text-slate-500 text-sm">Server-side stitched ads cannot be blocked by traditional network filters.</p>
              </div>
            </motion.div>
            
            <motion.div variants={staggerItem} className="md:col-span-2">
              <div className="rounded-3xl border border-amber-200 bg-amber-50 p-7 flex flex-col md:flex-row items-center gap-8 transition-all hover:shadow-md hover:border-amber-300">
                <div className="flex-1">
                  <CurrencyDollar className="w-8 h-8 text-amber-600 mb-4" />
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Higher Yields</h3>
                  <p className="text-slate-500 text-sm">CTV inventory commands premium pricing due to scarcity and high impact.</p>
                </div>
                <div className="bg-white border border-amber-200 rounded-2xl p-6 text-center">
                  <div className="text-4xl md:text-5xl font-mono text-slate-900 font-semibold">3-5×</div>
                  <span className="text-sm text-slate-400 font-sans tracking-widest uppercase mt-1 block">vs Web CPM</span>
                </div>
              </div>
            </motion.div>
          </StaggerContainer>
        </Container>
      </PageSection>

      {/* S3 SSAI EXPLANATION */}
      <PageSection className="py-24 md:py-32 bg-white overflow-hidden border-y border-slate-100">
        <Container>
          <FadeUp className="mb-16">
            <h2 className="text-3xl md:text-5xl font-display text-slate-900 text-center">Seamless Server-Side Delivery</h2>
          </FadeUp>
          
          <div className="relative w-full max-w-5xl mx-auto hidden md:block">
            <div className="absolute top-[40%] left-0 w-full h-[2px] bg-gradient-to-r from-slate-200 via-violet-300 to-slate-200 z-0" />
            
            <StaggerContainer className="grid grid-cols-5 gap-4 relative z-10">
              {[
                { title: "Content Stream", desc: "Original HLS/DASH manifest", color: "border-slate-200 bg-slate-50 text-slate-600" },
                { title: "Ad Marker", desc: "SCTE-35 trigger detected", color: "border-slate-200 bg-slate-50 text-slate-600" },
                { title: "SSAI Engine", desc: "Real-time RTB auction", highlight: true, color: "border-violet-300 bg-violet-50 text-violet-700" },
                { title: "Ad Stitching", desc: "Ads transcoded & inserted", color: "border-slate-200 bg-slate-50 text-slate-600" },
                { title: "Viewer", desc: "Buffer-free continuous playback", color: "border-emerald-200 bg-emerald-50 text-emerald-700" }
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className={cn(
                    "w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border",
                    step.color,
                    step.highlight && "shadow-lg shadow-violet-100"
                  )}>
                    <div className={cn("text-lg font-bold", step.highlight ? "text-violet-700" : "text-slate-600")}>{i + 1}</div>
                  </div>
                  <h4 className={cn("font-semibold mb-2 text-sm", step.highlight ? "text-violet-700" : "text-slate-800")}>{step.title}</h4>
                  <p className="text-xs text-slate-400">{step.desc}</p>
                </div>
              ))}
            </StaggerContainer>
          </div>

          {/* Mobile view */}
          <div className="md:hidden space-y-4">
            {[
              { title: "Content Stream", desc: "Original HLS/DASH manifest" },
              { title: "Ad Marker", desc: "SCTE-35 trigger detected" },
              { title: "SSAI Engine", desc: "Real-time RTB auction", highlight: true },
              { title: "Ad Stitching", desc: "Ads transcoded & inserted" },
              { title: "Viewer", desc: "Buffer-free continuous playback" }
            ].map((step, i) => (
              <div key={i} className={cn("p-4 rounded-2xl border flex gap-4 items-center", step.highlight ? "border-violet-300 bg-violet-50" : "border-slate-200 bg-slate-50")}>
                <div className={cn("w-10 h-10 shrink-0 rounded-xl flex items-center justify-center font-bold text-sm", step.highlight ? "bg-violet-100 text-violet-700" : "bg-slate-100 text-slate-600")}>{i + 1}</div>
                <div>
                  <h4 className="font-semibold text-slate-900">{step.title}</h4>
                  <p className="text-sm text-slate-400">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </PageSection>

      {/* S4 PLATFORMS & FORMATS */}
      <PageSection className="py-24 md:py-32 bg-slate-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <FadeUp>
              <h3 className="text-2xl font-display text-slate-900 font-semibold mb-8">Supported Platforms</h3>
              <div className="flex flex-wrap gap-3">
                {['Roku', 'Apple TV', 'Fire TV', 'Android TV', 'Samsung Tizen', 'LG webOS', 'Web OTT'].map((platform, i) => (
                  <div key={i} className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-full text-slate-600 font-medium text-sm shadow-sm">
                    <Television className="w-4 h-4 text-violet-500" />
                    {platform}
                  </div>
                ))}
              </div>
            </FadeUp>
            
            <StaggerContainer>
              <h3 className="text-2xl font-display text-slate-900 font-semibold mb-8">Video Formats</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { name: 'Pre-Roll', color: 'bg-violet-50 border-violet-200 text-violet-700' },
                  { name: 'Mid-Roll', color: 'bg-blue-50 border-blue-200 text-blue-700' },
                  { name: 'Post-Roll', color: 'bg-emerald-50 border-emerald-200 text-emerald-700' },
                  { name: 'Companion Ads', color: 'bg-amber-50 border-amber-200 text-amber-700' },
                  { name: 'Overlay/Squeeze', color: 'bg-rose-50 border-rose-200 text-rose-700' },
                ].map((format, i) => (
                  <div key={i} className={cn("p-4 border rounded-2xl font-semibold text-sm", format.color)}>
                    {format.name}
                  </div>
                ))}
              </div>
            </StaggerContainer>
          </div>
        </Container>
      </PageSection>

      {/* S5 QUALITY CONTROL */}
      <PageSection className="py-24 md:py-32 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <Eyebrow accent="violet" className="mb-6">Quality Control</Eyebrow>
              <h2 className="text-3xl md:text-5xl font-display text-slate-900 font-semibold mb-6">Keep your streams pristine.</h2>
              <p className="text-lg text-slate-500 leading-relaxed">
                CTV requires television-level quality. Our demand filtering ensures only high-bitrate, brand-safe commercials reach your audience.
              </p>
            </FadeUp>
            
            <StaggerContainer className="space-y-4">
              {[
                { icon: ShieldCheck, title: "Brand Safety", desc: "Strict category blocking and competitive separation.", color: "border-emerald-200 bg-emerald-50", icon_color: "text-emerald-600 bg-emerald-100" },
                { icon: CurrencyDollar, title: "100% Direct Demand", desc: "Premium PMPs and direct integrations, no resellers.", color: "border-violet-200 bg-violet-50", icon_color: "text-violet-600 bg-violet-100" },
                { icon: CheckCircle, title: "IAB Compliant", desc: "Full support for Open Measurement and VAST 4.0 specs.", color: "border-blue-200 bg-blue-50", icon_color: "text-blue-600 bg-blue-100" },
              ].map((item, i) => (
                <div key={i} className={cn("p-6 rounded-2xl border flex items-start gap-4 transition-all hover:shadow-sm", item.color)}>
                  <div className={cn("p-2.5 rounded-xl shrink-0", item.icon_color)}>
                    <item.icon className="w-5 h-5" weight="duotone" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </StaggerContainer>
          </div>
        </Container>
      </PageSection>

      {/* S6 METRICS */}
      <PageSection className="py-24 md:py-32 bg-slate-50 border-t border-slate-100">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            <MetricTile value="85%+" label="Completion Rate" accent="green" />
            <MetricTile value="$25-80" label="CPM Range" accent="violet" />
            <MetricTile value="VAST 4.0" label="Standard Support" accent="blue" />
            <MetricTile value="4K Ready" label="Stream Quality" accent="green" />
          </div>
        </Container>
      </PageSection>

      {/* S7 FINAL CTA */}
      <PageSection className="py-24 md:py-32 gradient-mesh border-t border-slate-100">
        <Container>
          <CtaDuo publisherText="Start CTV Monetization" />
        </Container>
      </PageSection>

    </main>
  );
}
