import React, { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import FAQMini from './FAQMini'

const FAQ = () => {
  const faqData = [
    {
      question: "What type of car do you use?",
      answer: "We use a variety of modern cars including sedans and SUVs to ensure comfort and safety.",
    },
    {
      question: "Can I book a ride for someone else?",
      answer: "Yes! You can book rides for family, friends, or colleagues by entering their details.",
    },

  ]

  // State to track which FAQ is open
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <>
    <FAQMini/>
      <section className="w-full bg-[#1E1E1E] opacity-100 border border-t-[#D4C5A0] py-20 hidden md:block">
      {/* Main Container */}
      <div className="w-[1144px] mx-auto flex flex-col gap-12  px-4">
        {/* Heading */}
        <h2 className="text-center text-[40px] font-normal leading-6 text-[#D4C5A0]">
          Frequently Asked Questions
        </h2>

        {/* Tabs */}
        <div className="flex gap-4 w-[1112px] justify-center items-center">
          {["General", "Payment", "Booking", "Airport Transfers", "City Tour"].map((tab, idx) => (
            <div
              key={idx}
              className={`flex items-center justify-center rounded-full py-1 px-5 ${idx === 0 ? "bg-[#D4C5A0] text-[#1E1E1E] border-t border-black" : "bg-transparent text-gray-300 border border-[#FFFFFF4D]"
                }`}
            >
              <span className="text-[13px] font-['Arial'] font-normal leading-6">
                {tab}
              </span>
            </div>
          ))}
        </div>

{/* Questions List */}
        <div className="w-[812px] mx-auto flex flex-col">
          {faqData.map((item, idx) => (
            <div key={idx} className="flex flex-col">

              {/* Clickable Question Row */}
              <button
                className="w-full flex items-center justify-between py-4 px-1"
                onClick={() => toggleFAQ(idx)}
                style={{ background: "transparent" }}
              >
                <p className="text-[16px] font-['Arial'] font-normal leading-6 text-white">
                  {item.question}
                </p>

                <FiChevronDown
                  className={`w-5 h-5 text-white transition-transform duration-300 ${openIndex === idx ? "rotate-180" : ""
                    }`}
                />
              </button>

              {/* Answer */}
              {openIndex === idx && (
                <p className="text-[16px] font-['Arial'] text-gray-300 pb-4 px-1">
                  {item.answer}
                </p>
              )}

              {/* border-bottom */}
              <div className="relative w-full">
                <div className="border-b border-[#D4C5A0] w-full 
                  scale-y-[0.9] origin-center"></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
    </>
  )
}

export default FAQ
