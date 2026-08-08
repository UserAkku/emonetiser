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
  Desktop, Television, ShieldCheck, Sliders, Funnel, AppWindow, Eye
} from "@phosphor-icons/react";
import { SafariWindow } from "@/components/visuals/SafariWindow";
import { DashboardMockup } from "@/components/visuals/DashboardMockup";

export default function CampaignsPage() {
  return (
    <main className="bg-white text-foreground min-h-screen">
      {/* S1: HERO */}
      <PageSection className="relative overflow-hidden pt-12 pb-24 md:pt-40 md:pb-32 gradient-mesh">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeUp>
              <div className="flex flex-col items-start text-left">
                <Eyebrow accent="blue" className="mb-6">Performance Campaigns</Eyebrow>
                <h1 className="text-5xl md:text-7xl font-display font-medium tracking-tight text-slate-900 mb-6">
                  Results-driven.<br />
                  Measurable ROI.
                </h1>
                <p className="text-xl text-slate-500 max-w-lg mb-10 leading-relaxed">
                  Drive real business outcomes with our unified campaign manager. Leverage smart bidding and deep attribution to scale your performance efficiently.
                </p>
                <MovingBorderButton href="/company/contact" className="mt-2 group">
                  Launch Campaign
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 ml-2" />
                </MovingBorderButton>
              </div>
            </FadeUp>
            <FadeUp delay={0.2} className="relative w-full h-full">
              <div className="relative z-10 w-full h-full min-h-[420px] flex items-center justify-center">
                <SafariWindow url="app.emonetiser.com/campaigns">
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
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-16 text-center text-slate-900">The disjointed campaign problem</h2>
          </FadeUp>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <StaggerContainer className="flex flex-col h-full space-y-4">
              <h3 className="text-sm font-mono uppercase tracking-widest text-rose-500 mb-6 border-b border-rose-100 pb-4 font-semibold">Siloed Platforms</h3>
              {[
                { title: "Blind Spend", desc: "Throwing budget into black-box algorithms with zero transparency.", icon: Eye },
                { title: "Fragmented Data", desc: "Struggling to piece together attribution across a dozen different channels.", icon: Funnel },
                { title: "Manual Optimization", desc: "Wasting hours adjusting bids and pausing underperforming creatives manually.", icon: Sliders },
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
              <h3 className="text-sm font-mono uppercase tracking-widest text-blue-600 mb-6 border-b border-blue-100 pb-4 font-semibold">Unified Buying</h3>
              {[
                { title: "Full Transparency", desc: "Log-level access and absolute clarity on where every cent is spent.", icon: ChartBar },
                { title: "Multi-Touch Attribution", desc: "See the entire customer journey, from first impression to final conversion.", icon: Target },
                { title: "Automated Rules", desc: "Let machine learning optimize bids, pause creatives, and shift budgets instantly.", icon: Lightning },
              ].map((item, i) => (
                <div key={i} className="flex flex-1 gap-4 items-start p-5 rounded-2xl bg-blue-50 border border-blue-200">
                  <div className="p-2.5 rounded-xl bg-blue-100 text-blue-600 shrink-0">
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
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-12 text-slate-900">Built for performance</h2>
          </FadeUp>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "Smart Bidding", desc: "Predictive AI models that adjust bids in real-time based on conversion probability.", icon: Lightning, color: "border-blue-200 bg-blue-50", icon_c: "bg-blue-100 text-blue-600", span: "md:col-span-2 lg:col-span-2" },
              { title: "A/B Testing", desc: "Automatically rotate and test ad variations to identify top performers.", icon: Funnel, color: "border-amber-200 bg-amber-50", icon_c: "bg-amber-100 text-amber-600" },
              { title: "Granular Targeting", desc: "Zero in on your ideal audience using deep contextual and behavioral signals.", icon: Crosshair, color: "border-rose-200 bg-rose-50", icon_c: "bg-rose-100 text-rose-600" },
              { title: "Dynamic Creatives", desc: "Serve personalized ad variations based on user context and location.", icon: AppWindow, color: "border-violet-200 bg-violet-50", icon_c: "bg-violet-100 text-violet-600" },
              { title: "Real-time Optimization", desc: "Instantaneous budget reallocation to the highest-performing placements.", icon: Sliders, color: "border-emerald-200 bg-emerald-50", icon_c: "bg-emerald-100 text-emerald-600", span: "md:col-span-2 lg:col-span-2" },
              { title: "Custom Attribution", desc: "Define your own attribution models aligned perfectly with your business logic.", icon: Target, color: "border-sky-200 bg-sky-50", icon_c: "bg-sky-100 text-sky-600" },
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
              { title: "Web", desc: "Capture high-intent users actively browsing premium desktop and mobile web environments.", icon: Desktop, color: "border-amber-200 bg-amber-50", icon_c: "bg-amber-100 text-amber-600", tag: "High Viewability", tag_c: "bg-amber-100 text-amber-700 border-amber-200" },
              { title: "Mobile App", desc: "Drive app installs and deep-funnel actions within highly engaging in-app experiences.", icon: AppWindow, color: "border-blue-200 bg-blue-50", icon_c: "bg-blue-100 text-blue-600", tag: "App Integrated", tag_c: "bg-blue-100 text-blue-700 border-blue-200" },
              { title: "CTV", desc: "Leverage household-level targeting for unparalleled brand storytelling and performance.", icon: Television, color: "border-violet-200 bg-violet-50", icon_c: "bg-violet-100 text-violet-600", tag: "Premium Video", tag_c: "bg-violet-100 text-violet-700 border-violet-200" },
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
            <MetricTile value="+40%" label="Avg ROAS" accent="green" />
            <MetricTile value="-20%" label="Target CPA" accent="blue" />
            <MetricTile value="99%" label="Viewability" accent="violet" />
            <MetricTile value="<50ms" label="Optimization Latency" accent="amber" />
          </div>
        </Container>
      </PageSection>

      {/* S6: FINAL CTA */}
      <PageSection className="py-24 md:py-32 gradient-mesh border-t border-slate-100">
        <Container>
          <CtaDuo advertiserText="Launch Campaign" />
        </Container>
      </PageSection>
    </main>
  );
}
