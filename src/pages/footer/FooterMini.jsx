const FooterMini = () => {
  return (
    <div className="max-w-[1200px] mx-auto bg-white py-6 px-4 sm:py-8 sm:px-6 md:hidden block">
      {/* Top Row — Logo + Centered Links on Mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 sm:gap-6 w-full">
        {/* Logo */}
        <div className="flex justify-center sm:justify-start mb-4 sm:mb-0">
          <img src="/Images/logo.webp" alt="Logo" className="h-14 sm:h-20 object-contain" />
        </div>

        {/* Links Section — 4 Columns on Desktop, Stacked Centered on Mobile */}
        <div className="sm:col-span-4 grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-6 justify-items-center sm:justify-items-start">
          {/* Rides */}
          <div className="flex flex-col gap-1 sm:gap-2 items-center sm:items-start">
            <h3 className="font-bold text-black text-[14px] sm:text-[16px]">Rides</h3>
            <p className="text-gray-700 text-sm">Airport Transfer</p>
            <p className="text-gray-700 text-sm">City Tours</p>
            <p className="text-gray-700 text-sm">Hourly Rental</p>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-1 sm:gap-2 items-center sm:items-start">
            <h3 className="font-bold text-black text-[14px] sm:text-[16px]">Services</h3>
            <p className="text-gray-700 text-sm">Corporate</p>
          </div>

          {/* About */}
          <div className="flex flex-col gap-1 sm:gap-2 items-center sm:items-start">
            <h3 className="font-bold text-black text-[14px] sm:text-[16px]">About</h3>
            <p className="text-gray-700 text-sm">Company</p>
            <p className="text-gray-700 text-sm">Careers</p>
            <p className="text-gray-700 text-sm">Press</p>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-1 sm:gap-2 items-center sm:items-start">
            <h3 className="font-bold text-black text-[14px] sm:text-[16px]">Contact</h3>
            <p className="text-gray-700 text-sm">Support</p>
            <p className="text-gray-700 text-sm">FAQ</p>
            <p className="text-gray-700 text-sm">Partners</p>
          </div>
        </div>
      </div>

      {/* Border */}
      <div className="w-full border-t border-[#d2c9b3] my-4 sm:my-6"></div>

      {/* Bottom Row */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">
        <p className="text-gray-700 text-sm text-center sm:text-left">
          © 2025 Logo, all rights reserved | Privacy Policy | Terms of Service
        </p>
        <p className="flex items-center gap-2 justify-center sm:justify-end">
          <span className="text-gray-400 text-sm font-semibold">Developed by</span>
          <img src="/Images/dev.webp" alt="" className="w-20 sm:w-24" />
        </p>
      </div>
    </div>
  );
};

export default FooterMini;
