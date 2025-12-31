import { useState } from "react";
import { PiAirplaneTilt } from "react-icons/pi";
import { IoChevronDown } from "react-icons/io5";
import AirportPickerMini from "./AirportPickerMini";

export default function AirportPicker({ onSelect }) {
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
    <>
      <AirportPickerMini/>
      <div className="relative w-full hidden md:block">
      <button onClick={() => setOpen(!open)} className="...">Select Airport as Pickup</button>
      {open && (
        <div className="absolute bg-white w-full border shadow-lg z-20">
          {airports.map((item, idx) => (
            <div
              key={idx}
              className="px-4 py-2 hover:bg-blue-600 hover:text-white cursor-pointer"
              onClick={() => {
                onSelect(item);
                setOpen(false);
              }}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
    </>
  );
}
