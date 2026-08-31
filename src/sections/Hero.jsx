"use client";
import { AnimatedLogo } from "@/components/AnimatedLogo";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import AnimatedLink from "@/components/AnimatedLink";
import { motion } from "motion/react";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const contentRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(contentRef.current, {
        opacity: 0,
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "+=500",
          scrub: true,
        },
      });
      gsap.to(bottomRef.current, {
        opacity: 0,
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "+=500",
          scrub: true,
        },
      });
    });
  }, []);
  return (
    <section className="w-screen h-screen min-h-screen overflow-hidden">
      <video
        playsInline
        preload="auto"
        className="w-full h-screen object-cover"
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
        <div className="flex flex-col md:flex-row justify-center items-center h-full w-full max-w-7xl gap-2 max-md:pb-14">
          {/* left col */}
          <div className="w-full flex flex-col justify-center items-center gap-2 h-fit hover:cursor-pointer">
            <h1 className="md:text-3xl text-xl font-bold hover:scale-110 transition-all duration-300 ease-out">
              <AnimatedLink href="/films" className="">
                Films
              </AnimatedLink>
            </h1>
            {/* <span className="w-full mx-20 h-px border-t border-white" /> */}
            <p className="text-center md:px-4 px-16 max-md:text-sm ">
              Explore cinematic projects, storytelling, and films.
            </p>
            <AnimatedLink
              href="/films"
              className="md:hidden text-sm border border-white px-2.5 py-0.5 rounded-3xl"
            >
              Know more
            </AnimatedLink>
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
          <div className="w-full flex flex-col justify-center items-center gap-2 h-fit hover:cursor-pointer">
            <h1 className="md:text-3xl text-xl font-bold hover:scale-110 transition-all duration-300 ease-out">
              <AnimatedLink href="/telepathy" className="">
                Telepathy
              </AnimatedLink>
            </h1>
            <p className="text-center md:px-4 px-16 max-md:text-sm">
              Discover sessions and insights on connecting deeply with animals &
              Nature.
            </p>
            <AnimatedLink
              href="/telepathy"
              className="md:hidden text-sm border border-white px-2.5 py-0.5 rounded-3xl"
            >
              Telepathy
            </AnimatedLink>
          </div>
        </div>
      </div>
      <div
        ref={bottomRef}
        className="absolute md:bottom-6 bottom-10 left-1/2 -translate-x-1/2 flex justify-center items-center w-full max-w-6xl p-4 text-white"
      >
        <div className="w-fit px-4">
          <p className="text-nowrap">Two worlds</p>
        </div>
        <div className="w-full border-b border-white/50">
          {/* <ChevronDown size={48} className="" /> */}
          {/* <span className="border-b border-white w-full" /> */}
        </div>
        <div className="w-fit px-4">
          <p className="text-nowrap">One journey</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
