"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

type Plan = {
  name: string
  price: string
  highlight: boolean
  badge: string | null
  productRange: string
  features: string[]
  cta: { label: string; href: string }
}

export default function PlanCard({ plan }: { plan: Plan }) {
  const { name, price, highlight, badge, productRange, features, cta } = plan

  return (
    <motion.div whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 300, damping: 22 }}>
      <Card
        className={cn(
          "h-full overflow-hidden bg-white border-[#16A34A]/15",
          highlight ? "ring-2 ring-[#16A34A]" : "ring-1 ring-[#16A34A]/10",
        )}
      >
        <CardHeader className="relative">
          {badge ? (
            <span className="absolute right-4 top-4 rounded-full bg-[#16A34A] px-2.5 py-1 text-xs font-medium text-white">
              {badge}
            </span>
          ) : null}
          <CardTitle className="text-lg">{name}</CardTitle>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="text-2xl font-semibold">{price}</span>
            <span className="text-xs text-[#333333]/70">one‑time</span>
          </div>
          <p className="text-xs text-[#333333]/80">{productRange}</p>
        </CardHeader>
        <CardContent className="flex h-full flex-col">
          <ul className="mb-4 space-y-2">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 text-[#16A34A]" aria-hidden="true" />
                <span className="text-sm">{f}</span>
              </li>
            ))}
          </ul>
          <Button asChild className="mt-auto w-full bg-[#F97316] hover:bg-[#F97316]/90 text-white">
            <Link href={cta.href}>{cta.label}</Link>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}
