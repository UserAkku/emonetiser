"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { publisherLinks, advertiserLinks, companyLinks } from "@/content/nav";

export function MobileNav() {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger render={<Button variant="ghost" size="icon" className="h-10 w-10" />}>
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </SheetTrigger>
        <SheetContent side="left" className="flex w-full flex-col p-6 sm:max-w-sm">
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
          <div className="flex items-center gap-2 mb-8">
            <img src="/emonetiser-symbol.webp" alt="Emonetiser Logo" className="h-7 w-7 object-contain" />
            <span className="font-display text-xl font-semibold tracking-tight">Emonetiser</span>
          </div>

          <div className="flex-1 overflow-auto pr-4">
            <Accordion className="w-full">
              <AccordionItem value="publishers" className="border-b-0">
                <AccordionTrigger className="text-base font-medium">For Publishers</AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-4 pl-4 pt-2">
                    {publisherLinks.map((link) => (
                      <SheetTrigger 
                        key={link.path}
                        render={<Link href={link.path} className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground" />}
                      >
                        <link.icon className="h-4 w-4 text-[var(--color-brand-primary)]" />
                        {link.label}
                      </SheetTrigger>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="advertisers" className="border-b-0">
                <AccordionTrigger className="text-base font-medium">For Advertisers</AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-4 pl-4 pt-2">
                    {advertiserLinks.map((link) => (
                      <SheetTrigger 
                        key={link.path}
                        render={<Link href={link.path} className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground" />}
                      >
                        <link.icon className="h-4 w-4 text-[var(--color-brand-secondary)]" />
                        {link.label}
                      </SheetTrigger>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="company" className="border-b-0">
                <AccordionTrigger className="text-base font-medium">Company</AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-4 pl-4 pt-2">
                    {companyLinks.map((link) => (
                      <SheetTrigger 
                        key={link.path}
                        render={<Link href={link.path} className="text-sm text-muted-foreground hover:text-foreground" />}
                      >
                        {link.label}
                      </SheetTrigger>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="mt-8 flex flex-col gap-4">
            <SheetTrigger render={<Link href="/company/contact" className={cn(buttonVariants({ variant: "default" }), "w-full")} />}>
              Get Started
            </SheetTrigger>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
