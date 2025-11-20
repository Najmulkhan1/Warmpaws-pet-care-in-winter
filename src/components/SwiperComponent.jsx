import React from "react";
import SwiperCarouselLogic from "./SwiperCarouselLogic";

const SwiperComponent = () => {
  return (
    <div className=" flex flex-col items-center p-4 sm:p-8 font-sans">
    
      <div className="w-full max-w-5xl">
        <SwiperCarouselLogic/>
      </div>
      
    </div>
  );
};

export default SwiperComponent;
