import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. The Redirect Logic
  async redirects() {
    return [
      {
        source: "/:path*", // This catches every single page on your site
        destination: "https://github.com/SanchitJain28", // REPLACE with your GitHub URL
        permanent: false, // 307 redirect (temporary) to keep your SEO options open
      },
    ];
  },

  // 2. Your existing config
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
