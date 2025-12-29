import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const FAQMini = () => {
  const tabs = ["General", "Payment", "Booking", "Airport Transfers", "City Tour"];

  const faqData = [
    {
      category: "General",
      question: "What type of car do you use?",
      answer:
        "We use a variety of modern cars including sedans and SUVs to ensure comfort and safety.",
    },
    {
      category: "General",
      question: "Can I book a ride for someone else?",
      answer:
        "Yes! You can book rides for family, friends, or colleagues by entering their details.",
    },
    {
      category: "Payment",
      question: "What payment methods are accepted?",
      answer:
        "We accept credit cards, debit cards, and secure online payments.",
    },
    {
      category: "Booking",
      question: "How do I book a ride?",
      answer:
        "You can book directly from our website or through our mobile application.",
    },
    {
    category: "Airport Transfers",
    question: "Do you track flight delays?",
    answer:
      "Yes, we monitor flight schedules in real time and adjust pickup times automatically.",
  },
  {
    category: "Airport Transfers",
    question: "Will the driver wait if my flight is late?",
    answer:
      "Absolutely. Complimentary waiting time is included for delayed flights.",
  },
  {
    category: "Airport Transfers",
    question: "Where will the driver meet me at the airport?",
    answer:
      "The driver will meet you at the arrival terminal with a name sign for easy identification.",
  },

  // CITY TOUR
  {
    category: "City Tour",
    question: "Do you offer guided city tours?",
    answer:
      "Yes, we offer customizable guided city tours with experienced local drivers.",
  },
  {
    category: "City Tour",
    question: "How long are city tours?",
    answer:
      "City tours can range from a few hours to a full-day experience depending on your preference.",
  },
  {
    category: "City Tour",
    question: "Can I customize my city tour route?",
    answer:
      "Yes, routes and stops can be fully customized based on your interests.",
  },
  ];

  const [activeTab, setActiveTab] = useState("General");
  const [openIndex, setOpenIndex] = useState(null);

  const filteredFAQs = faqData.filter(
    (item) => item.category === activeTab
  );

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full max-w-full overflow-x-hidden block sm:hidden bg-[#1E1E1E] border-t border-[#D4C5A0] py-10 sm:py-14 px-3">
      <div className=" mx-auto flex flex-col gap-7 sm:gap-10 w-full ">

        {/* Heading */}
        <h2 className="text-center text-[#D4C5A0] 
          text-[26px] sm:text-[30px] md:text-[32px] font-normal">
          Frequently Asked Questions
        </h2>

        {/* Tabs */}
        <div className="w-full mx-auto">
          <div className="flex flex-wrap justify-center gap-2 overflow-hidden">
            {tabs.map((tab) => {
              const isActive = activeTab === tab;

              return (
                <button
  key={tab}
  onClick={() => {
    setActiveTab(tab);
    setOpenIndex(null);
  }}
  className={`rounded-full
    max-w-full truncate
    px-3 sm:px-7 py-1 sm:py-2
    text-[11px] sm:text-[12px]
    transition-all duration-300
    ${
      isActive
        ? "bg-[#D4C5A0] text-[#1E1E1E] sm:scale-105"
        : "border border-[#FFFFFF4D] text-gray-300 hover:bg-[#3c4a56] hover:text-white sm:hover:scale-105"
    }
  `}
>
  {tab}
</button>

              );
            })}
          </div>
        </div>

        {/* Questions */}
        <div className="w-full  mx-auto flex flex-col">
          {filteredFAQs.map((item, idx) => (
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
                <p className="text-gray-400 text-[13px] sm:text-[14px] pb-4 px-3">
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
