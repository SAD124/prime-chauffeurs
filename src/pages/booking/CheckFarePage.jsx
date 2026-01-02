import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CheckFareMobile from "./CheckFareMobile";

const dummyCars = [
  { name: "Mercedes-Benz S-class", seats: 4, luggage: 4, img: "/Images/fleet1.png" },
  { name: "Mercedes-Benz-E-Class", seats: 4, luggage: 3, img: "/Images/fleet2.png" },
  { name: "Audi A8", seats: 4, luggage: 4, img: "/Images/fleet3.png" },
  { name: "Audi Q6", seats: 4, luggage: 3, img: "/Images/fleet4.png" },
  { name: "Audi A8", seats: 4, luggage: 3, img: "/Images/fleet5.png" },
  { name: "Lexus 450h", seats: 4, luggage: 4, img: "/Images/fleet6.png" },
  { name: "Lexus ES300", seats: 4, luggage: 3, img: "/Images/fleet7.png" },
  { name: "Lexus RX350", seats: 4, luggage: 4, img: "/Images/fleet8.png" },
  { name: "BMW X5", seats: 4, luggage: 5, img: "/Images/fleet9.png" },
  { name: "BMW 8 Series", seats: 4, luggage: 4, img: "/Images/fleet1.png" },
  { name: "BMW 7 Series", seats: 4, luggage: 4, img: "/Images/fleet2.png" },
  { name: "Audi Q7", seats: 6, luggage: 4, img: "/Images/fleet3.png" },
];

const benefits = [
  {
    image: "/Images/choose1.webp",
    title: "Professional Drivers",
    text: "Friendly, reliable and professional drivers that will ensure you a safe and comfortable ride.",
  },
  {
    image: "/Images/choose2.webp",
    title: "Luxury Experience",
    text: "Choose from our fleet of luxury vehicles for an exceptional experience.",
  },
  {
    image: "/Images/choose3.webp",
    title: "Always On Time",
    text: "Accurate and punctual from start to finish - your time matters to us.",
  },
];

export default function CheckFarePage() {
  const [booking, setBooking] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("bookingData"));
    setBooking(data);
  }, []);

  const handleSelectCar = (car) => {
  localStorage.setItem("selectedCar", JSON.stringify(car));
  navigate("/checkout");
}

  if (!booking) return <p>Loading...</p>;

  return (
    <>
    <CheckFareMobile/>
    <div className="hidden md:flex w-full min-h-screen bg-black text-white justify-center py-10 px-4">
      <div className="w-full max-w-7xl flex gap-20">

        {/* LEFT SIDE: Summary + Cars */}
<div className="w-2/3 flex flex-col gap-6">
  <div className="bg-white p-7 rounded-2xl">
    {/* Trip Summary Heading */}
  <h2 className="text-xl font-bold mb-4 text-black text-center">TRIP SUMMARY</h2>

  {/* Summary Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    {/* Pickup Location */}
    <div className="bg-[#f2eee3] text-black rounded-lg p-4 flex flex-col gap-2">
      <span className="text-sm font-medium text-gray-600">Pickup Location</span>
      <span className="font-semibold">{booking.pickupLocation}</span>
    </div>

    {/* Drop-off Location */}
    <div className="bg-[#f2eee3] text-black rounded-lg p-4 flex flex-col gap-2">
      <span className="text-sm font-medium text-gray-600">Drop-off Location</span>
      <span className="font-semibold">{booking.dropoffLocation}</span>
    </div>

    {/* Pickup Date */}
    <div className="bg-[#f2eee3] text-black rounded-lg p-4 flex flex-col gap-2">
      <span className="text-sm font-medium text-gray-600">Pickup Date</span>
      <span className="font-semibold">{booking.pickupDate}</span>
    </div>

    {/* Pickup Time */}
    <div className="bg-[#f2eee3] text-black rounded-lg p-4 flex flex-col gap-2">
      <span className="text-sm font-medium text-gray-600">Pickup Time</span>
      <span className="font-semibold">{booking.pickupTime}</span>
    </div>

    {/* Transfer Type */}
    <div className="bg-[#f2eee3] text-black rounded-lg p-4 flex flex-col gap-2">
      <span className="text-sm font-medium text-gray-600">Transfer Type</span>
      <span className="font-semibold">{booking.transferType}</span>
    </div>

    {/* Extra Stop */}
    <div className="bg-[#f2eee3] text-black rounded-lg p-4 flex flex-col gap-2">
      <span className="text-sm font-medium text-gray-600">Extra Stop</span>
      <span className="font-semibold">{booking.extraStop}</span>
    </div>

    {/* Seats */}
    <div className="bg-[#f2eee3] text-black rounded-lg p-4 flex flex-col gap-2">
      <span className="text-sm font-medium text-gray-600">Seats</span>
      <span className="font-semibold">{booking.seats}</span>
    </div>

    {/* Notes */}
    <div className="bg-[#f2eee3] text-black rounded-lg p-4 flex flex-col gap-2">
      <span className="text-sm font-medium text-gray-600">Notes</span>
      <span className="font-semibold">{booking.specialNotes || "None"}</span>
    </div>
  </div>

  {/* Go Previous Button */}
  <button
    className="mt-6 w-full py-1 border border-[#D4C5A0] text-black rounded-full flex items-center justify-center gap-2 font-semibold"
    onClick={() => navigate("/book")}
  >
    <span className="text-xl">&larr;</span> Previous
  </button>
  </div>

  {/* Car Cards (1 per row) */}
  <div className="flex flex-col gap-6 mt-6 bg-white p-10 rounded-4xl">
    {dummyCars.map((car, idx) => (
      <div key={idx} className="bg-[#f2eee3] text-black shadow-md rounded-4xl p-8 flex flex-col md:flex-row md:items-center gap-7">
        <div className="w-full md:w-40 h-20 overflow-hidden rounded-md">
  <img
    src={car.img}
    alt={car.name}
    className="w-full h-full object-cover object-center"
  />
</div>

        <div className="flex-1 flex flex-col md:flex-row md:justify-between md:items-center gap-2">
          <div>
            <h3 className="font-semibold">{car.name}</h3>
            <p>Fleet: {car.seats} seats | {car.luggage} luggage</p>
          </div>
          <button
            className="mt-2 md:mt-0 py-2 px-4 bg-[#D4C5A0] text-black rounded-md"
            onClick={() => handleSelectCar(car)}
          >
            Select Car
          </button>
        </div>
      </div>
    ))}
  </div>
</div>


        {/* RIGHT SIDE: Benefits Cards */}
        <div className="w-1/3 flex flex-col gap-6 mt-5">
          <div className="grid grid-cols-1 gap-15 w-89">
            {benefits.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center gap-4"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-contain"
                />
                <h3 className="text-white font-semibold text-2xl">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
    </>
  );
}
