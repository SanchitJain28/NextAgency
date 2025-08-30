"use client"

import { motion } from "framer-motion"

export default function DottedSeparator() {
  return (
    <div className="relative flex items-center justify-center my-10">
      {/* Base line */}
      <div className="relative h-[3px] w-full bg-gray-200 rounded-full overflow-hidden">
        {/* Moving beam */}
        <motion.div
          className="absolute top-0 h-full w-40 bg-gradient-to-r from-transparent via-orange-500 to-transparent"
          animate={{ x: ["-200px", "100vw"] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </div>
  )
}
