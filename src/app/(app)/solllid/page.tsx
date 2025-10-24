"use client";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Zap,
  TrendingUp,
  Layout,
  Sparkles,
  CheckCircle2,
  Star,
  ShoppingCart,
  Eye,
  Package,
} from "lucide-react";
import { Bitcount_Grid_Single } from "next/font/google";
import Image from "next/image";

const bitcount_Grid_Single = Bitcount_Grid_Single({
  subsets: ["latin"],
  weight: ["300"],
});

const font_className = bitcount_Grid_Single.className;

export default function LandingPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className={`${font_className}`}>
      <div className="min-h-screen bg-black text-white">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-black" />
                </div>
                <span className="text-lg font-bold">Recommendations AI</span>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <a
                  href="#features"
                  className="text-gray-400 hover:text-white transition"
                >
                  Features
                </a>
                <a
                  href="#how-it-works"
                  className="text-gray-400 hover:text-white transition"
                >
                  How It Works
                </a>
                <a
                  href="#pricing"
                  className="text-gray-400 hover:text-white transition"
                >
                  Pricing
                </a>
                <button className="px-6 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition font-semibold text-sm">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </nav>
        <div className="pt-16">
          <MarqueSection />
        </div>

        {/* Hero Section */}
        <section className="pb-20 pt-4 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="initial"
                animate="animate"
                variants={staggerContainer}
              >
                <motion.div variants={fadeInUp} className="inline-block">
                  <span className="px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium border border-white/20">
                    AI-Powered Recommendations
                  </span>
                </motion.div>

                <motion.h1
                  variants={fadeInUp}
                  className="mt-6 text-5xl lg:text-6xl font-bold leading-tight text-balance"
                >
                  Boost Sales with{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                    Smart AI
                  </span>
                </motion.h1>

                <motion.p
                  variants={fadeInUp}
                  className="mt-6 text-xl text-gray-400 leading-relaxed max-w-lg"
                >
                  Install once, let AI do the work. Automatically display
                  perfectly matched product recommendations that increase your
                  average order value by up to 35%.
                </motion.p>

                <motion.div
                  variants={fadeInUp}
                  className="mt-8 flex flex-col sm:flex-row gap-4"
                >
                  <button className="px-8 py-4 bg-white text-black rounded-full hover:bg-gray-200 transition font-semibold text-lg flex items-center justify-center group">
                    Get Started Free
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition" />
                  </button>
                  <button className="px-8 py-4 bg-white/10 text-white rounded-full hover:bg-white/20 transition font-semibold text-lg border border-white/20">
                    Watch Demo
                  </button>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="mt-8 flex items-center space-x-6"
                >
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 border-2 border-black"
                      />
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center space-x-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-white text-white"
                        />
                      ))}
                    </div>
                    <p className="text-sm text-gray-400 mt-1">
                      Trusted by 500+ merchants
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-4 shadow-2xl border border-white/10">
                  <span className="text-gray-500 text-lg">
                    <Image
                      src={"/canva-hero-image.png"}
                      width={1080}
                      height={1080}
                      alt="Hero image"
                      className="rounded-xl"
                    />
                  </span>
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                    className="absolute -top-4 -right-4 bg-black p-4 rounded-lg shadow-xl border border-white/10"
                  >
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-5 h-5 text-white" />
                      <span className="text-sm font-semibold">+35% AOV</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-white/5 border-y border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { value: "35%", label: "Increase in AOV" },
                { value: "500+", label: "Active Merchants" },
                { value: "2M+", label: "Recommendations Served" },
                { value: "4.9/5", label: "Average Rating" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold">{stat.value}</div>
                  <div className="mt-2 text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="sm:px-6 pt-8 lg:px-8 lg:pb-12">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8 lg:px-0 px-6"
            >
              <span className="px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium border border-white/20 inline-block">
                Powerful Features
              </span>
              <h2 className="mt-6 text-4xl lg:text-5xl font-bold text-balance">
                Everything You Need to Boost Sales
              </h2>
              <p className="mt-4 text-xl text-gray-400 max-w-3xl ">
                AI-powered recommendations that work seamlessly with your store
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 lg:gap-4">
              {[
                {
                  icon: <Sparkles className="w-8 h-8" />,
                  title: "AI-Powered Related Products",
                  description:
                    "Uses advanced text embeddings to find semantically similar products. No manual configuration needed.",
                },
                {
                  icon: <ShoppingCart className="w-8 h-8" />,
                  title: "Smart Combo Builder",
                  description:
                    "Automatically suggests product bundles that customers love, increasing your average order value.",
                },
                {
                  icon: <Layout className="w-8 h-8" />,
                  title: "Customizable Widgets",
                  description:
                    "Display recommendations on product pages, cart, collections, and home page. Style it your way.",
                },
                {
                  icon: <Eye className="w-8 h-8" />,
                  title: "Recently Viewed Products",
                  description:
                    "Keep customers engaged by showing them products they've recently browsed.",
                },
                {
                  icon: <Package className="w-8 h-8" />,
                  title: "New Arrivals & Best Sellers",
                  description:
                    "Showcase trending and popular products automatically with smart widgets.",
                },
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: "Plug & Play Setup",
                  description:
                    "Install and activate in minutes. No coding required. Works with any Shopify theme.",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 p-8 hover:bg-white/10 transition border lg:rounded-xl border-white/10 group"
                >
                  <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center text-white mb-6 group-hover:bg-white/20 transition">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <MarqueSection />
        {/* How It Works Section */}
        <section
          id="how-it-works"
          className="lg:py-12 pt-12 border-y border-white/10 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8 px-6 lg:px-0"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-balance">
                How It Works
              </h2>
              <p className="mt-4 text-xl text-gray-400">
                Get started in 3 simple steps
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 lg:gap-8 relative">
              <div className="hidden md:block absolute top-12 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              {[
                {
                  step: "01",
                  title: "Install the App",
                  description:
                    "One-click installation from Shopify App Store. Takes less than 30 seconds.",
                },
                {
                  step: "02",
                  title: "AI Analyzes Your Products",
                  description:
                    "Our AI automatically generates embeddings for all your products using advanced text analysis.",
                },
                {
                  step: "03",
                  title: "Start Selling More",
                  description:
                    "Smart recommendations appear automatically on your store. Watch your sales grow!",
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="bg-white/5 p-8 lg:rounded-xl border border-white/10">
                    <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center text-2xl font-bold mb-6 relative z-10">
                      {step.step}
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                    <p className="text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Case Example Section */}
        <section className="lg:py-20 pt-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold mb-6 text-balance">
                  Smart Recommendations in Action
                </h2>
                <p className="text-lg text-gray-400 mb-8">
                  When a customer views &quot;Ikigai&quot;, our AI instantly
                  suggests perfectly matched books like:
                </p>
                <div className="space-y-4">
                  {[
                    "The Subtle Art of Not Giving a F*ck",
                    "Living Longer, Happier",
                    "How to Improve Your Life",
                  ].map((book, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle2 className="w-6 h-6 text-white flex-shrink-0" />
                      <span className="text-gray-300 text-lg">{book}</span>
                    </motion.div>
                  ))}
                </div>
                <p className="mt-8 text-gray-400">
                  Same category, similar themes, maximum relevance. All powered
                  by AI.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white/5  -mx-4 border lg:rounded-2xl border-white/10"
              >
                <Image
                  src={"/canva-smart-recommendation-in-action.png"}
                  width={1080}
                  height={1080}
                  alt="Hero image"
                  className="lg:rounded-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Customization Section */}
        <section className="lg:py-16 pt-16 bg-white/5 border-y border-white/10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1"
              >
                <div className="bg-white/5 shadow-2xl lg:rounded-2xl -mx-4 border border-white/10">
                  <Image
                    src={"/canva-full-control-and-customization.png"}
                    width={1080}
                    height={1080}
                    alt="Hero image"
                    className="lg:rounded-2xl"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2"
              >
                <h2 className="text-4xl font-bold mb-6 text-balance">
                  Full Control & Customization
                </h2>
                <p className="text-lg text-gray-400 mb-8">
                  While AI does the heavy lifting, you stay in control with
                  powerful customization options.
                </p>
                <div className="space-y-6">
                  {[
                    {
                      title: "Manual Recommendations",
                      description:
                        "Override AI suggestions with your own hand-picked products when needed",
                    },
                    {
                      title: "Widget Placement",
                      description:
                        "Choose exactly where recommendations appear on your store",
                    },
                    {
                      title: "Style Customization",
                      description:
                        "Match your brand with custom colors, fonts, and layouts",
                    },
                    {
                      title: "Performance Analytics",
                      description:
                        "Track clicks, conversions, and revenue from recommendations",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex space-x-4"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                          <CheckCircle2 className="w-5 h-5 text-black" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                        <p className="text-gray-400">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="lg:py-16 py-8 px-6 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:mb-16 mb-8"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-balance">
                Loved by Merchants Worldwide
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  role: "Owner, BookStore Plus",
                  content:
                    "This app increased our average order value by 40% in the first month. The AI recommendations are incredibly accurate!",
                },
                {
                  name: "Michael Chen",
                  role: "CEO, TechGear Shop",
                  content:
                    "Setup was incredibly easy. Within minutes, smart recommendations were showing across our entire store.",
                },
                {
                  name: "Emma Rodriguez",
                  role: "Marketing Director, Fashion Hub",
                  content:
                    "Our conversion rate improved dramatically. Customers are finding products they didn't even know they needed.",
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 p-8 rounded-xl border border-white/10 hover:bg-white/10 transition"
                >
                  <div className="flex items-center space-x-1 mb-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-5 h-5 fill-white text-white" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    &quot;{testimonial.content}&quot;
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full" />
                    <div>
                      <div className="font-bold">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-black via-gray-900 to-black border-y border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
                Ready to Boost Your Sales?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Join hundreds of merchants using AI to increase their revenue.
                Start free today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-10 py-5 bg-white text-black rounded-full hover:bg-gray-200 transition font-bold text-lg flex items-center justify-center group">
                  Install Now - It&apos;s Free
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition" />
                </button>
                <button className="px-10 py-5 bg-white/10 text-white rounded-full hover:bg-white/20 transition font-bold text-lg border border-white/20">
                  Schedule a Demo
                </button>
              </div>
              <p className="mt-6 text-gray-400 text-sm">
                No credit card required • 14-day free trial • Cancel anytime
              </p>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black border-t border-white/10 text-gray-400 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="col-span-2">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-black" />
                  </div>
                  <span className="text-lg font-bold text-white">
                    Recommendations AI
                  </span>
                </div>
                <p className="max-w-md">
                  AI-powered product recommendations that help Shopify merchants
                  increase sales automatically.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-4 text-white">Product</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#features" className="hover:text-white transition">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#pricing" className="hover:text-white transition">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition">
                      API
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4 text-white">Support</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-500">
              <p>&copy; 2025 Recommendations AI. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

const MarqueSection = () => {
  return (
    <section className="py-6 lg:py-8 bg-white/5 border-y border-white/10 overflow-hidden">
      <div className="relative flex">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="flex whitespace-nowrap"
        >
          {[...Array(10)].map((_, i) => (
            <span
              key={i}
              className="text-3xl lg:text-4xl font-bold mx-8 text-white/80"
            >
              REAL AI RELATED PRODUCTS
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
