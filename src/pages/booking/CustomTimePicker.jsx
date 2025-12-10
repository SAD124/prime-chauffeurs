import { useState, useRef, useEffect } from "react";
import { GoClock } from "react-icons/go";
import { IoChevronDown } from "react-icons/io5";

export default function CustomTimePicker() {
  const [open, setOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState("");
  const dropdownRef = useRef(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Generate times from 12:00 AM to 11:30 PM in 30 min intervals
  const times = [];
  const ampm = ["AM", "PM"];
  for (let h = 0; h < 24; h++) {
    for (let m = 0; m < 60; m += 30) {
      const hour12 = h % 12 === 0 ? 12 : h % 12;
      const minStr = m === 0 ? "00" : "30";
      const period = ampm[Math.floor(h / 12)];
      times.push(`${hour12}:${minStr} ${period}`);
    }
  }

  return (
    <div className="flex flex-col gap-1" ref={dropdownRef}>
      <label className="text-[15px] font-medium text-gray-600">Pickup Time</label>

      <div
        className="relative h-[60px] bg-white rounded-md shadow-md px-4 flex items-center justify-between cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        {/* LEFT SIDE: Clock + Text */}
        <div className="flex items-center gap-3">
          <GoClock className="w-5 h-5" />
          <span className={`${selectedTime ? "text-black" : "text-gray-700"}`}>
            {selectedTime || "Select Time"}
          </span>
        </div>

        {/* RIGHT SIDE: Dropdown Arrow */}
        <IoChevronDown
          className={`w-4 h-4 text-gray-700 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />

        {/* DROPDOWN */}
        {open && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg border border-gray-200 rounded-md max-h-60 overflow-y-auto mt-1 z-20">
            {times.map((time, index) => (
              <div
                key={index}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                onClick={() => {
                  setSelectedTime(time);
                  setOpen(false);
                }}
              >
                {time}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
