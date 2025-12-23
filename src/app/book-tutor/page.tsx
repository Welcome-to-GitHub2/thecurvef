"use client";
import SlideshowBackground from "@/app/components/backgrounds/SlideshowBackground";
import Link from "next/link";

const images = [
  "/images/backgrounds/tut1.jpg",
  "/images/backgrounds/tut2.jpg",
];

export default function BookTutor() {
  return (
    <section className="relative min-h-screen px-6 py-24">
      <SlideshowBackground images={images} />

      <div className="max-w-2xl mx-auto bg-black/50 backdrop-blur-xl p-10 rounded-2xl text-center">
        <h1 className="text-4xl font-black mb-6">Book Your Tutor</h1>

        <p className="mb-8 text-lg">
          One-on-one & group tutoring with matric specialists.
        </p>

        <Link
          href="https://wa.me/27821234567"
          className="bg-[#FF6B35] px-10 py-5 rounded-xl font-bold text-xl"
        >
          Book via WhatsApp
        </Link>
      </div>
    </section>
  );
}
