"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import clsx from "clsx";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY && currentY > 50) {
        // scrolling down
        setShow(false);
      } else {
        // scrolling up
        setShow(true);
      }

      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  return (
    <motion.nav
      className={clsx(
        "fixed top-0 left-0 z-50 w-screen h-24 flex justify-center items-center text-lg font-semibold transition-transform duration-500 ease-out",
        show ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <div className="gap-6 hidden md:flex text-white font-medium backdrop-blur-xl bg-[#0037b]/10 bg-black/20 p-4 rounded-lg text-[16px]">
        <Link href={"/"} className="nav-buttons">
          Home
        </Link>
        <Link href={"/about"} className="nav-buttons">
          About
        </Link>
        <Link href={"/films"} className="nav-buttons">
          Films
        </Link>
        <Link href={"/telepathy"} className="nav-buttons">
          Telepathy
        </Link>
        <Link href={"/media"} className="nav-buttons">
          Media
        </Link>
        <Link href={"/#contact"} className="nav-buttons">
          Contact
        </Link>
      </div>
      <div className="block md:hidden">
        {/* replace with hamburger menu later */}
        <p>...</p>
      </div>
    </motion.nav>
  );
};

export default Navbar;
