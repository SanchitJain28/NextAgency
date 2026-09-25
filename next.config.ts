import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/contact",
        destination: "/contact-us",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/about-us",
        permanent: true,
      },
      {
        source: "/services/conversion-optimization",
        destination: "/services/cro-optimization",
        permanent: true,
      },
      {
        source: "/services/headless-shopify-development",
        destination: "/services/headless-commerce",
        permanent: true,
      },
      {
        source: "/services/store-audit-consulting",
        destination: "/services/audit-consulting",
        permanent: true,
      },
      {
        source: "/services/theme-customization",
        destination: "/services/theme-development",
        permanent: true,
      },
      {
        source: "/services/shopify-store-migration-services",
        destination: "/services/shopify-migration-services",
        permanent: true,
      },
      {
        source: "/blog/conversion-optimization-guide",
        destination: "/blog/shopify-conversion-rate-optimization-guide",
        permanent: true,
      },
      {
        source: "/blog/ecommerce-funnel-strategy",
        destination: "/blog/ecommerce-funnel-strategy-shopping-mall-psychology",
        permanent: true,
      },
      {
        source: "/blog/fashion-brand-case-study",
        destination: "/blog/fashion-brand-conversion-optimization-case-study",
        permanent: true,
      },
      {
        source: "/blog/conversion-optimization-guide-ecommerce-saas",
        destination: "/blog/shopify-conversion-rate-optimization-guide",
        permanent: true,
      },
      {
        source: "/blog/fashion-brand-cro-case-study-conversion-optimization",
        destination: "/blog/fashion-brand-conversion-optimization-case-study",
        permanent: true,
      },
      {
        source: "/blog/landing-page-psychology-guide-boost-conversions",
        destination: "/blog/landing-page-psychology-principles-that-drive-conversions",
        permanent: true,
      },
      {
        source: "/blog/conversion-optimization-shopify-stores",
        destination: "/blog/shopify-conversion-rate-optimization",
        permanent: true,
      },
      {
        source: "/blog/ecommerce-sales-funnel-strategy",
        destination: "/blog/ecommerce-funnel-strategy-shopping-mall-psychology",
        permanent: true,
      },
      {
        source: "/privacy",
        destination: "/privacy-policy",
        permanent: true,
      },
      {
        source: "/terms",
        destination: "/terms-of-service",
        permanent: true,
      },
      {
        source: "/blog/d2c-conversion-playbook-shopify",
        destination: "/blog/d2c-conversion-playbook-20-strategies-increase-sales",
        permanent: true,
      },
    ];
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
