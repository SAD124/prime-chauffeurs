import { Link } from "react-router-dom";

const NewMemberDiscountMini = () => {
  return (
    <section
      id="discount-section"
      className="relative md:hidden w-full py-16 scroll-mt-14"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("/Images/memberdiscount.webp")' }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative max-w-md mx-auto px-4 flex flex-col items-center text-center gap-6">

        {/* Heading */}
        <h2 className="text-white font-roboto font-bold text-xl sm:text-2xl leading-snug">
          Discount up to 10% only for new members
        </h2>

        {/* Description */}
        <p className="text-gray-300 font-roboto text-sm sm:text-base leading-relaxed">
          Prime Chauffeur delivers premium transportation services with professional drivers and luxury vehicles. Experience comfort, reliability, and elegance for every ride.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full pt-2">
          <Link
            to="/book"
            className="bg-[#D4C5A0] text-black rounded-md py-2 px-6 text-sm font-medium w-full flex justify-center items-center"
          >
            Book now
          </Link>

          <Link
            to="/book"
            className="border border-white text-white rounded-md py-2 px-6 text-sm font-medium w-full flex justify-center items-center"
          >
            Get Discount
          </Link>
        </div>

      </div>
    </section>
  );
};

export default NewMemberDiscountMini;
