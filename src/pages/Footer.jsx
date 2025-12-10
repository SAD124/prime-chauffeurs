const Footer = () => {
  return (
    <div className="max-w-[1200px] bg-white py-12 mx-auto">

      {/* ⭐ TOP ROW WITH 5 COLUMNS ⭐ */}
      <div className="grid grid-cols-5 gap-10 w-full">

        {/* COL 1 — Logo */}
        <div>
          <img
            src="/Images/logo.webp"
            alt="Logo"
            className="w-auto h-[90px] object-contain"
          />
        </div>

        {/* COL 2 — Rides */}
        <div className="flex flex-col gap-2">
          <h3 className="text-black font-bold text-[16px]">Rides</h3>
          <p className="text-sm text-gray-700">Airport Transfer</p>
          <p className="text-sm text-gray-700">City Tours</p>
          <p className="text-sm text-gray-700">Hourly Rental</p>
        </div>

        {/* COL 3 — Services */}
        <div className="flex flex-col gap-2">
          <h3 className="text-black font-bold text-[16px]">Services</h3>
          <p className="text-sm text-gray-700">Corporate</p>
        </div>

        {/* COL 4 — About */}
        <div className="flex flex-col gap-2">
          <h3 className="text-black font-bold text-[16px]">About</h3>
          <p className="text-sm text-gray-700">Company</p>
          <p className="text-sm text-gray-700">Careers</p>
          <p className="text-sm text-gray-700">Press</p>
        </div>

        {/* COL 5 — Contact */}
        <div className="flex flex-col gap-2">
          <h3 className="text-black font-bold text-[16px]">Contact</h3>
          <p className="text-sm text-gray-700">Support</p>
          <p className="text-sm text-gray-700">FAQ</p>
          <p className="text-sm text-gray-700">Partners</p>
        </div>

      </div>

      {/* BORDER LINE */}
      <div className="w-full flex justify-center mt-10">
        <div className="w-full border-t border-[#d2c9b3]"></div>
      </div>

      {/* ⭐ BOTTOM ROW ⭐ */}
      <div className="w-full mt-6 flex items-center justify-between">

        {/* LEFT — COPYRIGHT + LINKS */}
        <p className="text-gray-700 text-sm">© 2025 Logo, all rights reserved | Privacy Policy | Terms of Service |</p>

        <p className="flex gap-2">
          <span className="text-gray-400 text-sm font-semibold">Developed by </span><span><img src="/Images/dev.webp" alt="" className="w-[85px]" /></span>
        </p>
      </div>

    </div>
  );
};

export default Footer;
