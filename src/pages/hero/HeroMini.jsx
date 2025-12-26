import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { HashLink } from "react-router-hash-link";

/* ================= VARIANTS ================= */
const heroVariants = {
  hidden: { opacity: 0, y: 50, scale: 1.08, transition: { duration: 0.6, ease: "easeInOut" } },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.9, ease: "easeOut" } },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.6, ease: "easeOut" } },
};

const HeroMini = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <section ref={ref} className="relative w-full min-h-[500px] sm:min-h-[550px] md:hidden overflow-hidden scroll-mt-[82px]">
      
      {/* Background Image */}
      <motion.div
        variants={heroVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="absolute inset-0 w-full h-full"
      >
        <img src="/Images/hero.webp" alt="Hero Background" className="w-full h-full object-cover" />
      </motion.div>

      {/* Overlay */}
      <motion.div
        animate={{ backgroundColor: inView ? "rgba(0,0,0,0.4)" : "rgba(0,0,0,1)" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="absolute inset-0"
      />

      {/* Content */}
      <motion.div
        variants={heroVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="absolute top-[152px] left-4 sm:left-6 flex flex-col gap-2 max-w-[90%]"
      >
        <h1 className="leading-[1.05]">
          <span className="block">
            <span className="font-display text-[50px] sm:text-[60px] text-[#D4C5A0]">Premium</span>
            <span className="font-roboto font-bold text-[32px] sm:text-[35px] text-white ml-2">rides that</span>
          </span>
          <span className="block font-roboto font-bold text-[30px] sm:text-[35px] text-white">move you forward</span>
        </h1>

        <p className="text-gray-300 mt-3">
          Experience the gold standard of transportation. Professional drivers, pristine vehicles, and unmatched reliability for every journey.
        </p>

        {/* Buttons */}
        <motion.div
          variants={buttonVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col sm:flex-row gap-3 mt-4"
        >
          <HashLink smooth to="/#booking-section" className="bg-[#D4C5A0] px-8 py-3 rounded-md text-center text-white">
            Book now
          </HashLink>
          <HashLink smooth to="/#discount-section" className="border-2 border-[#D4C5A0] px-8 py-3 rounded-md text-center text-white">
            Get Discount
          </HashLink>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroMini;
