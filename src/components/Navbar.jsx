"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import clsx from "clsx";
import HamburgerComponent from "./HamburgerComponent";
import MotionDrawer from "./MotionDrawer";

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
    <>
      <motion.nav
        className={clsx(
          "fixed top-0 left-0 z-50 w-screen h-24 flex justify-center items-center font-semibold transition-transform duration-500 ease-out",
          show ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div className="gap-6 hidden md:flex text-white font-medium backdrop-blur-xl bg-black/20 p-4 rounded-lg ">
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
      </motion.nav>
      <div className="md:hidden w-full h-full absolute z-50 top-0 right-0">
        {/* replace with hamburger menu later */}
        {/* <HamburgerComponent /> */}
        <MotionDrawer
          direction="right"
          buttonOpeningVariants="stay"
          width={300}
          className="text-black"
        >
          <nav className="space-y-4 overflow-x-hidden font-montserrat text-4xl font-medium">
            <a href="/" className="block p-2">
              Home
            </a>
            <a href="/about" className="block p-2">
              About
            </a>
            <a href="/films" className="block p-2">
              Films
            </a>
            <a href="/telepathy" className="block p-2">
              Telepathy
            </a>
            <a href="/media" className="block p-2">
              Media
            </a>
            <a href="/#contact" className="block p-2">
              Contact
            </a>
          </nav>
        </MotionDrawer>
      </div>
    </>
  );
};

export default Navbar;
