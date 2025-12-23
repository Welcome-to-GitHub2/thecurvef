"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const menu = [
    "Home", "Past Papers", "APS Calculator", "University Checker",
    "NBT Practice", "Matric Results", "Book Tutor", "Camps",
    "Tutors", "NSFAS & Bursaries", "Remark & Supp", "Contact",
    "About Us",
  ];

  const getHref = (item: string) => {
    const map: Record<string, string> = {
      "Home": "/", "Past Papers": "/past-papers", "APS Calculator": "/aps-calculator",
      "University Checker": "/university-checker", "NBT Practice": "/nbt-practice",
      "Matric Results": "/matric-results", "Book Tutor": "/book-tutor",
      "Camps": "/camps", "Tutors": "/tutors", "NSFAS & Bursaries": "/nsfas-bursaries",
      "Remark & Supp": "/remark-supplementary", "Contact": "/contact",
      "About Us": "/about",
    };
    return map[item] || "/";
  };

  return (
    <nav className="bg-[#0F4C5C] text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-24">
          <Link href="/" className="flex items-center gap-4">
            <Image 
              src="/logo.jpg" 
              alt="TheCurveF Logo" 
              width={60} 
              height={60} 
              className="rounded-full border-4 border-[#FF6B35]"
            />
            <span className="text-4xl font-black text-[#F5B041]">TheCurveF</span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {menu.map((item) => (
              <Link
                key={item}
                href={getHref(item)}
                className="px-5 py-3 text-lg font-medium rounded-full hover:bg-[#FF6B35] transition"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger – Bigger, stylish, orange glow */}
          <motion.button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-[#F5B041] text-5xl p-4 rounded-full hover:bg-[#FF6B35]/50 transition shadow-lg hover:shadow-[#FF6B35]/50"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {mobileOpen ? "✕" : "☰"}
          </motion.button>
        </div>

        {/* Mobile Menu – Organized grid, spaced, stylish pills */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden py-10 bg-[#0F4C5C]/95 backdrop-blur-md border-t border-white/20"
          >
            <div className="grid grid-cols-2 gap-6 px-8 max-w-4xl mx-auto">
              {menu.map((item) => (
                <Link
                  key={item}
                  href={getHref(item)}
                  className="px-6 py-4 text-lg font-semibold text-[#E0F2F7] bg-[#1a5c70]/70 hover:bg-[#FF6B35] hover:text-white rounded-full transition shadow-md"
                  onClick={() => setMobileOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}