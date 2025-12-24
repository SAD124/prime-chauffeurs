import { Link } from "react-router-dom";
import FooterMini from "./FooterMini";

const Footer = () => {
  return (
    <>
      <FooterMini />

      <div className="max-w-[1200px] bg-white py-12 mx-auto hidden md:block">

        {/* ⭐ TOP ROW WITH 5 COLUMNS ⭐ */}
        <div className="grid grid-cols-5 gap-10 w-full">

          {/* COL 1 — Logo */}
          <div>
            <Link to="/">
              <img
                src="/Images/logo.webp"
                alt="Logo"
                className="w-auto h-[90px] object-contain cursor-pointer"
              />
            </Link>
          </div>

          {/* COL 2 — Rides */}
          <div className="flex flex-col gap-2">
            <h3 className="text-black font-bold text-[16px]">Rides</h3>

            <Link to="/book" className="text-sm text-gray-700 hover:text-gray-400">
              Airport Transfer
            </Link>

            <Link to="/book" className="text-sm text-gray-700 hover:text-gray-400">
              City Tours
            </Link>

            <Link to="/book" className="text-sm text-gray-700 hover:text-gray-400">
              Hourly Rental
            </Link>
          </div>

          {/* COL 3 — Services */}
          <div className="flex flex-col gap-2">
            <h3 className="text-black font-bold text-[16px]">Services</h3>

            <Link to="/choose" className="text-sm text-gray-700 hover:text-gray-400">
              Corporate
            </Link>
          </div>

          {/* COL 4 — About */}
          <div className="flex flex-col gap-2">
            <h3 className="text-black font-bold text-[16px]">About</h3>

            <Link to="/choose" className="text-sm text-gray-700 hover:text-gray-400">
              Company
            </Link>

            <Link to="/choose" className="text-sm text-gray-700 hover:text-gray-400">
              Careers
            </Link>

            <Link to="/choose" className="text-sm text-gray-700 hover:text-gray-400">
              Press
            </Link>
          </div>

          {/* COL 5 — Contact */}
          <div className="flex flex-col gap-2">
            <h3 className="text-black font-bold text-[16px]">Contact</h3>

            <Link to="/contact" className="text-sm text-gray-700 hover:text-gray-400">
              Support
            </Link>

            <Link to="/contact" className="text-sm text-gray-700 hover:text-gray-400">
              FAQ
            </Link>

            <Link to="/contact" className="text-sm text-gray-700 hover:text-gray-400">
              Partners
            </Link>
          </div>

        </div>

        {/* BORDER LINE */}
        <div className="w-full flex justify-center mt-10">
          <div className="w-full border-t border-[#d2c9b3]"></div>
        </div>

        {/* ⭐ BOTTOM ROW ⭐ */}
        <div className="w-full mt-6 flex items-center justify-between">

          {/* LEFT — COPYRIGHT + LINKS */}
          <p className="text-gray-700 text-sm">
            © 2025 Logo, all rights reserved |{" "}
            <Link to="/privacy-policy" className="hover:text-black">
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link to="/terms" className="hover:text-black">
              Terms of Service
            </Link>{" "}
            |
          </p>

{/* RIGHT — DEVELOPER */}
<p className="flex gap-2 items-center">
  <span className="text-gray-400 text-sm font-semibold">
    Developed by
  </span>
  <a
    href="https://devzonepk.online/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="/Images/dev.webp"
      alt="Developer"
      className="w-[85px] cursor-pointer"
    />
  </a>
</p>

        </div>

      </div>
    </>
  );
};

export default Footer;
