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
    <section ref={containerRef} className="py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading 
          label="The Platform" 
          headline="Two sides. One ecosystem." 
          subtext="We eliminated the intermediaries. Publishers get more yield, advertisers get better performance, and both get complete transparency."
          align="center"
          className="mb-16"
        />

        <Tabs defaultValue="ssp" onValueChange={setActiveTab} className="mx-auto max-w-4xl">
          <TabsList className="grid w-full grid-cols-2 h-14 bg-gray-50 border border-gray-200 p-1 rounded-xl mb-12">
            <TabsTrigger 
              value="ssp" 
              className="rounded-lg font-medium transition-all data-[state=active]:bg-white data-[state=active]:shadow-sm"
              style={{
                ...(activeTab === 'ssp' ? { color: "hsl(258,85%,62%)", borderBottom: "2px solid hsl(258,85%,62%)" } : { color: "hsl(220,12%,46%)" })
              }}
            >
              For Publishers (SSP)
            </TabsTrigger>
            <TabsTrigger 
              value="dsp" 
              className="rounded-lg font-medium transition-all data-[state=active]:bg-white data-[state=active]:shadow-sm"
              style={{
                ...(activeTab === 'dsp' ? { color: "hsl(175,75%,40%)", borderBottom: "2px solid hsl(175,75%,40%)" } : { color: "hsl(220,12%,46%)" })
              }}
            >
              For Advertisers (DSP)
            </TabsTrigger>
          </TabsList>

          {/* Connection Graphic */}
          <div className="relative mb-12 flex items-center justify-center py-10">
            <div
              className="absolute left-1/2 top-1/2 h-[2px] w-[80%] -translate-x-1/2 -translate-y-1/2 -z-10"
              style={{
                background: "linear-gradient(90deg, hsl(258,85%,62%,0.3), hsl(175,75%,40%,0.3))"
              }}
            />
            
            {/* Publisher dot */}
            <div
              className={`absolute left-[10%] top-1/2 h-5 w-5 -translate-y-1/2 rounded-full border-4 border-white shadow-md transition-all duration-500 ${activeTab === 'ssp' ? 'scale-125' : 'scale-75 opacity-30'}`}
              style={{ background: "hsl(258,85%,62%)", boxShadow: activeTab === 'ssp' ? "0 0 20px hsl(258,85%,62%,0.4)" : "none" }}
            />

            {/* Center node */}
            <div className="flex h-24 w-24 flex-col items-center justify-center rounded-2xl bg-white border border-gray-200 shadow-xl relative z-10">
              <div
                className="absolute inset-0 rounded-2xl opacity-30"
                style={{ background: "linear-gradient(135deg, hsl(258,85%,62%,0.1), hsl(175,75%,40%,0.1))" }}
              />
              <span className="relative font-mono text-xs tracking-widest text-muted-foreground uppercase">Exchange</span>
              <span className="relative text-[10px] font-mono text-muted-foreground/60 mt-0.5">OpenRTB 2.6</span>
            </div>
            
            {/* Advertiser dot */}
            <div
              className={`absolute right-[10%] top-1/2 h-5 w-5 -translate-y-1/2 rounded-full border-4 border-white shadow-md transition-all duration-500 ${activeTab === 'dsp' ? 'scale-125' : 'scale-75 opacity-30'}`}
              style={{ background: "hsl(175,75%,40%)", boxShadow: activeTab === 'dsp' ? "0 0 20px hsl(175,75%,40%,0.4)" : "none" }}
            />
          </div>

          <TabsContent value="ssp" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid gap-8 sm:grid-cols-2 p-8 rounded-2xl border" style={{ borderColor: "hsl(258,85%,62%,0.2)", background: "hsl(258,85%,62%,0.04)" }}>
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-semibold" style={{ color: "hsl(258,85%,55%)" }}>Monetize every impression</h3>
                <p className="text-muted-foreground leading-relaxed">Maximize your inventory value through simultaneous real-time auctions across premium demand partners.</p>
              </div>
              <div className="flex flex-col gap-3">
                {publisherFeatures.map((feat, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm font-medium">
                    <div className="h-5 w-5 rounded-full flex items-center justify-center shrink-0" style={{ background: "hsl(258,85%,62%,0.15)" }}>
                      <CheckCircle2 className="h-4 w-4" style={{ color: "hsl(258,85%,62%)" }} />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="dsp" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid gap-8 sm:grid-cols-2 p-8 rounded-2xl border" style={{ borderColor: "hsl(175,75%,40%,0.2)", background: "hsl(175,75%,40%,0.04)" }}>
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-semibold" style={{ color: "hsl(175,75%,36%)" }}>Reach premium audiences</h3>
                <p className="text-muted-foreground leading-relaxed">Execute high-performance campaigns directly on verified inventory without hidden reseller margins.</p>
              </div>
              <div className="flex flex-col gap-3">
                {advertiserFeatures.map((feat, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm font-medium">
                    <div className="h-5 w-5 rounded-full flex items-center justify-center shrink-0" style={{ background: "hsl(175,75%,40%,0.15)" }}>
                      <CheckCircle2 className="h-4 w-4" style={{ color: "hsl(175,75%,40%)" }} />
                    </div>
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
