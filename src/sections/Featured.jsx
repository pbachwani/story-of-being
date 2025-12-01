import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const Featured = () => {
  return (
    <section className="w-full h-full min-h-screen pt-20 px-4 md:px-16 mx-auto bg-background">
      <div className="flex flex-col gap-10 max-w-[1440px] mx-auto">
        <h1 className="font-abril text-4xl lg:text-7xl">Featured Films</h1>
        {/* card 1 */}

        <div className="w-full max-w-7xl h-full flex flex-col mx-auto md:mt-16 mt-10">
          <img
            src={"/featured/2.png"}
            alt="first"
            className="w-full h-full object-cover rounded-xl hover:scale-[101%] transition-all duration-500 ease-out hover:rounded-sm"
          />
          <div className="flex flex-col md:flex-row w-full md:gap-10 gap-4 mt-10">
            <h2 className="md:w-1/2 md:text-end font-bold font-raleway text-2xl md:text-4xl tracking-wider">
              Weaves Of Maheshwar
            </h2>
            <p className="md:w-1/2 font-montserrat text-justify leading-tight">
              Weaves of Maheshwar is a story about craft revival. The
              documentary revolves around various journeys about people who have
              made this change possible. In an era where the machines are taking
              over the world India is the only country which still produces 90%
              of handloom. Weaves of Maheshwar portrays this strength of Indian
              textiles and our rich craft sector. The protagonists of this film
              are a group of people who have facilitated this change.
            </p>
          </div>
        </div>
        {/* row 2 */}
        <div className="w-full max-w-7xl h-full flex flex-col md:flex-row mx-auto gap-10 mt-10">
          <div className="md:w-1/2 w-full flex flex-col">
            <img
              src="/featured/1.png"
              alt="first"
              className="w-full h-full object-cover rounded-xl hover:scale-[101%] transition-all duration-500 ease-out hover:rounded-sm"
            />
            <div className="w-full flex justify-between items-end">
              <h2 className="mt-8 font-raleway font-bold text-2xl">
                To Turn a Tide
              </h2>
              <span>
                <ChevronRight size={32} />
              </span>
            </div>
            <p className="mt-2 font-montserrat text-justify leading-tight">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              voluptas soluta, aperiam architecto sint esse autem voluptates
              tempore adipisci dignissimos aspernatur amet cumque ex ad.
            </p>
          </div>
          <div className="md:w-1/2 w-full flex flex-col">
            <img
              src="/featured/3.png"
              alt="first"
              className="w-full h-full object-cover rounded-xl hover:scale-[101%] transition-all duration-500 ease-out hover:rounded-sm"
            />

            <div className="w-full flex justify-between items-end">
              <h2 className="mt-8 font-raleway font-bold text-2xl">
                Rajkumari Ratnavati School
              </h2>
              <span>
                <ChevronRight size={32} />
              </span>
            </div>
            <p className="mt-2 font-montserrat text-justify leading-tight">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              voluptas soluta, aperiam architecto sint esse autem voluptates
              tempore adipisci dignissimos aspernatur amet cumque ex ad.
            </p>
          </div>
        </div>

        {/* row 3 */}
        <div className="w-full max-w-7xl h-full flex flex-col md:flex-row mx-auto gap-10">
          <div className="md:w-1/2 w-full flex flex-col">
            <img
              src="/featured/4.png"
              alt="first"
              className="w-full h-full object-cover rounded-xl hover:scale-[101%] transition-all duration-500 ease-out hover:rounded-sm"
            />
            <div className="w-full flex justify-between items-end">
              <h2 className="mt-8 font-raleway font-bold text-2xl">The Dawn</h2>
              <span>
                <ChevronRight size={32} />
              </span>
            </div>
            <p className="mt-2 font-montserrat text-justify leading-tight">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              voluptas soluta, aperiam architecto sint esse autem voluptates
              tempore adipisci dignissimos aspernatur amet cumque ex ad.
            </p>
          </div>
          <div className="md:w-1/2 w-full flex flex-col">
            <img
              src="/featured/5.png"
              alt="first"
              className="w-full h-full object-cover rounded-xl hover:scale-[101%] transition-all duration-500 ease-out hover:rounded-sm"
            />
            <div className="w-full flex justify-between items-end">
              <h2 className="mt-8 font-raleway font-bold text-2xl">
                Tholubomalatta
              </h2>
              <span>
                <ChevronRight size={32} />
              </span>
            </div>
            <p className="mt-2 font-montserrat text-justify leading-tight">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              voluptas soluta, aperiam architecto sint esse autem voluptates
              tempore adipisci dignissimos aspernatur amet cumque ex ad.
            </p>
          </div>
        </div>

        {/* all films button */}
        <div className="flex justify-center items-center">
          <button className="border border-gray-500 px-4 py-2 hover:rounded-lg hover:bg-[#2A5311] hover:text-white duration-200 ease-out transition-all">
            Watch all films
          </button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
