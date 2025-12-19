"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const menu = [
    "Home", "Past Papers", "APS Calculator", "University Checker",
    "NBT Practice", "Matric Results", "Book Tutor", "Camps",
    "Tutors", "NSFAS & Bursaries", "Remark & Supp", "Contact"
  ];

  const getHref = (item: string) => {
    const map: Record<string, string> = {
      "Home": "/", "Past Papers": "/past-papers", "APS Calculator": "/aps-calculator",
      "University Checker": "/university-checker", "NBT Practice": "/nbt-practice",
      "Matric Results": "/matric-results", "Book Tutor": "/book-tutor",
      "Camps": "/camps", "Tutors": "/tutors", "NSFAS & Bursaries": "/nsfas-bursaries",
      "Remark & Supp": "/remark-supplementary-exams", "Contact": "/contact"
    };
    return map[item] || "/";
  };

  return (
    <nav className="bg-gradient-to-r from-[#1a6f7f] via-[#4b93b8] to-[#6c5ce7] text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4">
            <Image 
              src="/logo.jpg" 
              alt="TheCurveF Logo" 
              width={60} 
              height={60} 
              className="rounded-full border-4 border-[#FF6B35]" 
            />
            <span className="text-4xl font-black text-[#FF6B35]">TheCurveF</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {menu.map((item) => (
              <Link
                key={item}
                href={getHref(item)}
                className="px-5 py-3 text-lg font-medium rounded-full hover:bg-[#FF6B35] hover:text-white transition"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-[#F5B041] text-4xl p-3 rounded-full hover:bg-[#FF6B35]/50 transition"
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden py-8 bg-[#0F4C5C]/95 backdrop-blur-md border-t border-white/20">
            <div className="grid grid-cols-3 gap-x-8 gap-y-6 px-8">
              {menu.map((item) => (
                <Link
                  key={item}
                  href={getHref(item)}
                  className="py-4 text-center text-xl font-semibold text-[#E0F2F7] hover:text-[#FF6B35] hover:scale-105 transition"
                  onClick={() => setMobileOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
