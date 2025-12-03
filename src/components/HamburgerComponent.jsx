"use client";

import { useEffect, useState } from "react";
import Hamburger from "hamburger-react";
import Link from "next/link";
import { createPortal } from "react-dom";

export default function HamburgerComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // ensure document exists for portal
  useEffect(() => setMounted(true), []);

  // lock/unlock scroll
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);
    return () => {
      // cleanup on unmount
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  // close on ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" && isOpen) setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/films", label: "Films" },
    { href: "/telepathy", label: "Telepathy" },
    { href: "/media", label: "Media" },
    { href: "/contact", label: "Contact" },
  ];

  const Overlay = (
    <div
      className={`fixed left-0 top-0 w-screen h-[100dvh] z-[999] transition-opacity duration-300 ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
      aria-hidden={!isOpen}
      onMouseDown={() => setIsOpen(false)} // clicking backdrop closes
    >
      {/* backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />

      {/* inner container — stop propagation so clicks inside do not close */}
      <div
        className="relative h-full flex flex-col justify-center pl-10 space-y-8"
        onMouseDown={(e) => e.stopPropagation()}
      >
        {/* mobile-only close/hamburger placed inside overlay so user can always close */}
        <div className="absolute top-4 right-4 z-50 md:hidden">
          {/* This renders the same hamburger-react control — it mirrors state and toggles the same setter */}
          <Hamburger
            toggled={isOpen}
            toggle={setIsOpen}
            size={22}
            color="#fff"
          />
        </div>

        {/* nav links */}
        <nav className="relative z-40 flex flex-col gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setIsOpen(false)}
              className="text-white font-light leading-none tracking-tight text-[40px] md:text-[56px] lg:text-[72px]"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );

  return (
    <>
      {/* original hamburger icon that lives in the navbar — leave it as is */}
      <div className="fixed top-4 right-4 h-full pr-0">
        <Hamburger toggled={isOpen} toggle={setIsOpen} size={22} color="#fff" />
      </div>

      {/* portal overlay with internal hamburger/X (mobile only) */}
      {mounted && createPortal(Overlay, document.body)}
    </>
  );
}
