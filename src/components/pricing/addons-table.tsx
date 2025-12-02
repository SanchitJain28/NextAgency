"use client"

import { motion } from "framer-motion"

const addons = [
  { feature: "Advanced AI Search", price: "Starting at $60" },
  { feature: "Chaty / Live chat", price: "Starting at $40" },
  { feature: "Pincode Checker", price: "Starting at $60" },
  { feature: "AI Powered Related Products", price: "Starting at $120" },
  { feature: "AI Powered Frequently Bought Together", price: "Starting at $120" },
  { feature: "Abandoned Cart Recovery (Email / WhatsApp)", price: "Starting at $120" },
  { feature: "Loyalty & Rewards Program", price: "Starting at $180" },
  { feature: "Upsell & Cross‑sell in cart", price: "Starting at $120" },
  { feature: "Analytics & Heatmap", price: "Starting at $60" },
  { feature: "Checkout fraud protection for COD", price: "Starting at $60" },
]

export default function AddonsTable() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="overflow-hidden rounded-lg border border-primary/15 bg-card"
    >
      <div className="overflow-x-auto">
        <table className="min-w-full border-separate border-spacing-0">
          <caption className="sr-only">Add-on features and fixed pricing</caption>
          <thead>
            <tr className="bg-secondary/20 text-left text-sm">
              <th scope="col" className="px-4 py-3 font-medium text-foreground">
                Feature
              </th>
              <th scope="col" className="px-4 py-3 font-medium text-foreground">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            {addons.map((a, idx) => (
              <tr key={a.feature} className={idx % 2 === 0 ? "bg-card" : "bg-secondary/20"}>
                <td className="px-4 py-3 text-sm">{a.feature}</td>
                <td className="px-4 py-3 text-sm font-medium text-primary">{a.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="px-4 py-3 text-xs text-muted-foreground md:hidden">Table scrolls horizontally on small screens.</p>
    </motion.div>
  )
}
