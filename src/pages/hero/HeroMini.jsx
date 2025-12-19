
const HeroMini = () => {
  return (
    <section className="relative w-full min-h-[500px] sm:min-h-[550px] md:min-h-[600px] overflow-hidden md:hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/Images/hero.webp"
          alt="Hero Background"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"/>

      {/* Content */}
      <div className="absolute top-[152px] left-4 sm:left-6 flex flex-col gap-2 max-w-[90%]">
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


        <p className="font-roboto font-normal text-[16px] sm:text-[18px] leading-[160%] text-gray-300 mt-2 sm:mt-4">
          Experience the gold standard of transportation. Professional drivers,
          pristine vehicles, and unmatched reliability for every journey.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 w-full">
          <button className="bg-[#D4C5A0] px-8 py-2 sm:py-4 text-white font-roboto font-normal rounded-md w-full sm:w-auto">
            Book now
          </button>
          <button className="border-2 border-[#D4C5A0] px-8 py-2 sm:py-3 text-white font-roboto font-normal rounded-md w-full sm:w-auto">
            Get Discount
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroMini;
