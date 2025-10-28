import { Sparkles } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function ShopifyHeader() {
  return (
    <div>
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={32}
                  height={32}
                  className="bg-white rounded-full "
                />
              </div>
              <span className="text-lg font-bold text-white">Recommendations AI</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="/solllid#features"
                className="text-gray-400 hover:text-white transition"
              >
                Features
              </a>
              <a
                href="/solllid#how-it-works"
                className="text-gray-400 hover:text-white transition"
              >
                How It Works
              </a>
              <a
                href="/solllid#pricing"
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
    </div>
  );
}
