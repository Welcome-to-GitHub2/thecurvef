'use client';
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#0F4C5C] to-[#001F2B] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight mb-6">
        Ace Your Matric.<br />Get Into University.
      </h1>
      <p className="text-xl lg:text-2xl text-[#E0F2F7] mb-12">
        Free past papers, APS calculator, NBT practice & legendary camps.
      </p>
      <div className="flex flex-col sm:flex-row gap-6">
        <Link
          href="/past-papers"
          className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white font-bold py-6 px-12 rounded-xl text-2xl transition"
        >
          Download Past Papers →
        </Link>
        <Link
          href="/aps-calculator"
          className="bg-white text-[#0F4C5C] hover:bg-gray-100 font-bold py-6 px-12 rounded-xl text-2xl transition"
        >
          Calculate My APS
        </Link>
      </div>
    </div>
  );
}