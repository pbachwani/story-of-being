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

  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 1],
    ["90%", "100%", "100%"],
  );
  // const height = useTransform(scrollYProgress, [0, 1], ["", "100svh"]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.4], ["32px", "0px"]);

  return (
    <div
      ref={ref}
      className="min-h-screen flex items-center justify-center mt-20 relative"
    >
      <motion.div
        style={{
          scale,
          borderRadius,
          transition: { ease: [0.22, 1, 0.36, 1] },
        }}
        transition={{ ease: "easeOut" }}
        className="relative w-screen h-full"
      >
        <img
          src="/aboutpage/8.jpg"
          alt=""
          className="w-full h-full object-cover absolute"
        />
        <Contact />
      </motion.div>
    </div>
  );
}
