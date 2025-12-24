import { Link } from "react-router-dom";
import { IoChevronForward } from "react-icons/io5";
import { motion } from "framer-motion";
import RidesTypeMini from "./RidesTypeMini";

const RidesType = () => {
  const tabs = [
    { id: "airport", label: "Airport rides", width: "w-[88px]" },
    { id: "city", label: "City transfers", width: "w-[95px]" },
    { id: "corporate", label: "Corporate rides", width: "w-[110px]" },
  ];

  // Variants for ride option buttons
  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.5 + i * 0.2, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <>
      {/* Mobile */}
      <RidesTypeMini />

      {/* Desktop */}
      <section className="w-full bg-[#1E1E1E] py-30 px-20 gap-13 border border-t-[#D4C5A0] md:block hidden">

        {/* Heading + Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center gap-6 max-w-[1032px] w-full justify-center text-center m-auto"
        >
          <h2 className="text-white font-roboto font-bold text-[35px] leading-[120%] text-center">
            Professional drivers for every ride
          </h2>

          <p className="text-gray-400 font-roboto font-normal text-[16px] leading-[150%] text-center max-w-[740px]">
            Our drivers are trained professionals, courteous and well versed in all your travelling needs. Quick, efficient, and reliable service for your comfort.
          </p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            className="flex gap-8 justify-center items-center mt-4"
          >
            <Link
              to="/book"
              className="rounded-md border border-[#D4C5A0] text-white px-3 py-2 w-[152px] font-roboto font-normal flex justify-center items-center
                         hover:bg-white hover:text-black transition-colors duration-300"
            >
              Hire our rider
            </Link>

            <button className="flex items-center justify-center gap-2 font-roboto font-normal group">
              <span className="text-white transition-transform transform hover:scale-110 block duration-300 group-hover:text-[#D4C5A0] group-active:text-[#D4C5A0]">
                Learn more
              </span>
              <IoChevronForward
                size={16}
                className="text-white transition-colors duration-300 group-hover:text-[#D4C5A0] group-active:text-[#D4C5A0]"
              />
            </button>
          </motion.div>
        </motion.div>

        {/* Ride Options (staggered) */}
        <div className="flex gap-8 w-[400px] mx-auto mt-14">
          {tabs.map((tab, index) => (
            <motion.div
              key={tab.id}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={tabVariants}
              className="text-white pb-2 transform transition-all duration-300 hover:text-[#D4C5A0] hover:scale-110 cursor-pointer"
            >
              <p className={`font-roboto font-normal text-[16px] leading-[150%] text-center ${tab.width}`}>
                {tab.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default RidesType;
