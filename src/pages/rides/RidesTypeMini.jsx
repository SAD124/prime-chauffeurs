import React from "react";
import { IoChevronForward } from "react-icons/io5";

const RidesTypeMini = () => {
//   const [active, setActive] = useState("airport");

  const tabs = [
    { id: "airport", label: "Airport rides" },
    { id: "city", label: "City transfers" },
    { id: "corporate", label: "Corporate rides" },
  ];

  return (
    <section className="w-full bg-[#1E1E1E] flex flex-col items-center py-12 sm:py-20 px-4 gap-8 border-t border-[#D4C5A0] md:hidden">

      {/* Heading */}
      <div className="flex flex-col items-center gap-4 text-center max-w-[700px]">
        <h2 className="text-white font-roboto font-bold text-[24px] sm:text-[30px] leading-[120%]">
          Professional drivers for every ride
        </h2>

        <p className="text-gray-400 font-roboto text-[14px] sm:text-[15px] leading-[150%]">
          Our drivers are trained professionals, courteous and well versed in all
          your travelling needs. Quick, efficient, and reliable service for your comfort.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-6 items-stretch sm:items-center sm:justify-center w-full">
        <button className="rounded-md border border-[#D4C5A0] text-white px-4 py-2 w-full sm:w-auto font-roboto">
          Hire our rider
        </button>

        <button className="flex items-center justify-center gap-2 font-roboto text-[14px] sm:text-[16px]">
          <span className="text-white">Learn more</span>
          <IoChevronForward size={16} className="text-[#D4C5A0]" />
        </button>
      </div>

      {/* Ride Options */}
      <div className="flex flex-col sm:flex-row gap-1 sm:gap-8 items-center">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            // onClick={() => setActive(tab.id)}
            className={`font-roboto text-[15px] sm:text-[14px] pb-2 text-white
              
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>

    </section>
  );
};

export default RidesTypeMini;
