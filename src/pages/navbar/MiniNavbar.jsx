import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Car, Briefcase, Info, Smartphone, Phone } from "lucide-react";

const MiniNavbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="md:hidden fixed top-0 w-full z-50">
      {/* TOP BAR */}
      <div className="flex items-center justify-between py-2 px-4 sm:px-6 bg-white border-b border-gray-100">
        {/* MENU TOGGLE */}
        <button
          onClick={() => setOpen(!open)}
          className="p-2 hover:bg-gray-100 rounded-lg"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* LOGO */}
        <HashLink smooth to="/#hero" onClick={() => setOpen(false)}>
          <img
            src="/Images/logo.webp"
            alt="Logo"
            className="h-16 sm:h-18 md:h-20 object-contain cursor-pointer"
          />
        </HashLink>

        {/* CONTACT BUTTON */}
        <Link
          to="/contact"
          className="border border-gray-300 rounded-md bg-black text-white text-sm px-2 sm:px-3 md:px-4 py-2 flex items-center gap-1"
        >
          <Phone className="w-4 h-4" />
          Contact
        </Link>
      </div>

      {/* SIDEBAR MENU */}
      <div
        className={`fixed left-0 top-20 h-[calc(100%-70px)] bg-white shadow-lg
                    w-52 sm:w-56 md:w-64
                    transform transition-transform duration-300 ease-in-out
                    ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex flex-col px-6 sm:px-8 py-10 space-y-8">
          <HashLink
            smooth
            to="/#ridesmini"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 text-sm sm:text-base"
          >
            <Car className="w-5 h-5" /> Rides
          </HashLink>

          <HashLink
            smooth
            to="/#servicesmini"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 text-sm sm:text-base"
          >
            <Briefcase className="w-5 h-5" /> Services
          </HashLink>

          <HashLink
            smooth
            to="/#aboutmini"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 text-sm sm:text-base"
          >
            <Info className="w-5 h-5" /> About
          </HashLink>

          <HashLink
            smooth
            to="/#appmini"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 text-sm sm:text-base"
          >
            <Smartphone className="w-5 h-5" /> App
          </HashLink>
        </div>

        {/* BOOK NOW BUTTON */}
        <div className="px-4 sm:px-5 mt-5">
          <Link to="/book" onClick={() => setOpen(false)}>
            <button className="w-full border border-gray-300 rounded-md py-2 sm:py-3 text-gray-900 text-sm sm:text-base">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default MiniNavbar;
