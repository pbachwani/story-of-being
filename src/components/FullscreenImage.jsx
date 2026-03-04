"use client";

import Contact from "@/sections/Contact";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function FullscreenImage() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 100%"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], ["80%", "100%"]);
  const height = useTransform(scrollYProgress, [0, 1], ["80vh", "100vh"]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["32px", "0px"]);

  return (
    <div
      ref={ref}
      className="h-screen flex items-center justify-center mt-24 relative overflow-y-scroll"
    >
      <motion.div
        style={{ scale, height, borderRadius }}
        className="overflow-hidden relative w-screen"
      >
        <img
          src="/aboutpage/8.jpg"
          alt=""
          className="w-full h-full object-cover absolute inset-0"
        />
        <Contact />
      </motion.div>
    </div>
  );
}
