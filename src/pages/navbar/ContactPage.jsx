import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Check } from "lucide-react";
import ContactPageMini from "./ContactPageMini";

export default function ContactPage() {
  // Variants for staggered animation of children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, ease: "easeInOut" },
    },
    exit: { opacity: 0, transition: { ease: "easeInOut" } },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <>
      <ContactPageMini />

      <motion.section
        className="min-h-screen bg-[#121212] text-white px-6 py-20 hidden md:block"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <motion.div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* LEFT CONTENT */}
          <motion.div variants={childVariants}>
            <div className="space-y-7 mb-8">
              <p>Connect</p>
              <h1 className="text-5xl font-bold">Contact us</h1>
              <p>Have questions? We’re here to help you get started.</p>
            </div>

            <div className="space-y-5 flex flex-col">
              <span>info@primechauffeursaustralia.com.au</span>
              <span>+61 4 1233 5176</span>
              <span>Leppington NSW 2179</span>
            </div>
          </motion.div>

          {/* FORM */}
          <motion.form className="space-y-6" variants={childVariants}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input label="First name" required />
              <Input label="Last name" required />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input label="Email" type="email" required />
              <Input label="Phone number" />
            </div>

            <div>
              <label className="block text-sm mb-2">What can we help with?</label>
              <select className="w-full bg-transparent border border-[#D4AF37] rounded-md px-4 py-3 focus:outline-none">
                <option className="text-black">Support</option>
                <option className="text-black">Partnership</option>
                <option className="text-black">Booking Inquiry</option>
                <option className="text-black">Feedback</option>
                <option className="text-black">General Question</option>
              </select>
            </div>

            <div>
              <label className="block text-sm mb-2">Who are you?</label>
              <div className="grid grid-cols-2 gap-3 text-sm">
                {[
                  "Business traveler",
                  "Corporate client",
                  "Tourism group",
                  "Individual",
                  "Event planner",
                  "Other",
                ].map((item) => (
                  <label key={item} className="flex items-center gap-2">
                    <input type="radio" name="userType" className="accent-[#D4AF37]" />
                    {item}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="text-sm mb-2 flex items-center gap-1">
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
              <input type="checkbox" required className="accent-[#D4AF37] focus:ring-2 focus:ring-red-500" />
              <span>
                I accept the terms <span className="text-red-500">*</span>
              </span>
            </label>

            {/* SUCCESS BOX */}
            <div className="flex justify-between items-center border border-gray-400 pl-3 bg-[#1E1E1E] mt-6 w-80">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="font-medium text-white text-lg">Success!</span>
              </div>

              <div className="flex flex-col">
                <div className="w-30">
                  <img src="/Images/cloud.png" alt="Cloudflare" className="w-30" />
                </div>
                <div className="flex justify-center text-xs text-gray-400 ">
                  <a href="#" className="underline">Privacy.</a>
                  <a href="#" className="underline">Terms</a>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="bg-[#f7c873] text-black px-6 py-3 rounded-md font-medium"
            >
              Send
            </button>
          </motion.form>
        </motion.div>
      </motion.section>
    </>
  );
}

function Input({ label, type = "text", required }) {
  return (
    <div>
      <label className="block text-sm mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        className="w-full bg-transparent border border-[#D4AF37] rounded-md px-4 py-3 focus:outline-none"
      />
    </div>
  );
}
