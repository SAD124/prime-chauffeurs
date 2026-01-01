"use client";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Armchair, Car } from 'lucide-react';
import { GoClock } from "react-icons/go";
import { LuMapPin } from "react-icons/lu";
import { toast, Toaster } from 'react-hot-toast';

import AirportPicker from "./AirportPicker";
import AirportDropoff from "./AirportDropoff";
import CustomTimePicker from "./CustomTimePicker";
import BookingFormMini from "./BookingFormMini";

export default function BookingForm() {
  const navigate = useNavigate();

  // --- Shared Form State ---
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [transferType, setTransferType] = useState("Select Transfer type");
  const [extraStop, setExtraStop] = useState("No Extra Stop");
  const [seats, setSeats] = useState("Select Seats");
  const [specialNotes, setSpecialNotes] = useState("");

  // --- Dropdown states ---
  const [openTransfer, setOpenTransfer] = useState(false);
  const [openStop, setOpenStop] = useState(false);
  const [openSeats, setOpenSeats] = useState(false);

  const transferOptions = ["One Way", "Two Way (Round Trip)"];
  const stopOptions = ["No Extra Stop","1 Extra Stop","2 Extra Stops","3 Extra Stops","4 Extra Stops","5 Extra Stops","6 Extra Stops"];
  const seatOptions = Array.from({ length: 15 }, (_, i) => `${i + 1} Seats`);

  // --- Airport selection handlers ---
  const handlePickupSelect = (location) => {
    setPickupLocation(location);
    toast.success(`Pickup location set to ${location}`);
  };
  const handleDropoffSelect = (location) => {
    setDropoffLocation(location);
    toast.success(`Drop-off location set to ${location}`);
  };

  // --- Shared Check Fare Handler ---
  const handleCheckFare = () => {
    if (!pickupLocation || !dropoffLocation || !pickupDate || !pickupTime) {
      toast.error("Please fill all required fields!");
      return;
    }
    const bookingData = {
      pickupLocation,
      dropoffLocation,
      pickupDate,
      pickupTime,
      transferType,
      extraStop,
      seats,
      specialNotes
    };
    localStorage.setItem("bookingData", JSON.stringify(bookingData));
    navigate("/check-fare");
  };

  return (
    <>
      {/* Mobile Form */}
      <BookingFormMini
        pickupLocation={pickupLocation}
        dropoffLocation={dropoffLocation}
        pickupDate={pickupDate}
        pickupTime={pickupTime}
        transferType={transferType}
        extraStop={extraStop}
        seats={seats}
        specialNotes={specialNotes}
        setPickupLocation={setPickupLocation}
        setDropoffLocation={setDropoffLocation}
        setPickupDate={setPickupDate}
        setPickupTime={setPickupTime}
        setTransferType={setTransferType}
        setExtraStop={setExtraStop}
        setSeats={setSeats}
        setSpecialNotes={setSpecialNotes}
        onCheckFare={handleCheckFare}
      />
      <Toaster position="top-center" reverseOrder={false} />

      {/* Desktop Form */}
      <div className="w-full max-w-6xl mx-auto lg:flex flex-col gap-3 hidden md:block">

        {/* BOOK BY DISTANCE */}
        <button className="w-full rounded-md h-10 border border-gray-300 bg-gray-100 shadow-lg flex items-center justify-center text-[16px] font-medium mb-5">
          Book by Distance
        </button>

        {/* AIRPORT PICKERS */}
        <div className="grid grid-cols-2 gap-4">
          <AirportPicker onSelect={handlePickupSelect} />
          <AirportDropoff onSelect={handleDropoffSelect} />
        </div>

        {/* PICKUP & DROPOFF LOCATION INPUTS */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center w-full py-3 bg-white rounded-md px-4 shadow-md border border-gray-300">
            <LuMapPin className="text-gray-800 w-5 h-5" />
            <input type="text" placeholder="Enter Pick Up Location" className="w-full ml-3 outline-none text-[16px] placeholder:text-gray-400" value={pickupLocation} readOnly />
          </div>

          <div className="flex items-center w-full py-3 bg-white rounded-md px-4 shadow-md border border-gray-300">
            <LuMapPin className="text-gray-800 w-5 h-5" />
            <input type="text" placeholder="Enter Drop Off Location" className="w-full ml-3 outline-none text-[16px] placeholder:text-gray-400" value={dropoffLocation} readOnly />
          </div>
        </div>

        {/* PICKUP DATE & TIME */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-[15px] font-medium text-gray-600">Pickup Date</label>
            <input type="date" className="py-3 px-4 rounded-md border border-gray-300" value={pickupDate} onChange={(e) => setPickupDate(e.target.value)} />
          </div>
          <CustomTimePicker onSelect={setPickupTime} />
        </div>

        {/* TRANSFER TYPE & EXTRA STOP & SEATS */}
        <div className="grid grid-cols-3 gap-4">
          {/* Transfer Type */}
          <div className="relative">
            <div className="py-3 bg-white rounded-md shadow-md px-4 flex items-center justify-between border border-gray-300 cursor-pointer" onClick={() => setOpenTransfer(!openTransfer)}>
              <div className='flex gap-2 justify-center items-center'>
                <Car className='h-5 w-5'/>
                <span className="text-gray-900">{transferType}</span>
              </div>
            </div>
            {openTransfer && (
              <div className="absolute w-full bg-white border rounded-md shadow-md mt-1 z-10 max-h-60 overflow-y-auto">
                {transferOptions.map((opt, idx) => (
                  <div key={idx} className="px-4 py-2 hover:bg-blue-600 hover:text-white cursor-pointer" onClick={() => { setTransferType(opt); setOpenTransfer(false); }}>
                    {opt}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Extra Stop */}
          <div className="relative">
            <div className="py-3 bg-white rounded-md shadow-md px-4 flex items-center justify-between border border-gray-300 cursor-pointer" onClick={() => setOpenStop(!openStop)}>
              <div className='flex gap-2 justify-center items-center'>
                <GoClock className="w-5 h-5" />
                <span className="text-gray-600">{extraStop}</span>
              </div>
            </div>
            {openStop && (
              <div className="absolute w-full bg-white border rounded-md shadow-md mt-1 z-10 max-h-60 overflow-y-auto">
                {stopOptions.map((opt, idx) => (
                  <div key={idx} className="px-4 py-2 hover:bg-blue-600 hover:text-white cursor-pointer" onClick={() => { setExtraStop(opt); setOpenStop(false); }}>
                    {opt}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Seats */}
          <div className="relative">
            <div className="py-3 bg-white rounded-md shadow-md px-4 flex items-center justify-between border border-gray-300 cursor-pointer" onClick={() => setOpenSeats(!openSeats)}>
              <div className="flex items-center gap-3">
                <Armchair className="w-6 h-6 text-gray-800" />
                <span className="text-gray-800">{seats}</span>
              </div>
            </div>
            {openSeats && (
              <div className="absolute w-full bg-white border rounded-md shadow-md mt-1 z-10 max-h-60 overflow-y-auto">
                {seatOptions.map((opt, idx) => (
                  <div key={idx} className="px-4 py-2 hover:bg-blue-600 hover:text-white cursor-pointer" onClick={() => { setSeats(opt); setOpenSeats(false); }}>
                    {opt}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* SPECIAL NOTES */}
        <div className="flex flex-col gap-1">
          <label className="text-[14px] font-medium text-gray-500">Special Requests or Notes (Optional)</label>
          <textarea rows={3} placeholder="Add any special requests..." className="w-full bg-white rounded-md shadow-lg px-4 py-2 border border-gray-300" value={specialNotes} onChange={(e) => setSpecialNotes(e.target.value)} />
        </div>

        {/* FINAL BUTTON */}
        <button className="py-4 rounded-md bg-black text-white text-[18px] font-medium shadow-md" onClick={handleCheckFare}>
          CHECK FARE
        </button>
      </div>
    </>
  );
}
