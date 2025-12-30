import { Link } from "react-router-dom";
import FooterMini from "./FooterMini";

const Footer = () => {
  return (
    <>
      <FooterMini />

      <footer className="hidden md:block bg-white py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-10">

          {/* TOP ROW - 5 Columns */}
          <div className="grid grid-cols-5 gap-8">

            {/* Logo */}
            <div>
              <Link to="/">
                <img
                  src="/Images/logo.webp"
                  alt="Logo"
                  className="h-20 w-auto object-contain"
                />
              </Link>
            </div>

            {/* Rides */}
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-gray-900">Rides</h3>
              <Link to="/book" className="text-gray-600 hover:text-gray-900 text-sm">Airport Transfer</Link>
              <Link to="/book" className="text-gray-600 hover:text-gray-900 text-sm">City Tours</Link>
              <Link to="/book" className="text-gray-600 hover:text-gray-900 text-sm">Hourly Rental</Link>
            </div>

            {/* Services */}
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-gray-900">Services</h3>
              <Link to="/choose" className="text-gray-600 hover:text-gray-900 text-sm">Corporate</Link>
            </div>

            {/* About */}
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-gray-900">About</h3>
              <Link to="/choose" className="text-gray-600 hover:text-gray-900 text-sm">Company</Link>
              <Link to="/choose" className="text-gray-600 hover:text-gray-900 text-sm">Careers</Link>
              <Link to="/choose" className="text-gray-600 hover:text-gray-900 text-sm">Press</Link>
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-gray-900">Contact</h3>
              <Link to="/contact" className="text-gray-600 hover:text-gray-900 text-sm">Support</Link>
              <Link to="/contact" className="text-gray-600 hover:text-gray-900 text-sm">FAQ</Link>
              <Link to="/contact" className="text-gray-600 hover:text-gray-900 text-sm">Partners</Link>
            </div>

          </div>

          {/* Divider */}
          <div className="border-t border-gray-200" />

          {/* Bottom Row */}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
            <p>
              © 2025 Logo. All rights reserved.{" "}
              <Link to="/privacy-policy" className="hover:text-gray-900">Privacy Policy</Link> |{" "}
              <Link to="/terms" className="hover:text-gray-900">Terms of Service</Link>
            </p>

            <div className="flex items-center gap-2">
              <span>Developed by</span>
              <a href="https://devzonepk.online/" target="_blank" rel="noopener noreferrer">
                <img src="/Images/dev.webp" alt="Developer" className="h-6 w-auto" />
              </a>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
};

export default Footer;
