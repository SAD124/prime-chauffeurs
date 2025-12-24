import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function ContactPageMini() {
  // Variants for container and children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, ease: "easeInOut" },
    },
    exit: { opacity: 0, transition: { ease: "easeInOut" } },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.section
      className="min-h-screen bg-[#121212] text-white px-6 py-12 md:py-16 md:hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-8">
        {/* LEFT CONTENT */}
        <motion.div className="space-y-6 md:space-y-4" variants={childVariants}>
          <p>Connect</p>
          <h1 className="text-4xl md:text-5xl font-bold">Contact us</h1>
          <p>Have questions? We’re here to help you get started.</p>
          <div className="space-y-2 flex flex-col">
            <span>info@primechauffeursaustralia.com.au</span>
            <span>+61 4 1233 5176</span>
            <span>Leppington NSW 2179</span>
          </div>
        </motion.div>

        {/* FORM */}
        <motion.form className="space-y-5 md:space-y-6" variants={childVariants}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            <Input label="First name" required />
            <Input label="Last name" required />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            <Input label="Email" type="email" required />
            <Input label="Phone number" />
          </div>

          <div>
            <label className="block text-sm mb-2">What can we help with?</label>
            <select className="w-full bg-transparent border border-[#D4AF37] rounded-md px-4 py-3 focus:outline-none">
              <option>Support</option>
              <option>Partership</option>
              <option>Booking Inquiry</option>
              <option>Feedback</option>
              <option>General Question</option>
            </select>
          </div>

          <div>
            <label className="block text-sm mb-2">Who are you?</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {["Business traveler","Corporate client","Tourism group","Individual","Event planner","Other"].map((item) => (
                <label key={item} className="flex items-center gap-2">
                  <input type="radio" name="userType" className="accent-[#D4AF37]" />
                  {item}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm mb-2">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              rows="5"
              required
              placeholder="Tell us more details"
              className="w-full bg-transparent border border-[#D4AF37] rounded-md px-4 py-3 focus:outline-none"
            />
          </div>

          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" required className="accent-[#D4AF37]" />
            <span>I accept the terms <span className="text-red-500">*</span></span>
          </label>

          {/* SUCCESS BOX */}
          <motion.div className="flex justify-between items-start border border-gray-400 pl-3 py-2 bg-[#1E1E1E] mt-4 w-80 md:w-80" variants={childVariants}>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <Check className="w-4 h-4 text-white" />
              </div>
              <span className="font-medium text-white text-lg">Success!</span>
            </div>
            <div className="flex flex-col items-start gap-1">
              <img src="/Images/cloud.png" alt="Cloudflare" className="w-16 h-auto" />
              <div className="flex gap-2 text-xs text-gray-400">
                <a href="#" className="underline">Privacy.</a>
                <a href="#" className="underline">Terms</a>
              </div>
            </div>
          </motion.div>

          <motion.button
            type="submit"
            className="bg-[#f7c873] text-black px-10 py-3 rounded-md font-medium"
            variants={childVariants}
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.div>
    </motion.section>
  );
}

function Input({ label, type = "text", required }) {
  return (
    <div>
      <label className="block text-sm mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        className="w-full bg-transparent border border-[#D4AF37] rounded-md px-4 py-3 focus:outline-none"
      />
    </div>
  );
}
