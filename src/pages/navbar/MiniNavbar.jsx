import { useState } from "react";
import { Menu, X, Car, Briefcase, Info, Smartphone, Phone } from "lucide-react";

const MiniNavbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="md:hidden fixed top-0 w-full z-50">
      {/* TOP BAR */}
      <div className="h-[70px] flex items-center justify-between py-4 px-4 bg-white border-b border-gray-100">
        {/* LEFT MENU ICON */}
        <button onClick={() => setOpen(!open)} className="p-2 hover:bg-gray-100 rounded-lg">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* CENTER LOGO */}
        <img
          src="/Images/logo.webp"
          alt="Logo"
          className="h-[60px] object-contain"
        />

        {/* RIGHT CONTACT BUTTON */}
        <button
            className="border border-gray-300 rounded-md bg-black text-white text-sm px-2 py-2 flex items-center gap-1"
          >
            <Phone className="w-4 h-4" />
            Contact
          </button>
      </div>

      {/* SIDEBAR MENU BELOW NAVBAR */}
      <div
        className={`fixed left-0 top-[70px] h-[calc(100%-70px)] bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "-translate-x-full"} w-64`}
      >
        <div className="flex flex-col px-8 py-10 space-y-8">
          <div className="flex items-center gap-3 text-gray-700 cursor-pointer">
            <Car className="w-5 h-5" />
            Rides
          </div>

          <div className="flex items-center gap-3 text-gray-700 cursor-pointer">
            <Briefcase className="w-5 h-5" />
            Services
          </div>

          <div className="flex items-center gap-3 text-gray-700 cursor-pointer">
            <Info className="w-5 h-5" />
            About
          </div>

          <div className="flex items-center gap-3 text-gray-700 cursor-pointer">
            <Smartphone className="w-5 h-5" />
            App
          </div>

        </div>
          {/* BOOK NOW BUTTON */}
          <div className=" px-5">
            <button className="w-full border border-gray-300 rounded-md py-2 text-gray-900">
              Book Now
            </button>
          </div>
      </div>
    </nav>
  );
};

export default MiniNavbar;
