import React from "react";

const Featured = () => {
  return (
    <section className="w-full h-full min-h-screen pt-20 px-16 max-w-7xl mx-auto">
      <div className="flex flex-col gap-10">
        <h1 className="font-abril text-4xl">Featured Films</h1>
        {/* card 1 */}
        <div className="w-full h-[75vh] rounded-2xl grid grid-cols-12 border border-white bg-[#587525] text-white">
          {/* left */}
          <div className="md:col-span-8 col-span-12 h-full md:p-8 p-4">
            <div className="p-0 h-full bg-gray-200 rounded-2xl flex justify-center items-center text-black">
              for featured image / video
            </div>
          </div>

          {/* right */}
          <div className="md:col-span-4 col-span-12 p-0">
            <div className=" md:p-8 p-4 h-full w-full flex flex-col justify-between items-start">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button>watch film</button>
            </div>
          </div>
        </div>

        {/* wrapper for bottom 2 cards */}
        <div className="flex max-md:flex-col gap-4">
          {/* card 2 */}
          <div className="md:w-1/2 w-full min-h-[50vh] rounded-2xl flex flex-col border border-white bg-[#2A5311]/40">
            {/* left */}
            <div className="h-full md:p-8 p-4">
              <div className="p-0 h-full min-h-48 bg-gray-200 rounded-2xl flex justify-center items-center">
                for featured image / video
              </div>
            </div>

            {/* right */}
            <div className="p-0">
              <div className=" md:p-8 p-4 h-full w-full flex flex-col justify-between items-start gap-4">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button>watch film</button>
              </div>
            </div>
          </div>

          {/* card 3 */}
          <div className="md:w-1/2 w-full min-h-[50vh] rounded-2xl flex flex-col border border-white bg-[#2A5311]/40">
            {/* left */}
            <div className="h-full md:p-8 p-4">
              <div className="p-0 h-full min-h-48 bg-gray-200 rounded-2xl flex justify-center items-center">
                for featured image / video
              </div>
            </div>

            {/* right */}
            <div className="p-0">
              <div className=" md:p-8 p-4 h-full w-full flex flex-col justify-between items-start gap-4">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button>watch film</button>
              </div>
            </div>
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
