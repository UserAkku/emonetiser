"use client";

import { useState } from "react";
import { formatNumber } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Users } from "lucide-react";

export function AudienceBuilder() {
  const [geo, setGeo] = useState<string[]>(["us", "uk"]);
  const [device, setDevice] = useState<string[]>(["mobile", "ctv"]);
  const [interest, setInterest] = useState<string[]>(["tech"]);

  // Mock reach calculation
  const base = 250000000;
  const geoMult = geo.length === 0 ? 1 : geo.length * 0.4;
  const deviceMult = device.length === 0 ? 1 : device.length * 0.5;
  const interestMult = interest.length === 0 ? 1 : interest.length * 0.3;
  
  const estimatedReach = Math.floor(base * geoMult * deviceMult * interestMult);

  return (
    <div className="grid gap-8 rounded-2xl border border-[var(--color-brand-secondary)]/20 bg-card p-6 md:grid-cols-[1fr_300px]">
      <div className="flex flex-col gap-8">
        
        <div className="space-y-3">
          <label className="font-mono text-xs text-muted-foreground uppercase">Geography</label>
          <ToggleGroup value={geo} onValueChange={setGeo as any} className="justify-start flex-wrap">
            <ToggleGroupItem value="us" aria-label="Toggle US">United States</ToggleGroupItem>
            <ToggleGroupItem value="uk" aria-label="Toggle UK">United Kingdom</ToggleGroupItem>
            <ToggleGroupItem value="eu" aria-label="Toggle EU">Europe</ToggleGroupItem>
            <ToggleGroupItem value="apac" aria-label="Toggle APAC">APAC</ToggleGroupItem>
          </ToggleGroup>
        </div>

        <div className="space-y-3">
          <label className="font-mono text-xs text-muted-foreground uppercase">Device</label>
          <ToggleGroup value={device} onValueChange={setDevice as any} className="justify-start flex-wrap">
            <ToggleGroupItem value="mobile">Mobile App</ToggleGroupItem>
            <ToggleGroupItem value="web">Mobile Web</ToggleGroupItem>
            <ToggleGroupItem value="desktop">Desktop</ToggleGroupItem>
            <ToggleGroupItem value="ctv">Connected TV</ToggleGroupItem>
          </ToggleGroup>
        </div>

        <div className="space-y-3">
          <label className="font-mono text-xs text-muted-foreground uppercase">Interests</label>
          <ToggleGroup value={interest} onValueChange={setInterest as any} className="justify-start flex-wrap">
            <ToggleGroupItem value="tech">Technology</ToggleGroupItem>
            <ToggleGroupItem value="finance">Finance</ToggleGroupItem>
            <ToggleGroupItem value="travel">Travel</ToggleGroupItem>
            <ToggleGroupItem value="sports">Sports</ToggleGroupItem>
            <ToggleGroupItem value="gaming">Gaming</ToggleGroupItem>
          </ToggleGroup>
        </div>

      </div>

      <div className="flex flex-col items-center justify-center rounded-xl bg-[var(--color-brand-secondary)]/10 p-8 text-center border border-[var(--color-brand-secondary)]/20">
        <Badge variant="advertiser" className="mb-4">
          <span className="mr-2 h-2 w-2 rounded-full bg-[var(--color-brand-secondary)] animate-pulse" />
          Live Estimate
        </Badge>
        <Users className="mb-4 h-8 w-8 text-[var(--color-brand-secondary)]" />
        <div className="font-mono text-4xl font-semibold tracking-tighter text-foreground mb-2">
          {formatNumber(estimatedReach)}
        </div>
        <div className="text-sm text-muted-foreground">Available Monthly Impressions</div>
      </div>
    </div>
  );
}
