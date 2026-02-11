"use client";
import React, { useState } from "react";
import { filmsData } from "../constants/data";
import HoverVideoPlayer from "react-hover-video-player";
import Link from "next/link";

const films = () => {
  const [hoveredIndex, setHoveredIndex] = useState(false);
  return (
    <main className="h-full min-h-screen w-screen pt-24 px-2 md:px-12 overflow-x-clip mx-auto">
      <div className="max-w-[1440px] mx-auto">
        <div className="w-full h-full flex flex-col justify-start items-start">
          <div className="w-full flex justify-between items-end">
            <h1 className="w-full text-4xl lg:text-7xl font-abril mt-10">
              Films
            </h1>
            <div>filters</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-x-2 space-x-2 space-y-4 mt-28">
            {filmsData.map((film, index) => (
              <div
                key={index}
                className="w-full flex flex-col gap-2 justify-start"
              >
                <Link href={film.link} target="_">
                  <div className="w-fit h-fit relative flex justify-center items-center bg-black transition-opacity duration-700 ease-out">
                    <div className="absolute z-10 bg-black/10 hover:bg-none text-white w-full h-full flex flex-col justify-end items-start transition-opacity duration-700 ease-out">
                      <p className="font-raleway font-semibold pl-2 pb-2 text-xl">
                        {film.name}
                      </p>
                      <p className="font-raleway font-semibold pl-2 pb-2 text-sm hidden">
                        {film.year} {film.client}
                        As India’s water crisis threatens the future of farming,
                        'To turn a tide' follows farmers and grassroots
                        innovators who are reimagining agriculture through
                        water-smart solutions, resilience, and collective
                        action.
                      </p>
                    </div>

                    <img
                      src="/test-frame0.png"
                      alt=""
                      className={`object-cover z-10 hover:opacity-0 transition-opacity duration-700 ease-out ${
                        hoveredIndex === index ? "opacity-0" : "opacity-100"
                      }`}
                      onTouchStart={() => setHoveredIndex(index)}
                      onTouchEnd={() => setHoveredIndex(null)}
                    />

                    <video
                      src="/videos/Clip3.mp4"
                      className="absolute w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default films;
