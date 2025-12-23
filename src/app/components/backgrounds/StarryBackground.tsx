"use client";
import { motion } from "framer-motion";

export default function StarryBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-gradient-to-b from-[#0F4C5C] to-[#001F2B]">
      {Array.from({ length: 40 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full"
          style={{
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{ opacity: [0.3, 1, 0.3], y: [0, -30, 0] }}
          transition={{
            duration: Math.random() * 12 + 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
