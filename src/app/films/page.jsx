import React from "react";
import { filmsData } from "../constants/data";

const films = () => {
  return (
    <main className="h-full min-h-screen w-screen pt-24 px-2 md:px-12 overflow-x-clip mx-auto">
      <div className="max-w-[1440px] mx-auto">
        <div className="w-full h-full flex flex-col justify-start items-start">
          <div className="w-full flex justify-between items-end">
            <h1 className="w-full text-4xl lg:text-7xl font-abril mt-10">
              Films
            </h1>
            <div>filters</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-x-8 space-x-2 space-y-4 mt-28">
            {filmsData.map((film, index) => (
              <div
                key={index}
                className="w-full flex flex-col gap-2 justify-start"
              >
                <div className="w-fit h-fit relative flex justify-center items-center group bg-black opacity-95 hover:opacity-100 transition-opacity duration-700 ease-out">
                  <div className="absolute z-10 bg-black/50 hover:bg-none text-white w-full h-full  flex flex-col justify-end items-start transition-opacity duration-700 ease-out">
                    <p className="font-raleway font-semibold pl-2 pb-2 text-xl">
                      {film.name}
                    </p>
                  </div>
                  <img
                    src="/test-frame0.png"
                    alt=""
                    className="object-cover hover:opacity-0 z-10 transition-opacity duration-700 ease-out"
                  />
                  <video
                    src="/videos/Clip3.mp4"
                    className="absolute w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  ></video>
                </div>
                {/* <div className="flex justify-between">
                  <h1 className="font-semibold text-xl">{film.name}</h1>
                  <p className="font-abril font-extralight opacity-50">
                    {film.year}
                  </p>
                </div> */}
                {/* <div className="flex justify-between">
                  <h1 className="">{film.client}</h1>
                  <p className="font-extralight opacity-50">{film.year}</p>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default films;
