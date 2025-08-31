"use client"

import { motion } from "framer-motion"

const addons = [
  { feature: "Advanced AI Search", price: "Rs 5000" },
  { feature: "Chaty / Live chat", price: "Rs 3000" },
  { feature: "Pincode Checker", price: "Rs 5000" },
  { feature: "AI Powered Related Products", price: "Rs 10000" },
  { feature: "AI Powered Frequently Bought Together", price: "Rs 10000" },
  { feature: "Abandoned Cart Recovery (Email / WhatsApp)", price: "Rs 10000" },
  { feature: "Loyalty & Rewards Program", price: "Rs 15000" },
  { feature: "Upsell & Cross‑sell in cart", price: "Rs 10000" },
  { feature: "Analytics & Heatmap", price: "Rs 5000" },
  { feature: "Checkout fraud protection for COD", price: "Rs 5000" },
]

export default function AddonsTable() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="overflow-hidden rounded-lg border border-[#16A34A]/15 bg-white"
    >
      <div className="overflow-x-auto">
        <table className="min-w-full border-separate border-spacing-0">
          <caption className="sr-only">Add-on features and fixed pricing</caption>
          <thead>
            <tr className="bg-[#F1F5F9] text-left text-sm">
              <th scope="col" className="px-4 py-3 font-medium text-[#333333]">
                Feature
              </th>
              <th scope="col" className="px-4 py-3 font-medium text-[#333333]">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            {addons.map((a, idx) => (
              <tr key={a.feature} className={idx % 2 === 0 ? "bg-white" : "bg-[#F1F5F9]/60"}>
                <td className="px-4 py-3 text-sm">{a.feature}</td>
                <td className="px-4 py-3 text-sm font-medium text-[#16A34A]">{a.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="px-4 py-3 text-xs text-[#333333]/70 md:hidden">Table scrolls horizontally on small screens.</p>
    </motion.div>
  )
}
