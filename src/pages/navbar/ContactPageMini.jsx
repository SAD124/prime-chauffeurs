import React, { useState } from "react";
import { Check } from "lucide-react";

export default function ContactPageMini() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section className="bg-[#121212] text-white px-4 py-10 md:hidden">
      <div className="w-full max-w-xl mx-auto space-y-10">

        {/* HEADER */}
        <div className="space-y-4">
          <p className="uppercase text-xs font-semibold tracking-wide">
            Connect
          </p>
          <h1 className="text-2xl sm:text-3xl font-bold">
            Contact us
          </h1>
          <p className="text-gray-300 text-sm leading-relaxed">
            Have questions? We’re here to help you get started.
          </p>

          <div className="space-y-1 text-sm">
            <p>info@primechauffeursaustralia.com.au</p>
            <p>+61 4 1233 5176</p>
            <p>Leppington NSW 2179</p>
          </div>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input label="First name" required />
            <Input label="Last name" required />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input label="Email" type="email" required />
            <Input label="Phone number" />
          </div>

          {/* Select */}
          <div>
            <label className="block text-sm mb-2">
              What can we help with?
            </label>
            <select className="w-full bg-transparent border border-[#D4AF37] rounded-md px-4 py-3 text-sm focus:outline-none">
              <option className="text-black">Support</option>
              <option className="text-black">Partnership</option>
              <option className="text-black">Booking Inquiry</option>
              <option className="text-black">Feedback</option>
              <option className="text-black">General Question</option>
            </select>
          </div>

          {/* Radio */}
          <div>
            <label className="block text-sm mb-2">
              Who are you?
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              {[
                "Business traveler",
                "Corporate client",
                "Tourism group",
                "Individual",
                "Event planner",
                "Other",
              ].map((item) => (
                <label key={item} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="userType"
                    className="accent-[#D4AF37]"
                  />
                  {item}
                </label>
              ))}
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm mb-2">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              rows="4"
              required
              placeholder="Tell us more details"
              className="w-full bg-transparent border border-[#D4AF37] rounded-md px-4 py-3 text-sm focus:outline-none"
            />
          </div>

          {/* Checkbox */}
          <label className="flex items-start gap-2 text-sm">
            <input type="checkbox" required className="accent-[#D4AF37] mt-1" />
            <span>
              I accept the terms <span className="text-red-500">*</span>
            </span>
          </label>

          {/* SUCCESS */}
          {isSubmitted && (
            <div className="flex justify-between items-start border border-gray-400 p-3 bg-[#1E1E1E] rounded-md">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="font-medium text-white">
                  Success!
                </span>
              </div>

              <div className="flex flex-col items-end text-xs text-gray-400">
                <img
                  src="/Images/cloud.png"
                  alt="Cloudflare"
                  className="w-14 mb-1"
                />
                <div className="flex gap-2">
                  <a href="#" className="underline">Privacy</a>
                  <a href="#" className="underline">Terms</a>
                </div>
              </div>
            </div>
          )}

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full bg-[#f7c873] text-black py-3 rounded-md font-medium"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
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
        className="w-full bg-transparent border border-[#D4AF37] rounded-md px-4 py-3 text-sm focus:outline-none"
      />
    </div>
  );
}
