import { 
  Globe, Smartphone, Tv, 
  BarChart2, Merge, Target, Crosshair, Star 
} from "lucide-react";

export const publisherLinks = [
  {
    path: "/publishers/web-monetization",
    label: "Web Monetization",
    description: "Real-time header bidding and transparent yield optimization.",
    icon: Globe,
  },
  {
    path: "/publishers/app-monetization",
    label: "App Monetization",
    description: "A single lightweight SDK for iOS and Android.",
    icon: Smartphone,
  },
  {
    path: "/publishers/ctv-monetization",
    label: "CTV Monetization",
    description: "Server-side ad insertion and OpenRTB demand.",
    icon: Tv,
  },
];

export const advertiserLinks = [
  {
    path: "/advertisers/programmatic-advertising",
    label: "Programmatic Advertising",
    description: "Direct, transparent access to premium inventory.",
    icon: BarChart2,
  },
  {
    path: "/advertisers/omnichannel-advertising",
    label: "Omnichannel Advertising",
    description: "One coordinated campaign across Web, App, and CTV.",
    icon: Merge,
  },
  {
    path: "/advertisers/retargeting",
    label: "Retargeting",
    description: "Re-engage high-intent audiences with privacy controls.",
    icon: Target,
  },
  {
    path: "/advertisers/audience-targeting",
    label: "Audience Targeting",
    description: "Reach the right people, not just more impressions.",
    icon: Crosshair,
  },
  {
    path: "/advertisers/brand-awareness",
    label: "Brand Awareness",
    description: "Build lasting recall through premium placements.",
    icon: Star,
  },
];

export const companyLinks = [
  { path: "/company/about", label: "About", description: "We own the exchange." },
  { path: "/company/contact", label: "Contact", description: "Start the conversation." },
];

export const footerLegal = [
  { path: "#", label: "Privacy Policy" }, // PLACEHOLDER
  { path: "#", label: "Terms of Service" }, // PLACEHOLDER
  { path: "#", label: "Cookie Policy" }, // PLACEHOLDER
  { path: "#", label: "ads.txt" }, // PLACEHOLDER
  { path: "#", label: "app-ads.txt" }, // PLACEHOLDER
];

export const socialLinks = [
  { path: "#", label: "LinkedIn" }, // PLACEHOLDER
  { path: "#", label: "Twitter" }, // PLACEHOLDER
];
