"use client";
import SlideshowBackground from "@/app/components/backgrounds/SlideshowBackground";

const images = [
  "/images/backgrounds/uni1.jpg",
  "/images/backgrounds/uni2.jpg",
  "/images/backgrounds/uni3.jpg",
];

export default function UniversityChecker() {
  return (
    <section className="relative min-h-screen px-6 py-24">
      <SlideshowBackground images={images} />

      <div className="max-w-3xl mx-auto bg-black/50 backdrop-blur-xl p-10 rounded-2xl">
        <h1 className="text-4xl font-black mb-6 text-center">
          University Programme Checker
        </h1>

        {/* YOUR EXISTING APS LOGIC GOES HERE – unchanged */}
      </div>
    </section>
  );
}
