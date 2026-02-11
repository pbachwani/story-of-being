"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function FullscreenImage() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 100%"],
  });

  const width = useTransform(scrollYProgress, [0, 1], ["85%", "100%"]);
  const height = useTransform(scrollYProgress, [0, 1], ["80vh", "100vh"]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["32px", "0px"]);

  return (
    <div ref={ref} className="h-screen flex items-center justify-center mt-24">
      <motion.div
        style={{ width, height, borderRadius }}
        className="overflow-hidden"
      >
        <img
          src="/aboutpage/8.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
}
