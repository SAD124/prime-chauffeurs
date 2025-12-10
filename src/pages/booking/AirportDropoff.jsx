import { useState } from "react";
import { PiAirplaneTilt } from "react-icons/pi";
import { IoChevronDown } from "react-icons/io5";

export default function AirportDropoff() {
  const [open, setOpen] = useState(false);

  const airports = [
    "Sydney Airport - Terminal 1 (International)",
    "Sydney Airport - Terminal 2 (Domestic)",
    "Sydney Airport - Terminal 3 (Domestic)",
    "Bankstown Airport",
    "Melbourne Airport (MEL)",
    "Brisbane Airport (BNE)",
    "Perth Airport (PER)",
    "Adelaide Airport (ADL)",
    "Canberra Airport (CBR)",
  ];

  return (
    <div className="relative w-full">
      {/* BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="h-12 w-full flex items-center justify-between gap-3 
                   rounded-md bg-gray-50 shadow-md border border-gray-300 px-4 "
      >
        {/* LEFT SIDE — Icon + Text */}
        <div className="flex items-center gap-3">
          <PiAirplaneTilt className="w-5 h-5 text-gray-400" />
          <span className="font-medium text-gray-600">Select Airport as Drop-off</span>
        </div>

        {/* RIGHT SIDE — Dropdown Arrow */}
        <IoChevronDown
          className={`w-5 h-5 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* DROPDOWN */}
      {open && (
        <div className="absolute z-20 mt-2 w-full bg-white shadow-lg border max-h-90 overflow-y-auto text-gray-700">
          {airports.map((item, index) => (
            <div
              key={index}
              className="px-4 py-2 hover:bg-blue-600 cursor-pointer text-sm hover:text-white"
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
