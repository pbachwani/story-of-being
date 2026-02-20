// "use client";
import React from "react";
import { motion } from "motion/react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const telepathy = () => {
  return (
    <main className="w-full min-h-screen bg-[#FFFAED]">
      {/* top */}
      <div className="h-[600px] z-30 flex flex-col justify-center items-center relative text-white">
        <img
          src="/telepathy/1.jpg"
          alt="cover image"
          className="absolute inset-0 object-cover w-full h-full -z-10"
        />
        <h1 className="font-boska font-black text-3xl mt-10">
          Telepathic Communication
        </h1>
        <p className="font-boska font-bold text-xl">
          Connecting Hearts Beyond Words
        </p>
        <p className="font-montserrat text-white font-semibold md:w-4/5 px-8 max-w-2xl text-sm text-center backdrop-blur-[1.5px] rounded-full mt-10">
          Welcome to the Telepathic Communication experience—a unique path to
          deepen your connection with your beloved pets, plant companions, and
          the natural world around you.
        </p>
      </div>
      {/* bottom cards */}
      <section className="mt-20 w-full md:w-[90vw] mx-auto relative gap-10 flex flex-col">
        <div className="h-screen md:h-[70vh] p-0 border-black/20 flex flex-col md:flex-row items-center gap-0 md:gap-10 sticky top-4 md:top-[15%] bg-[#FFFAED]">
          <div className="flex flex-col justify-start gap-10 md:gap-20 p-6 md:py-10 w-full md:w-3/5">
            <h1 className="font-boska font-[900] text-4xl">Who I Am</h1>
            {/* content */}
            <div className="flex flex-col gap-4 font-montserrat">
              <p>
                With over 4 years of dedicated practice as a telepathic
                communicator, I specialize in bridging the unseen language
                between humans and their animal and plant companions.
              </p>
              <p>
                Combining intuition, empathy, and an attuned sensitivity to
                subtle energies, I offer a rare opportunity for meaningful
                dialogue that transcends ordinary communication.
              </p>
            </div>
          </div>
          <img
            src="/telepathy/8.jpg"
            alt="who am I"
            className="h-full object-cover w-full md:w-2/5 rounded-lg"
          />
        </div>
        <div className="h-screen md:h-[70vh] p-0 border-black/20 flex flex-col md:flex-row items-center gap-0 md:gap-10 sticky top-4 md:top-[15%] bg-[#FFFAED]">
          <div className="flex flex-col justify-start gap-10 md:gap-20 p-6 md:py-10 w-full md:w-3/5">
            <h1 className="font-boska font-[900] text-4xl">How It Works</h1>
            {/* content */}
            <div className="flex flex-col gap-4 font-montserrat">
              <p>
                Telepathic communication is a natural, non-verbal form of
                connection. Something that we all experience everyday. Through
                focused intention and intuitive perception, I receive
                impressions, feelings, and messages from your pets, plants, or
                even your own inner soul.
              </p>
              <p>
                This process allows you to gain insights into their needs,
                emotions, and well-being, fostering greater understanding and
                harmony.
              </p>
            </div>
          </div>
          <img
            src="/telepathy/1.jpg"
            alt="who am I"
            className="h-full object-cover w-full md:w-2/5 rounded-lg"
          />
        </div>
        <div className="h-screen md:h-[70vh] p-0 border-black/20 flex flex-col md:flex-row items-center gap-0 md:gap-10 sticky top-0 md:top-[15%] bg-[#FFFAED]">
          <div className="flex flex-col justify-start gap-10 md:gap-20  p-6 md:py-10 w-full md:w-3/5">
            <h1 className="font-boska font-[900] text-4xl">
              Why Connect This Way?
            </h1>
            {/* content */}
            <div className="flex flex-col gap-4 font-montserrat">
              <p>
                Many of us experience moments of wondering—what is my pet
                feeling? How can I care more deeply for my plants? Or how can I
                nurture my own inner self through these connections?
              </p>
              <p>
                Telepathic sessions provide clear answers, healing, and guidance
                by tuning into these soulful dialogues.
              </p>
            </div>
          </div>
          <img
            src="/telepathy/2.jpg"
            alt="who am I"
            className="h-full object-cover w-full md:w-2/5 rounded-lg"
          />
        </div>
      </section>

      {/* book a calendy call section */}
      <div
        // transition={{star}}
        className="h-screen z-40 py-12 mt-10"
        id="clip"
      >
        Book a Session
      </div>
    </main>
  );
};

export default telepathy;
