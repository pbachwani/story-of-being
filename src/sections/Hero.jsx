import React from "react";

const Hero = () => {
  return (
    <section className="w-screen h-screen min-h-screen">
      <video
        className="w-full h-screen object-cover -z-10"
        src="/videos/clip1 - cropped.mp4"
        type="video/mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>
      <div className="absolute top-0 left-0 w-screen h-screen bg-black/50 flex flex-col justify-center items-center text-white md:flex-row">
        <div className="h-full w-full flex-1 flex justify-center items-center max-md:items-end md:pl-20 ">
          <span>
            <img
              src="/logo-green-nobg.png"
              alt="story of being logo"
              className="w-full h-full object-cover scale-75 md:scale-100"
            />
          </span>
        </div>
        <div className="h-full w-full flex-1 flex flex-col justify-center items-center max-md:justify-start gap-10 max-md:-translate-y-20">
          <div className="bg-green-50/20 md:w-96 md:h-60 w-64 h-40 rounded-md shadow-2xl flex justify-center items-center hover:bg-green-50/40 hover:text-black transition-all duration-200 ease-out">
            {/* inner div set to full */}
            <div className="w-full h-full flex flex-col justify-between items-start p-4 md:p-10">
              <h1 className="text-2xl md:text-4xl font-abril">Films</h1>
              <p className="font-raleway font-bold text-sm md:text-md leading-5">
                Explore cinematic projects, storytelling, and films.
              </p>
            </div>
          </div>
          <div className="bg-green-50/20 md:w-96 md:h-60 w-64 h-40 rounded-md shadow-2xl flex justify-center items-center hover:bg-green-50/40 hover:text-black transition-all duration-200 ease-out">
            {/* inner div set to full */}
            <div className="w-full h-full flex flex-col justify-between items-start p-4 md:p-10">
              <h1 className="text-2xl md:text-4xl font-abril">
                Telepathic Communication
              </h1>
              <p className="font-raleway font-bold text-sm md:text-md leading-5">
                Discover sessions and insights on connecting deeply with animals
                & Nature.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
