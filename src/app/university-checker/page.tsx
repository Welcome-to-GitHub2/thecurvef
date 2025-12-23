'use client';
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const backgroundImages = [
  "/images/backgrounds/uni1.jpg",
  "/images/backgrounds/uni2.jpg",
  "/images/backgrounds/uni3.jpg",
  "/images/backgrounds/uni4.jpg",
  "/images/backgrounds/uni5.jpg",
  "/images/backgrounds/uni6.jpg",
  "/images/backgrounds/uni7.jpg",
  "/images/backgrounds/uni8.jpg",
  "/images/backgrounds/uni9.jpg",
];

export default function UniversityChecker() {
  const [apsInput, setApsInput] = useState<string>("");
  const [qualifiedPrograms, setQualifiedPrograms] = useState<[string, { minAps: number; url: string }][]>([]);
  const [hasChecked, setHasChecked] = useState<boolean>(false);

  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const universities: Record<string, { minAps: number; url: string }> = {
    "MBChB Medicine (UP/Wits)": { minAps: 35, url: "https://www.up.ac.za/faculty-of-health-sciences" },
    "BEng Engineering (UP/UJ)": { minAps: 35, url: "https://www.uj.ac.za/faculties/engineering-built-environment" },
    "BCom Accounting (UP)": { minAps: 32, url: "https://www.up.ac.za/faculty-of-economic-and-management-sciences" },
    "LLB Law (UP)": { minAps: 32, url: "https://www.up.ac.za/faculty-of-law" },
    "BSc Computer Science (UJ)": { minAps: 30, url: "https://www.uj.ac.za/faculties/science" },
    "Bachelor of Nursing (UJ)": { minAps: 28, url: "https://www.uj.ac.za/faculties/health-sciences" },
    "National Diploma Engineering (TUT)": { minAps: 24, url: "https://www.tut.ac.za/faculties/engineering" },
    "BEd Foundation Phase (UMP)": { minAps: 26, url: "https://www.ump.ac.za/faculties/education" },
  };

  const handleSubmit = () => {
    const apsNum = parseInt(apsInput) || 0;
    const qualified = Object.entries(universities).filter(
      ([_, info]) => apsNum >= info.minAps
    ) as [string, { minAps: number; url: string }][];
    setQualifiedPrograms(qualified);
    setHasChecked(true);
  };

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
        <h1 className="text-4xl lg:text-5xl font-black text-center mb-8">
          University Programme Checker
        </h1>

        <div className="max-w-md w-full mb-12">
          <input
            type="number"
            value={apsInput}
            onChange={(e) => setApsInput(e.target.value)}
            placeholder="Enter your APS score"
            className="w-full p-4 rounded-lg text-black text-lg mb-6"
            min="0"
            max="42"
          />
          <button
            onClick={handleSubmit}
            className="w-full bg-[#FF6B35] hover:bg-[#E55A2B] text-white font-bold py-4 px-8 rounded-lg text-xl transition"
          >
            Check Qualifying Programmes
          </button>
        </div>

        {hasChecked && qualifiedPrograms.length > 0 && (
          <div className="text-left max-w-4xl w-full">
            <h2 className="text-3xl font-bold text-center mb-8">
              You qualify for {qualifiedPrograms.length} programme{qualifiedPrograms.length > 1 ? "s" : ""}!
            </h2>
            <ul className="space-y-6">
              {qualifiedPrograms.map(([program, { minAps, url }]) => (
                <li key={program} className="bg-[#1a5c70]/50 p-6 rounded-xl shadow-lg">
                  <Link
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl font-bold text-[#FF6B35] hover:underline"
                  >
                    {program}
                  </Link>
                  <p className="text-lg mt-2">Minimum APS required: <span className="font-bold">{minAps}</span></p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {hasChecked && qualifiedPrograms.length === 0 && (
          <p className="mt-12 text-xl text-center">
            No programmes found for APS {apsInput || "0"}. Try a higher score or check university websites directly.
          </p>
        )}
      </section>
    </div>
  );
}