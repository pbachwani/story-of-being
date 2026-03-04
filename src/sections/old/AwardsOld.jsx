"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AwardsOld = () => {
  const wrapperRef = useRef(null);
  const imageRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const awards = [
    {
      title: "The 63rd National Film Award",
      image: "/awards/1.png",
    },
    {
      title: "Forbes Featured",
      image: "/awards/3.png",
    },
    {
      title: "TEDx",
      image: "/awards/2.png",
    },
    {
      title: "National Geographic Short Film Showcase",
      image: "/awards/5.png",
    },
    {
      title: "Lakme Fashion Week",
      image: "/awards/7.png",
    },
    {
      title: "Mumbai Women's International Film Festival",
      image: "/awards/6.png",
    },
    {
      title: "The Heritage Film Festival",
      image: "/awards/9.png",
    },
    {
      title: "Stockholm International Women's Film Festival",
      image: "/awards/10.png",
    },
    {
      title: "India Unplugged",
      image: "/awards/11.png",
    },
    {
      title: "Broadcasted in UK for Community Channel",
      image: "/awards/12.png",
    },
    {
      title: "Woodpecker Film Festival, Screened",
      image: "/awards/16.png",
    },
    {
      title: "Bharatiya Chitra Film Festival - Special Jury Award",
      image: "/awards/15.png",
    },
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
        // const index = Math.floor(progress * items.length);

        const index = Math.min(
          items.length - 1,
          Math.floor(progress * items.length),
        );

        setActiveIndex(index);

        items.forEach((item, i) => {
          item.classList.toggle("active", i === index);
        });
      },
    });

    return () => trigger.kill();
  }, []);

  useEffect(() => {
    if (!imageRef.current) return;

    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 1.05 },
      { opacity: 1, scale: 1, duration: 0.5, ease: "power3.out" },
    );
  }, [activeIndex]);

  return (
    <section className="w-full md:px-16 px-2 pt-16 pb-8 bg-background">
      <div className="max-w-[1440px] mx-auto flex gap-10">
        {/* LEFT — TEXT */}
        <div className="flex-1">
          <h1 className="md:text-4xl text-2xl font-abril">Awards</h1>

          <p
            ref={wrapperRef}
            className="flex flex-wrap gap-1 md:gap-1 mt-4 mx-2"
          >
            {awards.map((award, i) => (
              <span
                key={i}
                className={`md:text-2xl text-xl w-full font-semibold transition-all duration-300 text-[#2A5311] ${
                  activeIndex === i ? "opacity-100" : "opacity-30"
                }`}
              >
                {award.title}
              </span>
            ))}
          </p>
        </div>

        {/* RIGHT — STICKY IMAGE */}
        <div className="hidden lg:block w-[450px] flex-shrink-0">
          <div className="sticky top-1/2 w-full h-fit overflow-hidden pointer-events-none">
            <img
              ref={imageRef}
              key={awards[activeIndex].image}
              src={awards[activeIndex].image}
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsOld;
