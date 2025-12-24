import { motion } from "framer-motion";

const DiscountHeader = () => {
  return (
    <div
      id="main"
      className="w-full bg-[#D4C5A0] py-5 flex items-center justify-center relative z-40"
    >
      <div className="max-w-[1440px] w-full mx-auto flex items-center justify-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }} // start below
          animate={{
            opacity: 1,
            y: 0,
            scale: [1, 1.1, 1], // continuous scaling
          }}
          transition={{
            y: { duration: 0.7, ease: "easeOut" }, // slide up
            scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }, // scaling
          }}
          className="text-[15px] tracking-wide text-white cursor-pointer font-medium"
        >
          Earn Discount Coupons for Your Next Ride!
        </motion.p>
      </div>
    </div>
  );
};

export default DiscountHeader;
