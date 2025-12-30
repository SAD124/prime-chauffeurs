import { Link } from "react-router-dom";
import { IoChevronForward } from "react-icons/io5";

const RidesTypeMini = () => {
  const tabs = [
    "Airport Rides",
    "City transfers",
    "Corporate rides",
  ];

  return (
    <section className="md:hidden w-full bg-[#1E1E1E] border-t border-[#D4C5A0] py-16 px-4">
      <div className="max-w-xl mx-auto flex flex-col items-center text-center gap-8">

        {/* Heading */}
        <div className="space-y-4">
          <h2 className="text-white text-2xl sm:text-3xl font-bold">
            Professional drivers for every ride
          </h2>

          <p className="text-gray-400 text-sm leading-relaxed">
            Our drivers are trained professionals, courteous and well versed in all
            your travelling needs. Quick, efficient, and reliable service for your comfort.
          </p>
        </div>

        {/* Actions */}
        <div className="w-full flex flex-col sm:flex-row gap-4 sm:justify-center">
          <Link
            to="/book"
            className="border border-[#D4C5A0] text-white py-2 px-6 rounded-md
                       text-sm text-center hover:bg-white hover:text-black transition-colors"
          >
            Hire our rider
          </Link>

          <button className="flex items-center justify-center gap-2 text-white text-sm hover:text-[#D4C5A0] transition-colors">
            <span>Learn more</span>
            <IoChevronForward size={14} />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
          {tabs.map((label) => (
            <button
              key={label}
              className="text-white text-xs hover:text-[#D4C5A0] transition-colors"
            >
              {label}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RidesTypeMini;
