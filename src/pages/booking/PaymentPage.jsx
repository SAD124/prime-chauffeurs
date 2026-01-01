import { useLocation, useNavigate } from "react-router-dom";

export default function PaymentPage() {
  const navigate = useNavigate();
  const { state } = useLocation();

  if (!state) return null;

  const { booking, car, totalAmount } = state;

  return (
    <div className="min-h-screen flex justify-center py-10 px-4">
      <div className="w-full max-w-5xl bg-white rounded-xl shadow-md grid grid-cols-1 md:grid-cols-2 overflow-hidden">

        {/* ================= LEFT ================= */}
        <div className="p-8">
          {/* Back */}
          <button
            onClick={() => navigate(-1)}
            className="text-sm text-gray-600 mb-6"
          >
            ← Prime Chauffeurs Australia
          </button>

          <h3 className="text-lg font-medium mb-1">{car.name}</h3>
          <p className="text-3xl font-bold mb-3">
            A${totalAmount.toFixed(2)}
          </p>

          <p className="text-sm text-gray-600 mb-8">
            Trip from {booking.pickupLocation} to {booking.dropoffLocation}
          </p>

          <img
            src={car.img}
            alt={car.name}
            className="w-full max-w-xs mx-auto"
          />
        </div>

        {/* ================= RIGHT ================= */}
        <div className="p-8">
          {/* Pay with Link */}
          <button className="w-full bg-green-500 hover:bg-green-600 text-black font-medium py-3 rounded-md mb-6">
            Pay with Link
          </button>

          {/* OR */}
          <div className="flex items-center gap-3 text-sm text-gray-400 mb-6">
            <div className="flex-1 h-px bg-gray-300" />
            OR
            <div className="flex-1 h-px bg-gray-300" />
          </div>

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded-md px-4 py-3 mb-6"
          />

          {/* Card Info */}
          <div className="border rounded-md mb-4">
            <input
              type="text"
              placeholder="1234 1234 1234 1234"
              className="w-full px-4 py-3 border-b"
            />
            <div className="grid grid-cols-2">
              <input
                type="text"
                placeholder="MM / YY"
                className="px-4 py-3 border-r"
              />
              <input
                type="text"
                placeholder="CVC"
                className="px-4 py-3"
              />
            </div>
          </div>

          {/* Cardholder name */}
          <input
            type="text"
            placeholder="Full name on card"
            className="w-full border rounded-md px-4 py-3 mb-4"
          />

          {/* Country */}
          <select className="w-full border rounded-md px-4 py-3 mb-4">
            <option>Pakistan</option>
            <option>Australia</option>
          </select>

          {/* Save Info */}
          <label className="flex items-start gap-3 text-sm text-gray-600 mb-6">
            <input type="checkbox" className="mt-1" />
            Save my information for faster checkout
          </label>

          {/* Pay Button */}
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-md font-medium text-lg">
            Pay
          </button>
        </div>
      </div>
    </div>
  );
}
