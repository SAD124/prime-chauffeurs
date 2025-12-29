import WhyChooseUsMini from "./WhyChooseUsMini";

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
    text: "Punctual and dependable transportation for every need",
  },
];

const WhyChooseUs = () => {
  return (
    <>
      <WhyChooseUsMini />

      <section
        id="services"
        className="w-full bg-[#1E1E1E] py-20 justify-center hidden lg:flex scroll-mt-12"
      >
        <div className="w-full max-w-6xl flex flex-col items-center gap-20">

          {/* TOP CONTENT */}
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="text-white text-[16px] tracking-wide">Benefits</p>
            <h2 className="text-white font-roboto font-bold text-[40px] leading-[120%]">
              Why choose{" "}
              <span className="font-['Rouge_Script'] text-[64px] font-normal leading-[120%] text-[#D4C5A0]">
                Shoffr
              </span>{" "}
              for your rides
            </h2>
            <p className="text-gray-300 text-[16px] leading-[150%] max-w-2xl">
              Discover the advantages of premium transportation that goes beyond simple point A to point B travel.
            </p>
          </div>

          {/* BOTTOM CARDS */}
          <div className="w-full flex justify-between gap-16">
            {benefits.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center gap-5"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-24 object-contain"
                />
                <h3 className="text-white font-roboto font-bold text-[19px] leading-[130%]">
                  {item.title}
                </h3>
                <p className="text-gray-400 font-roboto text-[15px] leading-[150%] w-84">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
