const benefits = [
  {
    image: "/Images/choose1.webp",
    title: "Professional Drivers",
    text: "Trained experts who prioritize your comfort and safety.",
  },
  {
    image: "/Images/choose2.webp",
    title: "Luxury Experience",
    text: "Clean, modern fleet with premium amenities.",
  },
  {
    image: "/Images/choose3.webp",
    title: "Always On Time",
    text: "Puntual and dependable transportation for every need",
  },
];

const WhyChooseUsMini = () => {
  return (
    <section id="servicesmini" className="w-full bg-[#1E1E1E] py-15 sm:py-20 flex justify-center lg:hidden scroll-mt-12">
      {/* Container */}
      <div className="w-full max-w-6xl px-4 flex flex-col items-center gap-6 sm:gap-14">

        {/* TOP CONTENT */}
        <div className="flex flex-col items-center text-center gap-4">

          <p className="text-white text-[14px] tracking-wide">
            Benefits
          </p>

          <h2 className="text-white font-roboto font-bold text-[23px] sm:text-[32px] leading-[120%]">
            Why choose{" "}
            <span className="font-['Rouge_Script'] text-[40px] sm:text-[48px] text-[#D4C5A0]">
              Shoffr
            </span>{" "}
            for your rides
          </h2>

          <p className="text-gray-300 text-[14px] sm:text-[15px] leading-[150%] max-w-2xl mt-2 sm:mt-5">
            Discover the advantages of premium transportation that goes beyond
            simple point A to point B travel.
          </p>
        </div>

        {/* CARDS */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-8">

          {benefits.map((item, index) => (
            <div
              key={index}
              className="
                flex flex-col items-center text-center gap-4
                px-6 py-6 rounded-xl
                transition-all duration-300
                hover:bg-[#2A2A2A]
              "
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 object-contain"
              />

              <h3 className="text-white font-roboto font-bold text-[17px]">
                {item.title}
              </h3>

              <p className="text-gray-400 font-roboto text-[14px] leading-[150%]">
                {item.text}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsMini;
