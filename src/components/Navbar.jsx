"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import clsx from "clsx";
import HamburgerComponent from "./HamburgerComponent";
import MotionDrawer from "./MotionDrawer";
import AnimatedLink from "./AnimatedLink";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

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
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, delay: 1 }}
        className={clsx(
          "fixed top-0 left-0 z-50 w-screen h-24 flex justify-center items-center font-semibold transition-transform duration-500 ease-out",
          show ? "translate-y-0" : "-translate-y-full",
        )}
      >
        <div className="gap-6 hidden md:flex text-white font-medium backdrop-blur-xl bg-black/20 p-4 rounded-lg space-x-4">
          <AnimatedLink href={"/"} className="nav-buttons">
            Home
          </AnimatedLink>
          <AnimatedLink href={"/about"} className="nav-buttons">
            About
          </AnimatedLink>
          <AnimatedLink href={"/films"} className="nav-buttons">
            Films
          </AnimatedLink>
          <AnimatedLink href={"/telepathy"} className="nav-buttons">
            Telepathy
          </AnimatedLink>
          <AnimatedLink href={"/media"} className="nav-buttons">
            Media
          </AnimatedLink>
          <AnimatedLink href={"/#contact"} className="nav-buttons">
            Contact
          </AnimatedLink>
        </div>
      </motion.nav>
      <div className="md:hidden w-fit h-fit absolute z-50 top-0 right-0">
        <MotionDrawer
          direction="right"
          buttonOpeningVariants="stay"
          width={300}
          className="text-black"
          isOpen={isOpen}
          onToggle={setIsOpen}
        >
          <nav className="space-y-4 overflow-x-hidden font-montserrat text-xl font-medium">
            <Link
              href="/"
              className="block "
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              About
            </Link>
            <Link
              href="/films"
              className="block "
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Films
            </Link>
            <Link
              href="/telepathy"
              className="block "
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Telepathy
            </Link>
            <Link
              href="/media"
              className="block "
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Media
            </Link>
            <Link
              href="/#contact"
              className="block "
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Contact
            </Link>
          </nav>
        </MotionDrawer>
      </div>
    </>
  );
};

export default Navbar;
