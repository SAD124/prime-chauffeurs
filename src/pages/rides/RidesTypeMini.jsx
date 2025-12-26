import React from "react";
import { Link } from "react-router-dom";
import { IoChevronForward } from "react-icons/io5";
import { motion } from "framer-motion";

const RidesTypeMini = () => {
  const tabs = [
    { id: "airport", label: "Airport rides" },
    { id: "city", label: "City transfers" },
    { id: "corporate", label: "Corporate rides" },
  ];

  // Variants for ride buttons
  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.5 + i * 0.2, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <section className="w-full bg-[#1E1E1E] flex flex-col items-center py-12 sm:py-20 px-4 gap-8 border-t border-[#D4C5A0] md:hidden">

      {/* Heading + paragraph */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex flex-col items-center gap-4 text-center max-w-[700px]"
      >
        <h2 className="text-white font-roboto font-bold text-[24px] sm:text-[30px] leading-[120%]">
          Professional drivers for every ride
        </h2>

        <p className="text-gray-400 font-roboto text-[14px] sm:text-[15px] leading-[150%]">
          Our drivers are trained professionals, courteous and well versed in all
          your travelling needs. Quick, efficient, and reliable service for your comfort.
        </p>
      </motion.div>

      {/* Buttons: Hire + Learn more */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
        className="flex flex-col sm:flex-row gap-6 items-stretch sm:items-center sm:justify-center w-full"
      >
        <Link
          to="/book"
          className="rounded-md border border-[#D4C5A0] text-white px-4 py-2 w-full sm:w-auto font-roboto flex justify-center items-center
                     hover:bg-white hover:text-black transition-colors duration-300"
        >
          Hire our rider
        </Link>

        <button className="flex items-center justify-center gap-2 font-roboto text-[14px] sm:text-[16px] group">
          <span className="text-white block transition-transform transform duration-300 group-hover:scale-110 group-hover:text-[#D4C5A0] group-active:text-[#D4C5A0]">
            Learn more
          </span>
          <IoChevronForward
            size={16}
            className="text-white transition-colors duration-300 group-hover:text-[#D4C5A0] group-active:text-[#D4C5A0]"
          />
        </button>
      </motion.div>

      {/* Ride option buttons (staggered on scroll) */}
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-8 items-center">
        {tabs.map((tab, index) => (
          <motion.button
            key={tab.id}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={tabVariants}
            className="font-roboto text-[15px] sm:text-[16px] text-white transition-all duration-300 transform hover:scale-110 hover:text-[#D4C5A0]"
          >
            {tab.label}
          </motion.button>
        ))}
      </div>
    </section>
  );
};

export default RidesTypeMini;
