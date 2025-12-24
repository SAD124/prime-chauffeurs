import { Briefcase, Car, Info, Phone, Smartphone } from "lucide-react";
import MiniNavbar from "./MiniNavbar";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  return (
    <>
    <MiniNavbar />
      <nav className="hidden md:block w-full bg-white border-b border-gray-300 fixed top-0 z-50">
        <div
          className="max-w-screen-2xl mx-auto h-[82px] flex items-center px-6 lg:px-16 xl:px-36
"
        >
          {/* LOGO */}
          <div className="flex items-center">
            <HashLink to="/#hero">
              <img
                src="/Images/logo.webp"
                alt="Logo"
                className="w-auto h-[70px] object-contain cursor-pointer"
              />
            </HashLink>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex-1 flex items-center justify-end gap-6">
            {/* MENU */}
            <ul className="flex items-center gap-8 text-[16px] text-gray-600">
              <li className="cursor-pointer">
                <HashLink
                  smooth
                  to="/#rides"
                  className="flex items-center gap-2"
                >
                  <Car className="w-4 h-4" />
                  Rides
                </HashLink>
              </li>

              <li className="cursor-pointer">
                <HashLink
                  smooth
                  to="/#services"
                  className="flex items-center gap-2"
                >
                  <Briefcase className="w-4 h-4" />
                  Services
                </HashLink>
              </li>

              <li className="cursor-pointer">
                <HashLink
                  smooth
                  to="/#about"
                  className="flex items-center gap-2"
                >
                  <Info className="w-4 h-4" />
                  About
                </HashLink>
              </li>

              <li className="cursor-pointer">
                <HashLink smooth to="/#app" className="flex items-center gap-2">
                  <Smartphone className="w-4 h-4" />
                  App
                </HashLink>
              </li>
            </ul>

            {/* BUTTONS */}
            <Link to="/book">
              <button className="border border-gray-300 rounded-md font-medium text-gray-600 text-sm px-5 py-2">
                Book Now
              </button>
            </Link>

            <Link to="/contact">
              <button className="border border-gray-300 rounded-md bg-black text-white text-sm px-5 py-2 flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Contact
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
