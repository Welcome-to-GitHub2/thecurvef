"use client";
import { useState } from "react";

export default function BookTutor() {
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("success");
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <section className="py-24 bg-gray-50 min-h-screen">
      <div className="max-w-2xl mx-auto px-6">
        <h1 className="text-5xl font-black text-center mb-8">Book Your Tutor</h1>
        <p className="text-2xl text-center text-gray-600 mb-16">R300–R400 per hour • In-person or online</p>

        <div className="bg-white rounded-3xl shadow-2xl p-12">
          <form onSubmit={handleSubmit} className="space-y-8">
            <input type="text" placeholder="Learner name" required className="w-full p-5 rounded-xl border-2 border-gray-300" />
            <input type="tel" placeholder="Parent phone number" required className="w-full p-5 rounded-xl border-2 border-gray-300" />
            <select required className="w-full p-5 rounded-xl border-2 border-gray-300">
              <option value="">Select grade</option>
              <option>Grade 8</option>
              <option>Grade 9</option>
              <option>Grade 10</option>
              <option>Grade 11</option>
              <option>Grade 12</option>
            </select>
            <textarea rows={4} placeholder="Subjects needed" required className="w-full p-5 rounded-xl border-2 border-gray-300"></textarea>

            <button type="submit" className="w-full bg-[#0F4C5C] hover:bg-[#1a5c70] text-white font-black text-xl py-6 rounded-xl">
              Book My Tutor →
            </button>
          </form>

          {status === "success" && (
            <div className="mt-8 bg-green-100 border-2 border-green-600 text-green-800 p-6 rounded-xl text-center font-bold text-xl">
              Booking received! We’ll call you in 5 minutes 🔥
            </div>
          )}
        </div>
      </div>
    </section>
  );
}