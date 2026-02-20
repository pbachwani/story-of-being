"use client";

import Lenis from "lenis";
import { createContext, useContext, useEffect, useRef } from "react";

const LenisContext = createContext(null);

export function LenisProvider({ children }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      anchors: true, // 👈 this is the key
    });
    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <LenisContext.Provider value={lenisRef}>{children}</LenisContext.Provider>
  );
}

export function useLenis() {
  return useContext(LenisContext);
}
