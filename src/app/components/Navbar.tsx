"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const menu = [
  { label: "Home", href: "/" },
  { label: "Past Papers", href: "/past-papers" },
  { label: "APS Calculator", href: "/aps-calculator" },
  { label: "University Checker", href: "/university-checker" },
  { label: "Book Tutor", href: "/book-tutor" },
  { label: "Camps", href: "/camps" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.jpg" alt="TheCurveF" width={48} height={48} className="rounded-full" />
          <span className="font-black text-2xl text-[#F5B041]">TheCurveF</span>
        </Link>

        <div className="hidden md:flex gap-6">
          {menu.map((m) => (
            <Link key={m.href} href={m.href} className="hover:text-[#FF6B35] transition">
              {m.label}
            </Link>
          ))}
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-3xl text-[#FF6B35]">
          ☰
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="md:hidden bg-black/90 backdrop-blur-xl p-6"
          >
            <div className="grid grid-cols-2 gap-4">
              {menu.map((m) => (
                <Link
                  key={m.href}
                  href={m.href}
                  onClick={() => setOpen(false)}
                  className="py-3 px-4 rounded-lg bg-white/10 hover:bg-[#FF6B35]"
                >
                  {m.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
