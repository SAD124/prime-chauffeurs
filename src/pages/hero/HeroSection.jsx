import { HashLink } from "react-router-hash-link";
import HeroMini from "./HeroMini";

const HeroSection = () => {
  return (
    <>
      {/* Mobile Hero */}
      <HeroMini />

      {/* Desktop Hero */}
      <section
        id="hero"
        className="relative w-full min-h-screen overflow-hidden hidden md:block scroll-mt-16"
      >
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/Images/hero.webp"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Left Content */}
        <div className="absolute top-52 left-20 flex flex-col gap-1">
          <h1>
            <span className="font-display text-[106px] leading-[60%] text-[#D4C5A0]">
              Premium
            </span>
            <span className="font-roboto font-bold text-[60px] leading-[120%] text-white">
              {" "}rides that
            </span>
          </h1>

          <h1 className="font-roboto font-bold text-[60px] leading-[120%] text-white -mt-4">
            move you forward
          </h1>

          <p className="font-roboto font-normal text-[18px] leading-[160%] text-gray-300 mt-4 max-w-2xl">
            Experience the gold standard of transportation. Professional drivers,
            pristine vehicles, and unmatched reliability for every journey.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-4 flex-wrap">
  {/* Book Now */}
  <HashLink
    smooth
    to="/#booking-section"
    className="bg-[#D4C5A0] px-8 py-3 text-white rounded-md 
               flex justify-center items-center
               transition-all duration-300 ease-out
               hover:scale-105"
  >
    Book now
  </HashLink>

  {/* Get Discount */}
  <HashLink
    smooth
    to="/#booking-section"
    className="border border-[#D4C5A0] px-8 py-3 text-white rounded-md 
               flex justify-center items-center
               transition-all duration-300 ease-out
               hover:scale-105 hover:bg-white hover:text-black"
  >
    Get Discount
  </HashLink>
</div>

        </div>
      </section>
    </>
  );
};

export default HeroSection;
