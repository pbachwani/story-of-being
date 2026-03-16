"use client";
import { ChevronRight } from "lucide-react";

import Link from "next/link";
import React from "react";
import { motion } from "motion/react";
import FeaturedProject from "@/components/FeaturedProject";
import { featured } from "@/app/constants/data";

const Featured = () => {
  return (
    <section className="w-full h-full min-h-screen pt-20 px-4 md:px-16 mx-auto bg-background">
      <div className="flex flex-col gap-10 max-w-[1440px] mx-auto">
        <h1 className="font-abril text-2xl md:text-4xl">Featured Films</h1>
        {/* card 1 */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.08, // 👈 stagger delay
            ease: "easeOut",
          }}
          className="w-full max-w-7xl h-full flex flex-col justify-start mx-auto mt-4"
        >
          <img
            src={"/featured/1.png"}
            alt="first"
            className="w-full h-full object-cover scale-[101%] hover:scale-100 transition-all duration-500 ease-out rounded-sm hover:rounded-xl"
          />
          <div
            // href={"https://www.youtube.com/watch?v=8J59WBTqX6U"}
            // target="_"
            className="flex flex-col md:flex-row w-full md:gap-10 mt-4"
          >
            <div className="w-full md:w-1/2 flex justify-between items-end">
              <h2 className="md:text-start font-extrabold text-xl">
                To Turn a Tide
              </h2>
              <a href="https://www.youtube.com/watch?v=8J59WBTqX6U" target="_">
                <ChevronRight size={32} />
              </a>
            </div>
            <p className="md:w-1/2 font-montserrat leading-tight mt-2 text-sm">
              To Turn a Tide tracks defiant farmers and grassroots innovators
              battling back with clever water hacks, unbreakable grit, and
              united resolve.
            </p>
          </div>
        </motion.div>
        {/* row 2 */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.08, // 👈 stagger delay
            ease: "easeOut",
          }}
          className="w-full max-w-7xl h-full flex flex-col md:flex-row mx-auto gap-10"
        >
          {/* <div className="md:w-1/2 w-full flex flex-col">
            <img
              src="/featured/2.png"
              alt="first"
              className="w-full h-full max-h-80 aspect-video object-cover scale-[101%] hover:scale-100 transition-all duration-500 ease-out rounded-sm hover:rounded-xl"
            />
            <div className="w-full flex justify-between items-end">
              <h2 className="mt-8 font-extrabold text-2xl">
                Weaves of Maheshwar
              </h2>
              <a href="https://youtu.be/f_t1mHjxaNw" target="_">
                <ChevronRight size={32} />
              </a>
            </div>
            <p className="mt-2 font-montserrat text-left leading-tight">
              Weaves of Maheshwar is a story about craft revival. The
              documentary revolves around various journeys about people who have
              made this change possible. In an era where the machines are taking
              over the world India is the only country which still produces 90%
              of handloom. Weaves of Maheshwar portrays this strength of Indian
              textiles and our rich craft sector. The protagonists of this film
              are a group of people who have facilitated this change.
            </p>
          </div> */}
          <FeaturedProject featured={featured[1]} />
          <FeaturedProject featured={featured[2]} />
          {/* <div className="md:w-1/2 w-full flex flex-col">
            <div className="aspect-video">
              <img
                src="/featured/3.png"
                alt="first"
                className="w-full h-full max-h-80 aspect-video object-cover scale-[101%] hover:scale-100 transition-all duration-500 ease-out rounded-sm hover:rounded-xl"
              />
            </div>

            <div className="w-full flex justify-between items-start">
              <h2 className="font-extrabold text-2xl">
                Rajkumari Ratnavati School
              </h2>
              <a href="https://www.youtube.com/watch?v=PD2XPKFUJnA" target="_">
                <ChevronRight size={32} />
              </a>
            </div>
            <p className="mt-2 font-montserrat text-left leading-tight">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              voluptas soluta, aperiam architecto sint esse autem voluptates
              tempore adipisci dignissimos aspernatur amet cumque ex ad.
            </p>
          </div> */}
        </motion.div>

        {/* row 3 */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.08, // 👈 stagger delay
            ease: "easeOut",
          }}
          className="w-full max-w-7xl h-full flex flex-col md:flex-row mx-auto gap-10"
        >
          {/* <div className="md:w-1/2 w-full flex flex-col">
            <div className="aspect-video">
              <img
                src="/featured/4.png"
                alt="first"
                className="w-full h-full aspect-video max-h-80 object-cover scale-[101%] hover:scale-100 transition-all duration-500 ease-out rounded-sm hover:rounded-xl"
              />
            </div>
            <div className="w-full flex justify-between items-end">
              <h2 className="mt-8 font-extrabold text-2xl">The Dawn</h2>
              <a href="https://youtu.be/fPFUAYUP7hw" target="_">
                <ChevronRight size={32} />
              </a>
            </div>
            <p className="mt-2 font-montserrat text-left leading-tight">
              A retrieval of colour to a world drained of its natural resources,
              abundance and animation through years of piling marble dust.
            </p>
          </div> */}
          <FeaturedProject featured={featured[3]} />
          <FeaturedProject featured={featured[4]} />
          {/* <div className="md:w-1/2 w-full flex flex-col">
            <img
              src="/featured/5.png"
              alt="first"
              className="w-full h-full max-h-80 object-cover scale-[101%] hover:scale-100 transition-all duration-500 ease-out rounded-sm hover:rounded-xl"
            />
            <div className="w-full flex justify-between items-end">
              <h2 className="mt-8 font-extrabold text-2xl">Tholubomalatta</h2>
              <a href="https://youtu.be/fsDX54jB--4" target="_">
                <ChevronRight size={32} />
              </a>
            </div>
            <p className="mt-2 font-montserrat text-left leading-tight">
              Paul's fateful meeting with Tholubommalata master artisan Mr.
              Chidambara Rao sparks an explosive bond, a defiant stand against
              India's vanishing handicraft legacy.
            </p>
          </div> */}
        </motion.div>

        {/* all films button */}
        <div className="flex justify-center items-center">
          <Link
            href={"/films"}
            className="border border-gray-500 px-4 py-2 hover:rounded-lg hover:bg-[#2A5311] hover:text-white duration-200 ease-out transition-all"
          >
            Watch all films
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Featured;
