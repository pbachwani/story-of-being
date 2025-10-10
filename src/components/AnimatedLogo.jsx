"use client";
import Image from "next/image";
import Link from "next/link";
import { useLenis } from "lenis/react";
import { useEffect, useState } from "react";
import { easeOut } from "motion";

export const AnimatedLogo = () => {
  const [scrolled, setScrolled] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    console.log(lenis);
    if (lenis) {
      lenis.scrollTo(0, {
        duration: 1.2,
        // easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
        // immediate: false,
        easeOut,
        setImmediate: false,
      });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    // <Link href="/">
    <div
      className={`transition-all duration-500 ease-in-out z-30
        ${
          scrolled
            ? "fixed top-2 left-16 w-16 h-auto z-50"
            : "fixed left-1/2 -translate-x-1/2 top-1/4 -translate-y-1/3 md:left-1/4 md:top-1/2 md:-translate-y-1/2 lg:w-[480px] xl:w-[600px] w-72 h-auto"
        }`}
      //   style={{ pointerEvents: "none" }}
      onClick={scrollToTop}
      style={{ cursor: "pointer" }} // Show pointer cursor to indicate clickable
    >
      {/* Logo Image Option */}

      <Image
        src="/logo-green-nobg.png"
        alt="story of being logo"
        className="w-full h-full object-contain z-50"
        // width={500}
        width={500}
        height={500}
      />

      {/* Or Logo Text Option */}
      {/* <span className="block font-serif text-green-900 text-[56px] leading-tight tracking-tight">
        Story{" "}
        <span className="font-serif text-green-900 text-[42px] align-top">
        of
        </span>{" "}
        Being
        <div className="block text-xs font-sans mt-1 tracking-widest text-green-900">
        BY KEYA VASWANI
        </div>
        </span> */}
    </div>
    // </Link>
  );
};
