"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function AnimatedLink({ href = "#", children, className = "" }) {
  return (
    <motion.div
      className={`relative inline-block ${className}`}
      initial="initial"
      whileHover="hover"
    >
      <Link href={href}>{children}</Link>

      <motion.span
        className="absolute left-0 bottom-0 h-[2px] w-full bg-current origin-left"
        variants={{
          initial: { scaleX: 0 },
          hover: { scaleX: 1 },
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}
