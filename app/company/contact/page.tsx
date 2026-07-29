"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { FadeUp, StaggerContainer, staggerItem } from "@/components/motion/Reveal";
import { GlassCard, GlassPanel, PageSection, Container } from "@/components/ui/primitives";
import { buttonVariants, Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, Envelope, Clock, ChatCircle, CaretDown, BookOpen, Terminal, Rocket, Briefcase } from "@phosphor-icons/react/dist/ssr";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(2, "Company is required"),
  role: z.string().min(1, "Please select a role"),
  volume: z.string().min(1, "Please provide an estimate"),
  message: z.string().min(10, "Please provide more details in your message")
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      role: "",
      volume: "",
      message: ""
    }
  });

  const role = form.watch("role");
  
  const getVolumePlaceholder = () => {
    if (role === "advertiser") return "e.g., $10k+ Monthly Spend";
    if (role === "publisher") return "e.g., 5M+ Monthly Impressions";
    return "Monthly Volume/Spend Estimate";
  };

  const getSubmitLabel = () => {
    if (isSubmitting) return "Sending...";
    if (role === "publisher") return "Connect with Publisher Team";
    if (role === "advertiser") return "Connect with Demand Desk";
    return "Send Message";
  };

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          subject: `New Inquiry from ${data.name} - ${data.company}`,
          from_name: data.name,
          ...data,
        }),
      });
      const result = await response.json();
      
      if (result.success) {
        toast.success("Message sent successfully!", {
          description: "Our team will be in touch within 1 business day."
        });
        form.reset();
      } else {
        toast.error("Failed to send message", {
          description: result.message || "Please try again later or contact us directly."
        });
      }
    } catch (error) {
      toast.error("Network error", {
        description: "Please check your internet connection and try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqs = [
    { q: "How long does publisher onboarding take?", a: "Typically, technical integration takes 1-3 business days depending on your setup (Prebid, direct tag, etc.), followed by a 24-48 hour approval process." },
    { q: "What is the minimum traffic requirement?", a: "We generally require publishers to have a minimum of 1 million monthly pageviews to ensure optimal liquidity in the auction, though exceptions are made for highly niche, premium audiences." },
    { q: "Which ad formats are supported?", a: "We support standard display (banners), high-impact formats, outstream and instream video (VAST/VPAID), and native advertising across both desktop and mobile web." },
    { q: "How does billing work?", a: "Publishers are paid on a Net-60 basis standard, with options for Net-30 for qualifying partners. Advertisers typically operate on prepaid or monthly invoicing subject to credit approval." },
    { q: "Is the platform GDPR compliant?", a: "Yes. We fully support the IAB TCF 2.2 framework and strictly enforce privacy regulations including GDPR and CCPA across our infrastructure." },
    { q: "What reporting is available?", a: "Both publishers and advertisers get access to real-time, granular reporting dashboards with dimensional breakdowns. Log-level data is also available for enterprise partners." }
  ];

  return (
    <main className="flex-1">
      {/* S1: HERO */}
      <PageSection className="pt-32 pb-16 md:pt-48 md:pb-24">
        <Container>
          <FadeUp>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-medium tracking-tight text-white mb-6">
              Let's talk.
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-xl">
              Publisher or advertiser - our specialists are ready to help you get started.
            </p>
          </FadeUp>
        </Container>
      </PageSection>

      {/* S2: CONTACT FORM */}
      <PageSection className="pb-24 md:pb-32 relative z-10">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            <FadeUp className="lg:col-span-2">
              <GlassPanel className="p-8 md:p-12 border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-brand-primary)]/5 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--color-brand-secondary)]/5 rounded-full blur-[100px] pointer-events-none" />
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 relative z-10">
                    <div className="grid md:grid-cols-2 gap-8">
                      <FormField control={form.control} name="name" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/80 font-medium">Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Jane Doe" className="bg-black/40 border-white/5 text-white placeholder:text-white/20 rounded-xl focus-visible:ring-1 focus-visible:ring-[var(--color-brand-primary)]/50 focus-visible:border-[var(--color-brand-primary)]/50 h-14 px-4 transition-all" {...field} />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="email" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/80 font-medium">Work Email</FormLabel>
                          <FormControl>
                            <Input placeholder="jane@company.com" className="bg-black/40 border-white/5 text-white placeholder:text-white/20 rounded-xl focus-visible:ring-1 focus-visible:ring-[var(--color-brand-primary)]/50 focus-visible:border-[var(--color-brand-primary)]/50 h-14 px-4 transition-all" {...field} />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )} />
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <FormField control={form.control} name="company" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/80 font-medium">Company</FormLabel>
                          <FormControl>
                            <Input placeholder="Company Name" className="bg-black/40 border-white/5 text-white placeholder:text-white/20 rounded-xl focus-visible:ring-1 focus-visible:ring-[var(--color-brand-primary)]/50 focus-visible:border-[var(--color-brand-primary)]/50 h-14 px-4 transition-all" {...field} />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="role" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/80 font-medium">I am a...</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-black/40 border-white/5 text-white rounded-xl h-14 px-4 focus:ring-1 focus:ring-[var(--color-brand-primary)]/50 focus:border-[var(--color-brand-primary)]/50 transition-all">
                                <SelectValue placeholder="Select your role" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-[#111] border-white/10 text-white rounded-xl">
                              <SelectItem value="publisher" className="focus:bg-white/10 focus:text-white">Publisher</SelectItem>
                              <SelectItem value="advertiser" className="focus:bg-white/10 focus:text-white">Advertiser</SelectItem>
                              <SelectItem value="agency" className="focus:bg-white/10 focus:text-white">Agency</SelectItem>
                              <SelectItem value="other" className="focus:bg-white/10 focus:text-white">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )} />
                    </div>

                    <FormField control={form.control} name="volume" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/80 font-medium">Monthly Volume / Spend</FormLabel>
                        <FormControl>
                          <Input placeholder={getVolumePlaceholder()} className="bg-black/40 border-white/5 text-white placeholder:text-white/20 rounded-xl focus-visible:ring-1 focus-visible:ring-[var(--color-brand-primary)]/50 focus-visible:border-[var(--color-brand-primary)]/50 h-14 px-4 transition-all" {...field} />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )} />

                    <FormField control={form.control} name="message" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/80 font-medium">Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="How can we help you?" className="min-h-[160px] bg-black/40 border-white/5 text-white placeholder:text-white/20 rounded-xl focus-visible:ring-1 focus-visible:ring-[var(--color-brand-primary)]/50 focus-visible:border-[var(--color-brand-primary)]/50 p-4 transition-all resize-none" {...field} />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )} />

                    <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto bg-gradient-to-r from-[var(--color-brand-primary)] to-[var(--color-brand-secondary)] text-white hover:opacity-90 font-medium rounded-xl h-14 px-8 text-base shadow-lg shadow-[var(--color-brand-primary)]/20 transition-all">
                      {getSubmitLabel()}
                    </Button>
                  </form>
                </Form>
              </GlassPanel>
            </FadeUp>

            <StaggerContainer className="flex flex-col justify-between h-full space-y-6 lg:space-y-0">
              <motion.div variants={staggerItem}>
                <GlassPanel className="p-8 border-l-[3px] border-l-[var(--color-brand-primary)] group hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
                  <h3 className="font-display text-2xl text-white mb-3 group-hover:text-[var(--color-brand-primary)] transition-colors">Publishers</h3>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed">Questions about integration or yield optimization.</p>
                  <a href="mailto:publishers@emonetiser.com" className="inline-flex items-center text-[var(--color-brand-primary)] hover:text-white transition-colors font-medium">
                    publishers@emonetiser.com <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </GlassPanel>
              </motion.div>

              <motion.div variants={staggerItem}>
                <GlassPanel className="p-8 border-l-[3px] border-l-[var(--color-brand-secondary)] group hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
                  <h3 className="font-display text-2xl text-white mb-3 group-hover:text-[var(--color-brand-secondary)] transition-colors">Advertisers</h3>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed">Inquiries about inventory access or managed service.</p>
                  <a href="mailto:advertisers@emonetiser.com" className="inline-flex items-center text-[var(--color-brand-secondary)] hover:text-white transition-colors font-medium">
                    advertisers@emonetiser.com <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </GlassPanel>
              </motion.div>

              <motion.div variants={staggerItem}>
                <GlassPanel className="p-8 group hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 border border-white/5">
                  <h3 className="font-display text-2xl text-white mb-3">Headquarters</h3>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed">London, United Kingdom</p>
                  <div className="pt-4 border-t border-white/10 mt-auto">
                    <p className="text-white/40 font-mono text-xs uppercase tracking-wider">Response expected within 1 business day.</p>
                  </div>
                </GlassPanel>
              </motion.div>
            </StaggerContainer>
          </div>
        </Container>
      </PageSection>

      {/* S3: ADDITIONAL CONTACT */}
      <PageSection className="py-24 bg-white/[0.02]">
        <Container>
          <StaggerContainer className="grid sm:grid-cols-3 gap-6 text-center">
            <motion.div variants={staggerItem}>
              <GlassPanel className="p-8 h-full flex flex-col items-center justify-center group hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-white mb-6 group-hover:bg-white/10 group-hover:scale-110 transition-all duration-300">
                  <Envelope size={28} />
                </div>
                <h3 className="text-xl font-medium text-white mb-3">Direct Email</h3>
                <p className="text-sm text-slate-400">Reach our specific departments for faster routing.</p>
              </GlassPanel>
            </motion.div>
            <motion.div variants={staggerItem}>
              <GlassPanel className="p-8 h-full flex flex-col items-center justify-center group hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-white mb-6 group-hover:bg-white/10 group-hover:scale-110 transition-all duration-300">
                  <Clock size={28} />
                </div>
                <h3 className="text-xl font-medium text-white mb-3">Fast Response</h3>
                <p className="text-sm text-slate-400">All inquiries are reviewed within 24 hours Mon-Fri.</p>
              </GlassPanel>
            </motion.div>
            <motion.div variants={staggerItem}>
              <GlassPanel className="p-8 h-full flex flex-col items-center justify-center group hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-white mb-6 group-hover:bg-white/10 group-hover:scale-110 transition-all duration-300">
                  <ChatCircle size={28} />
                </div>
                <h3 className="text-xl font-medium text-white mb-3">Dedicated Support</h3>
                <p className="text-sm text-slate-400">Existing partners can contact their account manager directly.</p>
              </GlassPanel>
            </motion.div>
          </StaggerContainer>
        </Container>
      </PageSection>


      {/* S5: FAQ */}
      <PageSection className="py-24 bg-white/[0.02]">
        <Container className="max-w-4xl">
          <FadeUp className="mb-12 text-center">
            <h2 className="text-3xl md:text-5xl font-display font-medium text-white">Frequently Asked Questions</h2>
          </FadeUp>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <GlassPanel className="overflow-hidden group hover:border-white/20 transition-colors">
                  <button 
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  >
                    <span className="font-medium text-white pr-8">{faq.q}</span>
                    <CaretDown 
                      size={20} 
                      className={cn(
                        "text-white/50 transition-transform duration-300 shrink-0",
                        openFaq === i ? "rotate-180" : ""
                      )} 
                    />
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 text-white/70">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </GlassPanel>
              </FadeUp>
            ))}
          </div>
        </Container>
      </PageSection>

      {/* S6: FINAL ASSURANCE */}
      <PageSection className="py-24 md:py-32">
        <Container className="max-w-3xl text-center">
          <FadeUp>
            <blockquote className="text-2xl md:text-3xl font-display text-white/90 leading-relaxed mb-8">
              "Every enquiry is reviewed by a real specialist within one business day. We don't use automated responses for new partner enquiries."
            </blockquote>
            <p className="text-sm font-mono text-white/50 tracking-wider uppercase">
              - The Emonetiser Partnerships Team
            </p>
          </FadeUp>
        </Container>
      </PageSection>
    </main>
  );
}
