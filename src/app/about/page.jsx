"use client";
import FadingImageHero from "@/components/FadingImageHero";
import FullscreenImage from "@/components/FullscreenImage";
import ImageMarqueeScroll from "@/components/ImageMarqueeScroll";
import Slider from "@/components/Slider";
import React from "react";
import { projects } from "../constants/data";
import { motion } from "motion/react";

const about = () => {
  const projectCovers = projects?.map((project) => project.cover);
  return (
    <main className="w-full h-full min-h-screen overflow-x-clip bg-background">
      {/* <Slider /> */}
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
            Story of Being
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.1, // 👈 stagger delay
              ease: "easeOut",
            }}
            className="font-montserrat text-white font-bold md:w-4/5 px-8 max-w-2xl text-sm text-center backdrop-blur-[1.5px] rounded-full"
          >
            Two worlds—one journey: cinematic storytelling as an accomplished
            film director, and deep connection with nature as an animal and
            Nature whisperer, all part of the Story of Being.
          </motion.p>
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

      {/* portfolio image and text */}
      <div
        id="intro section"
        className="max-w-[1440px] mt-24 mx-auto px-2 md:px-24 flex flex-col w-full gap-2"
      >
        <h2 className="font-abril text-2xl">The Founder</h2>
        <div className="flex flex-col md:flex-row w-full justify-center items-center md:items-start gap-4 md:gap-20">
          <div className="md:w-1/3">
            <img
              src="/aboutpage/keya main.jpg"
              alt="keya portrait"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="md:w-2/3 flex flex-col gap-4 font-montserrat">
            {/* <h1 className="font-bold text-xl">About Keya Vaswani</h1> */}
            <h3>
              Keya Vaswani is a{" "}
              <span className="font-bold">
                National Award-winning filmmaker, Forbes-featured creative
              </span>
              , and <span className="font-bold">TED speaker</span> with over 15
              years of mastery in visual storytelling. As the founder of{" "}
              <span className="font-bold">Story of Being</span> (previously
              known as Storyloom Films), established in 2013. With over a decade
              at the intersection of cinematic excellence and deep
              consciousness, Keya unearths the raw layers of human experience
              and heritage—cementing her place as a definitive voice in
              contemporary Indian storytelling."
            </h3>
            <h4>
              Beyond her cinematic pursuit, Keya is an accomplished Animal &
              Nature whisperer. She serves as a conduit for{" "}
              <span className="font-bold">interspecies dialogue</span>,
              reactivating the innate telepathic bond between humans and the
              <span className="font-bold"> living intelligence</span> of the
              natural world.
            </h4>

            <p className="">
              Through Story of Being, Keya bridges creativity and
              consciousness—whether directing documentaries or guiding
              telepathic sessions—to inspire awareness, empathy, and harmony
              across people, animals, and nature.
            </p>
            <h1 className="font-bold text-xl mt-4">Teaching and Mentorship</h1>
            <p>
              Alongside her creative practice, Keya is a passionate educator and
              mentor. She teaches documentary filmmaking and design, conducting
              workshops across colleges and creative institutions to nurture
              emerging storytellers. She has taught at esteemed institutes such
              as Film and Television Institute of India (FTII), among many
              others. Her teaching approach blends craft with
              consciousness—encouraging students not only to master cinematic
              language but to cultivate empathy, awareness, and authenticity in
              their work.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-24 overflow-hidden w-full marquee-mask">
        <ImageMarqueeScroll
          images={projectCovers}
          baseVelocity={10}
          height={200}
        />
      </div>

      {/* <div className="py-24 w-full max-w-[1440px] mx-auto flex flex-col-reverse md:flex-row px-2 md:px-24 md:gap-10 justify-between">
        <p className="font-montserrat text-left max-w-2xl">
          Alongside her creative practice, Keya is a passionate educator and
          mentor. She teaches documentary filmmaking and design, conducting
          workshops across colleges and creative institutions to nurture
          emerging storytellers. She has taught at esteemed institutes such as
          Film and Television Institute of India (FTII), among many others. Her
          teaching approach blends craft with consciousness—encouraging students
          not only to master cinematic language but to cultivate empathy,
          awareness, and authenticity in their work.
        </p>
        <h1 className="text-3xl font-bold mb-6 md:text-right">
          Teaching & Mentorship
        </h1>
      </div> */}

      <FullscreenImage />
    </main>
  );
};

export default about;
