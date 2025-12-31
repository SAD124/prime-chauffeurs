import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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

export default function CheckFareMobile() {
  const [booking, setBooking] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setBooking(JSON.parse(localStorage.getItem("bookingData")));
  }, []);

  const handleSelectCar = (car) => {
    localStorage.setItem("selectedCar", JSON.stringify(car));
    navigate("/checkout");
  };

  if (!booking) return null;

  return (
    <div className="md:hidden w-full min-h-screen bg-black text-white px-4 py-6">

      {/* SUMMARY */}
      <div className="bg-white text-black rounded-xl p-4 mb-6">
        <h2 className="font-bold text-lg mb-3 text-center">Trip Summary</h2>

        <div className="space-y-2 text-sm">
          <p><strong>Pickup:</strong> {booking.pickupLocation}</p>
          <p><strong>Drop-off:</strong> {booking.dropoffLocation}</p>
          <p><strong>Date:</strong> {booking.pickupDate}</p>
          <p><strong>Time:</strong> {booking.pickupTime}</p>
          <p><strong>Extra Stop:</strong> {booking.extraStop}</p>
          <p><strong>Notes:</strong> {booking.specialNotes || "None"}</p>
        </div>

        <button
          className="mt-4 w-full border border-[#D4C5A0] text-black py-2 rounded-full"
          onClick={() => window.history.back()}
        >
          ← Previous
        </button>
      </div>

      {/* CAR LIST */}
      <div className="space-y-4">
        {dummyCars.map((car, idx) => (
          <div
            key={idx}
            className="bg-white text-black rounded-xl p-4 flex gap-3 items-center"
          >
            <img
              src={car.img}
              className="w-20 h-14 object-cover rounded"
            />

            <div className="flex-1">
              <h3 className="font-semibold text-sm">{car.name}</h3>
              <p className="text-xs">
                {car.seats} seats · {car.luggage} luggage
              </p>
            </div>

            <button
              className="bg-[#D4C5A0] px-3 py-1 text-sm rounded"
              onClick={() => handleSelectCar(car)}
            >
              Select
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
