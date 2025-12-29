import { HashLink } from "react-router-hash-link";
import { IoChevronForward } from "react-icons/io5";
import RidesTypeMini from "./RidesTypeMini";

const RidesType = () => {
  const tabs = [
    { id: "airport", label: "Airport rides", width: "w-[88px]" },
    { id: "city", label: "City transfers", width: "w-[95px]" },
    { id: "corporate", label: "Corporate rides", width: "w-[110px]" },
  ];

  return (
    <>
      {/* Mobile */}
      <RidesTypeMini />

      {/* Desktop */}
      <section className="w-full bg-[#1E1E1E] py-30 px-20 gap-13 border border-t-[#D4C5A0] md:block hidden">
        
        {/* Heading */}
        <div className="flex flex-col items-center gap-6 w-full justify-center text-center m-auto">
          <h2 className="text-white font-roboto font-bold text-[35px] leading-[120%]">
            Professional drivers for every ride
          </h2>

          <p className="text-gray-400 font-roboto font-normal text-[16px] leading-[150%] max-w-2xl">
            Our drivers are trained professionals, courteous and well versed in all your travelling needs.
            Quick, efficient, and reliable service for your comfort.
          </p>

          {/* Actions */}
          <div className="flex gap-8 justify-center items-center mt-4">
            <HashLink
              smooth
              scroll={(el) =>
                el.scrollIntoView({ behavior: "smooth", block: "start" })
              }
              to="/book#booking-section"
              className="rounded-md border border-[#D4C5A0] text-white px-5 py-2 
                         font-roboto font-normal flex justify-center items-center
                         transition-colors duration-300
                         hover:bg-white hover:text-black"
            >
              Hire our rider
            </HashLink>

            <button className="flex items-center justify-center gap-2 font-roboto font-normal group">
              <span className="text-white transition-colors duration-300 group-hover:text-[#edac08]">
                Learn more
              </span>
              <IoChevronForward
                size={16}
                className="text-white transition-colors duration-300 group-hover:text-[#edac08]"
              />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-8 mx-auto mt-14 justify-center">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className="text-white pb-2 cursor-pointer
                         transition-all duration-300
                         hover:text-[#D4C5A0] hover:scale-110"
            >
              <p
                className={`font-roboto font-normal text-[16px] leading-[150%] text-center ${tab.width}`}
              >
                {tab.label}
              </p>
            </div>
          ))}
        </div>

      </section>
    </>
  );
};

export default RidesType;
