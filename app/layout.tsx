import type { Metadata } from "next";
import { fontDisplay, fontSans, fontMono } from "@/lib/fonts";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/sonner";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Emonetiser | The Unified SSP + DSP Programmatic Exchange",
  description: "One exchange, both sides of the trade. Real-time OpenRTB auctions across Web, App, and CTV - for publishers and advertisers.",
  openGraph: {
    title: "Emonetiser",
    description: "The Unified SSP + DSP Programmatic Exchange.",
    url: "https://emonetiser.com",
    siteName: "Emonetiser",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emonetiser",
    description: "The Unified SSP + DSP Programmatic Exchange.",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Emonetiser",
  url: "https://emonetiser.com",
  description: "The unified SSP + DSP programmatic exchange.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontSans.variable} ${fontDisplay.variable} ${fontMono.variable} h-full antialiased`}>
      <body suppressHydrationWarning className="min-h-full flex flex-col font-sans bg-white text-[#111111] overflow-x-hidden">
        <TooltipProvider>
          <Navbar />
          <main className="flex-1 flex flex-col pt-20">{children}</main>
          <Footer />
        </TooltipProvider>
        <Toaster />
        
        {/* Vercel Analytics */}
        <Analytics />
        
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        )}

        {/* Microsoft Clarity */}
        {process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID && (
          <Script id="microsoft-clarity" strategy="afterInteractive">
            {`
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID}");
            `}
          </Script>
        )}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}
