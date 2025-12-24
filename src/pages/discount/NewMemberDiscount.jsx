import { Link } from "react-router-dom";
import NewMemberDiscountMini from "./NewMemberDiscountMini";

const NewMemberDiscount = () => {
  return (
    <>
      <NewMemberDiscountMini/>
      <section className="relative w-full overflow-hidden py-25 border border-t-[#D4C5A0] hidden md:block">

      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: 'url("/Images/memberdiscount.webp")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Black Overlay (same as Hero) */}
      <div className="absolute inset-0 w-full h-full bg-black opacity-40" />

      {/* Content */}
      <div className="relative max-w-[1068px] mx-auto h-full flex flex-col justify-center items-center gap-10 text-center px-4">

        {/* Heading */}
        <h2 className="text-white font-roboto font-bold text-[50px] leading-[120%]">
          Discount up to 10% only for new Member
        </h2>

        {/* Sub text */}
        <p className="text-gray-300 font-roboto font-normal text-[16px] leading-[140%] max-w-[1058px]">
          Prime Chauffeur delivers premium transportation services with professional drivers and luxury vehicles. Experience comfort, reliability and elegance for airport transfers, corporate travel, and special events.
        </p>

        

{/* Buttons */}
<div className="flex gap-5 mt-2">
  {/* Button 1 */}
  <Link
    to="/book" 
    className="bg-[#D4C5A0] rounded-md
               text-white font-roboto font-normal text-[15px]
               px-8 py-3 flex justify-center items-center"
  >
    Book now
  </Link>

  {/* Button 2 */}
  <Link
    to="/book" 
    className="rounded-md border border-white
               text-white font-roboto font-normal text-[15px]
               px-8 py-3 flex justify-center items-center"
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
