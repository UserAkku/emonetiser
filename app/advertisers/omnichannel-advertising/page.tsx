"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { FadeUp, StaggerContainer, staggerItem } from "@/components/motion/Reveal";
import { Eyebrow, MetricTile, PageSection, Container } from "@/components/ui/primitives";
import { CtaDuo } from "@/components/shared/CtaDuo";
import { MovingBorderButton } from "@/components/ui/moving-border-button";
import { cn } from "@/lib/utils";
import { 
  ArrowRight, Desktop, DeviceMobile, Television, Target, ChartBar, 
  Stack, Money, TreeStructure, Database, Link as LinkIcon
} from "@phosphor-icons/react";
import { JourneyTimeline } from "@/components/visuals/JourneyTimeline";
import { JourneyBeam } from "@/components/visuals/JourneyBeam";

export default function OmnichannelAdvertisingPage() {
  return (
    <main className="bg-white text-foreground min-h-screen">
      {/* S1: HERO */}
      <PageSection className="relative overflow-hidden pt-12 pb-24 md:pt-40 md:pb-32 gradient-mesh">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeUp>
              <div className="flex flex-col items-start text-left">
                <Eyebrow accent="blue" className="mb-6">Omnichannel</Eyebrow>
                <h1 className="text-5xl md:text-7xl font-display font-medium tracking-tight text-slate-900 mb-6">
                  One campaign.<br />
                  Every screen.
                </h1>
                <p className="text-xl text-slate-500 max-w-lg mb-10 leading-relaxed">
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
      <PageSection className="py-24 md:py-32 bg-slate-50 border-y border-slate-100">
        <Container>
          <FadeUp>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-slate-900">Follow the consumer journey</h2>
              <p className="text-lg text-slate-500">Users don&apos;t think in channels. Neither should your advertising.</p>
            </div>
          </FadeUp>
          <div className="relative max-w-5xl mx-auto mt-8">
            <JourneyBeam />
          </div>
        </Container>
      </PageSection>

      {/* S3: UNIFIED MANAGEMENT */}
      <PageSection className="py-24 md:py-32 bg-white">
        <Container>
          <FadeUp className="mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900">Unified management.</h2>
          </FadeUp>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            <div className="order-2 lg:order-1">
              <StaggerContainer className="flex flex-col gap-4">
                {[
                  { icon: Money, title: "Shared Budgeting", desc: "Fluidly shift spend to the best performing channels in real-time.", color: "border-emerald-200 bg-emerald-50", icon_c: "bg-emerald-100 text-emerald-600" },
                  { icon: Target, title: "Unified Frequency Cap", desc: "Stop hitting the same user across different devices unnecessarily.", color: "border-blue-200 bg-blue-50", icon_c: "bg-blue-100 text-blue-600" },
                  { icon: Stack, title: "Cross-Screen Creatives", desc: "Manage display, video, and native assets in one central library.", color: "border-violet-200 bg-violet-50", icon_c: "bg-violet-100 text-violet-600" },
                  { icon: ChartBar, title: "Single Dashboard", desc: "Consolidated reporting without stitching together Excel files.", color: "border-amber-200 bg-amber-50", icon_c: "bg-amber-100 text-amber-600" }
                ].map((item, i) => (
                  <motion.div key={i} variants={staggerItem}>
                    <div className={cn("rounded-2xl border p-5 flex items-start gap-4 transition-all hover:shadow-sm", item.color)}>
                      <div className={cn("p-2.5 rounded-xl shrink-0", item.icon_c)}>
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-slate-900 mb-1">{item.title}</h4>
                        <p className="text-slate-500 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </StaggerContainer>
            </div>
            
            <FadeUp delay={0.2} className="order-1 lg:order-2">
              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm h-full flex flex-col justify-center">
                <div className="text-sm font-mono text-slate-400 mb-8 border-b border-slate-100 pb-4">Omni-Campaign Pacing</div>
                <div className="flex flex-col gap-8">
                  {[
                    { icon: Desktop, label: "Web", pct: 45, color: "bg-emerald-500", track: "bg-emerald-100", icon_c: "text-emerald-600" },
                    { icon: DeviceMobile, label: "App", pct: 35, color: "bg-blue-500", track: "bg-blue-100", icon_c: "text-blue-600" },
                    { icon: Television, label: "CTV", pct: 20, color: "bg-violet-500", track: "bg-violet-100", icon_c: "text-violet-600" },
                  ].map((bar, i) => (
                    <div key={i}>
                      <div className="flex justify-between items-center text-sm mb-3">
                        <span className={cn("flex items-center gap-2 font-medium text-slate-700", bar.icon_c)}>
                          <bar.icon className="w-4 h-4" /> {bar.label}
                        </span>
                        <span className="font-mono text-slate-500">{bar.pct}%</span>
                      </div>
                      <div className={cn("h-2.5 w-full rounded-full overflow-hidden", bar.track)}>
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${bar.pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: "easeOut", delay: i * 0.15 }}
                          className={cn("h-full rounded-full", bar.color)}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </Container>
      </PageSection>

      {/* S4: WHY EMONETISER */}
      <PageSection className="py-24 md:py-32 bg-slate-50 border-y border-slate-100">
        <Container>
          <FadeUp>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-12 text-center text-slate-900">The omnichannel advantage</h2>
          </FadeUp>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {[
              { icon: Database, title: "Owned Exchange", desc: "Because we operate both SSP and DSP layers, you get better data fidelity across all environments.", color: "border-blue-200 bg-blue-50", icon_c: "bg-blue-100 text-blue-600" },
              { icon: ChartBar, title: "Unified Reporting", desc: "No more data silos. See exactly how channels interact and influence conversions.", color: "border-emerald-200 bg-emerald-50", icon_c: "bg-emerald-100 text-emerald-600" },
              { icon: TreeStructure, title: "Cross-Screen Attribution", desc: "Connect the dots between a CTV impression and a mobile conversion seamlessly.", color: "border-violet-200 bg-violet-50", icon_c: "bg-violet-100 text-violet-600" },
              { icon: LinkIcon, title: "Zero Fee Arbitrage", desc: "Our transparent model means more of your budget goes to actual media, across every screen.", color: "border-amber-200 bg-amber-50", icon_c: "bg-amber-100 text-amber-600" }
            ].map((feature, i) => (
              <motion.div key={i} variants={staggerItem}>
                <div className={cn("rounded-3xl border p-7 h-full transition-all hover:shadow-md hover:-translate-y-0.5", feature.color)}>
                  <div className={cn("w-11 h-11 rounded-2xl flex items-center justify-center mb-5", feature.icon_c)}>
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </Container>
      </PageSection>

      {/* S5: METRICS */}
      <PageSection className="py-24 md:py-32 bg-white">
        <Container>
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-5xl mx-auto">
            <MetricTile value="Unified" label="Dashboard" accent="blue" />
            <MetricTile value="Real-Time" label="Attribution" accent="green" />
            <MetricTile value="3" label="Channels" accent="violet" />
            <MetricTile value="1" label="Single Seat" accent="blue" />
          </StaggerContainer>
        </Container>
      </PageSection>

      {/* S6: FINAL CTA */}
      <PageSection className="py-24 md:py-32 gradient-mesh border-t border-slate-100">
        <Container>
          <CtaDuo advertiserText="Launch Omnichannel" />
        </Container>
      </PageSection>
    </main>
  );
}
