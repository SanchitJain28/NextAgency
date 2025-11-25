import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 text-gray-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/logos/scalefrontlonglogoclearbackground.png"
                alt="ScaleFront"
                width={200}
                height={50}
                className="h-10 w-auto"
              />
            </Link>
            <p className="max-w-md text-gray-400">
              Elite Shopify development agency specializing in custom apps, headless commerce, theme development, and performance optimization.
            </p>
            <div className="mt-6">
              <p className="text-sm">
                <a href="mailto:hello@scalefront.io" className="hover:text-white transition">
                  hello@scalefront.io
                </a>
              </p>
              <p className="text-sm mt-2">
                <a href="tel:+919650296375" className="hover:text-white transition">
                  +91 9650296375
                </a>
              </p>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/headless-commerce" className="hover:text-white transition text-sm">
                  Headless Commerce
                </Link>
              </li>
              <li>
                <Link href="/services/custom-shopify-apps" className="hover:text-white transition text-sm">
                  Custom Shopify Apps
                </Link>
              </li>
              <li>
                <Link href="/services/theme-development" className="hover:text-white transition text-sm">
                  Theme Development
                </Link>
              </li>
              <li>
                <Link href="/services/performance-optimization" className="hover:text-white transition text-sm">
                  Performance Optimization
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-white">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about-us" className="hover:text-white transition text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition text-sm">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-white transition text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; 2025 ScaleFront. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
