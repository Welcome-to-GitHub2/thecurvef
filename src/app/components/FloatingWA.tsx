import Link from "next/link";
import Image from "next/image";

export default function FloatingWA() {
  const phoneNumber = "23058115977"; // REPLACE WITH YOUR REAL WHATSAPP NUMBER (e.g., +27 country code, no spaces)
  const message = "Hi TheCurveF! I'm interested in tutoring/camps for matric 2026."; // Pre-filled message

  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Link
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl p-4 transition-all duration-300 hover:scale-110">
        <Image
          src="/whatsapp.svg" // We'll add this SVG next
          alt="Chat on WhatsApp"
          width={40}
          height={40}
          className="drop-shadow-md"
        />
      </div>
      <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white text-sm rounded-lg py-2 px-4 whitespace-nowrap pointer-events-none">
        Chat with us on WhatsApp!
      </div>
    </Link>
  );
}