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
        className="relative hidden lg:block min-h-screen overflow-hidden scroll-mt-16"
      >
        {/* Background Image */}
        <img
          src="/Images/hero.webp"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 max-w-8xl mx-auto pt-50 px-20">
          <h1 className="flex items-center gap-2 leading-none  tracking-wider">
  <span className="font-display text-[96px] text-[#D4C5A0]">
    Premium
  </span>
  <span className="font-roboto font-bold text-[60px] text-white">
    rides that
  </span>
</h1>


          <h2 className="font-roboto font-bold text-[60px] text-white -mt-7 tracking-wide">
            move you forward
          </h2>

          <p className="mt-4 max-w-xl text-lg text-[#cfd2d8]">
            Experience the gold standard of transportation. Professional drivers,
            pristine vehicles, and unmatched reliability for every journey.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <HashLink
              smooth
              to="/#booking-section"
              className="bg-[#D4C5A0] px-8 py-3 rounded-md text-white hover:scale-105 transition"
            >
              Book now
            </HashLink>

            <HashLink
              smooth
              to="/#booking-section"
              className="border border-[#D4C5A0] px-8 py-3 rounded-md text-white hover:bg-white hover:text-black transition"
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
