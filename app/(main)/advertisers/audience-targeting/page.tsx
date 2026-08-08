"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { FadeUp, StaggerContainer, staggerItem } from "@/components/motion/Reveal";
import { Eyebrow, PageSection, Container } from "@/components/ui/primitives";
import { CtaDuo } from "@/components/shared/CtaDuo";
import { PremiumFormatCard } from "@/components/ui/premium-format-card";
import { MovingBorderButton } from "@/components/ui/moving-border-button";
import { cn } from "@/lib/utils";
import { 
  ArrowRight, Users, MapPin, Devices, BookOpenText, IdentificationCard,
  Target, ShieldCheck, MagnifyingGlass, Warning, ChartLineUp, Faders, ClockCounterClockwise
} from "@phosphor-icons/react";

export default function AudienceTargetingPage() {
  return (
    <main className="bg-white text-foreground min-h-screen">
      {/* S1: HERO */}
      <PageSection className="relative overflow-hidden pt-12 pb-24 md:pt-40 md:pb-32 gradient-mesh">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeUp>
              <div className="flex flex-col items-start text-left">
                <Eyebrow accent="blue" className="mb-6">Audience Targeting</Eyebrow>
                <h1 className="text-5xl md:text-7xl font-display font-medium tracking-tight text-slate-900 mb-6">
                  Right person.<br />
                  Right moment.
                </h1>
                <p className="text-xl text-slate-500 max-w-lg mb-10 leading-relaxed">
                  Combine powerful demographic, behavioral, and contextual signals to zero in on the precise audience most likely to engage with your brand.
                </p>
                <MovingBorderButton href="/company/contact" className="mt-2 group">
                  Explore Audiences
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 ml-2" />
                </MovingBorderButton>
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="rounded-3xl border border-blue-200 bg-blue-50 p-8 flex flex-col gap-3 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-60 pointer-events-none" />
                <div className="text-xs font-mono text-blue-500 uppercase tracking-widest font-semibold mb-4">Audience Builder</div>
                <div className="flex items-center gap-3 p-3 bg-white border border-blue-200 rounded-xl shadow-sm">
                  <Users className="w-5 h-5 text-blue-600 shrink-0" />
                  <span className="font-mono text-sm text-slate-700">Tech Enthusiasts (US)</span>
                  <span className="ml-auto text-xs bg-blue-100 px-2 py-0.5 rounded font-mono text-blue-600">AND</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white border border-emerald-200 rounded-xl shadow-sm ml-6">
                  <BookOpenText className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span className="font-mono text-sm text-slate-700">Context: Finance</span>
                  <span className="ml-auto text-xs bg-emerald-100 px-2 py-0.5 rounded font-mono text-emerald-700">OR</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white border border-violet-200 rounded-xl shadow-sm ml-6">
                  <Target className="w-5 h-5 text-violet-600 shrink-0" />
                  <span className="font-mono text-sm text-slate-700">Behavior: In-market Auto</span>
                </div>
                <div className="mt-4 pt-4 border-t border-blue-200 flex justify-between items-center">
                  <span className="text-sm text-slate-400">Est. Reach</span>
                  <span className="font-mono font-bold text-xl text-slate-900">4.2M Users</span>
                </div>
              </div>
            </FadeUp>
          </div>
        </Container>
      </PageSection>

      {/* S2: TARGETING SIGNALS */}
      <PageSection className="py-24 md:py-32 bg-slate-50 border-y border-slate-100">
        <Container>
          <FadeUp>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-12 text-center text-slate-900">Comprehensive signals</h2>
          </FadeUp>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { name: "Demographic", icon: Users, sizes: "Ex: Women 25-34, HHI $100k+", desc: "Age, gender, household income, and education levels.", span: "md:col-span-2 lg:col-span-1" },
              { name: "Behavioral", icon: Target, sizes: "Ex: Frequent business travelers", desc: "Past browsing history, purchase intent, and interests." },
              { name: "Contextual", icon: BookOpenText, sizes: "Ex: Articles about EVs", desc: "Target based on the content of the page actively being read." },
              { name: "Geographic", icon: MapPin, sizes: "Ex: 5-mile radius of retail stores", desc: "Country, state, city, zip code, or specific lat/long radius." },
              { name: "Device", icon: Devices, sizes: "Ex: iOS 16+ on 5G connection", desc: "OS, browser, connection type, and specific device models.", span: "md:col-span-2 lg:col-span-1" },
              { name: "First-Party", icon: IdentificationCard, sizes: "Ex: Lapsed subscribers list", desc: "Onboard your own CRM data to target existing customers." },
            ].map((signal, i) => (
              <PremiumFormatCard
                key={i}
                name={signal.name}
                desc={signal.desc}
                sizes={signal.sizes}
                icon={signal.icon}
                className={signal.span}
                delay={i * 0.1}
              />
            ))}
          </StaggerContainer>
        </Container>
      </PageSection>

      {/* S3: BRAND SAFETY */}
      <PageSection className="py-24 md:py-32 bg-white">
        <Container>
          <FadeUp>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-display text-4xl font-bold mb-4 text-slate-900">Uncompromising brand safety</h2>
              <p className="text-lg text-slate-500">Finding the right user doesn&apos;t matter if the environment isn&apos;t safe. Protect your brand with ironclad controls.</p>
            </div>
          </FadeUp>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { icon: ShieldCheck, title: "Category Exclusions", desc: "Block placement near sensitive topics, violence, or adult content.", color: "border-emerald-200 bg-emerald-50", icon_c: "bg-emerald-100 text-emerald-600" },
              { icon: MagnifyingGlass, title: "Domain Filtering", desc: "Deploy allowlists or blocklists to control exactly which publisher sites represent you.", color: "border-blue-200 bg-blue-50", icon_c: "bg-blue-100 text-blue-600" },
              { icon: Warning, title: "IVT Detection", desc: "Pre-bid integration with leading verification partners to filter out bots and invalid traffic.", color: "border-amber-200 bg-amber-50", icon_c: "bg-amber-100 text-amber-600" },
            ].map((item, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className={cn("h-full rounded-3xl border p-7 flex flex-col transition-all hover:shadow-md hover:-translate-y-0.5", item.color)}>
                  <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center mb-5", item.icon_c)}>
                    <item.icon className="w-6 h-6" weight="duotone" />
                  </div>
                  <h4 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-slate-500 text-sm">{item.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </Container>
      </PageSection>

      {/* S4: OPTIMIZATION */}
      <PageSection className="py-24 md:py-32 bg-slate-50 border-y border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-10 text-slate-900">Continuous optimization</h2>
              <div className="flex flex-col gap-8 relative border-l-2 border-slate-200 ml-4 pl-8">
                {[
                  { icon: Faders, title: "Audience Analysis", desc: "Discover which segments drive the best engagement and shift budget automatically.", color: "text-blue-600", dot: "bg-blue-500" },
                  { icon: ChartLineUp, title: "Bid Adjustment", desc: "Modify bids based on device, time of day, and audience value to ensure optimal ROAS.", color: "text-emerald-600", dot: "bg-emerald-500" },
                  { icon: ClockCounterClockwise, title: "Creative Rotation", desc: "A/B test different messaging against specific segments to find the perfect resonance.", color: "text-violet-600", dot: "bg-violet-500" },
                ].map((item, i) => (
                  <div key={i} className="relative">
                    <div className={cn("absolute -left-[41px] top-2 w-4 h-4 rounded-full ring-4 ring-white", item.dot)} />
                    <h4 className={cn("text-xl font-bold mb-2 flex items-center gap-2", item.color)}>
                      <item.icon className="w-5 h-5" /> {item.title}
                    </h4>
                    <p className="text-slate-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <div className="text-sm font-mono text-slate-400 mb-6 border-b border-slate-100 pb-4">Campaign Performance</div>
                <div className="flex flex-col gap-5">
                  {[
                    { label: "CPA (Cost per Action)", value: "$18.42", change: "↓ 24%", good: true },
                    { label: "Conversion Rate", value: "2.8%", change: "↑ 1.2%", good: true },
                    { label: "CTR", value: "0.45%", change: "↑ 0.15%", good: true },
                  ].map((row, i) => (
                    <div key={i} className="flex items-end justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100">
                      <div>
                        <div className="text-sm text-slate-400 mb-1">{row.label}</div>
                        <div className="text-3xl font-mono font-bold text-slate-900">{row.value}</div>
                      </div>
                      <div className="text-emerald-600 flex items-center gap-1 font-mono text-sm bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200">
                        {row.change}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </Container>
      </PageSection>

      {/* S5: FINAL CTA */}
      <PageSection className="py-24 md:py-32 gradient-mesh border-t border-slate-100">
        <Container>
          <CtaDuo advertiserText="Build Your Audience" />
        </Container>
      </PageSection>
    </main>
  );
}
