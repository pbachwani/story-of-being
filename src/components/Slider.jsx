"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const slides = [
  {
    title:
      "Under the soft hum of streetlights she watches the world ripple through glass, her calm expression mirrored in the fragments of drifting light.",
    image: "/featured/11.png",
  },
  {
    title: "Keya Vaswani is a National Award-winning filmmaker...",
    image: "/featured/22.png",
  },
  {
    title:
      "Reflections ripple across mirrored faces, each one a fragment of identity...",
    image: "/featured/33.png",
  },
  {
    title: "Soft light spills through the café windows as morning settles...",
    image: "/featured/44.png",
  },
  {
    title: "Every serve becomes a battle between focus and instinct...",
    image: "/featured/55.png",
  },
];

export default function Slider() {
  const sliderRef = useRef(null);
  const sliderImagesRef = useRef(null);
  const sliderTitleRef = useRef(null);
  const sliderIndicesRef = useRef(null);
  const progressBarRef = useRef(null);

  useGSAP(() => {
    let activeSlide = 0;
    let currentSplit = null;

    const maxIndex = slides.length - 1;
    let pinDistance = window.innerHeight * maxIndex;

    /** ----------------------
     * CREATE INDICATORS
     ---------------------- */
    function createIndicators() {
      sliderIndicesRef.current.innerHTML = "";

      slides.forEach((_, i) => {
        const formatted = (i + 1).toString().padStart(2, "0");
        const p = document.createElement("p");
        p.dataset.index = i;

        p.innerHTML = `
          <span class="marker"></span>
          <span class="index">${formatted}</span>
        `;

        sliderIndicesRef.current.appendChild(p);

        gsap.set(p.querySelector(".index"), { opacity: i === 0 ? 1 : 0.35 });
        gsap.set(p.querySelector(".marker"), { scaleX: i === 0 ? 1 : 0 });
      });
    }

    /** ----------------------
     * ANIMATE SLIDE IMAGE
     ---------------------- */
    function animateNewSlide(index) {
      const newImg = document.createElement("img");
      newImg.src = slides[index].image;
      newImg.className = "absolute w-full h-full object-cover";

      gsap.set(newImg, { opacity: 0, scale: 1.15 });
      sliderImagesRef.current.appendChild(newImg);

      gsap.to(newImg, { opacity: 1, scale: 1, duration: 1 });

      const images = sliderImagesRef.current.querySelectorAll("img");
      if (images.length > 3) images[0].remove();

      animateNewTitle(index);
      animateIndicators(index);
    }

    /** ----------------------
     * ANIMATE INDICATORS
     ---------------------- */
    function animateIndicators(index) {
      sliderIndicesRef.current.querySelectorAll("p").forEach((el, i) => {
        gsap.to(el.querySelector(".index"), {
          opacity: i === index ? 1 : 0.35,
          duration: 0.3,
        });

        gsap.to(el.querySelector(".marker"), {
          scaleX: i === index ? 1 : 0,
          duration: 0.3,
        });
      });
    }

    /** ----------------------
     * ANIMATE TITLE
     ---------------------- */
    function animateNewTitle(index) {
      if (currentSplit) currentSplit.revert();

      sliderTitleRef.current.innerHTML = `<h1>${slides[index].title}</h1>`;

      currentSplit = new SplitText(sliderTitleRef.current.querySelector("h1"), {
        type: "lines",
        linesClass: "line",
      });

      gsap.fromTo(
        currentSplit.lines,
        { yPercent: 100, opacity: 0 },
        { yPercent: 0, opacity: 1, stagger: 0.06, duration: 0.65 }
      );
    }

    createIndicators();

    /** ----------------------
     * SCROLLTRIGGER
     ---------------------- */
    const st = ScrollTrigger.create({
      trigger: sliderRef.current,
      start: "top top",
      end: `+=${pinDistance}px`,
      scrub: 1,
      pin: true,
      snap: {
        snapTo: 1 / maxIndex,
        duration: 0.35,
        ease: "power2.out",
      },
      onUpdate: (self) => {
        gsap.set(progressBarRef.current, { scaleY: self.progress });

        const index = Math.round(self.progress * maxIndex);

        if (index !== activeSlide && index <= maxIndex) {
          activeSlide = index;
          animateNewSlide(activeSlide);
        }
      },
    });

    /** ----------------------
     * HANDLE RESIZE
     ---------------------- */
    ScrollTrigger.addEventListener("refreshInit", () => {
      pinDistance = window.innerHeight * maxIndex;
      st.vars.end = `+=${pinDistance}px`;
    });

    /** ----------------------
     * INITIAL LOAD
     ---------------------- */
    animateNewSlide(0);

    return () => {
      if (currentSplit) currentSplit.revert();
      ScrollTrigger.killAll();
    };
  });

  return (
    <section
      ref={sliderRef}
      className="relative w-full h-screen overflow-hidden"
    >
      {/* IMAGE LAYER */}
      <div
        ref={sliderImagesRef}
        className="absolute inset-0 after:absolute after:inset-0 after:bg-black/40"
      />

      {/* TITLE */}
      <div
        ref={sliderTitleRef}
        className="absolute left-8 top-1/2 -translate-y-1/2 w-1/2 text-white max-md:left-0 max-md:top-20 max-md:w-full max-md:px-6"
      />

      {/* RIGHT SIDE UI */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 max-md:bottom-8 max-md:top-auto max-md:translate-y-0">
        <div
          ref={sliderIndicesRef}
          className="flex flex-col gap-4 p-4 text-white"
        />

        <div className="absolute top-0 right-0 h-full w-[1px] bg-white/40">
          <div
            ref={progressBarRef}
            className="absolute left-1/2 top-0 w-[3px] h-full bg-white -translate-x-1/2 origin-top"
          />
        </div>
      </div>
    </section>
  );
}
