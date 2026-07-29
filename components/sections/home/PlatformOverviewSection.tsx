"use client";

import { useRef, useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

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
    <section ref={containerRef} className="py-24 md:py-32 section-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading 
          label="The Platform" 
          headline="Two sides. One ecosystem." 
          subtext="We eliminated the intermediaries. Publishers get more yield, advertisers get better performance, and both get complete transparency."
          align="center"
          className="mb-16"
        />

        <Tabs defaultValue="ssp" onValueChange={setActiveTab} className="mx-auto max-w-4xl">
          <TabsList className="grid w-full grid-cols-2 h-16 bg-gray-100 p-1.5 rounded-2xl mb-12">
            <TabsTrigger 
              value="ssp" 
              className="rounded-xl font-bold text-lg transition-all data-[state=active]:bg-[var(--color-vibrant-violet)] data-[state=active]:text-white text-gray-500"
            >
              For Publishers (SSP)
            </TabsTrigger>
            <TabsTrigger 
              value="dsp" 
              className="rounded-xl font-bold text-lg transition-all data-[state=active]:bg-[var(--color-vibrant-cyan)] data-[state=active]:text-white text-gray-500"
            >
              For Advertisers (DSP)
            </TabsTrigger>
          </TabsList>

          {/* Connection Graphic */}
          <div className="relative mb-12 flex items-center justify-center py-10">
            <div className="absolute left-1/2 top-1/2 h-[4px] w-[80%] -translate-x-1/2 -translate-y-1/2 -z-10 bg-gray-200" />
            
            {/* Publisher dot */}
            <div
              className={cn(
                "absolute left-[10%] top-1/2 h-6 w-6 -translate-y-1/2 rounded-full transition-all duration-500 shadow-md",
                activeTab === 'ssp' ? "bg-[var(--color-vibrant-violet)] scale-125" : "bg-gray-300 scale-75"
              )}
            />

            {/* Center node */}
            <div className="flex h-28 w-28 flex-col items-center justify-center rounded-[2rem] bg-[#111111] text-white shadow-2xl relative z-10">
              <span className="font-mono text-sm tracking-[0.2em] font-bold uppercase">Exchange</span>
              <span className="text-[10px] font-mono opacity-60 mt-1">OpenRTB 2.6</span>
            </div>
            
            {/* Advertiser dot */}
            <div
              className={cn(
                "absolute right-[10%] top-1/2 h-6 w-6 -translate-y-1/2 rounded-full transition-all duration-500 shadow-md",
                activeTab === 'dsp' ? "bg-[var(--color-vibrant-cyan)] scale-125" : "bg-gray-300 scale-75"
              )}
            />
          </div>

          <TabsContent value="ssp" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bento-card bento-violet grid gap-8 sm:grid-cols-2 p-10 min-h-[300px]">
              <div className="flex flex-col gap-4">
                <h3 className="text-3xl font-display font-bold">Monetize every impression</h3>
                <p className="text-lg font-medium opacity-90 leading-relaxed">Maximize your inventory value through simultaneous real-time auctions across premium demand partners.</p>
              </div>
              <div className="flex flex-col gap-4">
                {publisherFeatures.map((feat, i) => (
                  <div key={i} className="flex items-center gap-3 font-bold text-lg">
                    <CheckCircle2 className="h-6 w-6 opacity-80" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="dsp" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bento-card bento-cyan grid gap-8 sm:grid-cols-2 p-10 min-h-[300px]">
              <div className="flex flex-col gap-4">
                <h3 className="text-3xl font-display font-bold">Reach premium audiences</h3>
                <p className="text-lg font-medium opacity-90 leading-relaxed">Execute high-performance campaigns directly on verified inventory without hidden reseller margins.</p>
              </div>
              <div className="flex flex-col gap-4">
                {advertiserFeatures.map((feat, i) => (
                  <div key={i} className="flex items-center gap-3 font-bold text-lg">
                    <CheckCircle2 className="h-6 w-6 opacity-80" />
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
