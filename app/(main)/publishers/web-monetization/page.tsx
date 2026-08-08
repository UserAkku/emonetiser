"use client";

import Link from "next/link";
import { FadeUp, StaggerContainer, staggerItem } from "@/components/motion/Reveal";
import { Eyebrow, MetricTile, PageSection, Container } from "@/components/ui/primitives";
import { cn } from "@/lib/utils";
import { ArrowRight, ChartBar, Funnel, Lightning, Eye, CurrencyDollar, Gauge, ShieldCheck, HandCoins, Speedometer, AppWindow, Newspaper, PlayCircle, Sparkle, FrameCorners } from "@phosphor-icons/react";
import { DashboardMockup } from "@/components/visuals/DashboardMockup";
import { CtaDuo } from "@/components/shared/CtaDuo";
import { PremiumFormatCard } from "@/components/ui/premium-format-card";
import { MovingBorderButton } from "@/components/ui/moving-border-button";
import { motion } from "motion/react";

export default function WebMonetizationPage() {
  return (
    <main className="flex flex-col w-full bg-white min-h-screen text-foreground">
      
      {/* S1 HERO */}
      <PageSection className="pt-12 pb-24 md:pt-40 md:pb-32 gradient-mesh">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <FadeUp className="flex flex-col items-start text-left">
              <Eyebrow accent="green" className="mb-6">Web Monetization</Eyebrow>
              <h1 className="text-5xl md:text-7xl font-display font-medium tracking-tight text-slate-900 mb-6">
                Every impression.<br />
                Full value.
              </h1>
              <p className="text-xl text-slate-500 max-w-lg mb-10 leading-relaxed">
                Unlock your true earning potential with advanced header bidding and real-time auctions that connect you to unlimited demand.
              </p>
              <MovingBorderButton href="/company/contact" className="mt-2 group">
                Get Your Tag
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </MovingBorderButton>
            </FadeUp>
            <FadeUp delay={0.2} className="relative w-full h-full lg:pl-12">
              <div className="relative z-10 w-full h-full min-h-[420px] flex items-center justify-center">
                <DashboardMockup />
              </div>
            </FadeUp>
          </div>
        </Container>
      </PageSection>

      {/* S2 PUBLISHER CHALLENGES */}
      <PageSection className="py-24 md:py-32 bg-slate-50 border-y border-slate-100">
        <Container>
          <FadeUp>
            <h2 className="text-3xl md:text-5xl font-display text-slate-900 mb-16 text-center">The waterfall problem</h2>
          </FadeUp>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <StaggerContainer className="flex flex-col h-full space-y-4">
              <h3 className="text-sm font-mono uppercase tracking-widest text-rose-500 mb-6 border-b border-rose-100 pb-4 font-semibold">Before Emonetiser</h3>
              {[
                { title: "Sequential Bidding", desc: "Passbacks waste time and lower your yield.", icon: Funnel },
                { title: "Capped Demand", desc: "Relying on a single network limits competition.", icon: HandCoins },
                { title: "No Transparency", desc: "Hidden fees and obscure auction dynamics.", icon: Eye },
              ].map((item, i) => (
                <div key={i} className="flex flex-1 gap-4 items-start p-5 rounded-2xl bg-rose-50 border border-rose-200">
                  <div className="p-2.5 rounded-xl bg-rose-100 text-rose-600 shrink-0">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-slate-800">{item.title}</h4>
                    <p className="text-slate-500 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </StaggerContainer>
            
            <StaggerContainer className="flex flex-col h-full space-y-4">
              <h3 className="text-sm font-mono uppercase tracking-widest text-emerald-600 mb-6 border-b border-emerald-100 pb-4 font-semibold">After Emonetiser</h3>
              {[
                { title: "Simultaneous Bidding", desc: "All partners bid at once for maximum yield.", icon: Lightning },
                { title: "Unlimited Demand", desc: "Access premium global demand partners seamlessly.", icon: CurrencyDollar },
                { title: "Real-Time Reporting", desc: "Full visibility into every auction and bid.", icon: ChartBar },
              ].map((item, i) => (
                <div key={i} className="flex flex-1 gap-4 items-start p-5 rounded-2xl bg-emerald-50 border border-emerald-200">
                  <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-600 shrink-0">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-slate-800">{item.title}</h4>
                    <p className="text-slate-500 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </StaggerContainer>
          </div>
        </Container>
      </PageSection>

      {/* S3 PLATFORM FEATURES */}
      <PageSection className="py-24 md:py-32 bg-white">
        <Container>
          <FadeUp>
            <h2 className="text-3xl md:text-5xl font-display text-slate-900 mb-16">Built for scale</h2>
          </FadeUp>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Hero card — large */}
            <motion.div variants={staggerItem} className="lg:col-span-2">
              <div className="h-full rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-8 flex flex-col justify-end min-h-[300px] transition-all hover:shadow-md hover:border-emerald-300">
                <Lightning className="w-10 h-10 text-emerald-600 mb-6" />
                <h3 className="text-2xl font-semibold text-slate-900 mb-2">Header Bidding</h3>
                <p className="text-slate-500">Advanced wrapper technology that executes auctions in the browser with zero latency impact.</p>
              </div>
            </motion.div>
            <motion.div variants={staggerItem}>
              <div className="h-full rounded-3xl border border-amber-200 bg-amber-50 p-7 transition-all hover:shadow-md hover:border-amber-300">
                <ChartBar className="w-8 h-8 text-amber-600 mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Yield Optimization</h3>
                <p className="text-slate-500 text-sm">Dynamic floor pricing based on machine learning.</p>
              </div>
            </motion.div>
            <motion.div variants={staggerItem}>
              <div className="h-full rounded-3xl border border-blue-200 bg-blue-50 p-7 transition-all hover:shadow-md hover:border-blue-300">
                <ShieldCheck className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Fraud Prevention</h3>
                <p className="text-slate-500 text-sm">Built-in invalid traffic filtering and brand safety.</p>
              </div>
            </motion.div>
            <motion.div variants={staggerItem} className="lg:col-span-2">
              <div className="h-full rounded-3xl border border-violet-200 bg-violet-50 p-7 transition-all hover:shadow-md hover:border-violet-300">
                <Speedometer className="w-8 h-8 text-violet-600 mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Real-Time Reporting</h3>
                <p className="text-slate-500 text-sm">Granular analytics down to the ad unit and UTM source level.</p>
              </div>
            </motion.div>
            <motion.div variants={staggerItem}>
              <div className="h-full rounded-3xl border border-rose-200 bg-rose-50 p-7 transition-all hover:shadow-md hover:border-rose-300">
                <CurrencyDollar className="w-8 h-8 text-rose-600 mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Floor Price Control</h3>
                <p className="text-slate-500 text-sm">Set custom floors by geo, device, or channel.</p>
              </div>
            </motion.div>
            <motion.div variants={staggerItem}>
              <div className="h-full rounded-3xl border border-sky-200 bg-sky-50 p-7 transition-all hover:shadow-md hover:border-sky-300">
                <Gauge className="w-8 h-8 text-sky-600 mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Lazy Loading</h3>
                <p className="text-slate-500 text-sm">Only request ads when they enter the viewport.</p>
              </div>
            </motion.div>
          </StaggerContainer>
        </Container>
      </PageSection>

      {/* S4 INTEGRATION PROCESS */}
      <PageSection className="py-24 md:py-32 bg-slate-50 border-y border-slate-100">
        <Container>
          <FadeUp>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <Eyebrow accent="neutral" className="mb-4">Integration</Eyebrow>
                <h2 className="text-3xl md:text-5xl font-display text-slate-900">Live in minutes</h2>
              </div>
            </div>
          </FadeUp>
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute top-[40px] left-0 w-full h-[2px] bg-gradient-to-r from-emerald-200 via-blue-200 via-violet-200 to-amber-200 z-0" />
            
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
              {[
                { step: "01", title: "Add Tag", desc: "Place our lightweight script in your site's header.", color: "border-emerald-200 bg-emerald-50", num: "bg-emerald-100 text-emerald-700 border-emerald-300" },
                { step: "02", title: "Configure Floors", desc: "Set your target eCPMs and blocklists in the dashboard.", color: "border-blue-200 bg-blue-50", num: "bg-blue-100 text-blue-700 border-blue-300" },
                { step: "03", title: "Go Live", desc: "Start receiving bids from premium demand partners.", color: "border-violet-200 bg-violet-50", num: "bg-violet-100 text-violet-700 border-violet-300" },
                { step: "04", title: "Optimize", desc: "Our ML engine continuously tunes your setup for maximum yield.", color: "border-amber-200 bg-amber-50", num: "bg-amber-100 text-amber-700 border-amber-300" }
              ].map((item, i) => (
                <div key={i} className={cn("flex flex-col items-start p-6 rounded-2xl border transition-all hover:shadow-md hover:-translate-y-0.5", item.color)}>
                  <div className={cn("w-11 h-11 rounded-full border-2 flex items-center justify-center font-mono font-bold text-sm mb-5", item.num)}>
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-500 text-sm">{item.desc}</p>
                </div>
              ))}
            </StaggerContainer>
          </div>
        </Container>
      </PageSection>

      {/* S5 AD FORMATS */}
      <PageSection className="py-24 md:py-32 bg-white">
        <Container>
          <FadeUp className="mb-16">
            <h2 className="text-3xl md:text-5xl font-display text-slate-900">Supported Formats</h2>
          </FadeUp>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-6 gap-5">
            {[
              { name: "Display", icon: AppWindow, sizes: "300x250, 728x90, 970x250, 300x600", desc: "Standard IAB units with high fill rates.", span: "md:col-span-2" },
              { name: "Native", icon: Newspaper, sizes: "Custom aspect ratios", desc: "In-feed units that match your site's look and feel.", span: "md:col-span-2" },
              { name: "Video", icon: PlayCircle, sizes: "Outstream, Instream (VAST/VPAID)", desc: "High-CPM video units with premium demand.", span: "md:col-span-2" },
              { name: "Rich Media", icon: Sparkle, sizes: "Expandables, Parallax", desc: "Engaging interactive units for direct campaigns.", span: "md:col-span-3" },
              { name: "Interstitial", icon: FrameCorners, sizes: "Full screen (mobile/desktop)", desc: "High-impact placements between page loads.", span: "md:col-span-3" },
            ].map((format, i) => (
              <PremiumFormatCard
                key={i}
                name={format.name}
                desc={format.desc}
                sizes={format.sizes}
                icon={format.icon}
                className={format.span}
                delay={i * 0.1}
              />
            ))}
          </StaggerContainer>
        </Container>
      </PageSection>

      {/* S6 RESULTS */}
      <PageSection className="py-24 md:py-32 bg-slate-50 border-y border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <MetricTile value="+45%" label="Revenue Uplift" accent="green" />
              <MetricTile value="<20ms" label="Latency" accent="blue" />
              <MetricTile value="95%+" label="Fill Rate" accent="violet" />
              <MetricTile value="100%" label="ads.txt Verified" accent="green" />
            </div>
            <FadeUp>
              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm relative overflow-hidden">
                <div className="absolute top-6 left-8 text-6xl text-emerald-200 font-serif leading-none">&quot;</div>
                <div className="relative z-10">
                  <p className="text-xl md:text-2xl text-slate-800 font-medium leading-relaxed mb-8 pt-4">
                    Switching to Emonetiser&apos;s header bidding wrapper was seamless. Our eCPMs jumped by 40% in the first month.
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-emerald-400 to-blue-400" />
                    <div>
                      <div className="text-slate-900 font-semibold">Sarah Jenkins</div>
                      <div className="text-slate-400 text-sm">Head of AdOps, TechDaily</div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </Container>
      </PageSection>

      {/* S7 FINAL CTA */}
      <PageSection className="py-24 md:py-32 gradient-mesh border-t border-slate-100">
        <Container>
          <CtaDuo publisherText="Start Monetizing" />
        </Container>
      </PageSection>

    </main>
  );
}
