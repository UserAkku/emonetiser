"use client";

import Link from "next/link";
import { FadeUp, StaggerContainer, staggerItem } from "@/components/motion/Reveal";
import { GlassCard, GlassPanel, Eyebrow, MetricTile, PageSection, Container } from "@/components/ui/primitives";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, ChartBar, Funnel, Lightning, Eye, CurrencyDollar, Gauge, ShieldCheck, HandCoins, Speedometer, SquaresFour, AppWindow, Newspaper, PlayCircle, Sparkle, FrameCorners } from "@phosphor-icons/react";
import { DashboardMockup } from "@/components/visuals/DashboardMockup";
import { CtaDuo } from "@/components/shared/CtaDuo";
import { PremiumFormatCard } from "@/components/ui/premium-format-card";
import { MovingBorderButton } from "@/components/ui/moving-border-button";

export default function WebMonetizationPage() {
  return (
    <main className="flex flex-col w-full bg-background min-h-screen text-foreground">
      
      {/* S1 HERO */}
      <PageSection className="pt-32 pb-24 md:pt-40 md:pb-32 ">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <FadeUp className="flex flex-col items-start text-left">
              <Eyebrow className="text-[var(--color-brand-primary)] mb-6">Web Monetization</Eyebrow>
              <h1 className="text-5xl md:text-7xl font-display font-medium tracking-tight text-foreground mb-6">
                Every impression.<br />
                Full value.
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg mb-10 leading-relaxed">
                Unlock your true earning potential with advanced header bidding and real-time auctions that connect you to unlimited demand.
              </p>
              <MovingBorderButton href="/contact" className="mt-2 group">
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
      <PageSection className="py-24 md:py-32 bg-white">
        <Container>
          <FadeUp>
            <h2 className="text-3xl md:text-5xl font-display text-foreground mb-16 text-center">The waterfall problem</h2>
          </FadeUp>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <StaggerContainer className="space-y-6">
              <h3 className="text-xl font-medium text-muted-foreground mb-8 border-b border-border pb-4">Before</h3>
              {[
                { title: "Sequential Bidding", desc: "Passbacks waste time and lower your yield.", icon: Funnel },
                { title: "Capped Demand", desc: "Relying on a single network limits competition.", icon: HandCoins },
                { title: "No Transparency", desc: "Hidden fees and obscure auction dynamics.", icon: Eye },
              ].map((item, i) => (
                <div key={i} className="bento-card bento-cyan bg-red-50 border-red-100 p-6 rounded-2xl flex gap-4 items-start">
                  <div className="p-3 rounded-lg bg-red-100 text-red-600">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-foreground">{item.title}</h4>
                    <p className="text-muted-foreground text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </StaggerContainer>
            
            <StaggerContainer className="space-y-6">
              <h3 className="text-xl font-medium text-[var(--color-brand-primary)] mb-8 border-b border-[var(--color-brand-primary)]/20 pb-4">After</h3>
              {[
                { title: "Simultaneous Bidding", desc: "All partners bid at once for maximum yield.", icon: Lightning },
                { title: "Unlimited Demand", desc: "Access premium global demand partners seamlessly.", icon: CurrencyDollar },
                { title: "Real-Time Reporting", desc: "Full visibility into every auction and bid.", icon: ChartBar },
              ].map((item, i) => (
                <div key={i} className="bento-card bento-coral bg-[var(--color-brand-primary)]/5 border-[var(--color-brand-primary)]/20 p-6 rounded-2xl flex gap-4 items-start">
                  <div className="p-3 rounded-lg bg-[var(--color-brand-primary)]/10 text-[var(--color-brand-primary)]">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-foreground">{item.title}</h4>
                    <p className="text-muted-foreground text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </StaggerContainer>
          </div>
        </Container>
      </PageSection>

      {/* S3 PLATFORM FEATURES */}
      <PageSection className="py-24 md:py-32">
        <Container>
          <FadeUp>
            <h2 className="text-3xl md:text-5xl font-display text-foreground mb-16">Built for scale</h2>
          </FadeUp>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <GlassPanel className="bento-violet p-8 lg:col-span-2 lg:row-span-2 bg-gradient-to-br from-black/5 to-transparent flex flex-col justify-end min-h-[320px]">
              <Lightning className="w-10 h-10 text-[var(--color-brand-primary)] mb-6" />
              <h3 className="text-2xl font-medium text-foreground mb-2">Header Bidding</h3>
              <p className="text-muted-foreground">Advanced wrapper technology that executes auctions in the browser with zero latency impact.</p>
            </GlassPanel>
            <GlassPanel className="bento-cyan p-8">
              <ChartBar className="w-8 h-8 text-[var(--color-brand-accent)] mb-4" />
              <h3 className="text-xl font-medium text-foreground mb-2">Yield Optimization</h3>
              <p className="text-muted-foreground text-sm">Dynamic floor pricing based on machine learning.</p>
            </GlassPanel>
            <GlassPanel className="bento-coral p-8">
              <ShieldCheck className="w-8 h-8 text-[var(--color-brand-primary)] mb-4" />
              <h3 className="text-xl font-medium text-foreground mb-2">Fraud Prevention</h3>
              <p className="text-muted-foreground text-sm">Built-in invalid traffic filtering and brand safety.</p>
            </GlassPanel>
            <GlassPanel className="bento-yellow p-8 lg:col-span-2">
              <Speedometer className="w-8 h-8 text-[var(--color-brand-secondary)] mb-4" />
              <h3 className="text-xl font-medium text-foreground mb-2">Real-Time Reporting</h3>
              <p className="text-muted-foreground text-sm">Granular analytics down to the ad unit and UTM source level.</p>
            </GlassPanel>
            <GlassPanel className="bento-pink p-8">
              <CurrencyDollar className="w-8 h-8 text-[var(--color-brand-primary)] mb-4" />
              <h3 className="text-xl font-medium text-foreground mb-2">Floor Price Control</h3>
              <p className="text-muted-foreground text-sm">Set custom floors by geo, device, or channel.</p>
            </GlassPanel>
            <GlassPanel className="bento-violet p-8">
              <Gauge className="w-8 h-8 text-[var(--color-brand-accent)] mb-4" />
              <h3 className="text-xl font-medium text-foreground mb-2">Lazy Loading</h3>
              <p className="text-muted-foreground text-sm">Only request ads when they enter the viewport.</p>
            </GlassPanel>
          </StaggerContainer>
        </Container>
      </PageSection>

      {/* S4 INTEGRATION PROCESS */}
      <PageSection className="py-24 md:py-32 bg-white border-y border-border">
        <Container>
          <FadeUp>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <Eyebrow className="text-muted-foreground mb-4">Integration</Eyebrow>
                <h2 className="text-3xl md:text-5xl font-display text-foreground">Live in minutes</h2>
              </div>
            </div>
          </FadeUp>
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-gray-200 -translate-y-1/2 z-0 border-t border-dashed border-gray-300" />
            
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {[
                { step: "01", title: "Add Tag", desc: "Place our lightweight script in your site's header." },
                { step: "02", title: "Configure Floors", desc: "Set your target eCPMs and blocklists in the dashboard." },
                { step: "03", title: "Go Live", desc: "Start receiving bids from premium demand partners." },
                { step: "04", title: "Optimize", desc: "Our ML engine continuously tunes your setup for maximum yield." }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-start bg-background p-6 rounded-2xl border border-border relative">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-brand-primary)]/20 border border-[var(--color-brand-primary)]/50 text-[var(--color-brand-primary)] flex items-center justify-center font-mono font-medium mb-6">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-medium text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              ))}
            </StaggerContainer>
          </div>
        </Container>
      </PageSection>

      {/* S5 AD FORMATS */}
      <PageSection className="py-24 md:py-32">
        <Container>
          <FadeUp className="mb-16">
            <h2 className="text-3xl md:text-5xl font-display text-foreground">Supported Formats</h2>
          </FadeUp>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-6 gap-6">
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
      <PageSection className="py-24 md:py-32 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <MetricTile value="+45%" label="Revenue Uplift" />
              <MetricTile value="<20ms" label="Latency" />
              <MetricTile value="95%+" label="Fill Rate" />
              <MetricTile value="100%" label="ads.txt Verified" />
            </div>
            <FadeUp>
              <GlassCard className="p-10 relative">
                <div className="absolute top-8 left-8 text-6xl text-[var(--color-brand-primary)]/20 font-serif leading-none">&quot;</div>
                <div className="relative z-10">
                  <p className="text-xl md:text-2xl text-foreground font-medium leading-relaxed mb-8 pt-4">
                    Switching to Emonetiser&apos;s header bidding wrapper was seamless. Our eCPMs jumped by 40% in the first month, and the latency improvements keep our core web vitals in the green.
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[var(--color-brand-primary)] to-[var(--color-brand-secondary)]" />
                    <div>
                      <div className="text-foreground font-medium">Sarah Jenkins</div>
                      <div className="text-muted-foreground text-sm">Head of AdOps, TechDaily</div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </FadeUp>
          </div>
        </Container>
      </PageSection>

      {/* S7 FINAL CTA */}
      <PageSection className="py-24 md:py-32  border-t border-border">
        <Container>
          <CtaDuo publisherText="Start Monetizing" />
        </Container>
      </PageSection>

    </main>
  );
}
