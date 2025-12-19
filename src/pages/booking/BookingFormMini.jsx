"use client";
import { Armchair, CalendarDays, Car, FileText } from "lucide-react";
import { GoClock } from "react-icons/go";
import { LuMapPin } from "react-icons/lu";
import { Pin } from "lucide-react";
import AirportPicker from "./AirportPicker";
import AirportDropoff from "./AirportDropoff";
import CustomTimePicker from "./CustomTimePicker";

export default function BookingFormMini() {
  return (
    <div className="w-full max-w-[1046px] mx-auto flex flex-col gap-3 md:hidden">

      {/* Top Tabs */}
      <div className="flex flex-col gap-5">
        <button className="w-full sm:w-[380px] h-10 rounded-md border border-gray-300 bg-gray-100 shadow-lg flex items-center justify-center text-[14px] sm:text-[16px] font-medium">
          Book by Distance
        </button>

        <div className="flex flex-col sm:flex-row gap-3">
          <AirportPicker />
          <AirportDropoff />
        </div>
      </div>

      {/* Pickup Location */}
      <div className="flex items-center w-full py-2 bg-white rounded-md px-4 shadow-md border border-gray-300">
        <LuMapPin className="text-gray-800 w-7 h-7" />
        <input type="text" placeholder="Enter Pick Up Location" className="w-full ml-3 outline-none text-[13px] placeholder:text-gray-400" />
        <div className="flex gap-2">
          <button className="w-8 h-8 rounded-md bg-black text-white flex items-center justify-center"><LuMapPin className="text-white w-4 h-4" /></button>
          <button className="w-8 h-8 rounded-md bg-black text-white flex items-center justify-center"><Pin className="h-4 w-4" /></button>
        </div>
      </div>

      {/* Dropoff Location */}
      <div className="flex items-center w-full py-2 bg-white rounded-md px-4 shadow-md border border-gray-300">
        <LuMapPin className="text-gray-800 w-6 h-6" />
        <input type="text" placeholder="Enter Drop Off Location" className="w-full ml-3 outline-none text-[13px] placeholder:text-gray-400" />
        <button className="w-8 h-8 rounded-md bg-black text-white flex items-center justify-center"><Pin className="h-4 w-4" /></button>
      </div>

      {/* Date + Time */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex flex-col gap-1 w-full">
          <label className="text-[14px] font-medium text-gray-500">Pickup Date</label>
          <div className="py-3 bg-white rounded-md shadow-md px-4 flex items-center justify-between gap-3 border border-gray-300">
            <CalendarDays className="w-5 h-5" />
            <input type="date" className="w-full outline-none text-[15px]" />
          </div>
        </div>
        <CustomTimePicker />
      </div>

      {/* Transfer Type + Extra Stop */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex flex-col gap-1 w-full">
          <div className="py-2 bg-white rounded-md shadow-md px-4 flex items-center justify-between border border-gray-300">
            <div className="flex gap-3 items-center"><Car className="h-5 w-5" /><span className="text-gray-900">Select Transfer type</span></div>
            <img src="/Images/arrow.webp" className="w-5" />
          </div>
        </div>
        <div className="flex flex-col gap-1 w-full">
          <div className="py-2 bg-white rounded-md shadow-md px-4 flex items-center justify-between border border-gray-300">
            <div className="flex gap-3 items-center"><GoClock className="w-5 h-5" /><span className="text-gray-900">No Extra Stop</span></div>
            <img src="/Images/arrow.webp" className="w-5" />
          </div>
        </div>
      </div>

      {/* Select Seats */}
      <div className="flex flex-col gap-1">
        <div className="py-2 bg-white rounded-md shadow-md px-4 flex items-center justify-between border border-gray-300">
          <div className="flex items-center gap-3"><Armchair className="w-6 h-6 text-gray-800" /><span className="text-gray-900">Select Seats</span></div>
          <img src="/Images/arrow.webp" className="w-5" />
        </div>
      </div>

      {/* Special Notes */}
      <div className="flex flex-col gap-1">
        <label className="text-[12px] sm:text-[14px] font-medium text-gray-500">Special Requests or Notes (Optional)</label>
        <div className="relative w-full border-t border-l border-r rounded-md border-gray-300">
          <FileText className="absolute top-8 left-4 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <textarea rows={3} placeholder="Add any special requests, instructions or notes for your driver (e.g., luggage info, special requirements, etc.)" className="w-full bg-white rounded-md shadow-lg px-12 py-5 outline-none text-[13px] sm:text-[15px]" />
        </div>
      </div>

      {/* Final Button */}
      <button className="py-3 rounded-md bg-gray-300 text-gray-500 text-[15px] sm:text-[16px] font-medium shadow-md">CHECK FARE</button>

    </div>
  );
}
