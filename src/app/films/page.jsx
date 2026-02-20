"use client";
import React, { useState } from "react";
import { projects } from "../constants/data";
import { motion } from "motion/react";
import Link from "next/link";

const Films = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <main className="h-full min-h-screen w-screen py-24 px-2 md:px-12 overflow-x-clip mx-auto">
      <div className="max-w-[1440px] mx-auto">
        <div className="w-full flex flex-col">
          <div className="w-full flex justify-between items-end">
            <h1 className="w-full text-4xl lg:text-7xl font-abril mt-10">
              Films
            </h1>
            <div>filters</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-4 mt-28">
            {projects?.map((film, index) => {
              const isHovered = hoveredIndex === index;

              return (
                <div key={index}>
                  <Link href={film.link} target="_">
                    <div
                      className="relative overflow-hidden cursor-pointer"
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      onTouchStart={() => setHoveredIndex(index)}
                      onTouchEnd={() => setHoveredIndex(null)}
                    >
                      {/* IMAGE */}
                      <motion.img
                        animate={{
                          scale: isHovered ? 1.05 : 1,
                        }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        src={film.cover}
                        alt=""
                        className="object-cover w-full h-full transition-transform duration-500 ease-out hover:scale-105"
                      />

                      {/* OVERLAY */}
                      <div className="absolute inset-0 bg-black/20 flex items-end">
                        <div className="p-3 w-full overflow-hidden">
                          {/* TEXT WRAPPER */}
                          <motion.div
                            animate={{
                              height: isHovered ? "auto" : 28, // controls expansion
                            }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="overflow-hidden"
                          >
                            {/* TITLE (fixed position) */}
                            <p className="font-raleway text-white text-xl font-semibold leading-tight">
                              {film.name}
                            </p>

                            {/* LOGLINE */}
                            <motion.p
                              initial={false}
                              animate={{
                                opacity: isHovered ? 1 : 0,
                                y: isHovered ? 0 : 10,
                              }}
                              transition={{ duration: 0.4, ease: "easeOut" }}
                              className="font-raleway text-white text-sm mt-1"
                            >
                              {film.logline}
                            </motion.p>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Films;
