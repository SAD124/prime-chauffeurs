"use client";

import BookingForm from "./BookingForm";
import MapSection from "./MapSection";


const BookYourComfortMini = () => {
  return (
      <section id="booking-section" className="w-full bg-[#1E1E1E] py-10 sm:py-15 px-3 md:hidden flex justify-center border border-t-[#D4C5A0] scroll-mt-[50px]">
      {/* INNER MAIN DIV */}
      <div className="w-full max-w-[850px] flex flex-col items-center gap-8 ">

        {/* HEADING + PARA */}
        <div className="w-full max-w-[572px] flex flex-col items-center gap-6 text-center ">
          {/* Heading */}
          <h2 className="font-roboto font-bold text-[24px] sm:text-[40px] leading-[120%] text-white">
            Book Your{" "}
            <span className="font-['Rouge_Script'] text-[35px] sm:text-[60px] font-normal leading-[120%] text-[#D4C5A0]">
              Comfort
            </span>
          </h2>

          {/* Paragraph */}
          <p className="font-roboto text-gray-400 text-[14px] sm:text-[16px] leading-[150%] w-[400px]  px-6">
            Book your premium ride now and discover transportation that truly
            understands your needs.
          </p>
        </div>

        {/* WHITE WRAPPER */}
        <div className="w-full bg-white rounded-6 p-5 sm:p-10 flex flex-col gap-10 shadow-md rounded-3xl">
          
          {/* MAP IMAGE */}
          <MapSection/>

          {/* FORM START */}
          <BookingForm/>

      </div>
      </div>
    </section>
  );
};

export default BookYourComfortMini;
