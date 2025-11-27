import Image from "next/image";
import React from "react";

const Featured = () => {
  return (
    <section className="w-full h-full min-h-screen pt-20 px-4 md:px-16 mx-auto bg-background">
      <div className="flex flex-col gap-10 max-w-[1440px]">
        <h1 className="font-abril text-4xl lg:text-7xl">Featured Films</h1>
        {/* card 1 */}

        <div className="w-full max-w-7xl h-full flex flex-col mx-auto">
          <img
            src={"/featured/2.png"}
            alt="first"
            className="w-full h-full object-cover rounded-xl"
          />
          <div className="flex flex-col md:flex-row w-full gap-10 mt-10">
            <h2 className="md:w-1/2 md:text-end font-bold font-abril text-4xl tracking-wider">
              Weaves Of Maheshwar
            </h2>
            <p className="md:w-1/2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat,
              velit molestiae esse quis ullam explicabo ex placeat voluptatum
              optio harum inventore quisquam id possimus, ut sequi voluptates
              facere soluta, ipsa deleniti aliquid at vero provident omnis.
              Excepturi inventore tempora consectetur totam temporibus ratione
              impedit mollitia? Quisquam eos reiciendis ducimus explicabo.
            </p>
          </div>
        </div>

        <div className="w-full max-w-7xl h-full flex flex-col md:flex-row mx-auto gap-10">
          <div className="md:w-1/2 w-full flex flex-col">
            <img
              src="/featured/1.png"
              alt="first"
              className="w-full h-full object-cover rounded-xl"
            />
            <h2 className="mt-8 font-abril font-bold text-2xl">
              To Turn a Tide
            </h2>
            <p className="mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              voluptas soluta, aperiam architecto sint esse autem voluptates
              tempore adipisci dignissimos aspernatur amet cumque ex ad.
            </p>
          </div>
          <div className="md:w-1/2 w-full flex flex-col">
            <img
              src="/featured/3.png"
              alt="first"
              className="w-full h-full object-cover rounded-xl"
            />
            <h2 className="mt-8 font-abril font-bold text-2xl">
              Rajkumari Ratnavati School
            </h2>
            <p className="mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              voluptas soluta, aperiam architecto sint esse autem voluptates
              tempore adipisci dignissimos aspernatur amet cumque ex ad.
            </p>
          </div>
        </div>
        <div className="w-full max-w-7xl h-full flex flex-col md:flex-row mx-auto gap-10">
          <div className="md:w-1/2 w-full flex flex-col">
            <img
              src="/featured/1.png"
              alt="first"
              className="w-full h-full object-cover rounded-xl"
            />
            <h2 className="mt-8 font-abril font-bold text-2xl">
              To Turn a Tide
            </h2>
            <p className="mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              voluptas soluta, aperiam architecto sint esse autem voluptates
              tempore adipisci dignissimos aspernatur amet cumque ex ad.
            </p>
          </div>
          <div className="md:w-1/2 w-full flex flex-col">
            <img
              src="/featured/3.png"
              alt="first"
              className="w-full h-full object-cover rounded-xl"
            />
            <h2 className="mt-8 font-abril font-bold text-2xl">
              Rajkumari Ratnavati School
            </h2>
            <p className="mt-2">
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
