  import { Briefcase, Car, Info, Phone, Smartphone } from "lucide-react";
import MiniNavbar from "./MiniNavbar";

const Navbar = () => {
  return (
    <>
      <nav className="hidden md:block w-full bg-white border-b border-gray-300 fixed top-0 z-50">
      <div className="max-w-screen-2xl mx-auto h-[82px] flex items-center px-6 lg:px-16 xl:px-36
">

        {/* LOGO */}
        <div className="flex items-center">
          <img
            src="/Images/logo.webp"
            alt="Logo"
            className="w-auto h-[70px] object-contain"
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1 flex items-center justify-end gap-6">

          {/* MENU */}
          <ul className="flex items-center gap-8 text-[16px] text-gray-600">

            <li className="cursor-pointer flex items-center gap-2">
              <Car className="w-4 h-4" />
              Rides
            </li>

            <li className="cursor-pointer flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              Services
            </li>

            <li className="cursor-pointer flex items-center gap-2">
              <Info className="w-4 h-4" />
              About
            </li>

            <li className="cursor-pointer flex items-center gap-2">
              <Smartphone className="w-4 h-4" />
              App
            </li>

          </ul>

          {/* BUTTONS */}
          <button
            className="border border-gray-300 rounded-md font-medium text-gray-600 text-sm px-5 py-2"
          >
            Book Now
          </button>

          <button
            className="border border-gray-300 rounded-md bg-black text-white text-sm px-5 py-2 flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            Contact
          </button>

        </div>
      </div>
    </nav>
    <MiniNavbar/>
    </>
  );
};

export default Navbar;
