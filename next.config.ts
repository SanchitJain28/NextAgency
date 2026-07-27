import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // async redirects() {
  //   return [
  //     {
  //       source: "/",
  //       destination: "https://github.com/SanchitJain28",
  //       permanent: false,
  //     },
  //   ];
  // },
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
