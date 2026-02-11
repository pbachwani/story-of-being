import FullscreenImage from "@/components/FullscreenImage";
import ImageMarqueeScroll from "@/components/ImageMarqueeScroll";
import Slider from "@/components/Slider";
import React from "react";

const about = () => {
  return (
    <main className="w-full h-full min-h-screen overflow-x-clip">
      {/* <Slider /> */}
      <div className="flex items-center justify-center relative">
        <div className="absolute bottom-40 flex flex-col justify-center items-center gap-4">
          <h2 className=" text-white font-extrabold text-4xl">
            Story of Being
          </h2>
          <p className="font-montserrat text-white font-bold md:w-4/5 max-md:px-4 text-sm text-center backdrop-blur-[1.5px] rounded-full">
            Two worlds—one journey: cinematic storytelling as an accomplished
            film director, and deep connection with nature as an animal and
            Nature whisperer, all part of the Story of Being.
          </p>
        </div>
        <img
          src="/aboutpage/6.jpg"
          alt=""
          className="w-full h-150 object-cover"
        />
      </div>

      <div
        id="intro section"
        className="max-w-[1440px] mt-24 mx-auto px-2 md:px-24 flex flex-col md:flex-row justify-center items-center md:items-start w-full md:gap-20 gap-4"
      >
        <div className="md:w-1/3">
          <img
            src="/aboutpage/keya main.jpg"
            alt="keya portrait"
            className="object-cover aspect-[3/4]"
          />
        </div>
        <div className="md:w-2/3 flex flex-col gap-4">
          <h3>
            <span className="font-bold">Keya Vaswani</span> is a National
            Award-winning filmmaker, Forbes-featured creative, and TED speaker
            with over 15 years of mastery in visual storytelling. As the founder
            of Story of Being, established in 2013. With over a decade at the
            intersection of cinematic excellence and deep consciousness, Keya
            unearths the raw layers of human experience and heritage—cementing
            her place as a definitive voice in contemporary Indian
            storytelling."
          </h3>
          <h4>
            Beyond her cinematic pursuit, Keya is an accomplished Animal &
            Nature whisperer.She serves as a conduit for interspecies dialogue,
            reactivating the innate telepathic bond between humans and the
            living intelligence of the natural world.
          </h4>

          <p className="font-boska">
            Through Story of Being, Keya bridges creativity and
            consciousness—whether directing documentaries or guiding telepathic
            sessions—to inspire awareness, empathy, and harmony across people,
            animals, and nature.
          </p>
        </div>
      </div>

      <div className="mt-24 overflow-hidden w-full marquee-mask">
        <ImageMarqueeScroll
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
          baseVelocity={10}
          height={200}
        />
      </div>

      <div></div>

      <FullscreenImage />
    </main>
  );
};

export default about;
