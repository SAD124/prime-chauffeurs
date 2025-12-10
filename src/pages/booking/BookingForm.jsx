"use client";
import { Armchair, CalendarDays, Car, FileText } from 'lucide-react';
import { GoClock } from "react-icons/go";
import { LuMapPin, LuUsers } from "react-icons/lu";
import { PiAirplaneTilt } from "react-icons/pi";
import AirportPicker from "./AirportPicker";
import AirportDropoff from "./AirportDropoff";
import { Pin } from "lucide-react";
import { IoChevronDown } from 'react-icons/io5';
import CustomTimePicker from './CustomTimePicker';

export default function BookingForm() {
  return (
    <div className="w-full max-w-[1046px] mx-auto flex flex-col gap-5">

      {/* TOP TABS */}
<div className="flex flex-col gap-5">

  {/* Row 1 — Book by Distance (single) */}
  <button className="w-[380px] rounded-md h-10 border border-gray-300 bg-gray-100 shadow-lg flex items-center justify-center text-[16px] font-medium">
    Book by Distance
  </button>

  {/* Row 2 — Pickup + Drop-off (side by side) */}
  <div className="grid grid-cols-2 gap-4">

    {/* Airport Pickup */}
    <AirportPicker/>

    {/* Airport Drop-Off */}
    <AirportDropoff/>

  </div>
</div>


      {/* PICKUP LOCATION */}
      <div className="flex items-center w-full h-[60px] bg-white rounded-md px-4 shadow-md">
        <LuMapPin className="text-gray-800 w-5 h-5" />
        <input
          type="text"
          placeholder="Enter Pick Up Location"
          className="w-full ml-3 outline-none text-[16px] placeholder:text-gray-400"
        />
        <div className="flex gap-2 justify-center items-center">
          <button className="w-8 h-8 rounded-md bg-black text-white flex items-center justify-center">
        <LuMapPin className="text-white w-5 h-5" />
          </button>
          <button className="w-8 h-8 rounded-md bg-black text-white flex items-center justify-center">
          <Pin className="h-5 w-5"/>
        </button>
        </div>
      </div>

      {/* DROP OFF LOCATION */}
      <div className="flex items-center w-full h-[60px] bg-white rounded-md px-4 shadow-md">
        <LuMapPin className="text-gray-800 w-5 h-5" />
        <input
          type="text"
          placeholder="Enter Drop Off Location"
          className="w-full ml-3 outline-none text-[16px] placeholder:text-gray-400"
        />
          <button className="w-8 h-8 rounded-md bg-black text-white flex items-center justify-center">
          <Pin className="h-5 w-5"/>
        </button>
      </div>

      {/* DATE + TIME */}
      <div className="grid grid-cols-2 gap-4">

        {/* Pickup Date */}
        <div className="flex flex-col gap-1">
          <label className="text-[15px] font-medium text-gray-600">Pickup Date</label>
          <div className="h-[60px] bg-white rounded-md shadow-md px-4 flex items-center gap-3">
            <CalendarDays className="w-5 h-5" />
            <input
              type="date"
              className="w-full outline-none text-[16px]"
            />
          </div>
        </div>

        {/* Pickup Time */}
        <CustomTimePicker/>

      </div>

      {/* TRANSFER TYPE + EXTRA STOP */}
      <div className="grid grid-cols-2 gap-4">

        {/* Transfer Type */}
        <div className="flex flex-col gap-1">
          <div className="h-[60px] bg-white rounded-md shadow-md px-4 flex items-center justify-between">
            <div className='flex gap-2 justify-center items-center'>
              <Car className='h-5 w-5'/>
            <span className="text-gray-900">Select Transfer type</span>
            </div>
            <img src="/Images/arrow.webp" className="w-5" />
          </div>
        </div>

        {/* Extra Stop */}
        <div className="flex flex-col gap-1">
          <div className="h-[60px] bg-white rounded-md shadow-md px-4 flex items-center justify-between">
            <div className='flex gap-2 justify-center items-center'>
          <GoClock className="w-5 h-5" />
              <span className="text-gray-600">No Extra Stop</span>
            </div>
            <img src="/Images/arrow.webp" className="w-5" />
          </div>
        </div>

      </div>

      {/* SELECT SEATS */}
      <div className="flex flex-col gap-1">
        <div className="h-[60px] bg-white rounded-md shadow-md px-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Armchair className="w-6 h-6 text-gray-800" />
            <span className="text-gray-800">Select Seats</span>
          </div>
          <img src="/Images/arrow.webp" className="w-5" />
        </div>
      </div>

      {/* SPECIAL NOTES */}
      <div className="flex flex-col gap-1">
        <label className="text-[14px] font-medium text-gray-500">Special Requests or Notes (Optional)</label>
        <div className="relative w-full">
      {/* Icon */}
      <FileText className="absolute top-8 left-4 -translate-y-1/2 text-gray-400 w-5 h-5" />
      <textarea
        rows={3}
        placeholder="Add any special requests, instructions or notes for your driver (e.g., luggage info, special requirements, etc.)"
        className="w-full bg-white rounded-md shadow-md px-12 py-5 outline-none text-[15px]"
      />
    </div>
      </div>

      {/* FINAL BUTTON */}
      <button className="h-[65px] rounded-md bg-gray-300 text-gray-500 text-[18px] font-medium shadow-md">
        CHECK FARE
      </button>

    </div>
  );
}
