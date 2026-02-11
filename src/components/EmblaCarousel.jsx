"use client";
import React, { useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

import Autoplay from "embla-carousel-autoplay";

import Image from "next/image";

import arrowLeft from "@/../public/arrow-left-circle.png";
import arrowRight from "@/../public/arrow-right-circle.png";
import arrowPlay from "@/../public/arrow-play-circle.png";
import Link from "next/link";
import { NEW_CDN_BASE } from "@/constants/cdn";

export function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      containScroll: "trimSnaps",
    },
    [Autoplay({ delay: 10000 })],
  );

  useEffect(() => {
    if (!emblaApi) return;

    const slides = emblaApi.slideNodes();

    const onSelect = () => {
      const centerIndex = emblaApi.selectedScrollSnap();

      slides.forEach((slide, index) => {
        if (index === centerIndex) {
          // console.log(slide);
          slide.classList.add("is-centered");
        } else {
          slide.classList.remove("is-centered");
        }
      });
    };

    emblaApi.on("select", onSelect);
    onSelect(); // run once on mount

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  // update prev/next availability
  useEffect(() => {
    if (!emblaApi) return;

    const updateButtons = () => {
      // if loop: true, canScrollPrev/Next will always be true, still fine to check tho
      setCanPrev(emblaApi?.canScrollPrev() ?? false);
      setCanNext(emblaApi?.canScrollNext() ?? false);
    };

    emblaApi.on("select", updateButtons);
    emblaApi.on("reInit", updateButtons);
    // call once
    updateButtons();

    return () => {
      emblaApi.off("select", updateButtons);
      emblaApi.off("reInit", updateButtons);
    };
  }, [emblaApi]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <div className="overflow-hidden max-h-svh" ref={emblaRef}>
      {/* hero videos */}
      <div
        className="flex"
        // style={{ cursor: `url(${arrowPlay.src}) 50 50, auto` }}
      >
        {/* 1st slide */}
        <Link
          href={"/ABOVE"}
          className="flex justify-center items-center"
          style={{
            flex: "0 0 100%",
            // cursor: `url(${arrowPlay.src}) 50 50, auto`,
          }}
        >
          <div className="w-full relative aspect-video overflow-hidden flex justify-center items-center">
            <Image
              fill
              src="https://vishal-vittal.b-cdn.net/ABOVE/ABOVE-coverImg.jpg"
              alt="Above"
              className={`absolute slide-overlay inset-0 z-10 object-cover transition-opacity duration-500 ease-out`}
            />
            <video
              className="absolute inset-0 w-full h-full"
              src={`${NEW_CDN_BASE}/carousel/ABOVE_COVER.mp4`}
              // src="/ABOVE/ABOVE_COVER.mp4"
              type="video/mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              loading="eager"
            />
          </div>
        </Link>

        {/* 2nd */}
        <Link
          href={"/THALAIVI"}
          className="flex justify-center items-center"
          style={{
            flex: "0 0 100%",
            // cursor: `url(${arrowPlay.src}) 50 50, auto`,
          }}
        >
          <div className="w-full relative aspect-video overflow-hidden flex justify-center items-center">
            <Image
              fill
              src="https://vishal-vittal.b-cdn.net/THALAIVI/THALAIVI-coverImg.jpg"
              alt="test shot"
              className={`absolute slide-overlay inset-0 z-10 object-cover transition-opacity duration-500 ease-out`}
            />
            <video
              // src="https://vishal-vittal.b-cdn.net/THALAIVI/THALAIVI_COVER.mp4"
              src={`${NEW_CDN_BASE}/carousel/THALAIVI_COVER.mp4`}
              className="absolute inset-0 w-full h-full"
              type="video/mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              // loading="eager"
            ></video>
          </div>
        </Link>

        {/* 3nd */}
        <Link
          href={"/QUESS"}
          className="flex justify-center items-center"
          style={{
            flex: "0 0 100%",
            // cursor: `url(${arrowPlay.src}) 50 50, auto`,
          }}
        >
          <div className="w-full relative aspect-video overflow-hidden">
            <Image
              fill
              src="https://vishal-vittal.b-cdn.net/QUESS/QUESS-coverImg.jpg"
              alt="test shot"
              className={`absolute slide-overlay inset-0 z-10 object-cover transition-opacity duration-500 ease-out`}
            />
            <video
              // src="https://vishal-vittal.b-cdn.net/QUESS/QUESS_COVER.mov"
              src={`${NEW_CDN_BASE}/carousel/QUESS-cropped.mov`}
              className="absolute inset-0 w-full h-full"
              type="video/mp4"
              autoPlay
              loop
              muted
              playsInline
              // preload="metadata"
              // loading="eager"
            ></video>
          </div>
        </Link>

        {/* 4 */}
        <Link
          href={"/QECNP"}
          className="flex justify-center items-center"
          style={{
            flex: "0 0 100%",
            // cursor: `url(${arrowPlay.src}) 50 50, auto`,
          }}
        >
          <div className="w-full relative aspect-video overflow-hidden">
            <Image
              fill
              src="https://vishal-vittal.b-cdn.net/QECNP/QECNP-coverImg.jpg"
              alt="test shot"
              className={`absolute slide-overlay inset-0 z-10 object-cover transition-opacity duration-500 ease-out`}
            />
            <video
              // src="https://vishal-vittal.b-cdn.net/QECNP/QECNP_COVER.mov"
              src={`${NEW_CDN_BASE}/carousel/QECNP_COVER.mov`}
              className="absolute inset-0 w-full h-full"
              type="video/mp4"
              autoPlay
              loop
              muted
              playsInline
              // preload="metadata"
              // loading="eager"
            ></video>
          </div>
        </Link>

        {/* 5 */}
        <Link
          href={"/SEBAMED"}
          className="flex justify-center items-center"
          style={{
            flex: "0 0 100%",
            // cursor: `url(${arrowPlay.src}) 50 50, auto`,
          }}
        >
          <div className="w-full relative aspect-video overflow-hidden">
            <Image
              fill
              src="https://vishal-vittal.b-cdn.net/SEBAMED/SEBAMED-coverImg.jpg"
              alt="test shot"
              className={`absolute slide-overlay inset-0 z-10 object-cover transition-opacity duration-500 ease-out`}
            />
            <video
              // src="https://vishal-vittal.b-cdn.net/SEBAMED/SEBAMED_COVER.mov"
              src={`${NEW_CDN_BASE}/carousel/SEBAMED_COVER.mov`}
              className="absolute inset-0 w-full h-full"
              type="video/mp4"
              autoPlay
              loop
              muted
              playsInline
              // preload="metadata"
              // loading="eager"
            ></video>
          </div>
        </Link>

        {/* 6th */}
        <Link
          href={"/SNAPDRAGON3"}
          className="flex justify-center items-center"
          style={{
            flex: "0 0 100%",
            // cursor: `url(${arrowPlay.src}) 50 50, auto`,
          }}
        >
          <div className="w-full relative aspect-video overflow-hidden">
            <img
              src="https://vishal-vittal.b-cdn.net/SNAPDRAGON3/SNAP3-coverImg.jpg"
              alt="test shot"
              className={`absolute slide-overlay inset-0 z-10 object-cover transition-opacity duration-500 ease-out`}
            />
            <video
              // src="https://vishal-vittal.b-cdn.net/SNAPDRAGON3/SNAPDRAGON3_COVER.mp4"
              src={`${NEW_CDN_BASE}/carousel/SNAPDRAGON3_COVER.mp4`}
              className="absolute inset-0 w-full h-full"
              type="video/mp4"
              autoPlay
              loop
              muted
              playsInline
              // preload="none"
              // loading="eager"
            ></video>
          </div>
        </Link>
      </div>

      {/* prev / next buttons (absolute inside the relative parent) */}

      {/* <button
        onClick={scrollPrev}
        aria-label="Previous slide"
        className={`absolute  left-0 top-1/2 -translate-y-1/2 h-full w-1/4 flex items-center justify-center cursor-pointer ${
          !canPrev ? "opacity-50 pointer-events-none" : ""
        }`}
        style={{ cursor: `url(${arrowLeft.src}) 0 50, auto` }}
      >

      </button>

      <button
        onClick={scrollNext}
        aria-label="Next slide"
        className={`absolute  right-0 top-1/2 -translate-y-1/2 h-full w-1/4 flex items-center justify-center cursor-pointer   ${
          !canNext ? "opacity-50 pointer-events-none" : ""
        }`}
        style={{ cursor: `url(${arrowRight.src}) 100 50, auto` }}
      >

      </button> */}
    </div>
  );
}
