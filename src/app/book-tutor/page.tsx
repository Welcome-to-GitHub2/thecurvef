'use client';
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const backgroundImages = [
  "/images/backgrounds/tut1.jpg",
  "/images/backgrounds/tut2.jpg",
  "/images/backgrounds/tut3.jpg",
  "/images/backgrounds/tut4.jpg",
  "/images/backgrounds/tut5.jpg",
];

export default function BookTutor() {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen">
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
      <div className="absolute inset-0 bg-[#0F4C5C]/40" />

      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-12 text-white">
        <h1 className="text-4xl lg:text-5xl font-black mb-8 text-center">
          Book Your Tutor
        </h1>

        <p className="text-xl mb-12 max-w-3xl mx-auto text-center">
          Get personalized one-on-one or small group tutoring from our expert matric specialists. Limited spots available!
        </p>

        <div className="bg-[#1a5c70]/70 p-8 rounded-xl shadow-lg max-w-2xl w-full mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">How to Book</h2>
          <ol className="text-left space-y-4 text-lg mb-8">
            <li>1. Choose your subject(s) and preferred times.</li>
            <li>2. Contact us via WhatsApp or email.</li>
            <li>3. Secure your spot with a small deposit.</li>
          </ol>
          <Link 
            href="https://wa.me/27821234567?text=Hi%20TheCurveF!%20I%20want%20to%20book%20a%20tutor%20for%20matric%202026."
            className="inline-block bg-[#FF6B35] hover:bg-[#E55A2B] font-bold py-6 px-12 rounded-xl text-2xl transition mb-4 w-full text-center"
            target="_blank"
          >
            Book via WhatsApp
          </Link>
          <p className="text-sm mt-4 text-center">
            Or email: info@thecurvef.co.za
          </p>
        </div>
      </section>
    </div>
  );
}