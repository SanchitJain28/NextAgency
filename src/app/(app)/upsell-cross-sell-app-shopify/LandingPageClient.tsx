"use client";
import { Header } from "@/components/header-footer/Header";
import Footer from "@/components/header-footer/Footer";
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
import BlogSection from "./BlogsSection";

export const bitcount_Grid_Single = Bitcount_Grid_Single({
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
      <div className="min-h-screen text-white bg-black">
        {/* Navigation */}
        <MarqueSection />

        {/* Hero Section */}
        <section className="px-6 pt-4 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <motion.div
                initial="initial"
                animate="animate"
                variants={staggerContainer}
              >
                <motion.div variants={fadeInUp} className="inline-block">
                  <span className="px-4 py-2 text-sm font-medium text-white border rounded-full bg-white/10 border-white/20">
                    AI-Powered Recommendations
                  </span>
                </motion.div>

                <motion.h1
                  variants={fadeInUp}
                  className="mt-6 text-5xl font-bold leading-tight lg:text-6xl text-balance"
                >
                  Boost Sales with{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                    Smart AI
                  </span>
                </motion.h1>

                <motion.p
                  variants={fadeInUp}
                  className="max-w-lg mt-6 text-xl leading-relaxed text-gray-400"
                >
                  Install once, let AI do the work. Automatically display
                  perfectly matched product recommendations that increase your
                  average order value by up to 35%.
                </motion.p>

                <motion.div
                  variants={fadeInUp}
                  className="flex flex-col mt-8 sm:flex-row lg:gap-4"
                >
                  <a
                    href="https://apps.shopify.com/solid-ai-related-products"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-8 py-4 -mx-6 text-lg font-semibold text-black transition bg-white lg:rounded-full lg:mx-0 hover:bg-gray-200 group"
                  >
                    Go to Shopify App Store
                    <ArrowRight className="w-5 h-5 ml-2 transition group-hover:translate-x-1" />
                  </a>
                  
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="flex items-center mt-8 space-x-6"
                >
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 border-2 border-black rounded-full bg-gradient-to-br from-gray-600 to-gray-800"
                      />
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center space-x-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-white fill-white"
                        />
                      ))}
                    </div>
                    <p className="mt-1 text-sm text-gray-400">
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
                <div className="relative p-4 border shadow-2xl bg-gradient-to-br from-gray-900 to-black rounded-2xl border-white/10">
                  <span className="text-lg text-gray-500">
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
                    className="absolute p-4 bg-black border rounded-lg shadow-xl -top-4 -right-4 border-white/10"
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
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
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
        <section id="features" className="pt-8 sm:px-6 lg:px-8 lg:pb-12">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="px-6 mb-8 lg:px-0"
            >
              <span className="inline-block px-4 py-2 text-sm font-medium text-white border rounded-full bg-white/10 border-white/20">
                Powerful Features
              </span>
              <h2 className="mt-6 text-4xl font-bold lg:text-5xl text-balance">
                Everything You Need to Boost Sales
              </h2>
              <p className="max-w-3xl mt-4 text-xl text-gray-400 ">
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
                  className="p-8 transition border bg-white/5 hover:bg-white/10 lg:rounded-xl border-white/10 group"
                >
                  <div className="flex items-center justify-center w-16 h-16 mb-6 text-white transition rounded-lg bg-white/10 group-hover:bg-white/20">
                    {feature.icon}
                  </div>
                  <h3 className="mb-3 text-xl font-bold">{feature.title}</h3>
                  <p className="leading-relaxed text-gray-400">
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
          className="pt-12 lg:py-12 border-y border-white/10 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="px-6 mb-8 lg:px-0"
            >
              <h2 className="text-4xl font-bold lg:text-5xl text-balance">
                How It Works
              </h2>
              <p className="mt-4 text-xl text-gray-400">
                Get started in 3 simple steps
              </p>
            </motion.div>

            <div className="relative grid md:grid-cols-3 lg:gap-8">
              <div className="absolute hidden h-px md:block top-12 left-1/4 right-1/4 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
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
                  <div className="p-8 border bg-white/5 lg:rounded-xl border-white/10">
                    <div className="relative z-10 flex items-center justify-center w-16 h-16 mb-6 text-2xl font-bold text-black bg-white rounded-full">
                      {step.step}
                    </div>
                    <h3 className="mb-3 text-2xl font-bold">{step.title}</h3>
                    <p className="leading-relaxed text-gray-400">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Case Example Section */}
        <section className="px-4 pt-16 lg:py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="mb-6 text-4xl font-bold text-balance">
                  Smart Recommendations in Action
                </h2>
                <p className="mb-8 text-lg text-gray-400">
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
                      <CheckCircle2 className="flex-shrink-0 w-6 h-6 text-white" />
                      <span className="text-lg text-gray-300">{book}</span>
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
                className="-mx-4 border bg-white/5 lg:rounded-2xl border-white/10"
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
        <section className="px-4 pt-16 lg:py-16 bg-white/5 border-y border-white/10 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1"
              >
                <div className="-mx-4 border shadow-2xl bg-white/5 lg:rounded-2xl border-white/10">
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
                <h2 className="mb-6 text-4xl font-bold text-balance">
                  Full Control & Customization
                </h2>
                <p className="mb-8 text-lg text-gray-400">
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
                        <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full">
                          <CheckCircle2 className="w-5 h-5 text-black" />
                        </div>
                      </div>
                      <div>
                        <h3 className="mb-1 text-lg font-bold">{item.title}</h3>
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
        <section className="px-6 py-8 lg:py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8 lg:mb-16"
            >
              <h2 className="text-4xl font-bold lg:text-5xl text-balance">
                Loved by Merchants Worldwide
              </h2>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-3">
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
                  className="p-8 transition border bg-white/5 rounded-xl border-white/10 hover:bg-white/10"
                >
                  <div className="flex items-center mb-4 space-x-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-5 h-5 text-white fill-white" />
                    ))}
                  </div>
                  <p className="mb-6 leading-relaxed text-gray-300">
                    &quot;{testimonial.content}&quot;
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-600 to-gray-800" />
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
        <section className="px-4 py-20 sm:px-6 lg:px-8 bg-gradient-to-r from-black via-gray-900 to-black border-y border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6 text-4xl font-bold lg:text-5xl text-balance">
                Ready to Boost Your Sales?
              </h2>
              <p className="mb-8 text-xl text-gray-400">
                Join hundreds of merchants using AI to increase their revenue.
                Start free today.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <a
                  href="https://apps.shopify.com/solid-ai-related-products"
                  className="flex items-center justify-center px-10 py-5 text-lg font-bold text-black transition bg-white rounded-full hover:bg-gray-200 group"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2 transition group-hover:translate-x-1" />
                </a>
                <a href="https://apps.shopify.com/solid-ai-related-products" target="_blank" rel="noopener noreferrer">
                  <button className="flex items-center justify-center px-10 py-5 text-lg font-bold text-black transition bg-white rounded-full hover:bg-gray-200 group">
                    Install Now - It&apos;s Free
                    <ArrowRight className="w-5 h-5 ml-2 transition group-hover:translate-x-1" />
                  </button>
                </a>
            
              </div>
              <p className="mt-6 text-sm text-gray-400">
                No credit card required • 14-day free trial • Cancel anytime
              </p>
            </motion.div>
          </div>
        </section>

        {/* <BlogSection/> */}

        {/* SEO Content Footer Section */}
        <section className="px-4 py-20 bg-black border-t sm:px-6 lg:px-8 border-white/10">
          <div className="mx-auto max-w-7xl">
            <div className="prose prose-lg prose-invert max-w-none">
              {/* Why We Built Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <h2 className="mb-6 text-3xl font-bold text-white lg:text-4xl">
                  Why We Built AI CrossSell, Upsell & Related Products
                </h2>
                <p className="mb-4 leading-relaxed text-gray-300">
                  We created this Shopify AI recommendation app after seeing
                  thousands of online stores struggle with manual product
                  recommendations. Store owners were spending hours tagging
                  products, creating cross-sell rules, and manually updating
                  upsell suggestions—only to see mediocre results. We knew there
                  had to be a better way.
                </p>
                <p className="leading-relaxed text-gray-300">
                  Our mission was simple: help Shopify merchants increase
                  average order value and boost conversion rates without the
                  manual work. By leveraging artificial intelligence and machine
                  learning, we built an app that automatically analyzes your
                  product catalog and shows intelligent product recommendations
                  that actually convert.
                </p>
              </motion.div>

              {/* How AI Increases Conversion */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <h2 className="mb-8 text-3xl font-bold text-white lg:text-4xl">
                  How AI Product Recommendations Increase Your Conversion Rate
                </h2>

                <div className="space-y-8">
                  <div>
                    <h3 className="mb-4 text-2xl font-bold text-white">
                      Smart Cross-Selling Based on Product Data
                    </h3>
                    <p className="leading-relaxed text-gray-300">
                      Our AI-powered recommendation engine analyzes five
                      critical data points for every product in your Shopify
                      store: product names, descriptions, images, categories,
                      and tags. This comprehensive analysis ensures customers
                      see the most relevant cross-sell recommendations,
                      increasing the likelihood of adding complementary items to
                      their cart. Whether you sell fashion apparel, beauty
                      products, electronics, or home goods, our intelligent
                      product matching drives higher average order values.
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-4 text-2xl font-bold text-white">
                      Automated Upselling That Works
                    </h3>
                    <p className="leading-relaxed text-gray-300">
                      Stop leaving revenue on the table. Our upsell app
                      automatically identifies premium alternatives and
                      higher-value products that match customer intent. When
                      shoppers view a basic product, they'll see relevant upsell
                      suggestions for upgraded versions—no manual configuration
                      required. This automated upselling strategy has helped
                      ecommerce stores increase their AOV by 20-30% on average.
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-4 text-2xl font-bold text-white">
                      Related Products That Drive Additional Sales
                    </h3>
                    <p className="leading-relaxed text-gray-300">
                      The app displays similar products and related items across
                      your product pages, cart, collection pages, and homepage.
                      By showing visually similar products and contextually
                      relevant recommendations, you keep customers engaged and
                      increase the chances of multiple-item purchases. Our AI
                      understands product relationships better than manual
                      tagging ever could.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Industry-Specific Use Cases */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <h2 className="mb-8 text-3xl font-bold text-white lg:text-4xl">
                  Increase Conversion Rate by Product Category
                </h2>

                <div className="grid gap-8 md:grid-cols-2">
                  {[
                    {
                      title: "Fashion & Apparel Stores",
                      description:
                        "Show complete outfit suggestions automatically. When customers view a dress, our AI recommends matching shoes, accessories, and jewelry—creating a seamless shopping experience that increases basket size.",
                    },
                    {
                      title: "Beauty & Cosmetics",
                      description:
                        "Recommend complementary skincare routines and makeup products. Our product recommendation algorithm understands which items work together, helping customers discover complete beauty solutions.",
                    },
                    {
                      title: "Electronics & Gadgets",
                      description:
                        "Automatically suggest compatible accessories, warranties, and upgrades. From phone cases to chargers to premium models, maximize every sale with intelligent cross-sell and upsell recommendations.",
                    },
                    {
                      title: "Home & Garden",
                      description:
                        "Help customers complete their space with matching décor items, furniture sets, and complementary products. Our visual similarity AI identifies products that belong together.",
                    },
                    {
                      title: "Jewelry Stores",
                      description:
                        "Suggest matching sets and complementary pieces. When customers view earrings, automatically show matching necklaces, bracelets, and rings to increase order value.",
                    },
                  ].map((category, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="p-6 border bg-white/5 rounded-xl border-white/10"
                    >
                      <h3 className="mb-3 text-xl font-bold text-white">
                        {category.title}
                      </h3>
                      <p className="leading-relaxed text-gray-300">
                        {category.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Key Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <h2 className="mb-8 text-3xl font-bold text-white lg:text-4xl">
                  Key Features for Higher Shopify Conversion Rates
                </h2>

                <div className="grid gap-6 md:grid-cols-2">
                  {[
                    "AI-Powered Product Recommendations: Machine learning analyzes product similarity based on titles, descriptions, images, categories, and tags",
                    "Zero Manual Setup: Install in 2 minutes with automatic product analysis—no tagging or configuration required",
                    "Smart Cross-Sell & Upsell: Show complementary products (cross-sell) and premium alternatives (upsell) automatically",
                    "Multi-Page Display: Product recommendations appear on product pages, cart, collections, and homepage for maximum visibility",
                    "Manual Override Controls: Fine-tune any recommendation while AI handles the rest",
                    "Automatic Sync: New products get instant AI-generated recommendations without manual work",
                    "Conversion-Optimized Widgets: Customizable designs that match your store theme and drive clicks",
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3"
                    >
                      <CheckCircle2 className="flex-shrink-0 w-6 h-6 mt-1 text-white" />
                      <span className="text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Business Impact */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <h2 className="mb-8 text-3xl font-bold text-white lg:text-4xl">
                  Boost Your Ecommerce Metrics
                </h2>

                <div className="space-y-6">
                  <div className="p-6 border bg-white/5 rounded-xl border-white/10">
                    <h3 className="mb-3 text-xl font-bold text-white">
                      Increase Average Order Value (AOV)
                    </h3>
                    <p className="leading-relaxed text-gray-300">
                      By showing relevant product recommendations at the right
                      moment, customers naturally add more items to their cart.
                      Our merchants report 20-30% average order value increases.
                    </p>
                  </div>

                  <div className="p-6 border bg-white/5 rounded-xl border-white/10">
                    <h3 className="mb-3 text-xl font-bold text-white">
                      Improve Conversion Rate
                    </h3>
                    <p className="leading-relaxed text-gray-300">
                      Intelligent product suggestions reduce decision fatigue
                      and help customers find exactly what they need, leading to
                      higher conversion rates across your store.
                    </p>
                  </div>

                  <div className="p-6 border bg-white/5 rounded-xl border-white/10">
                    <h3 className="mb-3 text-xl font-bold text-white">
                      Reduce Cart Abandonment
                    </h3>
                    <p className="leading-relaxed text-gray-300">
                      Cart page recommendations give customers last-minute
                      opportunities to complete their purchase with additional
                      relevant products.
                    </p>
                  </div>

                  <div className="p-6 border bg-white/5 rounded-xl border-white/10">
                    <h3 className="mb-3 text-xl font-bold text-white">
                      Maximize Revenue Per Visitor
                    </h3>
                    <p className="leading-relaxed text-gray-300">
                      Turn single-product browsers into multi-item buyers with
                      AI-powered cross-sell and upsell suggestions.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Final CTA Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 border bg-gradient-to-r from-white/10 to-white/5 rounded-2xl border-white/20"
              >
                <h2 className="mb-4 text-3xl font-bold text-white">
                  Perfect for Growing Shopify Stores
                </h2>
                <p className="mb-6 leading-relaxed text-gray-300">
                  Whether you're a new Shopify merchant or an established
                  ecommerce brand, our AI recommendation app scales with your
                  business. From stores with 50 products to catalogs with
                  thousands of SKUs, the artificial intelligence handles
                  everything automatically. No need to hire developers, spend
                  weeks on setup, or manually maintain product relationships.
                </p>
                <p className="text-xl font-bold text-white">
                  Start increasing your Shopify store revenue today with
                  AI-powered product recommendations that work.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        {/* <Footer /> */}
      </div>
    </div>
  );
}

const MarqueSection = () => {
  return (
    <section className="py-6 overflow-hidden lg:py-8 bg-white/5 border-y border-white/10">
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
              className="mx-8 text-3xl font-bold lg:text-4xl text-white/80"
            >
              REAL AI RELATED PRODUCTS
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
