const FleetSection = () => {

  return (
    <section className="w-full flex justify-center py-10 px-23">
    <div className="max-w-[1440px] w-full rounded-2xl px-10 py-5 flex gap-10">
    
    {/* LEFT IMAGE */}
    <div className="w-[600px] h-[600px] rounded-[40px] overflow-hidden">
      <img
        src="/Images/fleet.webp"
        alt="Fleet Cars"
        className="w-full h-full object-cover"
      />
    </div>

    {/* RIGHT SIDE CONTENT */}
    <div className="flex flex-col items-center text-center max-w-[526px]">
      
      {/* HEADING */}
      <h2 className="w-full font-roboto font-bold text-[35px] leading-[120%] text-black">
        Explore Our Fleet
      </h2>

      {/* PARAGRAPH */}
      <p className="mt-6 text-[16px] leading-[150%] font-roboto text-gray-600">
        Suzellbus offers a wide range of vehicles to suit your needs - elegant, sophisticated and reliable. Wether you need a premium sadan, a comfortable SUV, or an economical car, we've got you covered. Our diverse fleet reflects our commitment to your journey - book now and experience the difference.
      </p>

      {/* GRID OF 6 CAR CARDS */}
      <div className="grid grid-cols-3 gap-6 mt-12">

        {/* CARD 1 */}
        <div className="w-[220px] h-[160px] bg-white rounded-[40px] shadow-md overflow-hidden">
          <img src="/Images/fleet1.webp" className="w-full h-full object-cover" />
        </div>

        {/* CARD 2 */}
        <div className="w-[209px] h-[160px] bg-white rounded-[40px] shadow-md overflow-hidden">
          <img src="/Images/fleet2.webp" className="w-full h-full object-cover" />
        </div>

        {/* CARD 3 */}
        <div className="w-[212px] h-[160px] bg-white rounded-[40px] shadow-md overflow-hidden">
          <img src="/Images/fleet3.webp" className="w-full h-full object-cover" />
        </div>

        {/* CARD 4 */}
        <div className="w-[213px] h-[160px] bg-white rounded-[40px] shadow-md overflow-hidden">
          <img src="/Images/fleet4.webp" className="w-full h-full object-cover" />
        </div>

        {/* CARD 5 */}
        <div className="w-[214px] h-[160px] bg-white rounded-[40px] shadow-md overflow-hidden">
          <img src="/Images/fleet5.webp" className="w-full h-full object-cover" />
        </div>

        {/* CARD 6 */}
        <div className="w-[210px] h-[160px] bg-white rounded-[40px] shadow-md overflow-hidden">
          <img src="/Images/fleet6.webp" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* BOOK NOW BUTTON */}
      <button className="w-[374px] h-[46px] mt-10 bg-[#D4C5A0] text-white font-roboto text-[16px] px-10 py-3 rounded-md">
        Book Now
      </button>

    </div>

  </div>
</section>
  )
}

export default FleetSection