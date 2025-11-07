import CircularGallery from "@/components/CircularGallery";
import HoverCard from "@/components/HoverCard";
import React from "react";

const Awards = () => {
  return (
    <div className="w-full min-h-[50vh] h-full max-w-[1440px] px-4 md:px-16 my-40 py-20 mx-auto">
      <h1 className="text-4xl font-abril">Awards</h1>
      {/* <div style={{ height: "600px", position: "relative" }} className="">
        <CircularGallery
          bend={3}
          textColor="#000"
          borderRadius={0.05}
          scrollEase={0.01}
        />
      </div> */}
      <HoverCard />
    </div>
  );
};

export default Awards;
