"use client"

import Link from "next/link"
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

  const isActive = useCallback(
    (href: string) => (href === "/" ? pathname === "/" : pathname?.startsWith(href)),
    [pathname],
  )

  const isServicesActive = pathname?.startsWith("/services")

  return (
    <header className="w-full border-b border-border bg-background/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2"
            aria-label="Go to homepage"
            onClick={() => setOpen(false)}
          >
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              ScaleFront
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main">
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
                      ? "text-primary"
                      : "text-foreground hover:text-primary hover:bg-secondary/50"
                  )}
                >
                  {item.label}
                </Link>
              )
            })}

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-1",
                  isServicesActive
                    ? "text-primary"
                    : "text-foreground hover:text-primary hover:bg-secondary/50"
                )}
              >
                Services
                <ChevronDown className={cn(
                  "h-4 w-4 transition-transform",
                  servicesOpen && "rotate-180"
                )} />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-0 mt-1 w-72 bg-card border border-border rounded-lg shadow-lg py-2 max-h-[80vh] overflow-y-auto z-50">
                  {SERVICES.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-2 text-sm text-card-foreground hover:bg-secondary/50 hover:text-primary transition-colors"
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-secondary/50"
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
            className="md:hidden border-t border-border pb-4"
          >
            <ul className="flex flex-col py-2 space-y-1">
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
                          ? "text-primary bg-secondary/50"
                          : "text-foreground hover:bg-secondary/50"
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              })}

              {/* Mobile Services */}
              <li>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className={cn(
                    "w-full text-left px-4 py-2 text-sm font-medium rounded-md transition-colors flex items-center justify-between",
                    isServicesActive
                      ? "text-primary bg-secondary/50"
                      : "text-foreground hover:bg-secondary/50"
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
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-secondary/50 rounded-md transition-colors"
                        >
                          {service.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
