'use client';
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Home-specific slideshow images
const backgroundImages = [
  "/images/backgrounds/home1.jpg",
  "/images/backgrounds/home2.jpg",
  "/images/backgrounds/home3.jpg",
  "/images/backgrounds/home4.jpg",
  "/images/backgrounds/home5.jpg",
  "/images/backgrounds/home6.jpg",
];

export default function Home() {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
    }, 6000); // Change every 6 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* HERO SECTION - Slideshow Background */}
      <section className="relative min-h-screen overflow-hidden flex items-center justify-center text-center">
        {/* Background Images */}
        {backgroundImages.map((src, index) => (
          <motion.div
            key={src}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentBg ? 1 : 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <Image
              src={src}
              alt="Background slideshow"
              fill
              className="object-cover"
              priority={index === 0}
            />
          </motion.div>
        ))}

        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-[#0F4C5C]/65" />

        {/* Content */}
        <div className="relative z-10 max-w-5xl px-6">
          <h1 className="text-5xl lg:text-7xl font-black leading-tight text-white mb-6">
            Ace Your Matric.<br />Get Into University.
          </h1>
          <p className="text-xl lg:text-2xl text-[#E0F2F7] mb-12">
            Free past papers, APS calculator, NBT practice & legendary camps.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/past-papers"
              className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white font-bold py-5 px-10 rounded-xl text-xl transition"
            >
              Download Past Papers →
            </Link>
            <Link
              href="/aps-calculator"
              className="bg-white text-[#0F4C5C] hover:bg-gray-100 font-bold py-5 px-10 rounded-xl text-xl transition"
            >
              Calculate My APS
            </Link>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          <div>
            <div className="text-5xl font-black text-[#FF6B35]">10 000+</div>
            <p className="text-gray-600 mt-3">Papers Downloaded</p>
          </div>
          <div>
            <div className="text-5xl font-black text-[#FF6B35]">8+</div>
            <p className="text-gray-600 mt-3">Years of Camps</p>
          </div>
          <div>
            <div className="text-5xl font-black text-[#FF6B35]">300+</div>
            <p className="text-gray-600 mt-3">Learners Placed</p>
          </div>
          <div>
            <div className="text-5xl font-black text-[#FF6B35]">100%</div>
            <p className="text-gray-600 mt-3">Free Resources</p>
          </div>
        </div>
      </section>
    </>
  );
}