"use client";

import Link from "next/link";
import { FadeUp, StaggerContainer, staggerItem } from "@/components/motion/Reveal";
import { Eyebrow, MetricTile, PageSection, Container } from "@/components/ui/primitives";
import { cn } from "@/lib/utils";
import { ArrowRight, ChartBar, Funnel, Lightning, Eye, CurrencyDollar, ShieldCheck, HandCoins, Speedometer, AppWindow, PlayCircle, FrameCorners, Gauge, Sparkle } from "@phosphor-icons/react";
import { PhoneMockup } from "@/components/visuals/PhoneMockup";
import { CtaDuo } from "@/components/shared/CtaDuo";
import { PremiumFormatCard } from "@/components/ui/premium-format-card";
import { MovingBorderButton } from "@/components/ui/moving-border-button";
import { motion } from "motion/react";

export default function SdkPage() {
  return (
    <main className="flex flex-col w-full bg-white min-h-screen text-foreground">
      
      {/* S1 HERO */}
      <PageSection className="pt-12 pb-24 md:pt-40 md:pb-32 gradient-mesh">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <FadeUp className="flex flex-col items-start text-left">
              <Eyebrow accent="green" className="mb-6">SDK Integration</Eyebrow>
              <h1 className="text-5xl md:text-7xl font-display font-medium tracking-tight text-slate-900 mb-6">
                Native apps.<br />
                Uncompromised.
              </h1>
              <p className="text-xl text-slate-500 max-w-lg mb-10 leading-relaxed">
                Monetize your iOS and Android apps with a single, lightweight SDK designed for crash-free performance and maximum ARPDAU.
              </p>
              <MovingBorderButton href="/contact" className="mt-2 group">
                Get the SDK
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </MovingBorderButton>
            </FadeUp>
            <FadeUp delay={0.2} className="relative w-full h-full lg:pl-12">
              <div className="relative z-10 w-full h-full min-h-[420px] flex items-center justify-center">
                <PhoneMockup>
                  <div className="flex flex-col h-full bg-slate-50">
                    <div className="h-28 bg-[var(--color-brand-primary)] px-5 pb-4 flex flex-col justify-end text-white shadow-md z-10 relative">
                      <h3 className="text-xl font-bold tracking-tight">NewsFeed</h3>
                      <p className="text-emerald-100 text-xs font-medium">Top stories for you</p>
                    </div>
                    <div className="flex-1 p-4 space-y-4 overflow-hidden relative">
                      {/* Fake Article 1 */}
                      <div className="w-full bg-white rounded-2xl shadow-sm border border-slate-100 p-4 flex gap-4">
                        <div className="w-12 h-12 rounded-xl bg-slate-100 shrink-0" />
                        <div className="space-y-2 w-full pt-1">
                          <div className="w-3/4 h-3 rounded-full bg-slate-200" />
                          <div className="w-full h-2 rounded-full bg-slate-100" />
                          <div className="w-5/6 h-2 rounded-full bg-slate-100" />
                        </div>
                      </div>

                      {/* Native Ad Unit */}
                      <div className="w-full bg-white rounded-2xl shadow-md shadow-emerald-500/5 border border-emerald-100 p-4 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 bg-emerald-50 text-emerald-600 text-[9px] font-bold px-2 py-1 rounded-bl-lg">
                          SPONSORED
                        </div>
                        <div className="flex items-center gap-3 mb-3 mt-1">
                          <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                            <Lightning weight="fill" size={14} />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-slate-800">Premium Brand</div>
                            <div className="text-[10px] text-slate-400">Promoted via Emonetiser</div>
                          </div>
                        </div>
                        <div className="w-full h-24 bg-slate-50 rounded-xl mb-3 flex items-center justify-center border border-slate-100 overflow-hidden relative">
                           <div className="absolute inset-0 bg-emerald-500/5" />
                           <span className="text-emerald-600 font-bold font-mono text-lg flex items-center gap-2">
                             $3.50 <span className="text-xs text-emerald-600/50">eCPM</span>
                           </span>
                        </div>
                        <div className="w-full h-8 bg-emerald-50 text-emerald-600 text-xs font-bold rounded-lg flex items-center justify-center transition-colors group-hover:bg-emerald-100">
                          Learn More
                        </div>
                      </div>

                      {/* Fake Article 2 */}
                      <div className="w-full bg-white rounded-2xl shadow-sm border border-slate-100 p-4 flex gap-4 opacity-50">
                        <div className="w-12 h-12 rounded-xl bg-slate-100 shrink-0" />
                        <div className="space-y-2 w-full pt-1">
                          <div className="w-3/4 h-3 rounded-full bg-slate-200" />
                          <div className="w-full h-2 rounded-full bg-slate-100" />
                        </div>
                      </div>
                    </div>
                  </div>
                </PhoneMockup>
              </div>
            </FadeUp>
          </div>
        </Container>
      </PageSection>

      {/* S2 PUBLISHER CHALLENGES */}
      <PageSection className="py-24 md:py-32 bg-slate-50 border-y border-slate-100">
        <Container>
          <FadeUp>
            <h2 className="text-3xl md:text-5xl font-display text-slate-900 mb-16 text-center">The bloated app problem</h2>
          </FadeUp>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <StaggerContainer className="flex flex-col h-full space-y-4">
              <h3 className="text-sm font-mono uppercase tracking-widest text-rose-500 mb-6 border-b border-rose-100 pb-4 font-semibold">Legacy SDKs</h3>
              {[
                { title: "App Bloat", desc: "Heavy dependencies that increase your app size dramatically.", icon: Eye },
                { title: "Instability", desc: "Poorly coded SDKs causing ANRs and fatal crashes.", icon: Gauge },
                { title: "Low Fill Rates", desc: "Reliance on fragmented demand sources leading to unsold inventory.", icon: HandCoins },
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
              <h3 className="text-sm font-mono uppercase tracking-widest text-emerald-600 mb-6 border-b border-emerald-100 pb-4 font-semibold">Emonetiser SDK</h3>
              {[
                { title: "Lightweight Footprint", desc: "Under 500KB. Virtually zero impact on your binary size.", icon: Lightning },
                { title: "Rock-Solid Stability", desc: "Rigorous testing ensures 99.9% crash-free sessions.", icon: ShieldCheck },
                { title: "Unified Demand", desc: "Access premium global networks through a single integration.", icon: CurrencyDollar },
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
            <h2 className="text-3xl md:text-5xl font-display text-slate-900 mb-16">Built for developers</h2>
          </FadeUp>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Hero card — large */}
            <motion.div variants={staggerItem} className="lg:col-span-2">
              <div className="h-full rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-8 flex flex-col justify-end min-h-[300px] transition-all hover:shadow-md hover:border-emerald-300">
                <AppWindow className="w-10 h-10 text-emerald-600 mb-6" />
                <h3 className="text-2xl font-semibold text-slate-900 mb-2">Developer-First Architecture</h3>
                <p className="text-slate-500">Comprehensive documentation, clean APIs, and native components built in Swift and Kotlin for a truly seamless integration.</p>
              </div>
            </motion.div>
            <motion.div variants={staggerItem}>
              <div className="h-full rounded-3xl border border-amber-200 bg-amber-50 p-7 transition-all hover:shadow-md hover:border-amber-300">
                <Speedometer className="w-8 h-8 text-amber-600 mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Pre-fetching</h3>
                <p className="text-slate-500 text-sm">Smart caching of ad assets ensures zero-delay rendering.</p>
              </div>
            </motion.div>
            <motion.div variants={staggerItem}>
              <div className="h-full rounded-3xl border border-blue-200 bg-blue-50 p-7 transition-all hover:shadow-md hover:border-blue-300">
                <ShieldCheck className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Privacy Compliant</h3>
                <p className="text-slate-500 text-sm">Fully compliant with GDPR, CCPA, and COPPA regulations.</p>
              </div>
            </motion.div>
            <motion.div variants={staggerItem} className="lg:col-span-2">
              <div className="h-full rounded-3xl border border-violet-200 bg-violet-50 p-7 transition-all hover:shadow-md hover:border-violet-300">
                <Eye className="w-8 h-8 text-violet-600 mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Viewability Tracking</h3>
                <p className="text-slate-500 text-sm">OM SDK integration for certified viewability measurement.</p>
              </div>
            </motion.div>
            <motion.div variants={staggerItem}>
              <div className="h-full rounded-3xl border border-rose-200 bg-rose-50 p-7 transition-all hover:shadow-md hover:border-rose-300">
                <Lightning className="w-8 h-8 text-rose-600 mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Auto-Refresh</h3>
                <p className="text-slate-500 text-sm">Intelligent refresh rates based on active viewability.</p>
              </div>
            </motion.div>
            <motion.div variants={staggerItem}>
              <div className="h-full rounded-3xl border border-sky-200 bg-sky-50 p-7 transition-all hover:shadow-md hover:border-sky-300">
                <Sparkle className="w-8 h-8 text-sky-600 mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Mediation Support</h3>
                <p className="text-slate-500 text-sm">Works beautifully alongside your existing mediation setup.</p>
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
                <h2 className="text-3xl md:text-5xl font-display text-slate-900">Integrate in hours, not days</h2>
              </div>
            </div>
          </FadeUp>
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute top-[40px] left-0 w-full h-[2px] bg-gradient-to-r from-emerald-200 via-blue-200 via-violet-200 to-amber-200 z-0" />
            
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
              {[
                { step: "01", title: "Add Dependency", desc: "Install via CocoaPods or Gradle.", color: "border-emerald-200 bg-emerald-50", num: "bg-emerald-100 text-emerald-700 border-emerald-300" },
                { step: "02", title: "Initialize SDK", desc: "Call the setup method in your app delegate.", color: "border-blue-200 bg-blue-50", num: "bg-blue-100 text-blue-700 border-blue-300" },
                { step: "03", title: "Place Ad Units", desc: "Add views or call interstitials where needed.", color: "border-violet-200 bg-violet-50", num: "bg-violet-100 text-violet-700 border-violet-300" },
                { step: "04", title: "Go Live", desc: "Publish your update and start earning.", color: "border-amber-200 bg-amber-50", num: "bg-amber-100 text-amber-700 border-amber-300" }
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
              { name: "Banner", icon: AppWindow, sizes: "320x50, 300x250, 728x90", desc: "Classic bottom or top placements with high viewability.", span: "md:col-span-2" },
              { name: "Interstitial", icon: FrameCorners, sizes: "Full Screen", desc: "High-impact transitions for natural breaks in flow.", span: "md:col-span-2" },
              { name: "Rewarded Video", icon: PlayCircle, sizes: "User-initiated", desc: "Highest eCPMs in exchange for in-app currency or items.", span: "md:col-span-2" },
              { name: "Native Ads", icon: AppWindow, sizes: "Custom Layouts", desc: "Blend seamlessly with your app's unique design language.", span: "md:col-span-3" },
              { name: "App Open", icon: Lightning, sizes: "Loading Screen", desc: "Monetize the app launch experience effectively.", span: "md:col-span-3" },
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
              <MetricTile value="+50%" label="ARPDAU" accent="green" />
              <MetricTile value="99.9%" label="Crash-Free" accent="blue" />
              <MetricTile value="<500KB" label="SDK Size" accent="violet" />
              <MetricTile value="High" label="Fill Rate" accent="amber" />
            </div>
            <FadeUp>
              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm relative overflow-hidden">
                <div className="absolute top-6 left-8 text-6xl text-emerald-200 font-serif leading-none">&quot;</div>
                <div className="relative z-10">
                  <p className="text-xl md:text-2xl text-slate-800 font-medium leading-relaxed mb-8 pt-4">
                    The SDK was a breeze to integrate. Our crash rates stayed at zero, and our revenue per user skyrocketed within the first week.
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-emerald-400 to-blue-400" />
                    <div>
                      <div className="text-slate-900 font-semibold">Alex Rivera</div>
                      <div className="text-slate-400 text-sm">Lead Developer, GameStudios</div>
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
          <CtaDuo publisherText="Get the SDK" />
        </Container>
      </PageSection>

    </main>
  );
}
