import React from "react";
import HeroMini from "./HeroMini";

const HeroSection = () => {

  return (
    <>
    <HeroMini/>
      <section className="relative w-full h-[700px] overflow-hidden hidden md:block">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/Images/hero.webp"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
      </div>


      {/* Blackish Overlay */}
      <div className="w-full h-full bg-black opacity-40" />

      {/* Left Content */}
      <div className="absolute top-[200px] left-[93px] flex flex-col gap-2 max-w-[650px]">
        <h1>
          <span className="font-display text-[106px] leading-[60%] text-[#D4C5A0]">Premium</span><span className="font-roboto font-bold text-[60px] leading-[120%] text-white"> rides that</span>
        </h1>
        <h1 className="font-roboto font-bold text-[50px] leading-[120%] text-white ">
          move you forward
        </h1>

        <p className="font-roboto font-normal text-[18px] leading-[160%] text-gray-300 mt-4 w-[600px]">
          Experience the gold standard of transportation. Professional drivers,
          pristine vehicles, and unmatched reliability for every journey.
        </p>

        <div className="flex gap-4 mt-4 flex-wrap">
          <button
            className="bg-[#D4C5A0] px-8 py-3 text-white font-roboto font-normal rounded-md"
          >
            Book now
          </button>
          <button
            className="border border-[#D4C5A0] px-8 py-3 text-white font-roboto font-normal"
          >
            Get Discount
          </button>
        </div>
      </div>
    </section>

    </>
  );
};

export default HeroSection;
