"use client";
import React from "react";

import { motion } from "motion/react";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

import line from "@/../public/brand-lines1.png";
import aavran from "@/../public/brands/Aavran Logo.png";
import ad from "@/../public/brands/architectural-digest.png";
import earthwise from "@/../public/brands/Earthwise logo.png";
import freedom from "@/../public/brands/Freedom Logo.png";
import goodearth from "@/../public/brands/Goodearthlogo.png";
import Healthfy from "@/../public/brands/Healthyfy me.png";
import krishna from "@/../public/brands/Krishna Logo.png";
import Laffaire from "@/../public/brands/Laffaire Logo.png";
import bodhi from "@/../public/brands/Bodhi.png";
import butterfly from "@/../public/brands/logo-butterfly.png";
import pangaia from "@/../public/brands/PANGAIA_Logo.png";
import Pari from "@/../public/brands/Pari Logo.png";
import Rahul from "@/../public/brands/Rahul Mishra.png";
import Sarmaya from "@/../public/brands/Sarmaya-Logo.png";
import { brandLogos } from "@/app/constants/data";

const logos = [
  { name: "Aavran", image: aavran },
  { name: "Architectural-Digest", image: ad },
  { name: "Earthwise", image: earthwise },
  { name: "Freedom", image: freedom },
  { name: "Good Earth", image: goodearth },
  { name: "Healthfy", image: Healthfy },
  { name: "Krishna", image: krishna },
  { name: "Laffaire", image: Laffaire },
  { name: "Bodhi", image: bodhi },
  { name: "Butterfly", image: butterfly },
  { name: "pangaia", image: pangaia },
  { name: "Pari", image: Pari },
  { name: "Rahul", image: Rahul },
  { name: "Sarmaya", image: Sarmaya },
];

const Brands = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <section className="w-screen pt-12 px-4 md:px-16 overflow-x-clip mx-auto bg-background">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="font-abril text-2xl md:text-4xl">
          Brands & associations
        </h2>
        <div className="py-8">
          <Image src={line} alt="top line" className="mx-auto" />

          <div className="py-0 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <motion.div
              animate={{ x: "-50%" }}
              transition={{
                duration: 50,
                ease: "linear",
                repeat: Infinity,
              }}
              className="flex flex-none md:gap-8 md:pr-8 gap-2 pr-2"
            >
              {Array.from({ length: 2 }).map((_, i) => (
                <React.Fragment key={i}>
                  {brandLogos.map((logo, i) => (
                    <motion.img
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: i * 0.08, // 👈 stagger delay
                        ease: "easeOut",
                      }}
                      src={logo}
                      key={i}
                      alt={logo}
                      className="w-auto md:h-36 h-24"
                    />
                  ))}
                </React.Fragment>
              ))}
              {/* <Image src={aavran} alt="AAvran logo" width={100} /> */}
            </motion.div>
          </div>
          <Image src={line} alt="bottom line" className="mx-auto mt-4" />
        </div>
      </div>
    </section>
  );
};

export default Brands;
