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
  Desktop, Television, ShieldCheck, Funnel, AppWindow, Eye
} from "@phosphor-icons/react";
import { SafariWindow } from "@/components/visuals/SafariWindow";
import { DashboardMockup } from "@/components/visuals/DashboardMockup";

export default function AffiliateMarketingPage() {
  return (
    <main className="bg-white text-foreground min-h-screen">
      {/* S1: HERO */}
      <PageSection className="relative overflow-hidden pt-12 pb-24 md:pt-40 md:pb-32 gradient-mesh">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeUp>
              <div className="flex flex-col items-start text-left">
                <Eyebrow accent="green" className="mb-6">Affiliate Marketing</Eyebrow>
                <h1 className="text-5xl md:text-7xl font-display font-medium tracking-tight text-slate-900 mb-6">
                  Pay for results.<br />
                  Scale effortlessly.
                </h1>
                <p className="text-xl text-slate-500 max-w-lg mb-10 leading-relaxed">
                  Stop paying for empty clicks and impressions. Tap into our global network of verified affiliates and only pay when real conversions happen.
                </p>
                <MovingBorderButton href="/company/contact" className="mt-2 group">
                  Start Scaling
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 ml-2" />
                </MovingBorderButton>
              </div>
            </FadeUp>
            <FadeUp delay={0.2} className="relative w-full h-full">
              <div className="relative z-10 w-full h-full min-h-[420px] flex items-center justify-center">
                <SafariWindow url="app.emonetiser.com/affiliates">
                  <DashboardMockup />
                </SafariWindow>
              </div>
            </FadeUp>
          </div>
        </Container>
      </PageSection>

      {/* S2: THE PROBLEM */}
      <PageSection className="py-24 md:py-32 bg-slate-50 border-y border-slate-100">
        <Container>
          <FadeUp>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-16 text-center text-slate-900">The empty clicks problem</h2>
          </FadeUp>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <StaggerContainer className="flex flex-col h-full space-y-4">
              <h3 className="text-sm font-mono uppercase tracking-widest text-rose-500 mb-6 border-b border-rose-100 pb-4 font-semibold">Traditional Advertising</h3>
              {[
                { title: "Paying for Impressions", desc: "Burning budget just to show up on a screen without guaranteed outcomes.", icon: Eye },
                { title: "Fraudulent Clicks", desc: "Bots and click farms draining your daily spend with zero intent.", icon: Funnel },
                { title: "Misaligned Incentives", desc: "Networks motivated to sell volume rather than actual sales.", icon: Target },
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
              <h3 className="text-sm font-mono uppercase tracking-widest text-emerald-600 mb-6 border-b border-emerald-100 pb-4 font-semibold">CPA Marketing</h3>
              {[
                { title: "Pay for Conversions", desc: "You only spend money when a verified lead or sale is generated.", icon: CurrencyDollar },
                { title: "Zero Fraud Risk", desc: "Rigorous vetting ensures traffic is legitimate and highly qualified.", icon: ShieldCheck },
                { title: "Aligned Success", desc: "Affiliates only make money when your business grows.", icon: Lightning },
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

      {/* S3: CAMPAIGN FEATURES */}
      <PageSection className="py-24 md:py-32 bg-white">
        <Container>
          <FadeUp>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-12 text-slate-900">An affiliate network built differently</h2>
          </FadeUp>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "Verified Conversions", desc: "Advanced server-to-server tracking ensures absolute accuracy on every payout.", icon: ShieldCheck, color: "border-emerald-200 bg-emerald-50", icon_c: "bg-emerald-100 text-emerald-600", span: "md:col-span-2 lg:col-span-2" },
              { title: "Global Reach", desc: "Access high-quality traffic from tier-1 and emerging markets alike.", icon: Crosshair, color: "border-amber-200 bg-amber-50", icon_c: "bg-amber-100 text-amber-600" },
              { title: "Fraud Protection", desc: "Proprietary anti-fraud algorithms monitor every click in real-time.", icon: Eye, color: "border-rose-200 bg-rose-50", icon_c: "bg-rose-100 text-rose-600" },
              { title: "High-Intent Audiences", desc: "Connect with buyers actively searching for your product category.", icon: Target, color: "border-violet-200 bg-violet-50", icon_c: "bg-violet-100 text-violet-600" },
              { title: "Custom Tracking", desc: "Flexible integration options to fit your unique tech stack perfectly.", icon: Funnel, color: "border-blue-200 bg-blue-50", icon_c: "bg-blue-100 text-blue-600", span: "md:col-span-2 lg:col-span-2" },
              { title: "Dedicated Managers", desc: "Expert guidance to optimize your offers and attract top affiliates.", icon: ChartBar, color: "border-sky-200 bg-sky-50", icon_c: "bg-sky-100 text-sky-600" },
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
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-12 text-center text-slate-900">Engage users where they convert</h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { title: "Web Properties", desc: "Top-tier review sites, comparison engines, and content blogs driving high-intent organic traffic.", icon: Desktop, color: "border-amber-200 bg-amber-50", icon_c: "bg-amber-100 text-amber-600", tag: "High Intent", tag_c: "bg-amber-100 text-amber-700 border-amber-200" },
              { title: "Social & Mobile", desc: "Influencers and mobile-first publishers capable of driving massive localized volume instantly.", icon: AppWindow, color: "border-blue-200 bg-blue-50", icon_c: "bg-blue-100 text-blue-600", tag: "High Volume", tag_c: "bg-blue-100 text-blue-700 border-blue-200" },
              { title: "Email & Newsletter", desc: "Curated, highly engaged subscriber lists delivering warm leads directly to your funnel.", icon: Television, color: "border-violet-200 bg-violet-50", icon_c: "bg-violet-100 text-violet-600", tag: "Warm Leads", tag_c: "bg-violet-100 text-violet-700 border-violet-200" },
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
            <MetricTile value="$10M+" label="Paid Out Annually" accent="green" />
            <MetricTile value="10k+" label="Verified Affiliates" accent="blue" />
            <MetricTile value="99.9%" label="Tracking Uptime" accent="violet" />
            <MetricTile value="0%" label="Fraud Tolerance" accent="rose" />
          </div>
        </Container>
      </PageSection>

      {/* S6: FINAL CTA */}
      <PageSection className="py-24 md:py-32 gradient-mesh border-t border-slate-100">
        <Container>
          <CtaDuo advertiserText="Start Scaling" />
        </Container>
      </PageSection>
    </main>
  );
}
