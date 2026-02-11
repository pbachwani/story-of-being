"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function FadingImageHero({ images = [], interval = 4000 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(id);
  }, [images.length, interval]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Base image (always visible) */}
      <img
        src={images[index]}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Fading overlay image */}
      <motion.img
        key={index}
        src={images[(index + 1) % images.length]}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1.2,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
