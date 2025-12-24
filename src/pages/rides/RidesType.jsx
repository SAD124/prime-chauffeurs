
import { Link } from "react-router-dom";
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
    <RidesTypeMini/>
      <section className="w-full bg-[#1E1E1E] py-30 px-20 gap-13 border border-t-[#D4C5A0] md:block hidden">

      {/* First Main Div */}
      <div className="flex flex-col items-center gap-10 max-w-[1032px] w-full justify-center text-center m-auto">

        {/* Heading */}
        <h2 className="text-white font-roboto font-bold text-[35px] leading-[120%] text-center">
          Professional drivers for every ride
        </h2>

        {/* Description */}
        <p className="text-gray-400 font-roboto font-normal text-[16px] leading-[150%] text-center max-w-[740px]">
          Our drivers are trained professionals, courteous and well versed in all your travelling needs. Quick, efficient, and reliableservice for your comfort
        </p>

{/* Links */}
<div className="flex gap-8 justify-center items-center">
  {/* Secondary Button */}
  <Link
    to="/book"
    className="rounded-md border border-[#D4C5A0] text-white px-3 py-2 w-[152px] font-roboto font-normal flex justify-center items-center
               hover:bg-white hover:text-black transition-colors duration-300"
  >
    Hire our rider
  </Link>

  {/* Link Button */}
<button className="flex items-center justify-center gap-2 font-roboto font-normal group">
  <span className="text-white transition-transform transform hover:scale-110 block duration-300 group-hover:text-[#D4C5A0] group-active:text-[#D4C5A0]">
    Learn more
  </span>
  <IoChevronForward
    size={16}
    className="text-white transition-colors duration-300 group-hover:text-[#D4C5A0] group-active:text-[#D4C5A0]"
  />

</button>
</div>


      </div>

      {/* Second Main Div - Options */}
<div className="flex gap-8 w-[400px] mx-auto mt-14">
  {tabs.map((tab) => (
    <div
      key={tab.id}
      className="text-white pb-2 transform transition-all duration-300 hover:text-[#D4C5A0] hover:scale-110 cursor-pointer"
    >
      <p
        className={` font-roboto font-normal text-[16px] leading-[150%] text-center ${tab.width}`}
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
