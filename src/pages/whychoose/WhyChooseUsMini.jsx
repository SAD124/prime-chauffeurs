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

const WhyChooseUsMini = () => {
  return (
    <section
      id="servicesmini"
      className="lg:hidden w-full bg-[#1E1E1E] py-16 sm:py-20 scroll-mt-12"
    >
      {/* Container */}
      <div className="max-w-xl mx-auto px-4 flex flex-col items-center gap-12">

        {/* Header */}
        <div className="text-center flex flex-col gap-4">
          <p className="text-white text-sm tracking-wide">Benefits</p>

          <h2 className="text-white font-roboto font-bold text-2xl sm:text-3xl leading-tight">
            Why choose{" "}
            <span className="font-['Rouge_Script'] text-4xl sm:text-5xl text-[#D4C5A0]">
              Shoffr
            </span>{" "}
            for your rides
          </h2>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Discover the advantages of premium transportation that goes beyond
            simple point A to point B travel.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center gap-4
                         px-6 py-6 rounded-xl bg-[#242424]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-14 h-14 object-contain"
              />

              <h3 className="text-white font-roboto font-semibold text-base">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
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
