"use client";
import React from "react";
import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";

const FeaturedProject = ({ classname, featured }) => {
  return (
    <div className={`md:w-1/2 w-full flex flex-col justify-start ${classname}`}>
      <div className="aspect-video">
        <a href={featured.link} target="_">
          <img
            src={featured.image}
            alt="first"
            className="w-full h-full aspect-video object-cover scale-[101%] hover:scale-100 transition-all duration-500 ease-out rounded-sm hover:rounded-xl"
          />
        </a>
      </div>
      <div className="w-full flex justify-between items-end mt-4">
        <h2 className="font-extrabold text-lg md:text-2xl">{featured.title}</h2>
        <a href={featured.link} target="_">
          <img src="/play-48.png" alt="" className="w-8 h-8" />
        </a>
      </div>
      <p className="mt-2 font-montserrat text-left leading-tight text-sm">
        {featured.description}
      </p>
    </div>
  );
};

export default FeaturedProject;
