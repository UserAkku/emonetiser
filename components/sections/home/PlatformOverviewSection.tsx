"use client";

import { useRef, useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CheckCircle2 } from "lucide-react";

export function PlatformOverviewSection() {
  const [activeTab, setActiveTab] = useState("ssp");
  const containerRef = useRef<HTMLDivElement>(null);

  const publisherFeatures = [
    "Header Bidding Integration",
    "Real-time Yield Optimization",
    "Ad Quality & Malware Protection",
    "Transparent Auction Reporting"
  ];

  const advertiserFeatures = [
    "Direct Premium Inventory Access",
    "Omnichannel Campaign Management",
    "Advanced Audience Targeting",
    "Sub-second Bid Latency"
  ];

  return (
    <section ref={containerRef} className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading 
          label="The Platform" 
          headline="Two sides. One ecosystem." 
          subtext="We eliminated the intermediaries. Publishers get more yield, advertisers get better performance, and both get complete transparency."
          align="center"
          className="mb-16"
        />

        <Tabs defaultValue="ssp" onValueChange={setActiveTab} className="mx-auto max-w-4xl">
          <TabsList className="grid w-full grid-cols-2 h-14 bg-card border border-border p-1 rounded-xl mb-12">
            <TabsTrigger 
              value="ssp" 
              className="rounded-lg data-[state=active]:bg-[var(--color-brand-primary)]/10 data-[state=active]:text-[var(--color-brand-primary)]"
            >
              For Publishers (SSP)
            </TabsTrigger>
            <TabsTrigger 
              value="dsp" 
              className="rounded-lg data-[state=active]:bg-[var(--color-brand-secondary)]/10 data-[state=active]:text-[var(--color-brand-secondary)]"
            >
              For Advertisers (DSP)
            </TabsTrigger>
          </TabsList>

          {/* Connection Graphic */}
          <div className="relative mb-12 flex items-center justify-center py-12">
            <div className="absolute left-1/2 top-1/2 h-[2px] w-[80%] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[var(--color-brand-primary)]/20 via-border to-[var(--color-brand-secondary)]/20 -z-10" />
            <div className="flex h-24 w-24 flex-col items-center justify-center rounded-2xl border border-border bg-card shadow-2xl">
              <span className="font-mono text-sm tracking-widest text-muted-foreground uppercase">Exchange</span>
            </div>
            
            <div className={`absolute left-0 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border-4 border-background bg-[var(--color-brand-primary)] transition-opacity duration-500 ${activeTab === 'ssp' ? 'opacity-100' : 'opacity-20'}`} />
            
            <div className={`absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border-4 border-background bg-[var(--color-brand-secondary)] transition-opacity duration-500 ${activeTab === 'dsp' ? 'opacity-100' : 'opacity-20'}`} />
          </div>

          <TabsContent value="ssp" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid gap-8 sm:grid-cols-2">
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-medium text-[var(--color-brand-primary)]">Monetize every impression</h3>
                <p className="text-muted-foreground">Maximize your inventory value through simultaneous real-time auctions across premium demand partners.</p>
              </div>
              <div className="flex flex-col gap-3">
                {publisherFeatures.map((feat, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm font-medium">
                    <CheckCircle2 className="h-5 w-5 text-[var(--color-brand-primary)] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="dsp" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid gap-8 sm:grid-cols-2">
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-medium text-[var(--color-brand-secondary)]">Reach premium audiences</h3>
                <p className="text-muted-foreground">Execute high-performance campaigns directly on verified inventory without hidden reseller margins.</p>
              </div>
              <div className="flex flex-col gap-3">
                {advertiserFeatures.map((feat, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm font-medium">
                    <CheckCircle2 className="h-5 w-5 text-[var(--color-brand-secondary)] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>

      </div>
    </section>
  );
}
