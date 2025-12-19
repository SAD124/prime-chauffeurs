import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const FAQMini = () => {
  const faqData = [
    {
      question: "What type of car do you use?",
      answer:
        "We use a variety of modern cars including sedans and SUVs to ensure comfort and safety.",
    },
    {
      question: "Can I book a ride for someone else?",
      answer:
        "Yes! You can book rides for family, friends, or colleagues by entering their details.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="block lg:hidden w-full bg-[#1E1E1E] border-t border-[#D4C5A0] py-14 px-4">
      <div className="max-w-[900px] mx-auto flex flex-col gap-7 sm:gap-10">

        {/* Heading */}
        <h2 className="text-center text-[#D4C5A0] 
          text-[26px] sm:text-[30px] md:text-[32px] font-normal">
          Frequently Asked Questions
        </h2>

        {/* Tabs */}
        <div className="w-full max-w-[460px] sm:max-w-[620px] mx-auto">
        <div className="flex flex-wrap justify-center gap-2">
          {["General", "Payment", "Booking", "Airport Transfers", "City Tour"].map(
            (tab, idx) => (
              <div
                key={idx}
                className={`rounded-full px-3 sm:px-7 py-1 sm:py-2 flex justify-center items-center
                  ${
                    idx === 0
                      ? "bg-[#D4C5A0] text-[#1E1E1E]"
                      : "border border-[#FFFFFF4D] text-gray-300"
                  }`}
              >
                <span className="text-[11px] sm:text-[12px]">
                  {tab}
                </span>
              </div>
            )
          )}
        </div>
        </div>

        {/* Questions */}
        <div className="w-full max-w-[460px] sm:max-w-[700px] mx-auto flex flex-col">
          {faqData.map((item, idx) => (
            <div key={idx} className="flex flex-col">

              <button
                onClick={() => toggleFAQ(idx)}
                className="flex items-center justify-between py-4 px-3"
              >
                <p className="text-white text-[14px] sm:text-[15px]">
                  {item.question}
                </p>

                <FiChevronDown
                  className={`w-4 h-4 text-white transition-transform duration-300 ${
                    openIndex === idx ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === idx && (
                <p className="text-gray-400 text-[13px] sm:text-[14px] pb-4">
                  {item.answer}
                </p>
              )}

              <div className="border-b border-[#D4C5A0]" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQMini;
