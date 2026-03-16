"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "motion/react";

gsap.registerPlugin(ScrollTrigger);

const Awards = () => {
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

  const awardsNew = [
    "/awards-new/1.png",
    "/awards-new/3.png",
    "/awards-new/2.png",
    "/awards-new/4.png",
    "/awards-new/5.png",
    "/awards-new/6.png",
    "/awards-new/7.png",
    "/awards-new/8.png",
    "/awards-new/9.png",
    "/awards-new/10.png",
    "/awards-new/11.png",
    "/awards-new/12.png",
  ];
  const featured = awardsNew.slice(0, 3);
  const others = awardsNew.slice(3);

  return (
    <section className="w-full md:px-16 px-2 md:pt-16 md:pb-8 bg-background">
      <div className="max-w-[1440px] mx-auto flex flex-col md:gap-10">
        {/* 🔥 Top Featured Logos */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-10 items-center justify-items-center">
          {featured.map((src, i) => (
            <motion.img
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: i * 0.01, // 👈 stagger delay
                ease: "easeOut",
              }}
              key={i}
              src={src}
              alt="award"
              className="h-28 md:h-56 object-contain transition duration-500 ease-out"
            />
          ))}
        </div>

        <div className="flex flex-col lg:gap-10">
          {/* Row 2 */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 justify-items-center">
            {others.slice(0, 4).map((src, i) => (
              <motion.img
                key={i}
                src={src}
                className="h-40 object-contain"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.08,
                  ease: "easeOut",
                }}
              />
            ))}
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-2 lg:grid-cols-5 justify-items-center">
            {others.slice(4).map((src, i) => (
              <motion.img
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.08, // 👈 stagger delay
                  ease: "easeOut",
                }}
                key={i}
                src={src}
                className="h-40 object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;

{
  /* LEFT — TEXT */
}
// <div className="flex-1">
//   <h1 className="md:text-4xl text-2xl font-abril">Awards</h1>

//   <p
//     ref={wrapperRef}
//     className="flex flex-wrap gap-1 md:gap-1 mt-4 mx-2"
//   >
//     {awards.map((award, i) => (
//       <span
//         key={i}
//         className={`md:text-2xl text-xl w-full font-semibold transition-all duration-300 text-[#2A5311] ${
//           activeIndex === i ? "opacity-100" : "opacity-30"
//         }`}
//       >
//         {award.title}
//       </span>
//     ))}
//   </p>
// </div>

{
  /* RIGHT — STICKY IMAGE */
}
// <div className="hidden lg:block w-[450px] flex-shrink-0">
//   <div className="sticky top-1/3 w-full h-fit overflow-hidden pointer-events-none">
//     <img
//       ref={imageRef}
//       key={awards[activeIndex].image}
//       src={awards[activeIndex].image}
//       alt=""
//       className="w-full h-full object-cover rounded-lg"
//     />
//   </div>
// </div>

// useEffect(() => {
//   const items = wrapperRef.current.querySelectorAll("span");

//   let trigger = ScrollTrigger.create({
//     trigger: wrapperRef.current,
//     start: "top 70%",
//     end: "bottom center",
//     scrub: true,
//     onUpdate: (self) => {
//       const progress = self.progress;
//       // const index = Math.floor(progress * items.length);

//       const index = Math.min(
//         items.length - 1,
//         Math.floor(progress * items.length),
//       );

//       setActiveIndex(index);

//       items.forEach((item, i) => {
//         item.classList.toggle("active", i === index);
//       });
//     },
//   });

//   return () => trigger.kill();
// }, []);

// useEffect(() => {
//   if (!imageRef.current) return;

//   gsap.fromTo(
//     imageRef.current,
//     { opacity: 0, scale: 1.05 },
//     { opacity: 1, scale: 1, duration: 0.5, ease: "power3.out" },
//   );
// }, [activeIndex]);
