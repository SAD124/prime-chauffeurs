import { HashLink } from "react-router-hash-link";

const HeroMini = () => {
  return (
    <section className="relative w-full min-h-screen md:hidden overflow-hidden scroll-mt-16">
      
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

      {/* Content */}
      <div className="absolute top-40 left-4 sm:left-6 flex flex-col gap-2 max-w-[90%]">
        <h1 className="leading-[1.05]">
          <span className="block">
            <span className="font-display text-[50px] sm:text-[60px] text-[#D4C5A0]">
              Premium
            </span>
            <span className="font-roboto font-bold text-[32px] sm:text-[35px] text-white ml-2">
              rides that
            </span>
          </span>
          <span className="block font-roboto font-bold text-[30px] sm:text-[35px] text-white">
            move you forward
          </span>
        </h1>

        <p className="text-gray-300 mt-3 text-md">
          Experience the gold standard of transportation. Professional drivers,
          pristine vehicles, and unmatched reliability for every journey.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mt-4">
          {/* Book Now */}
          <HashLink
            smooth
            to="/#booking-section"
            className="bg-[#D4C5A0] px-8 py-2 rounded-md text-center text-white
                       transition-all duration-300 ease-out
                       hover:scale-105 text-sm"
          >
            Book now
          </HashLink>

          {/* Get Discount */}
          <HashLink
            smooth
            to="/#discount-section"
            className="border-2 border-[#D4C5A0] px-8 py-2 rounded-md text-center text-white
                       transition-all duration-300 ease-out
                       hover:scale-105 hover:bg-white hover:text-black text-sm"
          >
            Get Discount
          </HashLink>
        </div>
      </div>
    </section>
  );
};

export default HeroMini;
