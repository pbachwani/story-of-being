"use client";
import { AnimatedLogo } from "@/components/AnimatedLogo";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import AnimatedLink from "@/components/AnimatedLink";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(contentRef.current, {
        opacity: 0,
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top top",
          end: "bottom 20%",
          scrub: true,
        },
      });
    });
  }, []);
  return (
    <section className="w-screen h-screen min-h-screen overflow-hidden">
      <video
        playsInline
        preload="eager"
        className="w-full h-screen object-cover"
        // src="/videos/clip3.mp4"
        type="video/mp4"
        autoPlay
        loop
        muted
      >
        <source src="/videos/Clip3.mp4" type="video/mp4" />
      </video>

      <div
        ref={contentRef}
        className="absolute top-0 left-0 w-full h-full min-h-screen flex flex-col justify-center items-center text-white bg-black/20 max-md:flex-col"
      >
        <div className="flex flex-col md:flex-row justify-center items-center w-full max-w-7xl gap-10">
          {/* left col */}
          <div className="w-full flex flex-col justify-center items-center gap-4 h-full hover:cursor-pointer">
            <h1 className="text-4xl font-bold">
              <AnimatedLink href="/films">Films</AnimatedLink>
            </h1>
            <p className="text-center md:px-4">
              Explore cinematic projects, storytelling, and films.
            </p>
          </div>
          {/* center image */}
          <div className="w-full flex flex-col justify-center items-center gap-4 max-md:p-10">
            <img
              src="/logo-final.png"
              alt="story of being logo"
              className="max-md:max-w-60"
            />
            <p className="font-bold font-raleway tracking-wide mt-2 hidden">
              Two worlds - one journey
            </p>
          </div>
          {/* right col */}
          <div className="w-full flex flex-col justify-center items-center gap-4 h-full hover:cursor-pointer">
            <h1 className="text-4xl font-bold">
              <AnimatedLink href="/telepathy">Telepathy</AnimatedLink>
            </h1>
            <p className="text-center md:px-4">
              Discover sessions and insights on connecting deeply with animals &
              Nature.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex justify-center items-center w-full max-w-6xl p-4 text-white">
        <div className="w-fit px-8">
          <p className="text-nowrap">Two worlds</p>
        </div>
        <div className="w-full border-b">
          {/* <ChevronDown size={48} className="" /> */}
          {/* <span className="border-b border-white w-full" /> */}
        </div>
        <div className="w-fit px-8">
          <p className="text-nowrap">One journey</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
