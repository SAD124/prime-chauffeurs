import { Link } from "react-router-dom";
import NewMemberDiscountMini from "./NewMemberDiscountMini";

const NewMemberDiscount = () => {
  return (
    <>
      {/* Mobile */}
      <NewMemberDiscountMini />

      {/* Desktop */}
      <section
        id="discount-section"
        className="relative hidden md:block w-full py-25 scroll-mt-16 border border-t-[#D4C5A0]"
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("/Images/memberdiscount.webp")' }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-6 flex flex-col items-center text-center gap-8">
          
          {/* Heading */}
          <h2 className="text-white font-roboto font-bold text-4xl lg:text-5xl leading-tight max-w-5xl">
            Discount up to 10% only for new members
          </h2>

          {/* Description */}
          <p className="text-gray-300 font-roboto text-base leading-relaxed max-w-5xl">
            Prime Chauffeur delivers premium transportation services with professional drivers and luxury vehicles. Experience comfort, reliability, and elegance for airport transfers, corporate travel, and special events.
          </p>

          {/* Buttons */}
          <div className="flex gap-5 pt-4">
            <Link
              to="/book"
              className="bg-[#D4C5A0] text-black rounded-md px-8 py-3 text-sm font-medium hover:bg-white transition"
            >
              Book now
            </Link>

            <Link
              to="/book"
              className="border border-white text-white rounded-md px-8 py-3 text-sm font-medium hover:bg-white hover:text-black transition"
            >
              Get Discount
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default NewMemberDiscount;
