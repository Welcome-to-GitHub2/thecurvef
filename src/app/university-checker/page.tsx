'use client';
import { useState } from "react";
import Link from "next/link";

interface ProgramInfo {
  minAps: number;
  url: string;
}

export default function UniversityChecker() {
  const [apsInput, setApsInput] = useState<string>("");
  const [qualifiedPrograms, setQualifiedPrograms] = useState<[string, ProgramInfo][]>([]);
  const [hasChecked, setHasChecked] = useState<boolean>(false); // Track if button was clicked

  const universities: Record<string, ProgramInfo> = {
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
    ) as [string, ProgramInfo][];

    setQualifiedPrograms(qualified);
    setHasChecked(true); // Only now show results
  };

  return (
    <section className="bg-[#0F4C5C] min-h-screen flex flex-col items-center justify-center px-6 py-12 text-white">
      <h1 className="text-4xl lg:text-5xl font-black mb-8 text-center">
        University Programme Checker
      </h1>

      <div className="max-w-md w-full">
        <input
          type="number"
          value={apsInput}
          onChange={(e) => setApsInput(e.target.value)}
          placeholder="Enter your APS score"
          className="w-full p-4 rounded-lg text-black text-lg mb-6 focus:outline-none focus:ring-4 focus:ring-[#FF6B35]"
          min="0"
          max="42"
        />
        <button
          onClick={handleSubmit}
          className="w-full bg-[#FF6B35] hover:bg-[#E55A2B] text-white font-bold py-4 px-8 rounded-lg text-xl transition shadow-lg"
        >
          Check Qualifying Programmes
        </button>
      </div>

      {/* Only show results AFTER button is clicked */}
      {hasChecked && qualifiedPrograms.length > 0 && (
        <div className="mt-12 max-w-4xl w-full text-left">
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
        <p className="mt-12 text-xl max-w-2xl text-center">
          No programmes found for APS {apsInput || "0"}. Try a higher score or check university websites directly for full requirements.
        </p>
      )}
    </section>
  );
}