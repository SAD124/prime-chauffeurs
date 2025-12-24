import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import HeroMini from "./HeroMini";

const HeroSection = () => {
  return (
    <>
      {/* Mobile Hero */}
      <HeroMini />

      {/* Desktop Hero */}
      <section className="relative w-full h-[700px] overflow-hidden hidden md:block">

        {/* Background Image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src="/Images/hero.webp"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-40" />

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="absolute top-[200px] left-[93px] flex flex-col gap-2 max-w-[650px]"
        >
          <h1>
            <span className="font-display text-[106px] leading-[60%] text-[#D4C5A0]">
              Premium
            </span>
            <span className="font-roboto font-bold text-[60px] leading-[120%] text-white">
              {" "}rides that
            </span>
          </h1>

          <h1 className="font-roboto font-bold text-[50px] leading-[120%] text-white">
            move you forward
          </h1>

          <p className="font-roboto font-normal text-[18px] leading-[160%] text-gray-300 mt-4 w-[600px]">
            Experience the gold standard of transportation. Professional drivers,
            pristine vehicles, and unmatched reliability for every journey.
          </p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
            className="flex gap-4 mt-4 flex-wrap"
          >
            <Link
              to="/book"
              className="bg-[#D4C5A0] px-8 py-3 text-white rounded-md flex justify-center items-center"
            >
              Book now
            </Link>

            <Link
              to="/book"
              className="border border-[#D4C5A0] px-8 py-3 text-white rounded-md flex justify-center items-center"
            >
              Get Discount
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default HeroSection;
