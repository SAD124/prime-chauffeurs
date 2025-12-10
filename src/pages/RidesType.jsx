import React, { useState } from "react";
import { IoChevronForward } from "react-icons/io5";

const RidesType = () => {
  const [active, setActive] = useState("airport");

  const tabs = [
    { id: "airport", label: "Airport rides", width: "w-[88px]" },
    { id: "city", label: "City transfers", width: "w-[95px]" },
    { id: "corporate", label: "Corporate rides", width: "w-[110px]" },
  ];
  return (
    <section className="w-full bg-[#1E1E1E] flex flex-col items-center py-30 px-20 gap-13 border border-t-[#D4C5A0]">

      {/* First Main Div */}
      <div className="flex flex-col items-center gap-8 w-[1032px] max-w-[1380px] h-[190px]">

        {/* Heading */}
        <h2 className="text-white font-roboto font-bold text-[35px] leading-[120%] text-center">
          Professional drivers for every ride
        </h2>

        {/* Description */}
        <p className="text-gray-400 font-roboto font-normal text-[16px] leading-[150%] text-center w-[740px] h-[54px]">
          Our drivers are trained professionals, courteous and well versed in all your travelling needs. Quick, efficient, and reliableservice for your comfort
        </p>

        {/* Links */}
        <div className="flex gap-8 justify-center items-center">
          {/* Secondary Button */}
          <button className="rounded-md border border-[#D4C5A0] text-white px-3 py-2 w-[152px] font-roboto font-normal">
            Hire our rider
          </button>

          {/* Link Button */}
          <button className="flex items-center gap-2 font-roboto font-normal text-[15px]">
            <span className="text-white">Learn more</span>
            <IoChevronForward size={20} className="text-[#D4C5A0]" />
          </button>

        </div>
      </div>

      {/* Second Main Div - Options */}
      <div className="flex gap-8 w-[400px] mx-auto">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`
            pb-2 cursor-pointer 
            ${active === tab.id ? "border-b border-[#D4C5A0]" : "border-b border-transparent"}
          `}
          >
            <p
              className={`text-white font-roboto font-normal text-[16px] leading-[150%] text-center ${tab.width}`}
            >
              {tab.label}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default RidesType;
