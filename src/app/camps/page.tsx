'use client';
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const backgroundImages = [
  "/images/backgrounds/camp1.jpg",
  "/images/backgrounds/camp2.jpg",
  "/images/backgrounds/camp3.jpg",
  "/images/backgrounds/camp4.jpg",
  "/images/backgrounds/camp5.jpg",
];

export default function Camps() {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center px-6 py-12 text-white">
      {/* Background Slideshow */}
      {backgroundImages.map((src, index) => (
        <motion.div
          key={src}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentBg ? 1 : 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <Image src={src} alt="Background" fill className="object-cover" />
        </motion.div>
      ))}
      <div className="absolute inset-0 bg-[#0F4C5C]/65" />

      <div className="relative z-10 max-w-4xl w-full text-center">
        <h1 className="text-4xl lg:text-5xl font-black mb-8">
          Legendary Camps
        </h1>

        <p className="text-xl mb-12 max-w-3xl mx-auto">
          Join our intensive revision camps – designed to boost your marks and prepare you for matric success.
        </p>

        <div className="bg-[#1a5c70]/70 p-8 rounded-xl shadow-lg max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl font-bold mb-6">Upcoming Camps 2026</h2>
          <ul className="text-left space-y-4 text-lg mb-8">
            <li>• February 2026: Pre-Matric Revision Camp</li>
            <li>• June 2026: Mid-Year Intensive</li>
            <li>• September 2026: Final Push Camp</li>
          </ul>
          <p className="text-lg mb-6">
            See more pictures and videos from previous camps on our Facebook page!
          </p>
          <Link 
            href="https://www.facebook.com/TheCurveF/photos"
            className="inline-block bg-[#FF6B35] hover:bg-[#E55A2B] font-bold py-6 px-12 rounded-xl text-2xl transition mb-4"
            target="_blank"
          >
            View on Facebook
          </Link>
        </div>

        <Link 
          href="/contact"
          className="inline-block bg-white text-[#0F4C5C] font-bold py-4 px-8 rounded-xl text-xl transition"
        >
          Book Your Spot
        </Link>
      </div>
    </section>
  );
}