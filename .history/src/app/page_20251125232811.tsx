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
  BarChart,
} from "lucide-react";
import Link from "next/link";
// Using MagicUI Globe component with interactive features
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { InteractiveGlobe } from "@/components/InteractiveGlobe";
import { MarqueeSection } from "@/components/MarqueeSection";
import { TeamAvailability } from "@/components/TeamAvailability";
import Galaxy from "@/components/Galaxy";
import ColorBends from "@/components/ColorBends";
import type { Metadata } from "next";
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
    <div className="min-h-screen bg-background relative">
      {/* Color Bends Background */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40 md:opacity-100 overflow-hidden">
          <ColorBends
            colors={["#67EA3A"]}
            autoRotate={-1}
            rotation={0}
            speed={0.1}
            scale={1}
            frequency={1}
            mouseInfluence={2}
            parallax={0.5}
            noise={0}
            warpStrength={0.9}
          />


      </div>

      {/* Galaxy Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <Galaxy
          hueShift={0}
          density={0.2}
          glowIntensity={0.15}
          saturation={0}
          speed={0.2}
          starSpeed={0.08}
          twinkleIntensity={0.15}
          rotationSpeed={0.01}
          mouseRepulsion={true}
          repulsionStrength={0.5}
          transparent={true}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <MarqueeSection />

        <StatsSection />
        <ServicesOverview />
        <ToolsSection />
        <ShopifyAppsSection />
        <WhyChooseSection />
        <ResultsSection />
        <TestimonialsSection />
        <FinalCTASection />
      </div>
    </div>
  );
}

const HeroSection = () => {
  return (
    <section className="relative pt-20 pb-28 md:pt-32 md:pb-40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side: Text content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Trusted by 50+ brands worldwide</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight text-balance">
              Build Shopify stores that convert
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-white leading-relaxed max-w-xl">
              Custom development, headless commerce, and performance
              optimization for ambitious Shopify brands.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                asChild
              >
                <Link href="/contact-us" className="flex items-center gap-2">
                  Start a project
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:bg-secondary hover:text-secondary-foreground bg-transparent"
                asChild
              >
                <Link href="#services">View services</Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-6 text-sm text-white">
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
    <section className="py-20 border-y border-border relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center bg-background border-2 border-primary/30 rounded-2xl p-6 hover:bg-background hover:border-primary/50 transition-all hover:scale-105 shadow-lg hover:shadow-2xl hover:shadow-primary/20"
            >
              <div className="text-3xl md:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-white md:text-muted-foreground">
                {stat.label}
              </div>
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
    <section id="services" className="py-24 md:py-32 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 relative">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Our services
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            From custom apps to headless commerce—we build Shopify solutions
            that drive results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group rounded-xl border-2 border-primary/30 bg-background p-8 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 hover:bg-background transition-all duration-300 hover:scale-105"
              >
                <div className="inline-flex rounded-lg bg-primary/10 p-3 mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg md:text-xl text-white md:text-card-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-white md:text-muted-foreground text-sm md:text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            asChild
          >
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

const ToolsSection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 relative">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Free Tools
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional-grade tools to help optimize your Shopify store
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="group rounded-2xl border-2 border-blue-500/30 bg-background p-8 md:p-12 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-[1.02]">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="inline-flex rounded-xl bg-blue-500/10 p-4 group-hover:bg-blue-500/20 transition-colors">
                  <BarChart className="h-10 w-10 text-blue-600" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-2xl md:text-3xl text-white md:text-foreground mb-3">
                  <span className="text-blue-600">Earn</span> - Shopify Store Auditor
                </h3>
                <p className="text-lg text-white md:text-muted-foreground mb-6">
                  Unlike other tools that just show page speed, Earn analyzes <strong>all factors that impact sales</strong> – from trust signals and conversion features to security and user experience. Get 100+ critical checks in 60 seconds, absolutely free.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="inline-flex items-center rounded-full bg-blue-500/20 px-3 py-1 text-sm font-medium text-blue-400">
                    SEO Analysis
                  </span>
                  <span className="inline-flex items-center rounded-full bg-blue-500/20 px-3 py-1 text-sm font-medium text-blue-400">
                    Performance Testing
                  </span>
                  <span className="inline-flex items-center rounded-full bg-blue-500/20 px-3 py-1 text-sm font-medium text-blue-400">
                    Sales Optimization
                  </span>
                  <span className="inline-flex items-center rounded-full bg-blue-500/20 px-3 py-1 text-sm font-medium text-blue-400">
                    Security Check
                  </span>
                </div>
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  asChild
                >
                  <Link href="/earn" className="flex items-center gap-2">
                    Try Earn Free
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ShopifyAppsSection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 relative">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Shopify Apps
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful apps to enhance your Shopify store functionality
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="group rounded-2xl border-2 border-purple-500/30 bg-background p-8 md:p-12 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-[1.02]">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="inline-flex rounded-xl bg-purple-500/10 p-4 group-hover:bg-purple-500/20 transition-colors">
                  <Sparkles className="h-10 w-10 text-purple-600" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-2xl md:text-3xl text-white md:text-foreground mb-3">
                  Crossell, Upsell & Related Products AI
                </h3>
                <p className="text-lg text-white md:text-muted-foreground mb-6">
                  Intelligent product recommendations powered by AI to increase average order value. Automatically suggest relevant cross-sells, upsells, and related products based on customer behavior and purchase patterns.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="inline-flex items-center rounded-full bg-purple-500/20 px-3 py-1 text-sm font-medium text-purple-400">
                    AI-Powered
                  </span>
                  <span className="inline-flex items-center rounded-full bg-purple-500/20 px-3 py-1 text-sm font-medium text-purple-400">
                    Smart Recommendations
                  </span>
                  <span className="inline-flex items-center rounded-full bg-purple-500/20 px-3 py-1 text-sm font-medium text-purple-400">
                    Conversion Boost
                  </span>
                  <span className="inline-flex items-center rounded-full bg-purple-500/20 px-3 py-1 text-sm font-medium text-purple-400">
                    Easy Integration
                  </span>
                </div>
                <Button
                  size="lg"
                  className="bg-purple-600 hover:bg-purple-700 text-white"
                  asChild
                >
                  <Link href="/solllid" className="flex items-center gap-2">
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
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
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 relative">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8 items-start">
          <div className="space-y-6 md:col-span-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
              Why work with us
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              We build revenue-generating Shopify stores optimized for growth
              and scale.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              asChild
            >
              <Link href="/about-us">
                Learn more
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">
              {reasons.map((reason) => {
                const Icon = reason.icon;
                return (
                  <div
                    key={reason.title}
                    className="bg-background border-2 border-primary/30 rounded-xl p-6 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 hover:bg-background transition-all duration-300 hover:scale-105"
                  >
                    <div className="rounded-lg bg-primary/10 p-2.5 w-fit mb-3">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-base md:text-lg mb-1.5 text-white md:text-foreground">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-white md:text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Team Availability Widget */}
          <div className="md:col-span-1">
            <TeamAvailability />
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
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 relative">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Real results
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Proven track record of delivering measurable growth
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {results.map((result) => (
            <div
              key={result.title}
              className="bg-background border-2 border-primary/30 rounded-xl p-8 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 hover:bg-background transition-all duration-300 hover:scale-105"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-4">
                {result.metric}
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-white md:text-foreground">
                {result.title}
              </h3>
              <p className="text-sm md:text-base text-white md:text-muted-foreground leading-relaxed">
                {result.description}
              </p>
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
    <section className="py-24 md:py-32 relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            What clients say
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Don&apos;t just take our word for it
          </p>
        </div>

        <AnimatedTestimonials testimonials={testimonials} autoplay />
      </div>
    </section>
  );
};

const FinalCTASection = () => {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="mx-auto max-w-4xl px-6 text-center space-y-8 bg-background rounded-3xl border-2 border-primary/50 p-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
          Ready to get started?
        </h2>
        <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
          Let&apos;s transform your Shopify store into a high-performing revenue
          machine.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
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
            className="border-2 border-background text-primary-foreground hover:bg-background hover:text-foreground bg-transparent"
          >
            <Link href="/pricing">View pricing</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

