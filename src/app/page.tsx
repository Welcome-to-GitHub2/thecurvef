"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import StarryBackground from "@/app/components/backgrounds/StarryBackground";

export default function Home() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-6">
      <StarryBackground />

      <div className="max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl lg:text-7xl font-black mb-6"
        >
          Ace Your Matric.<br />Get Into University.
        </motion.h1>

        <p className="text-xl text-[#E0F2F7] mb-12">
          Past papers, APS calculators, tutors & legendary camps.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link href="/past-papers" className="btn-primary">
            Past Papers
          </Link>
          <Link href="/aps-calculator" className="btn-secondary">
            Calculate APS
          </Link>
        </div>
      </div>
    </section>
  );
}
