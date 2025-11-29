"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState, useCallback } from "react"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

const SERVICES = [
  { href: "/services/headless-commerce", label: "Headless Commerce" },
  { href: "/services/custom-shopify-apps", label: "Custom Shopify Apps" },
  { href: "/services/theme-development", label: "Theme Development" },
  { href: "/services/backend-api", label: "Backend & API" },
  { href: "/services/conversion-optimization", label: "Conversion Optimization" },
  { href: "/services/custom-features", label: "Custom Features" },
  { href: "/services/performance-optimization", label: "Performance Optimization" },
  { href: "/services/mobile-apps", label: "Mobile Apps" },
  { href: "/services/shopify-plus-migration", label: "Shopify Plus Migration" },
  { href: "/services/integrations", label: "Third-Party Integrations" },
  { href: "/services/audit-consulting", label: "Store Audit & Consulting" },
]

const TOOLS = [
  { href: "/earn", label: "Earn - Store Auditor" },
]

const SHOPIFY_APPS = [
  { href: "/upsell-cross-sell-app-shopify", label: "Crossell, Upsell & Related Products AI" },
]

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact-us", label: "Contact" },
]

export function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [toolsOpen, setToolsOpen] = useState(false)
  const [shopifyAppsOpen, setShopifyAppsOpen] = useState(false)

  const isActive = useCallback(
    (href: string) => (href === "/" ? pathname === "/" : pathname?.startsWith(href)),
    [pathname],
  )

  const isServicesActive = pathname?.startsWith("/services")
  const isToolsActive = pathname?.startsWith("/earn")
  const isShopifyAppsActive = pathname?.startsWith("/upsell-cross-sell-app-shopify")

  return (
    <header className="w-full border-b border-white/10 bg-black/70 backdrop-blur-xl sticky top-0 z-50 shadow-lg transition-all duration-300">
      <div className="mx-auto max-w-7xl px-6 relative">
        <div className="flex h-16 items-center justify-between relative z-10">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2"
            aria-label="Go to homepage"
            onClick={() => setOpen(false)}
          >
            <Image
              src="/logos/scalefrontlonglogoclearbackground.png"
              alt="ScaleFront"
              width={240}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main">
            {/* Services Dropdown - First */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-1",
                  isServicesActive
                    ? "text-blue-400"
                    : "text-white hover:text-blue-400 hover:bg-gray-800"
                )}
              >
                Services
                <ChevronDown className={cn(
                  "h-4 w-4 transition-transform",
                  servicesOpen && "rotate-180"
                )} />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-0 mt-1 w-72 bg-gray-900/95 backdrop-blur-xl border border-white/10 rounded-lg shadow-2xl py-2 max-h-[80vh] overflow-y-auto z-50">
                  {SERVICES.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-blue-400 transition-colors"
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Tools Dropdown - Second */}
            <div
              className="relative"
              onMouseEnter={() => setToolsOpen(true)}
              onMouseLeave={() => setToolsOpen(false)}
            >
              <button
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-1",
                  isToolsActive
                    ? "text-blue-400"
                    : "text-white hover:text-blue-400 hover:bg-gray-800"
                )}
              >
                Tools
                <ChevronDown className={cn(
                  "h-4 w-4 transition-transform",
                  toolsOpen && "rotate-180"
                )} />
              </button>

              {toolsOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-gray-900/95 backdrop-blur-xl border border-white/10 rounded-lg shadow-2xl py-2 z-50">
                  {TOOLS.map((tool) => (
                    <Link
                      key={tool.href}
                      href={tool.href}
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-blue-400 transition-colors"
                    >
                      {tool.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Shopify Apps Dropdown - Third */}
            <div
              className="relative"
              onMouseEnter={() => setShopifyAppsOpen(true)}
              onMouseLeave={() => setShopifyAppsOpen(false)}
            >
              <button
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-1",
                  isShopifyAppsActive
                    ? "text-purple-400"
                    : "text-white hover:text-purple-400 hover:bg-gray-800"
                )}
              >
                Shopify Apps
                <ChevronDown className={cn(
                  "h-4 w-4 transition-transform",
                  shopifyAppsOpen && "rotate-180"
                )} />
              </button>

              {shopifyAppsOpen && (
                <div className="absolute top-full left-0 mt-1 w-72 bg-gray-900/95 backdrop-blur-xl border border-white/10 rounded-lg shadow-2xl py-2 z-50">
                  {SHOPIFY_APPS.map((app) => (
                    <Link
                      key={app.href}
                      href={app.href}
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-purple-400 transition-colors"
                    >
                      {app.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {NAV_LINKS.map((item) => {
              const active = isActive(item.href)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                    active
                      ? "text-blue-400"
                      : "text-white hover:text-blue-400 hover:bg-gray-800"
                  )}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-800"
            aria-label="Toggle menu"
          >
            {open ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile nav */}
        {open && (
          <nav
            aria-label="Mobile"
            className="md:hidden border-t border-white/10 pb-4 bg-black/30 backdrop-blur-lg"
          >
            <ul className="flex flex-col py-2 space-y-1">
              {/* Mobile Services - First */}
              <li>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className={cn(
                    "w-full text-left px-4 py-2 text-sm font-medium rounded-md transition-colors flex items-center justify-between",
                    isServicesActive
                      ? "text-blue-400 bg-gray-800"
                      : "text-white hover:bg-gray-800"
                  )}
                >
                  Services
                  <ChevronDown className={cn(
                    "h-4 w-4 transition-transform",
                    servicesOpen && "rotate-180"
                  )} />
                </button>
                {servicesOpen && (
                  <ul className="mt-2 ml-4 space-y-1">
                    {SERVICES.map((service) => (
                      <li key={service.href}>
                        <Link
                          href={service.href}
                          onClick={() => {
                            setOpen(false)
                            setServicesOpen(false)
                          }}
                          className="block px-4 py-2 text-sm text-gray-300 hover:text-blue-400 hover:bg-gray-800 rounded-md transition-colors"
                        >
                          {service.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              {/* Mobile Tools - Second */}
              <li>
                <button
                  onClick={() => setToolsOpen(!toolsOpen)}
                  className={cn(
                    "w-full text-left px-4 py-2 text-sm font-medium rounded-md transition-colors flex items-center justify-between",
                    isToolsActive
                      ? "text-blue-400 bg-gray-800"
                      : "text-white hover:bg-gray-800"
                  )}
                >
                  Tools
                  <ChevronDown className={cn(
                    "h-4 w-4 transition-transform",
                    toolsOpen && "rotate-180"
                  )} />
                </button>
                {toolsOpen && (
                  <ul className="mt-2 ml-4 space-y-1">
                    {TOOLS.map((tool) => (
                      <li key={tool.href}>
                        <Link
                          href={tool.href}
                          onClick={() => {
                            setOpen(false)
                            setToolsOpen(false)
                          }}
                          className="block px-4 py-2 text-sm text-gray-300 hover:text-blue-400 hover:bg-gray-800 rounded-md transition-colors"
                        >
                          {tool.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              {/* Mobile Shopify Apps - Third */}
              <li>
                <button
                  onClick={() => setShopifyAppsOpen(!shopifyAppsOpen)}
                  className={cn(
                    "w-full text-left px-4 py-2 text-sm font-medium rounded-md transition-colors flex items-center justify-between",
                    isShopifyAppsActive
                      ? "text-purple-400 bg-gray-800"
                      : "text-white hover:bg-gray-800"
                  )}
                >
                  Shopify Apps
                  <ChevronDown className={cn(
                    "h-4 w-4 transition-transform",
                    shopifyAppsOpen && "rotate-180"
                  )} />
                </button>
                {shopifyAppsOpen && (
                  <ul className="mt-2 ml-4 space-y-1">
                    {SHOPIFY_APPS.map((app) => (
                      <li key={app.href}>
                        <Link
                          href={app.href}
                          onClick={() => {
                            setOpen(false)
                            setShopifyAppsOpen(false)
                          }}
                          className="block px-4 py-2 text-sm text-gray-300 hover:text-purple-400 hover:bg-gray-800 rounded-md transition-colors"
                        >
                          {app.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              {NAV_LINKS.map((item) => {
                const active = isActive(item.href)
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "block px-4 py-2 text-sm font-medium rounded-md transition-colors",
                        active
                          ? "text-blue-400 bg-gray-800"
                          : "text-white hover:bg-gray-800"
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
