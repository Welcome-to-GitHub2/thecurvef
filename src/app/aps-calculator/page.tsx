'use client';
import { useState } from "react";

export default function ApsCalculator() {
  const [subjects, setSubjects] = useState<string[]>(Array(7).fill("")); // Empty strings for blank inputs
  const [aps, setAps] = useState<number | null>(null);

  const handleChange = (index: number, value: string) => {
    if (value === "" || (/^\d+$/.test(value) && parseInt(value) <= 100)) {
      const newSubjects = [...subjects];
      newSubjects[index] = value;
      setSubjects(newSubjects);
    }
  };

  const calculateAps = () => {
    let total = 0;
    const points = subjects.map(val => {
      const perc = parseInt(val) || 0;
      if (perc >= 80) return 7;
      if (perc >= 70) return 6;
      if (perc >= 60) return 5;
      if (perc >= 50) return 4;
      if (perc >= 40) return 3;
      if (perc >= 30) return 2;
      return 1; // Some universities give 1 for 20-29%, but most 0 below 30 – adjust if needed
    });

    // Best 6 subjects
    const mainPoints = points.slice(0, 6).sort((a, b) => b - a).slice(0, 6);
    total = mainPoints.reduce((sum, p) => sum + p, 0);

    // Life Orientation – halved (common rule, e.g., UJ, UP halve LO)
    const loPoints = points[6] / 2;
    total += loPoints;

    setAps(Math.round(total));
  };

  return (
    <section className="bg-[#0F4C5C] min-h-screen flex flex-col items-center justify-center px-6 py-12 text-white">
      <h1 className="text-4xl lg:text-5xl font-black text-center mb-12">
        APS Calculator 2026
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl w-full mb-12">
        {subjects.map((val, i) => (
          <input
            key={i}
            type="number"
            value={val}
            onChange={(e) => handleChange(i, e.target.value)}
            placeholder={i === 6 ? "Life Orientation %" : `Subject ${i + 1} %`}
            className="p-4 rounded-lg text-black text-lg focus:outline-none focus:ring-4 focus:ring-[#FF6B35]"
            min="0"
            max="100"
          />
        ))}
      </div>

      <button
        onClick={calculateAps}
        className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white font-bold py-6 px-16 rounded-xl text-2xl transition shadow-2xl mb-12"
      >
        Calculate APS
      </button>

      {aps !== null && (
        <div className="text-center">
          <p className="text-3xl font-bold mb-4">Your APS Score:</p>
          <p className="text-7xl font-black text-[#FF6B35] mb-6">{aps}</p>
          <p className="text-xl">Maximum possible: ~42 (varies by university rules for LO)</p>
          <p className="text-lg mt-6">
            Use the University Checker to see what you qualify for!
          </p>
        </div>
      )}
    </section>
  );
}