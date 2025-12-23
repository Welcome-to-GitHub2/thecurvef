import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import FloatingWA from "@/app/components/FloatingWA";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "TheCurveF – Matric Results, Past Papers & Tutors",
  description: "Free APS calculator, past papers, matric results checker, university checker & booking for tutors/camps.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased text-white bg-[#0F4C5C] min-h-screen">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <FloatingWA />
        <Footer />
      </body>
    </html>
  );
}