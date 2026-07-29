"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { FadeUp, StaggerContainer, staggerItem } from "@/components/motion/Reveal";
import { GlassCard, GlassPanel, MetricTile, PageSection, Container } from "@/components/ui/primitives";
import { buttonVariants } from "@/components/ui/button";
import { CtaDuo } from "@/components/shared/CtaDuo";
import { MovingBorderButton } from "@/components/ui/moving-border-button";
import { cn } from "@/lib/utils";
import { 
  ArrowRight, 
  Users, 
  Devices, 
  ImageSquare, 
  Clock, 
  SlidersHorizontal, 
  HardDrives,
  ShieldCheck,
  Browser,
  GlobeHemisphereWest,
  User,
  Database,
  PaperPlaneRight
} from "@phosphor-icons/react";
import { RetargetingBeam } from "@/components/visuals/RetargetingBeam";

export default function RetargetingPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* S1: HERO */}
      <PageSection className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32 ">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeUp>
              <div className="flex flex-col items-start text-left">
                <h1 className="text-5xl md:text-7xl font-display font-medium tracking-tight text-foreground mb-6">
                  Bring them back.<br />
                  Convert them.
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg mb-10 leading-relaxed font-sans">
                  Re-engage your highest-intent audiences across Web, App, and Connected TV with privacy-first retargeting.
                </p>
                <MovingBorderButton href="/contact" className="mt-2 group">
                  Start Retargeting
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 ml-2" />
                </MovingBorderButton>
              </div>
            </FadeUp>
            <FadeUp delay={0.2} className="hidden lg:block">
              {/* Abstract decorative element to replace eyebrow budget */}
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 border border-[var(--color-brand-secondary)]/20 rounded-full animate-[spin_20s_linear_infinite] border-dashed" />
                <div className="absolute inset-8 border border-[var(--color-brand-primary)]/30 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bento-card bento-pink w-32 h-32 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(139,92,246,0.2)]">
                    <Users className="w-12 h-12 text-[var(--color-brand-secondary)]" />
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </Container>
      </PageSection>

      {/* S2: HOW RETARGETING WORKS */}
      <PageSection className="py-24 md:py-32 bg-white">
        <Container>
          <FadeUp>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-16 text-center">The retargeting flow</h2>
          </FadeUp>
          
          <FadeUp delay={0.1}>
            <RetargetingBeam />
          </FadeUp>
        </Container>
      </PageSection>

      {/* S3: CAPABILITIES */}
      <PageSection className="py-24 md:py-32">
        <Container>
          <FadeUp>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-12">Precision toolset</h2>
          </FadeUp>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <motion.div variants={staggerItem} className="md:col-span-2 lg:col-span-2">
              <GlassPanel className="bento-violet h-full p-8 group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl bg-gradient-to-br from-[var(--color-brand-secondary)]/10 to-transparent border border-border hover:border-[var(--color-brand-secondary)]/30">
                <ImageSquare className="w-10 h-10 text-[var(--color-brand-secondary)] mb-6 transition-transform group-hover:scale-110" />
                <h3 className="text-2xl font-medium text-foreground mb-3">Dynamic Creatives</h3>
                <p className="text-muted-foreground font-sans leading-relaxed">Serve personalized product recommendations and customized offers based on exact browsing history to maximize conversion rates.</p>
              </GlassPanel>
            </motion.div>
            
            <motion.div variants={staggerItem} className="md:col-span-1 lg:col-span-2">
              <GlassPanel className="bento-cyan h-full p-8 group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl bg-gradient-to-br from-[var(--color-brand-primary)]/10 to-transparent border border-border hover:border-[var(--color-brand-primary)]/30">
                <Users className="w-10 h-10 text-[var(--color-brand-primary)] mb-6 transition-transform group-hover:scale-110" />
                <h3 className="text-2xl font-medium text-foreground mb-3">Audience Segmentation</h3>
                <p className="text-muted-foreground font-sans leading-relaxed">Build highly specific groups based on cart abandoners, recent purchasers, or high-value frequent visitors.</p>
              </GlassPanel>
            </motion.div>
            
            <motion.div variants={staggerItem}>
              <GlassPanel className="bento-coral h-full p-6 group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl bg-gradient-to-br from-black/10 to-transparent border border-border hover:border-border">
                <Devices className="w-8 h-8 text-foreground/80 mb-6 transition-transform group-hover:scale-110" />
                <h3 className="text-lg font-medium text-foreground mb-2">Cross-Device Targeting</h3>
                <p className="text-muted-foreground text-sm font-sans leading-relaxed">Reach the same user across desktop, mobile, and CTV environments.</p>
              </GlassPanel>
            </motion.div>
            
            <motion.div variants={staggerItem}>
              <GlassPanel className="bento-yellow h-full p-6 group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl bg-gradient-to-br from-black/10 to-transparent border border-border hover:border-border">
                <Clock className="w-8 h-8 text-foreground/80 mb-6 transition-transform group-hover:scale-110" />
                <h3 className="text-lg font-medium text-foreground mb-2">Lookback Windows</h3>
                <p className="text-muted-foreground text-sm font-sans leading-relaxed">Customizable recency rules to target users while intent is highest.</p>
              </GlassPanel>
            </motion.div>
            
            <motion.div variants={staggerItem}>
              <GlassPanel className="bento-pink h-full p-6 group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl bg-gradient-to-br from-black/10 to-transparent border border-border hover:border-border">
                <SlidersHorizontal className="w-8 h-8 text-foreground/80 mb-6 transition-transform group-hover:scale-110" />
                <h3 className="text-lg font-medium text-foreground mb-2">Frequency Management</h3>
                <p className="text-muted-foreground text-sm font-sans leading-relaxed">Strict controls to avoid burning out your audience with repetitive ads.</p>
              </GlassPanel>
            </motion.div>
            
            <motion.div variants={staggerItem}>
              <GlassPanel className="bento-violet h-full p-6 group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl bg-gradient-to-br from-black/10 to-transparent border border-border hover:border-border">
                <HardDrives className="w-8 h-8 text-foreground/80 mb-6 transition-transform group-hover:scale-110" />
                <h3 className="text-lg font-medium text-foreground mb-2">Server-Side Events</h3>
                <p className="text-muted-foreground text-sm font-sans leading-relaxed">Robust tracking APIs that don&apos;t rely solely on fragile browser cookies.</p>
              </GlassPanel>
            </motion.div>
          </StaggerContainer>
        </Container>
      </PageSection>

      {/* S4: PRIVACY & COMPLIANCE */}
      <PageSection className="py-24 md:py-32 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <div className="flex flex-col gap-4">
                <GlassPanel className="bento-cyan p-4 flex items-center gap-4 border-[var(--color-brand-accent)]/20">
                  <div className="p-2 bg-[var(--color-brand-accent)]/10 rounded-full text-[var(--color-brand-accent)]">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div className="font-bold">GDPR Compliant</div>
                </GlassPanel>
                <GlassPanel className="bento-coral p-4 flex items-center gap-4 border-[var(--color-brand-accent)]/20">
                  <div className="p-2 bg-[var(--color-brand-accent)]/10 rounded-full text-[var(--color-brand-accent)]">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div className="font-bold">CCPA Ready</div>
                </GlassPanel>
                <GlassPanel className="bento-yellow p-4 flex items-center gap-4 border-[var(--color-brand-accent)]/20">
                  <div className="p-2 bg-[var(--color-brand-accent)]/10 rounded-full text-[var(--color-brand-accent)]">
                    <GlobeHemisphereWest className="w-6 h-6" />
                  </div>
                  <div className="font-bold">Cookieless Future-Proof</div>
                </GlassPanel>
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <h2 className="font-display text-4xl font-bold mb-6">Privacy-first retargeting</h2>
              <p className="text-lg text-foreground/60 font-sans mb-6">
                The regulatory landscape is shifting, but re-engaging your audience shouldn&apos;t carry legal risks. Our platform is built from the ground up to respect user consent signals strictly.
              </p>
              <p className="text-lg text-foreground/60 font-sans">
                By combining authenticated traffic, universal IDs, and server-to-server integrations, we ensure your retargeting campaigns maintain high match rates without violating privacy norms.
              </p>
            </FadeUp>
          </div>
        </Container>
      </PageSection>

      {/* S5: PERFORMANCE */}
      <PageSection className="py-24 md:py-32">
        <Container>
          <FadeUp>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-12 text-center">Proven impact</h2>
          </FadeUp>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <motion.div variants={staggerItem}>
              <MetricTile value="3.2×" label="CVR Lift" className="border-t-[var(--color-brand-secondary)]/50" />
            </motion.div>
            <motion.div variants={staggerItem}>
              <MetricTile value="40%" label="Lower CPA" className="border-t-[var(--color-brand-primary)]/50" />
            </motion.div>
            <motion.div variants={staggerItem}>
              <MetricTile value="92%" label="Match Rate" className="border-t-[var(--color-brand-secondary)]/50" />
            </motion.div>
            <motion.div variants={staggerItem}>
              <MetricTile value="7-Day" label="Lookback Default" className="border-t-[var(--color-brand-primary)]/50" />
            </motion.div>
          </StaggerContainer>
        </Container>
      </PageSection>

      {/* S6: FINAL CTA */}
      <PageSection className="py-24 md:py-32  border-t border-border">
        <Container>
          <CtaDuo advertiserText="Build Retargeting Audiences" />
        </Container>
      </PageSection>
    </div>
  );
}
