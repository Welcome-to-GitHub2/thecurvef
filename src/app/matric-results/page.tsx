'use client';
import { useState } from "react";
import Link from "next/link";

export default function MatricResults() {
  const [examNumber, setExamNumber] = useState("");

  const handleCheck = () => {
    alert("Checking results for: " + examNumber + " (placeholder)");
  };

  return (
    <section className="bg-[#0F4C5C] min-h-screen flex flex-col items-center justify-center px-6 py-12 text-white">
      <h1 className="text-4xl lg:text-5xl font-black mb-8">
        Matric Results 2025
      </h1>
      <p className="text-xl mb-12">
        Results release: 8 January 2026
      </p>

      {/* WhatsApp/SMS Section */}
      <div className="max-w-3xl w-full bg-[#1a5c70]/70 p-10 rounded-xl shadow-2xl mb-16">
        <h2 className="text-3xl font-bold mb-6">
          Get Results via WhatsApp or SMS
        </h2>
        <p className="text-lg mb-8">
          Receive your results directly on WhatsApp or SMS when released.
        </p>

        <div className="space-y-8">
          <div className="bg-[#0F4C5C]/80 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">How to Apply</h3>
            <ol className="text-left space-y-3 text-lg">
              <li>1. Click "Apply Now" below.</li>
              <li>2. Fill in your exam number and phone number.</li>
              <li>3. Submit — results come automatically.</li>
            </ol>
          </div>

          <Link
            href="https://tinyurl.com/atwc7kbd"
            className="inline-block bg-[#FF6B35] hover:bg-[#E55A2B] text-white font-bold py-6 px-16 rounded-xl text-2xl transition shadow-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apply Now (Official Form)
          </Link>
        </div>

        <p className="text-sm mt-8 opacity-80">
          Application is ongoing. Official service by DBE & partners.
        </p>
      </div>

      {/* Manual Check */}
      <div className="max-w-md w-full">
        <h3 className="text-2xl font-bold mb-4">Manual Check</h3>
        <input
          type="text"
          value={examNumber}
          onChange={(e) => setExamNumber(e.target.value)}
          placeholder="Enter your exam number"
          className="w-full p-5 rounded-lg text-black mb-6 text-lg"
        />
        <button
          onClick={handleCheck}
          className="w-full bg-[#FF6B35] hover:bg-[#E55A2B] text-white font-bold py-5 px-8 rounded-lg text-xl transition"
        >
          Check Results
        </button>
      </div>

      <p className="text-sm mt-16 opacity-70 max-w-2xl">
        Disclaimer: We do not store or process personal information. All data is handled by the Department of Basic Education (DBE) under POPI Act compliance. This page redirects to official services.
      </p>
    </section>
  );
}