"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { FadeUp, StaggerContainer, staggerItem } from "@/components/motion/Reveal";
import { Eyebrow, MetricTile, PageSection, Container } from "@/components/ui/primitives";
import { CtaDuo } from "@/components/shared/CtaDuo";
import { MovingBorderButton } from "@/components/ui/moving-border-button";
import { cn } from "@/lib/utils";
import { 
  ArrowRight, Crosshair, Target, ChartBar, CurrencyDollar, Lightning, 
  Desktop, DeviceMobile, Television, ShieldCheck, Sliders
} from "@phosphor-icons/react";
import { ChainCompare } from "@/components/visuals/ChainCompare";

export default function ProgrammaticAdvertisingPage() {
  return (
    <main className="bg-white text-foreground min-h-screen">
      {/* S1: HERO */}
      <PageSection className="relative overflow-hidden pt-12 pb-24 md:pt-40 md:pb-32 gradient-mesh">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeUp>
              <div className="flex flex-col items-start text-left">
                <Eyebrow accent="blue" className="mb-6">Programmatic DSP</Eyebrow>
                <h1 className="text-5xl md:text-7xl font-display font-medium tracking-tight text-slate-900 mb-6">
                  Direct access.<br />
                  Zero margin tax.
                </h1>
                <p className="text-xl text-slate-500 max-w-lg mb-10 leading-relaxed">
                  Buy premium inventory directly through Emonetiser&apos;s exchange. Skip the intermediaries and maximize your working media budget.
                </p>
                <MovingBorderButton href="/company/contact" className="mt-2 group">
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
      <PageSection className="py-24 md:py-32 bg-slate-50 border-y border-slate-100">
        <Container>
          <FadeUp>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-16 text-center text-slate-900">The programmatic tax problem</h2>
          </FadeUp>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <FadeUp delay={0.1}>
              <div className="h-full rounded-3xl border border-rose-200 bg-rose-50 p-8 flex flex-col min-h-[400px]">
                <div className="text-sm font-mono text-rose-500 mb-8 uppercase tracking-wider text-center font-semibold border-b border-rose-200 pb-4">Traditional Supply Chain</div>
                <div className="flex-1 flex flex-col justify-between items-center w-full max-w-sm mx-auto gap-2">
                  {['SSP (15%)', 'Exchange (10%)', 'DSP (20%)', 'Trading Desk (10%)', 'Advertiser'].map((node, i) => (
                    <React.Fragment key={i}>
                      <div className="h-12 w-full bg-white rounded-xl flex items-center justify-center text-sm font-medium border border-rose-200 text-slate-600 shadow-sm">
                        {node}
                      </div>
                      {i < 4 && <ArrowRight className="text-rose-300 w-4 h-4 shrink-0 rotate-90" />}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </FadeUp>
            
            <FadeUp delay={0.2}>
              <div className="h-full rounded-3xl border border-blue-200 bg-blue-50 p-8 flex flex-col min-h-[400px]">
                <div className="text-sm font-mono text-blue-600 mb-8 uppercase tracking-wider text-center font-semibold border-b border-blue-200 pb-4">Emonetiser Exchange</div>
                <div className="flex-1 flex flex-col justify-between items-center w-full max-w-sm mx-auto">
                  <div className="h-20 w-full bg-gradient-to-b from-blue-100 to-blue-50 border-2 border-blue-300 rounded-2xl flex items-center justify-center text-lg font-semibold text-blue-700 shadow-sm">
                    Emonetiser Exchange
                  </div>
                  <ArrowRight className="text-blue-400 w-7 h-7 rotate-90 my-6" />
                  <div className="h-20 w-full bg-white rounded-2xl flex items-center justify-center text-lg font-semibold border border-blue-200 text-slate-700 shadow-sm">
                    Advertiser
                  </div>
                  <div className="mt-8 text-center">
                    <span className="inline-block px-5 py-2.5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-mono font-bold tracking-widest uppercase border border-emerald-200">
                      + More working media
                    </span>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </Container>
      </PageSection>

      {/* S3: DSP CAPABILITIES */}
      <PageSection className="py-24 md:py-32 bg-white">
        <Container>
          <FadeUp>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-12 text-slate-900">Powerful DSP capabilities</h2>
          </FadeUp>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "Cross-Channel Access", desc: "Reach your audience across desktop, mobile, and CTV from a single unified interface.", icon: Target, color: "border-blue-200 bg-blue-50", icon_c: "bg-blue-100 text-blue-600", span: "md:col-span-2 lg:col-span-2" },
              { title: "OpenRTB Bidding", desc: "Lightning-fast bid evaluation using standard OpenRTB protocols.", icon: Lightning, color: "border-amber-200 bg-amber-50", icon_c: "bg-amber-100 text-amber-600" },
              { title: "Frequency Capping", desc: "Control exposure across all channels to avoid ad fatigue and wasted spend.", icon: Sliders, color: "border-rose-200 bg-rose-50", icon_c: "bg-rose-100 text-rose-600" },
              { title: "Bid Optimization", desc: "Algorithmic bidding to ensure you win the right impressions at the right price.", icon: Crosshair, color: "border-violet-200 bg-violet-50", icon_c: "bg-violet-100 text-violet-600" },
              { title: "Transparent Reporting", desc: "Log-level data access and real-time dashboards for absolute clarity on spend and performance.", icon: ChartBar, color: "border-emerald-200 bg-emerald-50", icon_c: "bg-emerald-100 text-emerald-600", span: "md:col-span-2 lg:col-span-2" },
              { title: "Campaign Pacing", desc: "Intelligent budget distribution to ensure smooth delivery over your campaign flight.", icon: CurrencyDollar, color: "border-sky-200 bg-sky-50", icon_c: "bg-sky-100 text-sky-600" },
            ].map((item, i) => (
              <motion.div key={i} variants={staggerItem} className={cn("h-full", item.span)}>
                <div className={cn("h-full rounded-3xl border p-7 flex flex-col transition-all hover:shadow-md hover:-translate-y-0.5", item.color)}>
                  <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center mb-5", item.icon_c)}>
                    <item.icon className="w-6 h-6" weight="duotone" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-500 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </Container>
      </PageSection>

      {/* S4: INVENTORY ACCESS */}
      <PageSection className="py-24 md:py-32 bg-slate-50 border-y border-slate-100">
        <Container>
          <FadeUp>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-12 text-center text-slate-900">Premium inventory everywhere</h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { title: "Web", desc: "Premium desktop and mobile web inventory with high viewability and rich media support.", icon: Desktop, color: "border-amber-200 bg-amber-50", icon_c: "bg-amber-100 text-amber-600", tag: "Brand Safe", tag_c: "bg-amber-100 text-amber-700 border-amber-200" },
              { title: "Mobile App", desc: "Engage users in high-attention in-app environments across gaming, utility, and lifestyle.", icon: DeviceMobile, color: "border-blue-200 bg-blue-50", icon_c: "bg-blue-100 text-blue-600", tag: "SDK Integrated", tag_c: "bg-blue-100 text-blue-700 border-blue-200" },
              { title: "CTV", desc: "High-impact video ads on the biggest screen in the house with household-level targeting.", icon: Television, color: "border-violet-200 bg-violet-50", icon_c: "bg-violet-100 text-violet-600", tag: "Fraud Protected", tag_c: "bg-violet-100 text-violet-700 border-violet-200" },
            ].map((item, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className={cn("h-full rounded-3xl border p-7 flex flex-col min-h-[260px] transition-all hover:shadow-md hover:-translate-y-0.5", item.color)}>
                  <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center mb-5", item.icon_c)}>
                    <item.icon className="w-6 h-6" weight="duotone" />
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-500 mb-6 flex-1">{item.desc}</p>
                  <div className={cn("flex items-center gap-2 text-xs font-mono border rounded-full px-3 py-1.5 w-fit", item.tag_c)}>
                    <ShieldCheck className="w-3.5 h-3.5" />
                    {item.tag}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </Container>
      </PageSection>

      {/* S5: METRICS */}
      <PageSection className="py-24 md:py-32 bg-white">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            <MetricTile value="42.8%" label="Win Rate" accent="blue" />
            <MetricTile value="$1.24" label="Avg CPM" accent="green" />
            <MetricTile value="98.2%" label="Fill Rate" accent="violet" />
            <MetricTile value="45ms" label="p99 Latency" accent="blue" />
          </div>
        </Container>
      </PageSection>

      {/* S6: FINAL CTA */}
      <PageSection className="py-24 md:py-32 gradient-mesh border-t border-slate-100">
        <Container>
          <CtaDuo advertiserText="Access the Exchange" />
        </Container>
      </PageSection>
    </main>
  );
}
