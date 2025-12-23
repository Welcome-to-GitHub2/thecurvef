"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SlideshowBackground({
  images,
}: {
  images: string[];
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const i = setInterval(
      () => setIndex((p) => (p + 1) % images.length),
      6000
    );
    return () => clearInterval(i);
  }, [images.length]);

  return (
    <div className="absolute inset-0 -z-10">
      {images.map((src, i) => (
        <motion.div
          key={src}
          className="absolute inset-0"
          animate={{ opacity: i === index ? 1 : 0 }}
          transition={{ duration: 1.5 }}
        >
          <Image src={src} alt="" fill className="object-cover" />
        </motion.div>
      ))}
      <div className="absolute inset-0 bg-[#0F4C5C]/45" />
    </div>
  );
}
