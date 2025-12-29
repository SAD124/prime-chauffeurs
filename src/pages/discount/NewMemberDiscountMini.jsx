import { Link } from "react-router-dom";

const NewMemberDiscountMini = () => {
  return (
    <section id="discount-section" className="relative w-full overflow-hidden py-16 sm:py-30 border-t border-[#D4C5A0] md:hidden scroll-mt-12">

      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: 'url("/Images/memberdiscount.webp")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40" />

      {/* Content */}
      <div className="relative max-w-5xl mx-auto flex flex-col items-center text-center gap-8 px-4">

        {/* Heading */}
        <h2 className="text-white font-roboto font-bold text-[26px] sm:text-[30px] leading-[120%]">
          Discount up to 10% only for new Member
        </h2>

        {/* Paragraph */}
        <p className="text-gray-300 font-roboto text-[14px] sm:text-[16px] leading-[150%]">
          Prime Chauffeur delivers premium transportation services with professional drivers and luxury vehicles. Experience comfort, reliability and elegance for airport transfers, corporate travel, and special events.
        </p>

        {/* Buttons */}
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-2">
  {/* Book now Link */}
  <Link
    to="/book"
    className="bg-[#D4C5A0] rounded-md text-white font-roboto text-[14px] sm:text-[15px] py-2 sm:py-4 w-full sm:w-auto px-7 flex justify-center items-center"
  >
    Book now
  </Link>

  {/* Get Discount Link */}
  <Link
    to="/book"
    className="rounded-md border border-white text-white font-roboto text-[14px] sm:text-[15px] py-2 sm:py-4 w-full sm:w-auto px-7 flex justify-center items-center"
  >
    Get Discount
  </Link>
</div>

      </div>
    </section>
  );
};

export default NewMemberDiscountMini;
