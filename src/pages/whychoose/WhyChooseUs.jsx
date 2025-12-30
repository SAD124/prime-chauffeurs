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
    text: "Punctual and dependable transportation for every need.",
  },
];

const WhyChooseUs = () => {
  return (
    <>
      <WhyChooseUsMini />

      <section
        id="services"
        className="hidden lg:block w-full bg-[#1E1E1E] py-24 scroll-mt-12"
      >
        <div className="max-w-6xl mx-auto px-6 flex flex-col gap-20">

          {/* Header */}
          <div className="text-center flex flex-col gap-4">
            <p className="text-white text-sm tracking-wide">Benefits</p>

            <h2 className="text-white font-roboto font-bold text-4xl leading-tight">
              Why choose{" "}
              <span className="font-['Rouge_Script'] text-6xl font-normal text-[#D4C5A0]">
                Shoffr
              </span>{" "}
              for your rides
            </h2>

            <p className="text-gray-300 text-base max-w-2xl mx-auto">
              Discover the advantages of premium transportation that goes beyond
              simple point A to point B travel.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-3 gap-16">
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

                <h3 className="text-white font-roboto font-semibold text-lg">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
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
