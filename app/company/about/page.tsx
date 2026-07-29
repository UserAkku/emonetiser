"use client";

import Link from "next/link";
import { FadeUp, StaggerContainer, staggerItem } from "@/components/motion/Reveal";
import { Eyebrow, PageSection, Container } from "@/components/ui/primitives";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { ArrowRight, Graph, Target, ShieldCheck, ShareNetwork, ChartLineUp, AppWindow, Globe, FileText, Certificate, HandsClapping, Lightbulb, Eyeglasses, Users } from "@phosphor-icons/react";

export default function AboutPage() {
  return (
    <main className="bg-white text-foreground min-h-screen">
      {/* S1: HERO + MISSION */}
      <PageSection className="pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden relative gradient-mesh">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <FadeUp>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-medium tracking-tight text-slate-900 mb-6">
                We own<br />the exchange.
              </h1>
              <p className="text-lg md:text-xl text-slate-500 max-w-xl mb-10 leading-relaxed">
                Founded to eliminate the middlemen - connecting publishers and advertisers through one transparent, real-time auction infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#what-we-built" className="inline-flex h-12 items-center justify-center rounded-full bg-slate-900 px-8 text-sm font-semibold text-white transition-colors hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 gap-2">
                  Meet the Platform <ArrowRight weight="bold" />
                </Link>
                <Link href="/company/contact" className="inline-flex h-12 items-center justify-center rounded-full border border-slate-200 bg-white px-8 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-50 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-200 focus:ring-offset-2">
                  Get in Touch
                </Link>
              </div>
            </FadeUp>
            <FadeUp delay={0.2} className="relative h-[400px] lg:h-[500px] flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-violet-100 to-emerald-50 rounded-full blur-3xl opacity-50" />
              <svg viewBox="0 0 400 400" className="w-full h-full max-w-[400px] relative z-10">
                <defs>
                  <linearGradient id="blue-violet" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#10b981" />
                  </linearGradient>
                </defs>
                <circle cx="200" cy="200" r="180" fill="none" stroke="#e2e8f0" strokeWidth="1" />
                <circle cx="200" cy="200" r="120" fill="none" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4 4" />
                <circle cx="200" cy="200" r="60" fill="none" stroke="#94a3b8" strokeWidth="1" />
                
                <circle cx="200" cy="200" r="10" fill="url(#blue-violet)" className="shadow-xl" />
                <circle cx="380" cy="200" r="8" fill="#8b5cf6" />
                <circle cx="20" cy="200" r="8" fill="#10b981" />
                <circle cx="200" cy="20" r="8" fill="#3b82f6" />
                <circle cx="200" cy="380" r="8" fill="#f59e0b" />
                
                <path d="M 200 20 L 200 200 M 20 200 L 200 200 M 380 200 L 200 200 M 200 380 L 200 200" stroke="url(#blue-violet)" strokeWidth="2" strokeDasharray="4 4" opacity="0.6" />
              </svg>
            </FadeUp>
          </div>
        </Container>
      </PageSection>

      {/* S2: OUR STORY */}
      <PageSection className="py-24 md:py-32 bg-slate-50 border-y border-slate-100">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <FadeUp>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-8">
                The problem we set out to solve.
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  For too long, the programmatic ecosystem has been characterized by opacity, fragmented supply chains, and excessive margin taxes. Middlemen stacked upon middlemen eroded publisher yield and diminished advertiser return on ad spend.
                </p>
                <p>
                  We believed there had to be a better way. By owning the entire infrastructure - from the SSP that integrates directly with publishers to the DSP that ingests demand - we eliminated the hops, removed the hidden fees, and created a single, unified auction environment where value is maximized for both sides.
                </p>
              </div>
            </FadeUp>
            
            <StaggerContainer className="space-y-4">
              {[
                { year: "2019", title: "The Problem", desc: "Fragmented exchanges causing up to 40% value loss in the supply path.", color: "border-rose-200 bg-rose-50 border-l-4 border-l-rose-500" },
                { year: "2021", title: "We Built It", desc: "Launched our unified infrastructure handling both supply and demand directly.", color: "border-blue-200 bg-blue-50 border-l-4 border-l-blue-500" },
                { year: "2022", title: "Google Certified", desc: "Achieved official certification, validating our direct integration capabilities and scale.", color: "border-emerald-200 bg-emerald-50 border-l-4 border-l-emerald-500" },
              ].map((item, i) => (
                <motion.div key={i} variants={staggerItem}>
                  <div className={cn("p-6 rounded-r-2xl border-y border-r transition-all hover:shadow-md hover:translate-x-1", item.color)}>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-mono font-bold px-2 py-1 bg-white rounded-md shadow-sm">{item.year}</span>
                      <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                    </div>
                    <p className="text-slate-600 pl-1">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </StaggerContainer>
          </div>
        </Container>
      </PageSection>

      {/* S3: WHAT WE BUILT */}
      <PageSection id="what-we-built" className="py-24 md:py-32 bg-white">
        <Container>
          <FadeUp className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900">Our Infrastructure</h2>
          </FadeUp>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <FadeUp>
              <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-10 h-full flex flex-col transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center shadow-inner">
                    <AppWindow size={32} className="text-emerald-600" weight="duotone" />
                  </div>
                  <h3 className="text-3xl font-display font-bold text-slate-900">SSP for Publishers</h3>
                </div>
                <ul className="space-y-8 flex-1">
                  <li className="flex gap-4">
                    <ChartLineUp size={28} className="text-emerald-500 shrink-0 mt-0.5" weight="duotone" />
                    <div>
                      <h4 className="text-slate-900 font-semibold mb-1.5 text-lg">Direct Integrations</h4>
                      <p className="text-slate-600 leading-relaxed">Prebid, OpenBidding, and direct VAST/VPAID tags with zero intermediaries.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Target size={28} className="text-emerald-500 shrink-0 mt-0.5" weight="duotone" />
                    <div>
                      <h4 className="text-slate-900 font-semibold mb-1.5 text-lg">Yield Optimization</h4>
                      <p className="text-slate-600 leading-relaxed">Dynamic flooring and real-time auction mechanics to maximize eCPM.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <ShieldCheck size={28} className="text-emerald-500 shrink-0 mt-0.5" weight="duotone" />
                    <div>
                      <h4 className="text-slate-900 font-semibold mb-1.5 text-lg">Brand Safety</h4>
                      <p className="text-slate-600 leading-relaxed">Automated quality scanning ensuring premium ad experiences.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </FadeUp>
            
            <FadeUp delay={0.2}>
              <div className="rounded-3xl border border-blue-200 bg-blue-50 p-10 h-full flex flex-col transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center shadow-inner">
                    <Globe size={32} className="text-blue-600" weight="duotone" />
                  </div>
                  <h3 className="text-3xl font-display font-bold text-slate-900">DSP for Advertisers</h3>
                </div>
                <ul className="space-y-8 flex-1">
                  <li className="flex gap-4">
                    <ShareNetwork size={28} className="text-blue-500 shrink-0 mt-0.5" weight="duotone" />
                    <div>
                      <h4 className="text-slate-900 font-semibold mb-1.5 text-lg">Premium Supply Access</h4>
                      <p className="text-slate-600 leading-relaxed">Direct path to our proprietary O&O properties and premium publisher network.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Graph size={28} className="text-blue-500 shrink-0 mt-0.5" weight="duotone" />
                    <div>
                      <h4 className="text-slate-900 font-semibold mb-1.5 text-lg">Algorithmic Bidding</h4>
                      <p className="text-slate-600 leading-relaxed">Machine-learning driven bid optimization to hit strict ROAS and CPA goals.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <FileText size={28} className="text-blue-500 shrink-0 mt-0.5" weight="duotone" />
                    <div>
                      <h4 className="text-slate-900 font-semibold mb-1.5 text-lg">Transparent Reporting</h4>
                      <p className="text-slate-600 leading-relaxed">Log-level data access and full visibility into exactly where your budget goes.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </FadeUp>
          </div>
          <FadeUp delay={0.4} className="text-center">
            <div className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-slate-50 border border-slate-200 text-slate-700 font-semibold shadow-sm">
              <ShareNetwork size={20} className="mr-3 text-slate-400" />
              Unified Exchange Architecture
            </div>
          </FadeUp>
        </Container>
      </PageSection>

      {/* S4: CERTIFICATIONS */}
      <PageSection className="py-24 md:py-32 bg-slate-50 border-y border-slate-100">
        <Container>
          <FadeUp className="mb-12">
            <Eyebrow accent="blue">Industry Standards</Eyebrow>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mt-4">Verified & Certified</h2>
          </FadeUp>
          
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Certificate, title: "Google CPP", year: "Issued 2022", desc: "Certified Publishing Partner for scaling and monetizing apps & websites.", color: "border-amber-200 bg-amber-50" },
              { icon: ShieldCheck, title: "IAB Tech Lab", year: "Member", desc: "Committed to developing and implementing global technical standards.", color: "border-blue-200 bg-blue-50" },
              { icon: FileText, title: "ads.txt Compliant", year: "Continuous", desc: "Full support for authorized digital sellers for transparent supply chains.", color: "border-emerald-200 bg-emerald-50" },
              { icon: ShareNetwork, title: "OpenRTB 2.6", year: "Supported", desc: "Implementing the latest real-time bidding protocols for efficiency.", color: "border-violet-200 bg-violet-50" },
            ].map((cert, i) => (
              <motion.div key={i} variants={staggerItem}>
                <div className={cn("rounded-3xl border p-6 h-full flex flex-col transition-all hover:-translate-y-1 hover:shadow-md", cert.color)}>
                  <div className="w-12 h-12 rounded-xl bg-white/60 flex items-center justify-center text-slate-700 mb-6 shadow-sm">
                    <cert.icon size={24} weight="duotone" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{cert.title}</h3>
                  <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-slate-500 mb-4 bg-white/60 px-2 py-1 rounded inline-block w-fit">{cert.year}</span>
                  <p className="text-sm text-slate-600 mt-auto leading-relaxed">{cert.desc}</p>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </Container>
      </PageSection>

      {/* S5: VALUES */}
      <PageSection className="py-24 md:py-32 bg-white">
        <Container>
          <FadeUp className="mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900">Core Values</h2>
          </FadeUp>
          
          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            <motion.div variants={staggerItem} className="md:col-span-2">
              <div className="rounded-3xl border border-rose-200 bg-rose-50 p-10 h-full flex flex-col justify-end min-h-[280px] transition-all hover:shadow-md">
                <Eyeglasses size={40} className="text-rose-500 mb-6" weight="duotone" />
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Transparency</h3>
                <p className="text-slate-600 text-lg leading-relaxed">An open auction environment with no black-box mechanics, giving you complete visibility into every transaction.</p>
              </div>
            </motion.div>
            
            <motion.div variants={staggerItem}>
              <div className="rounded-3xl border border-violet-200 bg-violet-50 p-8 h-full flex flex-col justify-end min-h-[280px] transition-all hover:shadow-md">
                <HandsClapping size={40} className="text-violet-500 mb-6" weight="duotone" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">Ownership</h3>
                <p className="text-slate-600">We build and maintain our infrastructure entirely in-house for maximum control.</p>
              </div>
            </motion.div>
            
            <motion.div variants={staggerItem}>
              <div className="rounded-3xl border border-blue-200 bg-blue-50 p-8 h-full flex flex-col justify-end min-h-[280px] transition-all hover:shadow-md">
                <Lightbulb size={40} className="text-blue-500 mb-6" weight="duotone" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">Innovation</h3>
                <p className="text-slate-600">Constant optimization and rapid deployment of new AdTech capabilities.</p>
              </div>
            </motion.div>
            
            <motion.div variants={staggerItem} className="md:col-span-2">
              <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-10 h-full flex flex-col justify-end min-h-[280px] transition-all hover:shadow-md">
                <ChartLineUp size={40} className="text-emerald-500 mb-6" weight="duotone" />
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Accountability</h3>
                <p className="text-slate-600 text-lg leading-relaxed">Clear, granular reporting that holds our performance accountable to your bottom line.</p>
              </div>
            </motion.div>
          </StaggerContainer>
        </Container>
      </PageSection>

      {/* S6: LEADERSHIP */}
      <PageSection className="py-24 md:py-32 bg-slate-50 border-t border-slate-100">
        <Container>
          <FadeUp className="mb-12 text-center">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900">Leadership Team</h2>
          </FadeUp>
          
          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {[
              { role: "Founder & CEO", init: "CEO", tag: "AdTech Veteran", desc: "15+ years in programmatic advertising, building sustainable yield strategies.", color: "border-blue-200 bg-blue-50 text-blue-700" },
              { role: "Chief Technology Officer", init: "CTO", tag: "OpenRTB Specialist", desc: "Architect behind our unified exchange, specializing in high-throughput infrastructure.", color: "border-slate-200 bg-white text-slate-700" },
              { role: "VP Publisher Success", init: "VP", tag: "Yield Expert", desc: "Dedicated to maximizing publisher revenue through advanced optimization techniques.", color: "border-emerald-200 bg-emerald-50 text-emerald-700" },
            ].map((leader, i) => (
              <motion.div key={i} variants={staggerItem}>
                <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center h-full transition-all hover:-translate-y-1 hover:shadow-lg">
                  <div className={cn("w-20 h-20 rounded-3xl flex items-center justify-center text-2xl font-display font-bold mx-auto mb-6 border", leader.color)}>
                    {leader.init}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{leader.role}</h3>
                  <div className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs font-mono font-bold uppercase tracking-widest rounded-md mb-6">
                    {leader.tag}
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">{leader.desc}</p>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </Container>
      </PageSection>

      {/* S7: FINAL CTA */}
      <PageSection className="py-24 md:py-32 bg-white border-t border-slate-100">
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            <FadeUp>
              <Link href="/publishers/web-monetization" className="block h-full transition-all hover:-translate-y-2 group">
                <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-12 h-full text-center group-hover:shadow-xl transition-all">
                  <div className="w-20 h-20 rounded-3xl bg-emerald-100 flex items-center justify-center mx-auto mb-8 shadow-sm">
                    <AppWindow size={40} className="text-emerald-600" weight="duotone" />
                  </div>
                  <h3 className="text-4xl font-display font-bold text-slate-900 mb-4">For Publishers</h3>
                  <p className="text-slate-600 mb-10 max-w-sm mx-auto text-lg leading-relaxed">Maximize your inventory value with our direct SSP integration.</p>
                  <span className="inline-flex h-12 items-center justify-center rounded-full bg-emerald-600 px-8 text-sm font-semibold text-white transition-colors hover:bg-emerald-700 gap-2 shadow-sm">
                    Start Monetizing <ArrowRight weight="bold" className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </FadeUp>
            
            <FadeUp delay={0.1}>
              <Link href="/advertisers/programmatic-advertising" className="block h-full transition-all hover:-translate-y-2 group">
                <div className="rounded-3xl border border-blue-200 bg-blue-50 p-12 h-full text-center group-hover:shadow-xl transition-all">
                  <div className="w-20 h-20 rounded-3xl bg-blue-100 flex items-center justify-center mx-auto mb-8 shadow-sm">
                    <Globe size={40} className="text-blue-600" weight="duotone" />
                  </div>
                  <h3 className="text-4xl font-display font-bold text-slate-900 mb-4">For Advertisers</h3>
                  <p className="text-slate-600 mb-10 max-w-sm mx-auto text-lg leading-relaxed">Access premium, brand-safe inventory at scale through our DSP.</p>
                  <span className="inline-flex h-12 items-center justify-center rounded-full bg-blue-600 px-8 text-sm font-semibold text-white transition-colors hover:bg-blue-700 gap-2 shadow-sm">
                    Start Scaling <ArrowRight weight="bold" className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </FadeUp>
          </div>
        </Container>
      </PageSection>
    </main>
  );
}
