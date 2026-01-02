import BookingForm from "./BookingForm";
import BookYourComfortMini from "./BookYourComfortMini";
import MapSection from "./MapSection";

const BookYourComfort = () => {

  return (
    <>
      <BookYourComfortMini />
      <section id="book" className="w-full bg-[#1E1E1E] py-15 lg:flex justify-center border border-t-[#D4C5A0] hidden md:block scroll-mt-12">
        <div className="w-full max-w-4xl flex flex-col items-center gap-12">
          <div className="w-full flex flex-col items-center gap-6 text-center ">
            <h2 className="font-roboto font-bold text-[40px] leading-[120%] text-white">
              Book Your{" "}
              <span className="font-['Rouge_Script'] text-[64px] font-normal leading-[120%] text-[#D4C5A0]">
                Comfort
              </span>
            </h2>
            <p className="font-roboto text-gray-400 text-[18px] leading-[150%] max-w-xl">
              Book your premium ride now and discover transportation that truly
              understands your needs.
            </p>
          </div>

          <div className="w-full bg-white rounded-6 p-10 flex flex-col gap-10 shadow-md rounded-3xl">
            <MapSection />
            <BookingForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default BookYourComfort;
