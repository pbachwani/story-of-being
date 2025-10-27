"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (isHome) {
      const handleScroll = () => setScrolled(window.scrollY > 80);
      window.addEventListener("scroll", handleScroll);
    } else {
      const handleScroll = () => setScrolled(window.scrollY > 0);
      window.addEventListener("scroll", handleScroll);
    }
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 z-50 w-screen h-24 flex justify-between items-center px-10 md:px-16 text-[##2A5312] text-lg font-semibold">
      <Link
        href="/"
        className={`${
          isHome
            ? scrolled
              ? "opacity-100 transition-opacity duration-2000"
              : "opacity-0 transition-opacity duration-75"
            : "opacity-100"
        }`}
      >
        <div className="flex justify-center items-center gap-4">
          <img
            src="/logo-green-nobg.png"
            alt=""
            className="object-contain w-16 h-auto"
          />

          {/* <p className="font-abril opacity-80">Story of Being</p> */}
        </div>
      </Link>

      <div className="gap-8 hidden md:flex text-white font-medium mix-blend-difference">
        <Link
          href={"/about"}
          className="bg-[#f4f4f4] text-black px-2 py-0.5 hover:bg-[#2A5311] hover:text-white hover:rounded-none transition-all duration-200 ease-in-out"
        >
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
    </nav>
  );
};

export default Navbar;
