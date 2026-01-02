"use client";
import { Armchair, Car, Pin } from "lucide-react";
import { GoClock } from "react-icons/go";
import { LuMapPin } from "react-icons/lu";
import { toast, Toaster } from "react-hot-toast";
import { useState } from "react";
import AirportPicker from "./AirportPicker";
import AirportDropoff from "./AirportDropoff";
import CustomTimePicker from "./CustomTimePicker";

export default function BookingFormMini({
  pickupLocation,
  dropoffLocation,
  pickupDate,
  transferType,
  extraStop,
  seats,
  specialNotes,
  setPickupLocation,
  setDropoffLocation,
  setPickupDate,
  setPickupTime,
  setTransferType,
  setExtraStop,
  setSeats,
  setSpecialNotes,
  onCheckFare,
}) {
  // --- Dropdown state ---
  const [openTransfer, setOpenTransfer] = useState(false);
  const [openStop, setOpenStop] = useState(false);
  const [openSeats, setOpenSeats] = useState(false);

  const transferOptions = ["One Way", "Two Way (Round Trip)"];
  const stopOptions = [
    "No Extra Stop",
    "1 Extra Stop",
    "2 Extra Stops",
    "3 Extra Stops",
    "4 Extra Stops",
    "5 Extra Stops",
    "6 Extra Stops",
  ];
  const seatOptions = Array.from({ length: 15 }, (_, i) => `${i + 1} Seats`);

  // --- Airport handlers ---
  const handlePickupSelect = (location) => {
    setPickupLocation(location);
    toast.success(`Pickup location set to ${location}`);
  };

  const handleDropoffSelect = (location) => {
    setDropoffLocation(location);
    toast.success(`Drop-off location set to ${location}`);
  };

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col gap-3 md:hidden px-4 py-6">
      <Toaster position="top-center" />

      {/* Top Tab */}
      <button className="w-full h-10 rounded-md border bg-gray-100 shadow-lg text-sm font-medium">
        Book by Distance
      </button>

      {/* Airport Pickers */}
      <div className="flex flex-col gap-3">
        <AirportPicker onSelect={handlePickupSelect} />
        <AirportDropoff onSelect={handleDropoffSelect} />
      </div>

      {/* Pickup Location */}
      <div className="flex items-center py-2 bg-white rounded-md px-4 shadow border">
        <LuMapPin className="w-6 h-6" />
        <input
          value={pickupLocation}
          readOnly
          placeholder="Enter Pick Up Location"
          className="w-full ml-3 outline-none text-sm"
        />
        <Pin className="w-4 h-4" />
      </div>

      {/* Dropoff Location */}
      <div className="flex items-center py-2 bg-white rounded-md px-4 shadow border">
        <LuMapPin className="w-6 h-6" />
        <input
          value={dropoffLocation}
          readOnly
          placeholder="Enter Drop Off Location"
          className="w-full ml-3 outline-none text-sm"
        />
      </div>

      {/* Date & Time */}
      <div className="flex flex-col gap-3">
        <input
          type="date"
          className="py-3 px-4 rounded-md border"
          value={pickupDate}
          onChange={(e) => setPickupDate(e.target.value)}
        />
        <CustomTimePicker onSelect={setPickupTime} />
      </div>

      {/* Transfer Type */}
      <div onClick={() => setOpenTransfer(!openTransfer)} className="dropdown">
        <Car /> {transferType}
        {openTransfer &&
          transferOptions.map((opt) => (
            <div key={opt} onClick={() => setTransferType(opt)}>
              {opt}
            </div>
          ))}
      </div>

      {/* Extra Stop */}
      <div onClick={() => setOpenStop(!openStop)} className="dropdown">
        <GoClock /> {extraStop}
        {openStop &&
          stopOptions.map((opt) => (
            <div key={opt} onClick={() => setExtraStop(opt)}>
              {opt}
            </div>
          ))}
      </div>

      {/* Seats */}
      <div onClick={() => setOpenSeats(!openSeats)} className="dropdown">
        <Armchair /> {seats}
        {openSeats &&
          seatOptions.map((opt) => (
            <div key={opt} onClick={() => setSeats(opt)}>
              {opt}
            </div>
          ))}
      </div>

      {/* Notes */}
      <textarea
        rows={3}
        value={specialNotes}
        onChange={(e) => setSpecialNotes(e.target.value)}
        placeholder="Special requests..."
        className="border rounded-md p-3"
      />

      {/* ✅ FINAL BUTTON — NOW WORKS */}
      <button
        className="py-4 rounded-md bg-black text-white text-lg font-medium"
        onClick={onCheckFare}
      >
        CHECK FARE
      </button>
    </div>
  );
}
