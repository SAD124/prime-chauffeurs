import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import FAQMini from "./FAQMini";

const FAQ = () => {
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
      category: "Payment",
      question: "Is advance payment required?",
      answer:
        "Advance payment is optional but recommended for confirmed bookings.",
    },

    {
      category: "Booking",
      question: "How do I book a ride?",
      answer:
        "You can book directly from our website or through our mobile application.",
    },
    {
      category: "Booking",
      question: "Can I cancel my booking?",
      answer:
        "Yes, you can cancel your booking based on our cancellation policy.",
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
    <>
      <FAQMini />

      {/* DESKTOP FAQ */}
      <section id="about" className="w-full bg-[#1E1E1E] border-t border-[#D4C5A0] py-20 hidden md:block scroll-mt-12">
        <div className="max-w-7xl mx-auto flex flex-col gap-12 px-4">

          {/* Heading */}
          <h2 className="text-center text-[40px] font-normal text-[#D4C5A0]">
            Frequently Asked Questions
          </h2>

          {/* Tabs */}
<div className="flex gap-4 justify-center items-center">
  {tabs.map((tab) => {
    const isActive = activeTab === tab;

    return (
      <button
        key={tab}
        onClick={() => {
          setActiveTab(tab);
          setOpenIndex(null);
        }}
        className={`rounded-full py-2 px-6 text-[14px] transition-all duration-300 transform
          ${
            isActive
              ? "bg-[#D4C5A0] text-[#1E1E1E] scale-105"
              : "bg-transparent text-gray-300 border border-[#FFFFFF4D] hover:bg-[#3c4a56] hover:text-white hover:scale-105"
          }
        `}
      >
        {tab}
      </button>
    );
  })}
</div>



          {/* FAQ List */}
          <div className="w-4xl mx-auto flex flex-col">
            {filteredFAQs.map((item, idx) => (
              <div key={idx} className="flex flex-col">

                {/* Question */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex justify-between items-center py-4"
                >
                  <p className="text-white text-[16px]">
                    {item.question}
                  </p>

                  <FiChevronDown
                    className={`w-5 h-5 text-white transition-transform duration-300
                      ${openIndex === idx ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Answer */}
                {openIndex === idx && (
                  <p className="text-gray-300 text-[16px] pb-4">
                    {item.answer}
                  </p>
                )}

                {/* Divider */}
                <div className="border-b border-[#D4C5A0]" />
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default FAQ;
