import { Link } from "react-router-dom";

const FooterMini = () => {
  return (
    <div className="max-w-[1200px] mx-auto bg-white py-6 px-4 sm:py-8 sm:px-6 md:hidden block">
      
      {/* Top Row — Logo + Centered Links on Mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 sm:gap-6 w-full">
        
        {/* Logo */}
        <div className="flex justify-center sm:justify-start mb-4 sm:mb-0">
          <Link to="/">
            <img
              src="/Images/logo.webp"
              alt="Logo"
              className="h-14 sm:h-20 object-contain cursor-pointer"
            />
          </Link>
        </div>

        {/* Links Section — 4 Columns */}
        <div className="sm:col-span-4 grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-6 justify-items-center sm:justify-items-start">
          
          {/* Rides */}
          <div className="flex flex-col gap-1 sm:gap-2 items-center sm:items-start">
            <h3 className="font-bold text-black text-[14px] sm:text-[16px]">Rides</h3>
            <Link to="/book" className="text-gray-700 text-sm hover:text-gray-400">Airport Transfer</Link>
            <Link to="/book" className="text-gray-700 text-sm hover:text-gray-400">City Tours</Link>
            <Link to="/book" className="text-gray-700 text-sm hover:text-gray-400">Hourly Rental</Link>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-1 sm:gap-2 items-center sm:items-start">
            <h3 className="font-bold text-black text-[14px] sm:text-[16px]">Services</h3>
            <Link to="/choose" className="text-gray-700 text-sm hover:text-gray-400">Corporate</Link>
          </div>

          {/* About */}
          <div className="flex flex-col gap-1 sm:gap-2 items-center sm:items-start">
            <h3 className="font-bold text-black text-[14px] sm:text-[16px]">About</h3>
            <Link to="/choose" className="text-gray-700 text-sm hover:text-gray-400">Company</Link>
            <Link to="/choose" className="text-gray-700 text-sm hover:text-gray-400">Careers</Link>
            <Link to="/choose" className="text-gray-700 text-sm hover:text-gray-400">Press</Link>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-1 sm:gap-2 items-center sm:items-start">
            <h3 className="font-bold text-black text-[14px] sm:text-[16px]">Contact</h3>
            <Link to="/contact" className="text-gray-700 text-sm hover:text-gray-400">Support</Link>
            <Link to="/contact" className="text-gray-700 text-sm hover:text-gray-400">FAQ</Link>
            <Link to="/contact" className="text-gray-700 text-sm hover:text-gray-400">Partners</Link>
          </div>

        </div>
      </div>

      {/* Border */}
      <div className="w-full border-t border-[#d2c9b3] my-4 sm:my-6"></div>

      {/* Bottom Row */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">
        
        {/* Copyright + Links */}
        <p className="text-gray-700 text-sm text-center sm:text-left">
          © 2025 Logo, all rights reserved |{" "}
          <Link to="/privacy-policy" className="hover:text-black">Privacy Policy</Link>{" "}
          |{" "}
          <Link to="/terms" className="hover:text-black">Terms of Service</Link>
        </p>

        {/* Developer */}
        <p className="flex items-center gap-2 justify-center sm:justify-end">
          <span className="text-gray-400 text-sm font-semibold">Developed by</span>
          <a
            href="https://devzonepk.online/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/Images/dev.webp" alt="Developer" className="w-20 sm:w-24 cursor-pointer" />
          </a>
        </p>

      </div>
    </div>
  );
};

export default FooterMini;
