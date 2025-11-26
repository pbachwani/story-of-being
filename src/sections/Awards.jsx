"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Awards = () => {
  // const listRef = useRef(null);
  const wrapperRef = useRef(null);

  const awards = [
    "63rd National Film Award",
    "Forbes Featured",
    "TEDx",
    "National Geographic Short Film Showcase",
    "Lakme Fashion Week",
    "Mumbai Women’s International Film Festival",
    "The Heritage Film Festival",
    "Stockholm International Women’s Film Festival",
    "India Unplugged",
    "Broadcasted in UK for Community Channel",
    "Woodpecker Film Festival, Screened",
    "Bharatiya Chitra Film Festival - Special Jury Award",
  ];

  useEffect(() => {
    const items = wrapperRef.current.querySelectorAll("span");

    let trigger = ScrollTrigger.create({
      trigger: wrapperRef.current,
      start: "top 70%",
      end: "bottom center",
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;
        const index = Math.floor(progress * items.length);

        items.forEach((item, i) => {
          item.classList.toggle("active", i === index);
        });
      },
    });

    return () => trigger.kill();
  }, []);

  return (
    <section className="w-screen h-full md:px-16 px-2 py-20 mx-auto rounded-t-2xl bg-background">
      <div className="max-w-[1440px] h-full">
        <h1 className="lg:text-7xl text-4xl font-abril">Awards</h1>

        <p
          ref={wrapperRef}
          className="flex flex-wrap gap-6 mt-10 leading-tight"
        >
          {awards.map((award, i) => (
            <span
              key={i}
              className="lg:text-4xl text-xl font-bold opacity-30 transition-all duration-300 text-[#2A5311] hover:opacity-100"
            >
              {award}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
};

export default Awards;
