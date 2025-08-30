"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useCallback } from "react"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
  { href: "/blogs", label: "Blogs" },
  { href: "/pricing", label: "Pricing" },
]

export function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const isActive = useCallback(
    (href: string) => (href === "/" ? pathname === "/" : pathname?.startsWith(href)),
    [pathname],
  )

  return (
    <header className="w-full border-b bg-[#FFFFFF] border border-zinc-300">
      <div className="mx-auto max-w-5xl px-4">
        <div className="flex h-14 items-center justify-between">
          <Link href="/" className="flex items-center gap-2" aria-label="Go to homepage" onClick={() => setOpen(false)}>
            <span className="text-sm font-semibold" style={{ color: "#333333" }}>
              Headless Ecom
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Main">
            {NAV_LINKS.map((item) => {
              const active = isActive(item.href)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn("text-sm font-medium transition-colors")}
                  style={{ color: active ? "#16A34A" : "#333333" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#F97316"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = active ? "#16A34A" : "#333333"
                  }}
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
            className="md:hidden inline-flex items-center justify-center rounded-md p-2"
            aria-label="Toggle menu"
            style={{ color: "#333333" }}
          >
            {open ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6 18L18 6M6 6l12 12" stroke="#333333" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16" stroke="#333333" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )} {}
          </button>
        </div>

        {/* Mobile nav */}
        {open && (
          <nav
            aria-label="Mobile"
            className="md:hidden border-t"
            style={{ borderColor: "#F1F5F9", backgroundColor: "#FFFFFF" }}
          >
            <ul className="flex flex-col py-1">
              {NAV_LINKS.map((item) => {
                const active = isActive(item.href)
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      onClick={() => setOpen(false)}
                      className="block px-2 py-2 text-sm font-medium"
                      style={{ color: active ? "#16A34A" : "#333333" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "#F97316"
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = active ? "#16A34A" : "#333333"
                      }}
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
