'use client';
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#0F4C5C] to-[#001F2B]">
      {/* Subtle glowing particles background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute w-full h-full">
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                width: Math.random() * 4 + 2,
                height: Math.random() * 4 + 2,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      {/* Navbar (your existing one) */}
      <header className="relative z-50">
        {/* Your Navbar component here - assuming it's imported */}
        {/* <Navbar /> */}
        {/* If you don't have it in layout, paste your navbar code here */}
      </header>

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl lg:text-7xl font-black text-white leading-tight mb-6"
        >
          Ace Your Matric.<br />
          Get Into University.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-xl lg:text-2xl text-[#E0F2F7] mb-12"
        >
          Free past papers, APS calculator, NBT practice & legendary camps.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <Link
            href="/past-papers"
            className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white font-bold py-6 px-12 rounded-xl text-2xl transition shadow-lg"
          >
            Download Past Papers →
          </Link>
          <Link
            href="/aps-calculator"
            className="bg-white text-[#0F4C5C] hover:bg-gray-100 font-bold py-6 px-12 rounded-xl text-2xl transition shadow-lg"
          >
            Calculate My APS
          </Link>
        </motion.div>
      </main>
    </div>
  );
}