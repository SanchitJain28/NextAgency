import { Header } from "@/components/header-footer/Header";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  Code2,
  Palette,
  TrendingUp,
  Rocket,
  Users,
  Award,
  Star,
  Globe2,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import React from "react";
// Using MagicUI Globe component with interactive features
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { InteractiveGlobe } from "@/components/InteractiveGlobe";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ScaleFront - Elite Shopify Development Agency",
  description:
    "Transform your Shopify store with expert development. Custom apps, headless commerce, and performance optimization that drives real results.",
  keywords: [
    "Shopify development agency",
    "custom Shopify apps",
    "Shopify theme development",
    "headless Shopify",
  ],
  openGraph: {
    title: "ScaleFront - Elite Shopify Development Agency",
    description:
      "Expert Shopify development that drives growth. Custom apps, headless commerce, and performance optimization.",
    url: "https://scalefront.io",
    siteName: "ScaleFront",
    images: [
      {
        url: "https://scalefront.io/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ScaleFront",
      },
    ],
    type: "website",
  },
  alternates: {
    canonical: "https://scalefront.io",
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Header />
      <HeroSection />
      <StatsSection />
      <ServicesOverview />
      <WhyChooseSection />
      <ResultsSection />
      <TestimonialsSection />
      <FinalCTASection />
    </div>
  );
}

const HeroSection = () => {
  return (
    <section className="relative pt-16 pb-24 md:pt-24 md:pb-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side: Text content */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Trusted by 50+ brands worldwide</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
              Build Shopify stores that convert
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-muted-foreground leading-relaxed">
              Custom development, headless commerce, and performance optimization for ambitious Shopify brands.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                <Link href="/contact-us" className="flex items-center gap-2">
                  Start a project
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" className="border-border hover:bg-secondary hover:text-secondary-foreground" asChild>
                <Link href="#services">
                  View services
                </Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <Star className="h-4 w-4 fill-primary text-primary" />
                <span>4.9/5 rating</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>100+ projects</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Globe2 className="h-4 w-4 text-primary" />
                <span>Global clients</span>
              </div>
            </div>
          </div>

          {/* Right side: Interactive Globe */}
          <div className="hidden lg:flex lg:items-center lg:justify-center relative h-[600px]">
            <InteractiveGlobe />
          </div>
        </div>
      </div>
    </section>
  );
};

const StatsSection = () => {
  const stats = [
    { value: "250%", label: "Avg. revenue increase" },
    { value: "60%", label: "Faster page loads" },
    { value: "50+", label: "Happy clients" },
    { value: "99%", label: "Client satisfaction" },
  ];

  return (
    <section className="py-16 border-y border-border bg-secondary">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServicesOverview = () => {
  const services = [
    {
      icon: Zap,
      title: "Headless Commerce",
      description: "Lightning-fast storefronts with Next.js",
    },
    {
      icon: Code2,
      title: "Custom Apps",
      description: "Tailored solutions for your business",
    },
    {
      icon: Palette,
      title: "Theme Development",
      description: "Beautiful, high-converting themes",
    },
    {
      icon: TrendingUp,
      title: "Conversion Optimization",
      description: "Features that boost revenue",
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Core Web Vitals optimization",
    },
    {
      icon: Award,
      title: "Shopify Plus",
      description: "Enterprise-level solutions",
    },
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Our services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From custom apps to headless commerce—we build Shopify solutions that drive results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group rounded-lg border bg-card p-6 hover:border-primary/50 hover:shadow-lg transition-all"
              >
                <div className="inline-flex rounded-lg bg-primary/10 p-3 mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-card-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
            <Link href="/contact-us">
              View all services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

const WhyChooseSection = () => {
  const reasons = [
    {
      icon: Users,
      title: "Expert team",
      description: "Deep Shopify knowledge and proven results",
    },
    {
      icon: Award,
      title: "100+ projects",
      description: "Successful launches across all industries",
    },
    {
      icon: Zap,
      title: "Fast delivery",
      description: "Agile development, rapid deployment",
    },
    {
      icon: CheckCircle2,
      title: "Quality code",
      description: "Clean, scalable, maintainable solutions",
    },
  ];

  return (
    <section className="py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Why work with us
            </h2>
            <p className="text-lg text-muted-foreground">
              We build revenue-generating Shopify stores optimized for growth and scale.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
              <Link href="/about-us">
                Learn more
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <div
                  key={reason.title}
                  className="bg-card border border-border rounded-lg p-5 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all"
                >
                  <div className="rounded-lg bg-primary/10 p-2.5 w-fit mb-3">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-base mb-1.5">{reason.title}</h3>
                  <p className="text-sm text-muted-foreground">{reason.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const ResultsSection = () => {
  const results = [
    {
      metric: "+250%",
      title: "Revenue growth",
      description: "Fashion brand after headless migration",
    },
    {
      metric: "3.2s",
      title: "Page load time",
      description: "Reduced from 8.5s with optimization",
    },
    {
      metric: "+85%",
      title: "Mobile conversions",
      description: "Custom mobile app impact",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Real results
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {results.map((result) => (
            <div
              key={result.title}
              className="bg-card border rounded-lg p-6 hover:shadow-md transition-all"
            >
              <div className="text-4xl font-bold text-primary mb-3">
                {result.metric}
              </div>
              <h3 className="text-lg font-semibold mb-2">{result.title}</h3>
              <p className="text-sm text-muted-foreground">{result.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        "ScaleFront transformed our store with a custom headless solution. Page loads dropped by 60% and conversions increased by 25%. Absolutely stellar work!",
      name: "Sarah Johnson",
      designation: "CEO, Fashion Forward",
      src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    },
    {
      quote:
        "The custom app they built revolutionized our inventory management. The team's expertise in Shopify development is unmatched.",
      name: "Michael Chen",
      designation: "CTO, TechGear",
    },
    {
      quote:
        "Our Shopify Plus migration was seamless. Zero downtime, and our store is now faster and more scalable than ever.",
      name: "Emily Rodriguez",
      designation: "Founder, BeautyBox",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            What clients say
          </h2>
        </div>

        <AnimatedTestimonials testimonials={testimonials} />
      </div>
    </section>
  );
};

const FinalCTASection = () => {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-4xl px-6 text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold">
          Ready to get started?
        </h2>
        <p className="text-lg opacity-90 max-w-2xl mx-auto">
          Let's transform your Shopify store into a high-performing revenue machine.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
          <Button
            size="lg"
            variant="secondary"
            asChild
            className="bg-background text-foreground hover:bg-background/90 border-0"
          >
            <Link href="/contact-us">
              Start a project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="border-2 border-background text-primary-foreground hover:bg-background hover:text-foreground"
          >
            <Link href="/pricing">View pricing</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
