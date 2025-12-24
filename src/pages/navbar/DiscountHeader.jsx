import { motion } from "framer-motion";

const DiscountHeader = () => {
  return (
    <div  id="main" className="w-full bg-[#D4C5A0] py-5 flex items-center justify-center scroll-mt-[90px]">
      <div className="max-w-[1440px] w-full mx-auto flex items-center justify-center">
        <motion.p
          className="text-[15px] tracking-wide text-white cursor-pointer font-medium"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Earn Discount Coupons for Your Next Ride!
        </motion.p>
      </div>
    </div>
  );
};

export default DiscountHeader;
