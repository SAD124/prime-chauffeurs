import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { HashLink } from "react-router-hash-link";
import HeroMini from "./HeroMini";

/* ================= VARIANTS ================= */

const heroVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 1.08,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const buttonVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.2, duration: 0.6, ease: "easeOut" },
  },
};

/* ================= COMPONENT ================= */

const HeroSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <>
      {/* Mobile Hero */}
      <HeroMini />

      {/* Desktop Hero */}
      <section
        id="hero"
        ref={ref}
        className="relative w-full h-[700px] overflow-hidden hidden md:block scroll-mt-[82px]"
      >
        {/* Background Image */}
        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src="/Images/hero.webp"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Overlay */}
        <motion.div
          animate={{
            backgroundColor: inView
              ? "rgba(0,0,0,0.4)"
              : "rgba(0,0,0,1)",
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute inset-0"
        />

        {/* Left Content */}
        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
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
            variants={buttonVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex gap-4 mt-4 flex-wrap"
          >
            <HashLink
              smooth
              to="/#booking-section"
              className="bg-[#D4C5A0] px-8 py-3 text-white rounded-md flex justify-center items-center"
            >
              Book now
            </HashLink>

            <HashLink
              smooth
              to="/#discount-section"
              className="border border-[#D4C5A0] px-8 py-3 text-white rounded-md flex justify-center items-center"
            >
              Get Discount
            </HashLink>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default HeroSection;
