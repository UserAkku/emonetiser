"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { FadeUp, StaggerContainer, staggerItem } from "@/components/motion/Reveal";
import { Eyebrow, MetricTile, PageSection, Container } from "@/components/ui/primitives";
import { CtaDuo } from "@/components/shared/CtaDuo";
import { MovingBorderButton } from "@/components/ui/moving-border-button";
import { cn } from "@/lib/utils";
import { 
  ArrowRight, Users, Devices, ImageSquare, Clock, 
  SlidersHorizontal, HardDrives, ShieldCheck, GlobeHemisphereWest
} from "@phosphor-icons/react";
import { RetargetingBeam } from "@/components/visuals/RetargetingBeam";

export default function RetargetingPage() {
  return (
    <main className="bg-white text-foreground min-h-screen">
      {/* S1: HERO */}
      <PageSection className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32 gradient-mesh">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeUp>
              <div className="flex flex-col items-start text-left">
                <Eyebrow accent="blue" className="mb-6">Retargeting</Eyebrow>
                <h1 className="text-5xl md:text-7xl font-display font-medium tracking-tight text-slate-900 mb-6">
                  Bring them back.<br />
                  Convert them.
                </h1>
                <p className="text-xl text-slate-500 max-w-lg mb-10 leading-relaxed">
                  Re-engage your highest-intent audiences across Web, App, and Connected TV with privacy-first retargeting.
                </p>
                <MovingBorderButton href="/contact" className="mt-2 group">
                  Start Retargeting
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 ml-2" />
                </MovingBorderButton>
              </div>
            </FadeUp>
            <FadeUp delay={0.2} className="hidden lg:block">
              <div className="relative w-full aspect-square max-w-md mx-auto flex items-center justify-center">
                <div className="absolute inset-0 border-2 border-blue-200 rounded-full animate-[spin_20s_linear_infinite] border-dashed" />
                <div className="absolute inset-8 border-2 border-emerald-200 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                <div className="absolute inset-16 border-2 border-violet-200 rounded-full animate-[spin_10s_linear_infinite]" />
                <div className="w-28 h-28 rounded-full bg-blue-50 border-2 border-blue-200 flex items-center justify-center shadow-lg">
                  <Users className="w-12 h-12 text-blue-600" />
                </div>
                {/* Floating dots */}
                <div className="absolute top-8 right-16 w-8 h-8 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-xs font-mono text-emerald-700 font-bold">+</div>
                <div className="absolute bottom-16 left-8 w-8 h-8 rounded-full bg-violet-100 border border-violet-300 flex items-center justify-center text-xs font-mono text-violet-700 font-bold">$</div>
                <div className="absolute top-1/2 right-4 w-6 h-6 rounded-full bg-amber-100 border border-amber-300 animate-pulse" />
              </div>
            </FadeUp>
          </div>
        </Container>
      </PageSection>

      {/* S2: HOW RETARGETING WORKS */}
      <PageSection className="py-24 md:py-32 bg-slate-50 border-y border-slate-100">
        <Container>
          <FadeUp>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-16 text-center text-slate-900">The retargeting flow</h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <RetargetingBeam />
          </FadeUp>
        </Container>
      </PageSection>

      {/* S3: CAPABILITIES */}
      <PageSection className="py-24 md:py-32 bg-white">
        <Container>
          <FadeUp>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-12 text-slate-900">Precision toolset</h2>
          </FadeUp>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <motion.div variants={staggerItem} className="md:col-span-2">
              <div className="h-full rounded-3xl border border-blue-200 bg-blue-50 p-8 flex flex-col transition-all hover:shadow-md hover:-translate-y-0.5">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center mb-5">
                  <ImageSquare className="w-6 h-6 text-blue-600" weight="duotone" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-3">Dynamic Creatives</h3>
                <p className="text-slate-500 leading-relaxed">Serve personalized product recommendations and offers based on exact browsing history to maximize conversion rates.</p>
              </div>
            </motion.div>
            
            <motion.div variants={staggerItem} className="md:col-span-1 lg:col-span-2">
              <div className="h-full rounded-3xl border border-emerald-200 bg-emerald-50 p-8 flex flex-col transition-all hover:shadow-md hover:-translate-y-0.5">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center mb-5">
                  <Users className="w-6 h-6 text-emerald-600" weight="duotone" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-3">Audience Segmentation</h3>
                <p className="text-slate-500 leading-relaxed">Build highly specific groups based on cart abandoners, recent purchasers, or high-value frequent visitors.</p>
              </div>
            </motion.div>
            
            {[
              { icon: Devices, title: "Cross-Device", desc: "Reach the same user across desktop, mobile, and CTV.", color: "border-violet-200 bg-violet-50", icon_c: "bg-violet-100 text-violet-600" },
              { icon: Clock, title: "Lookback Windows", desc: "Customizable recency rules to target users while intent is highest.", color: "border-amber-200 bg-amber-50", icon_c: "bg-amber-100 text-amber-600" },
              { icon: SlidersHorizontal, title: "Frequency Management", desc: "Strict controls to avoid burning out your audience with repetitive ads.", color: "border-rose-200 bg-rose-50", icon_c: "bg-rose-100 text-rose-600" },
              { icon: HardDrives, title: "Server-Side Events", desc: "Robust tracking APIs that don&apos;t rely solely on fragile browser cookies.", color: "border-sky-200 bg-sky-50", icon_c: "bg-sky-100 text-sky-600" },
            ].map((item, i) => (
              <motion.div key={i} variants={staggerItem}>
                <div className={cn("h-full rounded-3xl border p-6 flex flex-col transition-all hover:shadow-md hover:-translate-y-0.5", item.color)}>
                  <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center mb-4", item.icon_c)}>
                    <item.icon className="w-5 h-5" weight="duotone" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </Container>
      </PageSection>

      {/* S4: PRIVACY & COMPLIANCE */}
      <PageSection className="py-24 md:py-32 bg-slate-50 border-y border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <div className="flex flex-col gap-4">
                {[
                  { icon: ShieldCheck, label: "GDPR Compliant", color: "border-emerald-200 bg-emerald-50", icon_c: "bg-emerald-100 text-emerald-600" },
                  { icon: ShieldCheck, label: "CCPA Ready", color: "border-blue-200 bg-blue-50", icon_c: "bg-blue-100 text-blue-600" },
                  { icon: GlobeHemisphereWest, label: "Cookieless Future-Proof", color: "border-violet-200 bg-violet-50", icon_c: "bg-violet-100 text-violet-600" },
                ].map((item, i) => (
                  <div key={i} className={cn("p-5 rounded-2xl border flex items-center gap-4", item.color)}>
                    <div className={cn("p-2.5 rounded-xl", item.icon_c)}>
                      <item.icon className="w-5 h-5" weight="duotone" />
                    </div>
                    <div className="font-semibold text-slate-900">{item.label}</div>
                  </div>
                ))}
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <h2 className="font-display text-4xl font-bold mb-6 text-slate-900">Privacy-first retargeting</h2>
              <p className="text-lg text-slate-500 mb-6">
                The regulatory landscape is shifting, but re-engaging your audience shouldn&apos;t carry legal risks. Our platform is built from the ground up to respect user consent signals strictly.
              </p>
              <p className="text-lg text-slate-500">
                By combining authenticated traffic, universal IDs, and server-to-server integrations, we ensure your retargeting campaigns maintain high match rates without violating privacy norms.
              </p>
            </FadeUp>
          </div>
        </Container>
      </PageSection>

      {/* S5: METRICS */}
      <PageSection className="py-24 md:py-32 bg-white">
        <Container>
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-5">
            <MetricTile value="3.2×" label="CVR Lift" accent="blue" />
            <MetricTile value="40%" label="Lower CPA" accent="green" />
            <MetricTile value="92%" label="Match Rate" accent="violet" />
            <MetricTile value="7-Day" label="Lookback Default" accent="blue" />
          </StaggerContainer>
        </Container>
      </PageSection>

      {/* S6: FINAL CTA */}
      <PageSection className="py-24 md:py-32 gradient-mesh border-t border-slate-100">
        <Container>
          <CtaDuo advertiserText="Build Retargeting Audiences" />
        </Container>
      </PageSection>
    </main>
  );
}
