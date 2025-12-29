import { Briefcase, Car, Info, Phone, Smartphone } from "lucide-react";
import MiniNavbar from "./MiniNavbar";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  return (
    <>
      <MiniNavbar />

      <nav className="hidden md:block w-full bg-white border-b border-gray-300 fixed top-0 z-50">
        <div className="max-w-screen-2xl mx-auto py-1 flex items-center px-6 lg:px-16 xl:px-36">

          {/* LOGO */}
          <div className="flex items-center">
            <HashLink smooth to="/#hero">
              <img
                src="/Images/logo.webp"
                alt="Logo"
                className="w-auto h-18 object-contain cursor-pointer"
              />
            </HashLink>
          </div>

          {/* MENU & BUTTONS */}
          <div className="flex-1 flex items-center justify-end gap-6">
            <ul className="flex items-center gap-8 text-[16px] text-gray-600">
              <li>
                <HashLink smooth to="/#rides" className="flex items-center gap-2">
                  <Car className="w-4 h-4" /> Rides
                </HashLink>
              </li>

              <li>
                <HashLink smooth to="/#services" className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4" /> Services
                </HashLink>
              </li>

              <li>
                <HashLink smooth to="/#about" className="flex items-center gap-2">
                  <Info className="w-4 h-4" /> About
                </HashLink>
              </li>

              <li>
                <HashLink smooth to="/#app" className="flex items-center gap-2">
                  <Smartphone className="w-4 h-4" /> App
                </HashLink>
              </li>
            </ul>

            {/* ACTION BUTTONS */}
            <HashLink smooth to="/#book">
              <button className="border border-gray-300 rounded-md font-medium text-gray-600 text-sm px-5 py-3">
                Book Now
              </button>
            </HashLink>

            <HashLink smooth to="/contact">
              <button className="border border-gray-300 rounded-md bg-black text-white text-sm px-5 py-3 flex items-center gap-2">
                <Phone className="w-4 h-4" /> Contact
              </button>
            </HashLink>
          </div>

        </div>
      </nav>
    </>
  );
};

export default Navbar;
