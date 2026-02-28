"use client";
import React from "react";

import { motion } from "motion/react";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

import line from "@/../public/brand-lines.png";
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
    <section className="w-screen pt-24 px-4 md:px-16 overflow-x-clip mx-auto bg-background">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="font-abril text-2xl md:text-4xl">
          Brands & associations
        </h2>
        <div className="py-10">
          <Image src={line} alt="top line" className="mx-auto mt-2" />

          <div className="py-0 flex overflow-hidden mt-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <motion.div
              animate={{ x: "-50%" }}
              transition={{
                duration: 50,
                ease: "linear",
                repeat: Infinity,
              }}
              className="flex flex-none gap-16 pr-16"
            >
              {Array.from({ length: 2 }).map((_, i) => (
                <React.Fragment key={i}>
                  {brandLogos.map((logo, i) => (
                    <img
                      src={logo}
                      key={i}
                      alt={logo}
                      className="w-fit md:h-36 h-20"
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
