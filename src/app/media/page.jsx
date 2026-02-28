"use client";

import React from "react";
import { motion } from "motion/react";
import { media } from "../constants/data";

const MediaPage = () => {
  return (
    <main className="w-full min-h-screen px-4 md:px-16 py-24 bg-background">
      <div className="max-w-[1440px] mx-auto">
        {/* ================= HEADER ================= */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-7xl font-abril">Media</h1>
        </div>

        {/* ================= DIGITAL ================= */}
        <section className="mb-10">
          <h2 className="text-2xl md:text-4xl font-semibold mb-4">Digital</h2>

          {/* ===== VIDEOS GRID ===== */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {media.videos.map((video, i) => {
              const thumbnail = `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;

              return (
                <motion.a
                  key={i}
                  href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group overflow-hidden block aspect-video bg-black"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {/* THUMBNAIL */}
                  <motion.img
                    src={thumbnail}
                    alt={video.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition duration-300" />

                  {/* PLAY ICON */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                    <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center text-black text-lg pl-0.5">
                      ▶
                    </div>
                  </div>

                  {/* TITLE */}
                  <div className="absolute bottom-0 p-3 text-white">
                    <p className="font-raleway text-lg font-semibold leading-tight">
                      {video.title}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </div>

          {/* ===== PODCASTS ===== */}
          <div className="mt-10">
            <h3 className="text-2xl md:text-4xl font-semibold mb-4">
              Podcasts
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {media.podcasts.map((video, i) => {
                const thumbnail = `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;

                return (
                  <motion.a
                    key={i}
                    href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group overflow-hidden block aspect-video bg-black"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <motion.img
                      src={thumbnail}
                      alt={video.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                    />

                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                      <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center text-black text-lg">
                        ▶
                      </div>
                    </div>

                    <div className="absolute bottom-0 p-3 text-white">
                      <p className="font-raleway text-lg font-semibold">
                        {video.title}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* ===== SHORTS ===== */}
          {media.shorts?.length > 0 && (
            <div className="mt-10">
              <h3 className="text-2xl md:text-4xl font-semibold mb-4">
                Shorts
              </h3>

              <div className="flex gap-4 overflow-x-auto pb-4">
                {media.shorts.map((video, i) => {
                  const thumbnail = `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;

                  return (
                    <motion.a
                      key={i}
                      href={`https://www.youtube.com/shorts/${video.youtubeId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-w-[200px] relative group overflow-hidden block aspect-[9/16] bg-black"
                    >
                      <motion.img
                        src={thumbnail}
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                      />

                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />
                    </motion.a>
                  );
                })}
              </div>
              <p className="text-end md:hidden text-xs">
                scroll{" "}
                <img
                  src="/arrow-right.png"
                  alt="right arrow"
                  className="w-4 h-4 inline-block"
                />
              </p>
            </div>
          )}
        </section>

        {/* ================= PRINT ================= */}
        <section className="mt-4">
          <h2 className="text-2xl md:text-4xl font-semibold mb-0">Print</h2>

          <div className="flex flex-col">
            {media.articles.map((article, i) => (
              <motion.a
                key={i}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: i * 0.04,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                className="group relative py-5"
              >
                {/* CONTENT */}
                <div className="flex justify-between items-start md:items-center gap-6 font-montserrat">
                  <div className="flex flex-col md:flex-row md:items-center md:gap-20 w-full transition-all duration-300 ease-out group-hover:translate-x-2">
                    {/* SOURCE */}
                    <span className="text-gray-400 group-hover:text-black group-hover:font-bold text-sm uppercase tracking-wide min-w-[200px]">
                      {article.source}
                    </span>

                    {/* TITLE */}
                    <span className="text-black text-base md:text-lg leading-snug relative">
                      {article.title}

                      {/* underline animation */}
                      {/* <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-black transition-all duration-300 group-hover:w-full" /> */}
                    </span>
                  </div>

                  {/* ARROW */}
                  <span className="text-black text-lg transform translate-x-[-8px] opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 max-md:opacity-100 max-md:translate-x-0">
                    <img src="/arrow-right.png" alt="" className="w-5 h-5" />
                  </span>
                </div>

                {/* DIVIDER */}
                <span className="absolute bottom-0 left-0 h-[1px] w-full bg-gray-200 overflow-hidden">
                  <span className="block h-full w-0 bg-black transition-all duration-300 ease-out group-hover:w-full" />
                </span>
              </motion.a>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default MediaPage;
