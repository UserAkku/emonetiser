"use client";

import Link from "next/link";
import { FadeUp, StaggerContainer, staggerItem } from "@/components/motion/Reveal";
import { Eyebrow, MetricTile, PageSection, Container } from "@/components/ui/primitives";
import { cn } from "@/lib/utils";
import { ArrowRight, ChartBar, Funnel, Lightning, Eye, CurrencyDollar, ShieldCheck, HandCoins, Speedometer, AppWindow, PlayCircle, Sparkle, Gauge, FrameCorners } from "@phosphor-icons/react";
import { CodeTerminal } from "@/components/visuals/CodeTerminal";
import { CtaDuo } from "@/components/shared/CtaDuo";
import { PremiumFormatCard } from "@/components/ui/premium-format-card";
import { MovingBorderButton } from "@/components/ui/moving-border-button";
import { ChainCompare } from "@/components/visuals/ChainCompare";
import { motion } from "motion/react";

const ortbCode = `{
  "id": "80ce30c53c",
  "imp": [
    {
      "id": "1",
      "video": {
        "mimes": ["video/mp4"],
        "minduration": 5,
        "maxduration": 30
      },
      "bidfloor": 2.50
    }
  ],
  "site": {
    "domain": "premium.com"
  }
}`;

export default function OrtbPage() {
  return (
    <main className="flex flex-col w-full bg-white min-h-screen text-foreground">
      
      {/* S1 HERO */}
      <PageSection className="pt-12 pb-24 md:pt-40 md:pb-32 gradient-mesh">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <FadeUp className="flex flex-col items-start text-left">
              <Eyebrow accent="green" className="mb-6">OpenRTB Integration</Eyebrow>
              <h1 className="text-5xl md:text-7xl font-display font-medium tracking-tight text-slate-900 mb-6">
                Direct connections.<br />
                Maximum yield.
              </h1>
              <p className="text-xl text-slate-500 max-w-lg mb-10 leading-relaxed">
                Bypass the browser entirely. Execute server-to-server auctions for zero latency, higher bid density, and unmatched scalability.
              </p>
              <MovingBorderButton href="/contact" className="mt-2 group">
                Connect Endpoint
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </MovingBorderButton>
            </FadeUp>
            <FadeUp delay={0.2} className="relative w-full h-full lg:pl-12">
              <div className="relative z-10 w-full h-full min-h-[420px] flex items-center justify-center">
                <CodeTerminal code={ortbCode} title="bid_request.json" />
              </div>
            </FadeUp>
          </div>
        </Container>
      </PageSection>

      {/* S2 PUBLISHER CHALLENGES */}
      <PageSection className="py-24 md:py-32 bg-slate-50 border-y border-slate-100">
        <Container>
          <FadeUp>
            <h2 className="text-3xl md:text-5xl font-display text-slate-900 mb-16 text-center">The latency problem</h2>
          </FadeUp>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <StaggerContainer className="flex flex-col h-full space-y-4">
              <h3 className="text-sm font-mono uppercase tracking-widest text-rose-500 mb-6 border-b border-rose-100 pb-4 font-semibold">Client-Side Bidding</h3>
              {[
                { title: "Heavy Page Loads", desc: "Multiple scripts fighting for browser resources.", icon: Speedometer },
                { title: "Timeouts", desc: "High latency leads to dropped bids and lost revenue.", icon: Speedometer },
                { title: "Ad Blockers", desc: "Browser-level blocking destroys your inventory value.", icon: Eye },
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
              <h3 className="text-sm font-mono uppercase tracking-widest text-emerald-600 mb-6 border-b border-emerald-100 pb-4 font-semibold">Server-Side ORTB</h3>
              {[
                { title: "Zero Browser Impact", desc: "Auctions happen on our servers, not your users' devices.", icon: Lightning },
                { title: "Instant Execution", desc: "Sub-10ms response times for maximum bid density.", icon: Lightning },
                { title: "Unhindered Delivery", desc: "Immune to client-side ad blockers and script failures.", icon: ShieldCheck },
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
            <h2 className="text-3xl md:text-5xl font-display text-slate-900 mb-16">Built for speed and scale</h2>
          </FadeUp>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Hero card — large */}
            <motion.div variants={staggerItem} className="lg:col-span-2">
              <div className="h-full rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-8 flex flex-col justify-end min-h-[300px] transition-all hover:shadow-md hover:border-emerald-300">
                <Lightning className="w-10 h-10 text-emerald-600 mb-6" />
                <h3 className="text-2xl font-semibold text-slate-900 mb-2">Server-to-Server Bidding</h3>
                <p className="text-slate-500">Unify your demand into a single robust server-side auction that handles billions of requests with ease.</p>
              </div>
            </motion.div>
            <motion.div variants={staggerItem}>
              <div className="h-full rounded-3xl border border-amber-200 bg-amber-50 p-7 transition-all hover:shadow-md hover:border-amber-300">
                <Lightning className="w-8 h-8 text-amber-600 mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Zero Latency</h3>
                <p className="text-slate-500 text-sm">Eliminate client-side overhead for lightning-fast page loads.</p>
              </div>
            </motion.div>
            <motion.div variants={staggerItem}>
              <div className="h-full rounded-3xl border border-blue-200 bg-blue-50 p-7 transition-all hover:shadow-md hover:border-blue-300">
                <Eye className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Cookie-less Matching</h3>
                <p className="text-slate-500 text-sm">Advanced identity resolution in a privacy-first ecosystem.</p>
              </div>
            </motion.div>
            <motion.div variants={staggerItem} className="lg:col-span-2">
              <div className="h-full rounded-3xl border border-violet-200 bg-violet-50 p-7 transition-all hover:shadow-md hover:border-violet-300">
                <Funnel className="w-8 h-8 text-violet-600 mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Advanced Traffic Shaping</h3>
                <p className="text-slate-500 text-sm">Machine learning algorithms route requests only to partners most likely to bid.</p>
              </div>
            </motion.div>
            <motion.div variants={staggerItem}>
              <div className="h-full rounded-3xl border border-rose-200 bg-rose-50 p-7 transition-all hover:shadow-md hover:border-rose-300">
                <ChartBar className="w-8 h-8 text-rose-600 mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Transparent Reporting</h3>
                <p className="text-slate-500 text-sm">Deep insights into bid landscape and auction dynamics.</p>
              </div>
            </motion.div>
            <motion.div variants={staggerItem}>
              <div className="h-full rounded-3xl border border-sky-200 bg-sky-50 p-7 transition-all hover:shadow-md hover:border-sky-300">
                <FrameCorners className="w-8 h-8 text-sky-600 mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Multi-Format Support</h3>
                <p className="text-slate-500 text-sm">One endpoint for Display, Video, and Native inventory.</p>
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
                <h2 className="text-3xl md:text-5xl font-display text-slate-900">Seamless endpoint setup</h2>
              </div>
            </div>
          </FadeUp>
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute top-[40px] left-0 w-full h-[2px] bg-gradient-to-r from-emerald-200 via-blue-200 via-violet-200 to-amber-200 z-0" />
            
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
              {[
                { step: "01", title: "Connect Endpoint", desc: "Integrate our OpenRTB 2.5 compliant endpoint.", color: "border-emerald-200 bg-emerald-50", num: "bg-emerald-100 text-emerald-700 border-emerald-300" },
                { step: "02", title: "Map Inventory", desc: "Align your ad units and pass essential parameters.", color: "border-blue-200 bg-blue-50", num: "bg-blue-100 text-blue-700 border-blue-300" },
                { step: "03", title: "Start Auction", desc: "Send bid requests directly from your server.", color: "border-violet-200 bg-violet-50", num: "bg-violet-100 text-violet-700 border-violet-300" },
                { step: "04", title: "Maximize Yield", desc: "Let our routing algorithms maximize your eCPMs.", color: "border-amber-200 bg-amber-50", num: "bg-amber-100 text-amber-700 border-amber-300" }
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
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {[
              { name: "Display", icon: AppWindow, sizes: "All standard IAB sizes", desc: "High-volume display inventory with massive scale.", span: "md:col-span-2" },
              { name: "Video (VAST)", icon: PlayCircle, sizes: "Instream & Outstream", desc: "Premium video demand with high completion rates.", span: "md:col-span-2" },
              { name: "Native", icon: FrameCorners, sizes: "Dynamic components", desc: "Seamless in-feed units powered by direct demand.", span: "md:col-span-2" },
              { name: "Audio", icon: Sparkle, sizes: "In-stream audio", desc: "Tap into the growing digital audio market.", span: "md:col-span-2" },
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
              <MetricTile value="<10ms" label="Server Latency" accent="blue" />
              <MetricTile value="+30%" label="Bid Density" accent="green" />
              <MetricTile value="99.9%" label="Uptime SLA" accent="violet" />
              <MetricTile value="<1%" label="Discrepancy" accent="amber" />
            </div>
            <FadeUp>
              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm relative overflow-hidden">
                <div className="absolute top-6 left-8 text-6xl text-emerald-200 font-serif leading-none">&quot;</div>
                <div className="relative z-10">
                  <p className="text-xl md:text-2xl text-slate-800 font-medium leading-relaxed mb-8 pt-4">
                    Moving to Emonetiser&apos;s ORTB integration was a game-changer. We eliminated client-side latency entirely while unlocking a massive pool of new demand.
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-emerald-400 to-blue-400" />
                    <div>
                      <div className="text-slate-900 font-semibold">David Chen</div>
                      <div className="text-slate-400 text-sm">CTO, Global Media Group</div>
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
          <CtaDuo publisherText="Connect Endpoint" />
        </Container>
      </PageSection>

    </main>
  );
}
