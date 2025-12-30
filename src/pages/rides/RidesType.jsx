import { HashLink } from "react-router-hash-link";
import { IoChevronForward } from "react-icons/io5";
import RidesTypeMini from "./RidesTypeMini";

const RidesType = () => {
  const tabs = [
    "Airport rides",
    "City transfers",
    "Corporate rides",
  ];

  return (
    <>
      {/* Mobile */}
      <RidesTypeMini />

      {/* Desktop */}
      <section className="hidden md:block w-full bg-[#1E1E1E] py-24">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-6 px-6">

          {/* Heading */}
          <h2 className="text-white text-3xl font-bold">
            Professional drivers for every ride
          </h2>

          <p className="text-gray-400 max-w-2xl">
            Our drivers are trained professionals, courteous and well versed in all
            your travelling needs. Quick, efficient, and reliable service for your comfort.
          </p>

          {/* Actions */}
          <div className="flex items-center gap-8 mt-4">
            <HashLink
              smooth
              to="/book#booking-section"
              className="border border-[#D4C5A0] text-white px-6 py-2 rounded-md
                         hover:bg-white hover:text-black transition-colors"
            >
              Hire our rider
            </HashLink>

            <button className="flex items-center gap-2 text-white hover:text-[#D4C5A0] transition-colors">
              <span>Learn more</span>
              <IoChevronForward size={16} />
            </button>
          </div>

          {/* Tabs */}
          <div className="flex gap-10 mt-14">
            {tabs.map((label) => (
              <button
                key={label}
                className="text-white hover:text-[#D4C5A0] transition-colors"
              >
                {label}
              </button>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default RidesType;
