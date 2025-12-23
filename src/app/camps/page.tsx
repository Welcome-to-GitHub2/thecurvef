"use client";
import SlideshowBackground from "@/app/components/backgrounds/SlideshowBackground";
import Link from "next/link";

const images = [
  "/images/backgrounds/camp1.jpg",
  "/images/backgrounds/camp2.jpg",
  "/images/backgrounds/camp3.jpg",
];

export default function Camps() {
  return (
    <section className="relative min-h-screen px-6 py-24">
      <SlideshowBackground images={images} />

      <div className="max-w-2xl mx-auto bg-black/50 backdrop-blur-xl p-10 rounded-2xl text-center">
        <h1 className="text-4xl font-black mb-6">Legendary Camps</h1>

        <p className="mb-8 text-lg">
          Intensive revision camps designed for results.
        </p>

        <Link href="/contact" className="btn-secondary">
          Book Your Spot
        </Link>
      </div>
    </section>
  );
}
