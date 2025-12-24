import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HeroMini = () => {
  return (
    <section className="relative w-full min-h-[500px] sm:min-h-[550px] md:min-h-[600px] overflow-hidden md:hidden">

      {/* Background Image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
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

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="absolute top-[152px] left-4 sm:left-6 flex flex-col gap-2 max-w-[90%]"
      >
        {/* Heading */}
        <h1 className="leading-[1.05]">
          <span className="block">
            <span className="font-display text-[50px] sm:text-[60px] text-[#D4C5A0]">
              Premium
            </span>
            <span className="font-roboto font-bold text-[32px] sm:text-[35px] text-white ml-2">
              rides that
            </span>
          </span>
          <span className="block font-roboto font-bold text-[30px] sm:text-[35px] text-white">
            move you forward
          </span>
        </h1>

        <p className="text-gray-300 mt-3">
          Experience the gold standard of transportation. Professional drivers,
          pristine vehicles, and unmatched reliability for every journey.
        </p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 mt-4"
        >
          <Link className="bg-[#D4C5A0] px-8 py-3 rounded-md text-center text-white">
            Book now
          </Link>
          <Link className="border-2 border-[#D4C5A0] px-8 py-3 rounded-md text-center text-white">
            Get Discount
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroMini;
