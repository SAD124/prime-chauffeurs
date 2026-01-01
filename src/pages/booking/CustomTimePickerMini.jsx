"use client";
import { useState, useRef, useEffect } from "react";
import { GoClock } from "react-icons/go";
import { IoChevronDown } from "react-icons/io5";

export default function CustomTimePickerMini({onSelect}) {
  const [open, setOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState("");
  const ref = useRef(null);

  useEffect(() => {
    const handleOutside = (e) => ref.current && !ref.current.contains(e.target) && setOpen(false);
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  const times = [];
  const ampm = ["AM", "PM"];
  for (let h = 0; h < 24; h++) {
    for (let m = 0; m < 60; m += 30) {
      const hour12 = h % 12 === 0 ? 12 : h % 12;
      const minStr = m === 0 ? "00" : "30";
      times.push(`${hour12}:${minStr} ${ampm[Math.floor(h / 12)]}`);
    }
  }

  return (
    <div className="flex flex-col gap-1 w-full md:hidden" ref={ref}>
      <label className="text-sm font-medium text-gray-600">Pickup Time</label>
      <div
        className="relative py-3 bg-white rounded-md shadow-md px-4 flex items-center justify-between cursor-pointer border border-gray-300"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center gap-2">
          <GoClock className="w-5 h-5" />
          <span className={selectedTime ? "text-black" : "text-gray-900"}>
            {selectedTime || "Select Time"}
          </span>
        </div>
        <IoChevronDown className={`w-4 h-4 text-gray-800 transition-transform ${open ? "rotate-180" : ""}`} />
        {open && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg border border-gray-200 rounded-md max-h-60 overflow-y-auto mt-1 z-20">
            {times.map((t, i) => (
              <div
                key={i}
                className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setSelectedTime(t);
                  setOpen(false);
                    if (onSelect) onSelect(t); // <-- add this line
                }}
              >
                {t}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
