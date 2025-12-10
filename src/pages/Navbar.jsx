import { Briefcase, Car, Info, Phone, Smartphone } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="hidden md:block w-full bg-white border-b border-gray-300 fixed top-0 z-50">
      <div className="max-w-[1440px] mx-auto h-[82px] flex items-center">

        {/* INNER CONTAINER */}
        <div className="w-[1220px] flex justify-between items-center mx-auto">

          {/* LOGO */}
          <div
            className="h-full flex items-center"
          >
            <img
              src="/Images/logo.webp"
              alt="Logo"
              className="w-auto h-[70px] object-contain"
            />
          </div>

          {/* RIGHT SIDE — MENU + BUTTONS*/}
          <div className="w-[750px] h-full flex items-center gap-8 justify-end">

            {/* MENU ITEMS */}
            <ul className="flex items-center gap-8 text-[16px] text-gray-600">

              <li className="cursor-pointer font-roboto font-normal flex items-center gap-2">
                <Car className="w-4 h-4" />
                Rides
              </li>

              <li className="cursor-pointer font-roboto font-normal flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                Services
              </li>

              <li className="cursor-pointer font-roboto font-normal flex items-center gap-2">
                <Info className="w-4 h-4" />
                About
              </li>

              <li className="cursor-pointer font-roboto font-normal flex items-center gap-2">
                <Smartphone className="w-4 h-4" />
                App
              </li>

            </ul>


            {/* BUTTONS AREA */}
            <button
              className="border border-gray-300 rounded-md font-medium text-gray-600 text-sm px-5 py-2 
             flex items-center justify-center"
            >
              Book Now
            </button>

            <button
              className="border border-gray-300 rounded-md bg-black font-medium text-white text-sm px-5 py-2
             flex items-center justify-center gap-3"
            >
              <Phone className="w-4 h-4" />
              Contact
            </button>


          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;