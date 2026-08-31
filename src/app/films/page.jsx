"use client";
import React, { useState, useEffect } from "react";
import { projects } from "../constants/data";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import FadingImageHero from "@/components/FadingImageHero";

const Films = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  // get unique categories
  const categories = ["All", ...new Set(projects.map((p) => p.category))];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  // reset hover when filter changes (important)
  useEffect(() => {
    setHoveredIndex(null);
  }, [activeFilter]);

  return (
    <main className="h-full min-h-screen w-screen  overflow-x-clip mx-auto bg-background">
      <div className="flex items-center justify-center relative h-[70vh]">
        <div className="absolute top-1/2 -translate-y-1/2 flex flex-col justify-center items-center gap-4 z-10">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.08, // 👈 stagger delay
              ease: "easeOut",
            }}
            className="text-white font-boska font-extrabold text-4xl md:text-6xl"
          >
            Films
          </motion.h2>
        </div>

        <FadingImageHero
          images={[
            "/aboutpage/1.jpg",
            "/aboutpage/2.jpg",
            "/aboutpage/3.jpg",
            "/aboutpage/4.jpg",
            "/aboutpage/5.jpg",
            "/aboutpage/6.jpg",
            "/aboutpage/7.jpg",
            "/aboutpage/8.jpg",
            "/aboutpage/9.jpg",
            "/aboutpage/10.jpg",
          ]}
          interval={3000}
        />
      </div>
      <div className="max-w-[1440px] py-8 md:py-12 px-4 md:px-12 mx-auto">
        <div className="w-full flex flex-col">
          {/* HEADER */}
          <div className="w-full flex flex-col lg:flex-row md:justify-between md:items-end gap-6">
            <h1 className="w-full flex-1 text-xl lg:text-2xl font-abril text-nowrap">
              Category filters
            </h1>

            {/* FILTERS */}
            <div className="flex flex-wrap w-full lg:justify-end items-center gap-2 md:gap-3">
              {categories.map((cat) => {
                const isActive = activeFilter === cat;

                return (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className="relative px-4 py-1.5 text-sm md:text-base font-medium rounded-full transition-all duration-300"
                  >
                    {/* ACTIVE PILL (shared layout animation) */}
                    {isActive && (
                      <motion.span
                        layoutId="filter-pill"
                        className="absolute inset-0 bg-black rounded-full"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}

                    {/* LABEL */}
                    <span
                      className={`relative z-10 transition-colors duration-300 ${
                        isActive
                          ? "text-white"
                          : "text-gray-500 hover:text-black"
                      }`}
                    >
                      {cat}
                    </span>

                    {/* BORDER */}
                    <span className="absolute inset-0 rounded-full border border-gray-900" />
                  </button>
                );
              })}
            </div>
          </div>

          {/* GRID */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-4 mt-8"
          >
            <AnimatePresence mode="sync">
              {filteredProjects.map((film, index) => {
                const isHovered = hoveredIndex === index;

                return (
                  <motion.div
                    key={film.name}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.04, // 👈 stagger delay
                      ease: "easeOut",
                    }}
                  >
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
                            scale: isHovered ? 1.06 : 1,
                          }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                          src={film.cover}
                          alt=""
                          className="object-cover w-full h-full"
                        />

                        {/* OVERLAY */}
                        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black to-transparent from-0% to-50%">
                          {/* gradient instead of flat overlay */}
                          <div className="absolute inset-0 " />

                          <div className="relative p-3 w-full overflow-hidden">
                            {/* TEXT WRAPPER */}
                            <motion.div
                              animate={{
                                height: isHovered ? "auto" : 28,
                              }}
                              transition={{ duration: 0.4, ease: "easeOut" }}
                              className="overflow-hidden"
                            >
                              {/* TITLE */}
                              <p className="font-raleway text-white md:text-xl font-semibold leading-tight">
                                {film.name}
                              </p>

                              {/* LOGLINE */}
                              <motion.p
                                initial={false}
                                animate={{
                                  opacity: isHovered ? 1 : 0,
                                  y: isHovered ? 0 : 12,
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
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default Films;
