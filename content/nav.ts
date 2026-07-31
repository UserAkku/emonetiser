import { 
  Globe, Smartphone, Tv, 
  BarChart2, Merge, Target, Crosshair, Star,
  Server, Box, TrendingUp, Users
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
  {
    path: "/publishers/ortb",
    label: "OpenRTB Integration",
    description: "Direct server-to-server connections for maximum yield.",
    icon: Server,
  },
  {
    path: "/publishers/sdk",
    label: "SDK Integration",
    description: "Lightweight, crash-free native app monetization.",
    icon: Box,
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
  {
    path: "/advertisers/campaigns",
    label: "Performance Campaigns",
    description: "Drive measurable ROI with smart bidding and attribution.",
    icon: TrendingUp,
  },
  {
    path: "/advertisers/affiliate-marketing",
    label: "Affiliate Marketing",
    description: "Scale your revenue by paying only for real conversions.",
    icon: Users,
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
