"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { FadeUp, StaggerContainer, staggerItem } from "@/components/motion/Reveal";
import { Eyebrow, MetricTile, PageSection, Container } from "@/components/ui/primitives";
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

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* SECTION 1 - HERO */}
      <PageSection className="gradient-mesh pt-12 lg:pt-40 pb-24 md:pb-32 overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <StaggerContainer className="flex flex-col items-start gap-8 z-10 relative">
              <motion.h1 variants={staggerItem} className="text-5xl sm:text-6xl lg:text-7xl font-display font-semibold tracking-tight leading-[1.1] text-balance text-slate-900">
                One exchange.<br />Both sides of the trade.
              </motion.h1>
              
              <motion.p variants={staggerItem} className="text-lg sm:text-xl text-slate-500 max-w-lg leading-relaxed">
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
              <div className="group relative w-full overflow-hidden rounded-[2rem] border border-slate-200 bg-white transition-all hover:shadow-xl shadow-lg">
                <ExchangeArchitecture />
              </div>
            </FadeUp>
          </div>
        </Container>
      </PageSection>

      {/* SECTION 2 - TRUST & CERTIFICATIONS */}
      <PageSection className="py-24 border-y border-slate-100 bg-slate-50">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-8">
            <p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest">
              Trusted by leading publishers &amp; advertisers
            </p>
            <LogoMarquee />
          </div>
          
          <Container>
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: "IAB Tech Lab", desc: "Gold Member", icon: SealCheck, bg: "bg-blue-50 border-blue-200", iconColor: "text-blue-600", iconBg: "bg-blue-100" },
                { name: "ads.txt Verified", desc: "100% Direct", icon: CheckCircle, bg: "bg-violet-50 border-violet-200", iconColor: "text-violet-600", iconBg: "bg-violet-100" },
                { name: "OpenRTB 2.6", desc: "Latest Standard", icon: ShieldCheck, bg: "bg-amber-50 border-amber-200", iconColor: "text-amber-600", iconBg: "bg-amber-100" }
              ].map((cert, i) => (
                <motion.div key={i} variants={staggerItem} className="h-full">
                  <div className={cn("group relative flex items-center gap-4 h-full w-full rounded-2xl border p-5 overflow-hidden transition-all hover:-translate-y-0.5 hover:shadow-md", cert.bg)}>
                    <BorderBeam size={120} duration={10} delay={i * 2} borderWidth={1.5} />
                    <div className={cn("relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-transform group-hover:scale-110", cert.iconBg)}>
                      <cert.icon className={cn("w-5 h-5", cert.iconColor)} weight="duotone" />
                    </div>
                    <div className="relative z-10">
                      <h4 className="font-semibold text-slate-800">{cert.name}</h4>
                      <p className="text-xs text-slate-500 font-medium tracking-wide mt-0.5">{cert.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </StaggerContainer>
          </Container>
        </div>
      </PageSection>

      {/* SECTION 3 - PLATFORM OVERVIEW (SSP vs DSP) */}
      <PageSection className="py-24 md:py-32 bg-white">
        <Container>
          <div className="flex flex-col items-center mb-16 text-center max-w-2xl mx-auto">
            <FadeUp>
              <h2 className="text-4xl md:text-5xl font-display font-semibold tracking-tight mb-4 text-slate-900">Unified Infrastructure</h2>
              <p className="text-lg text-slate-500">Built to eliminate intermediaries, our platform provides a direct path between supply and demand.</p>
            </FadeUp>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
            <motion.div variants={staggerItem}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-emerald-200 bg-emerald-50 p-8 transition-all hover:shadow-lg hover:border-emerald-300 hover:-translate-y-1">
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-emerald-100 blur-3xl opacity-60 pointer-events-none" />
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 bg-emerald-100 rounded-xl px-3 py-1.5 mb-6">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">SSP</span>
                  </div>
                  <h3 className="text-2xl font-display font-semibold text-emerald-800 mb-6">Supply Side Platform</h3>
                  <ul className="space-y-4">
                    {[
                      "Yield optimization with machine learning",
                      "Advanced identity and audience solutions",
                      "Granular controls and transparent reporting"
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" weight="fill" />
                        <span className="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div variants={staggerItem}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-blue-200 bg-blue-50 p-8 transition-all hover:shadow-lg hover:border-blue-300 hover:-translate-y-1">
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-blue-100 blur-3xl opacity-60 pointer-events-none" />
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 bg-blue-100 rounded-xl px-3 py-1.5 mb-6">
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                    <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">DSP</span>
                  </div>
                  <h3 className="text-2xl font-display font-semibold text-blue-800 mb-6">Demand Side Platform</h3>
                  <ul className="space-y-4">
                    {[
                      "Direct access to premium omnichannel inventory",
                      "Custom bidding algorithms and SPO",
                      "Brand safety and anti-fraud integrations"
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" weight="fill" />
                        <span className="text-slate-600">{feature}</span>
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
      <PageSection className="py-24 md:py-32 bg-slate-50 border-y border-slate-100">
        <Container>
          <div className="mb-16">
            <FadeUp>
              <Eyebrow accent="neutral" className="mb-6">Inventory Channels</Eyebrow>
              <h2 className="text-4xl md:text-5xl font-display font-semibold tracking-tight max-w-xl text-slate-900">
                Monetize every screen with zero compromise.
              </h2>
            </FadeUp>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <motion.div variants={staggerItem} className="md:col-span-2">
              <div className="group relative overflow-hidden rounded-3xl border border-emerald-200 bg-emerald-50 p-6 transition-all hover:shadow-md hover:border-emerald-300 hover:-translate-y-1">
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-100 border border-emerald-200 flex items-center justify-center shrink-0">
                      <AppWindow className="w-7 h-7 text-emerald-600" weight="duotone" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1 text-slate-900">Web Display &amp; Video</h3>
                      <p className="text-slate-500 text-sm">High-impact formats across desktop and mobile web environments.</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs font-mono px-3 py-1 bg-emerald-50 rounded-full border border-emerald-200 text-emerald-700">Banner</span>
                    <span className="text-xs font-mono px-3 py-1 bg-emerald-50 rounded-full border border-emerald-200 text-emerald-700">In-Stream</span>
                    <span className="text-xs font-mono px-3 py-1 bg-emerald-50 rounded-full border border-emerald-200 text-emerald-700">Native</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={staggerItem}>
              <div className="group relative overflow-hidden rounded-3xl border border-blue-200 bg-blue-50 p-7 transition-all hover:shadow-md hover:border-blue-300 hover:-translate-y-1 h-full flex flex-col gap-5">
                <div className="w-14 h-14 rounded-2xl bg-blue-100 border border-blue-200 flex items-center justify-center">
                  <Devices className="w-7 h-7 text-blue-600" weight="duotone" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-slate-900">In-App</h3>
                  <p className="text-slate-500 text-sm">Seamless integration for iOS and Android applications via SDK or OpenRTB.</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="text-xs font-mono px-3 py-1 bg-blue-50 rounded-full border border-blue-200 text-blue-700">Interstitial</span>
                  <span className="text-xs font-mono px-3 py-1 bg-blue-50 rounded-full border border-blue-200 text-blue-700">Rewarded</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={staggerItem}>
              <div className="group relative overflow-hidden rounded-3xl border border-violet-200 bg-violet-50 p-7 transition-all hover:shadow-md hover:border-violet-300 hover:-translate-y-1 h-full flex flex-col gap-5">
                <div className="w-14 h-14 rounded-2xl bg-violet-100 border border-violet-200 flex items-center justify-center">
                  <Television className="w-7 h-7 text-violet-600" weight="duotone" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-slate-900">Connected TV</h3>
                  <p className="text-slate-500 text-sm">Premium video inventory on the biggest screen in the home.</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="text-xs font-mono px-3 py-1 bg-violet-50 rounded-full border border-violet-200 text-violet-700">Pre-roll</span>
                  <span className="text-xs font-mono px-3 py-1 bg-violet-50 rounded-full border border-violet-200 text-violet-700">Mid-roll</span>
                </div>
              </div>
            </motion.div>
          </StaggerContainer>
        </Container>
      </PageSection>

      {/* SECTION 5 - HOW THE EXCHANGE WORKS */}
      <PageSection className="py-24 md:py-32 bg-white">
        <Container>
          <FadeUp className="mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-semibold tracking-tight text-slate-900">The anatomy of<br />a 20ms transaction.</h2>
          </FadeUp>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <StaggerContainer className="flex flex-col gap-0">
              {[
                { title: "Ad Request", desc: "User loads a page or app, triggering an immediate request to our SSP.", color: "text-emerald-600", bg: "bg-emerald-50 border-emerald-200", num: "text-emerald-500" },
                { title: "Bid Request", desc: "We enrich the request with privacy-safe audience data and broadcast via OpenRTB.", color: "text-blue-600", bg: "bg-blue-50 border-blue-200", num: "text-blue-500" },
                { title: "Simultaneous Bidding", desc: "Hundreds of DSPs evaluate the opportunity and submit their bids concurrently.", color: "text-violet-600", bg: "bg-violet-50 border-violet-200", num: "text-violet-500" },
                { title: "Winning Bid", desc: "Our auction logic selects the highest valid bid in under 20 milliseconds.", color: "text-amber-600", bg: "bg-amber-50 border-amber-200", num: "text-amber-500" },
                { title: "Creative Delivery", desc: "The winning ad markup is securely delivered and rendered for the user.", color: "text-rose-600", bg: "bg-rose-50 border-rose-200", num: "text-rose-500" }
              ].map((step, i) => (
                <motion.div key={i} variants={staggerItem} className="flex gap-5 group relative">
                  {/* Timeline connector */}
                  {i < 4 && (
                    <div className="absolute left-5 top-12 bottom-0 w-px bg-slate-200 z-0" />
                  )}
                  <div className={cn("relative z-10 mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-sm font-bold font-mono", step.bg, step.num)}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="pb-10">
                    <h3 className={cn("text-xl font-semibold mb-2 transition-colors", step.color)}>{step.title}</h3>
                    <p className="text-slate-500 leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </StaggerContainer>

            <div className="hidden lg:block relative">
              <div className="sticky top-24">
                <div className="group relative w-full overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-lg transition-all hover:shadow-xl">
                  <ExchangeArchitecture />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </PageSection>

      {/* SECTION 6 - PERFORMANCE METRICS */}
      <PageSection className="py-24 md:py-32 bg-slate-50 border-y border-slate-100">
        <Container>
          <FadeUp className="mb-16 text-center">
            <h2 className="text-4xl font-display font-semibold tracking-tight text-slate-900">Scale meets speed.</h2>
          </FadeUp>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { value: <CounterStat value={20} prefix="<" suffix="ms" />, label: "Auction Latency", sub: "p99 global", accent: "green" as const },
              { value: "OpenRTB 2.6", label: "Protocol Standard", sub: "IAB compliant", accent: "blue" as const },
              { value: "3 Channels", label: "Web + App + CTV", sub: "Unified auction", accent: "violet" as const }
            ].map((metric, i) => (
              <motion.div key={i} variants={staggerItem} className="h-full">
                <MetricTile
                  value={metric.value}
                  label={metric.label}
                  sub={metric.sub}
                  accent={metric.accent}
                  className="h-full"
                />
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
              <h2 className="text-4xl md:text-5xl font-display font-semibold tracking-tight text-center mb-12 text-slate-900">
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
