import { useEffect, useState } from "react";
import CheckoutMini from "./CheckoutMini";
import { useNavigate } from "react-router-dom";

export default function CheckoutPage() {
  const [booking, setBooking] = useState(null);
  const [car, setCar] = useState(null);

  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    setBooking(JSON.parse(localStorage.getItem("bookingData")));
    setCar(JSON.parse(localStorage.getItem("selectedCar")));
  }, []);

  if (!booking || !car) return null;

  const baseFare = 5123.91;
  const toll = 35.0;
  const extraStopCharge = 75.0;

  const subtotal = baseFare + toll + extraStopCharge;
  const gst = subtotal * 0.1;
  const totalAmount = subtotal + gst;

  const handleSend = () => {
  setIsProcessing(true);

  setTimeout(() => {
    navigate("/payment", {
      state: {
        booking,
        car,
        totalAmount,
      },
    });
  }, 2000); // 2 seconds processing
};

  return (
    <>
      {/* MOBILE */}
      <div className="block md:hidden">
        <CheckoutMini
          booking={booking}
          car={car}
          baseFare={baseFare}
          toll={toll}
          extraStopCharge={extraStopCharge}
          subtotal={subtotal}
          gst={gst}
          totalAmount={totalAmount}
        />
      </div>

      {/* DESKTOP & LARGE */}
      <div className="hidden md:flex min-h-screen bg-[#0f0f0f] justify-center py-16 px-6">
        <div className="w-full max-w-6xl">
          {/* HEADING */}
          <h2 className="text-center text-4xl font-semibold mb-10 text-white">
            Check-Out Your <span className="text-[#fee67c]">Comfort</span>
          </h2>

          <div className="bg-[#fffdf2] rounded-2xl shadow-xl p-12">
            {/* ================= SUMMARY ================= */}
            <div className="bg-[#fffbeb] p-8 rounded-2xl mb-10">
              <div className="flex justify-between gap-10 pb-8 border-b border-gray-300">
                {/* LEFT */}
                <div className="flex gap-6">
                  <img
                    src={car.img}
                    alt={car.name}
                    className="w-32 h-24 object-cover rounded-lg"
                  />

                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">{car.name}</h3>
                    <p className="text-sm text-gray-600">
                      Base Fare:{" "}
                      <span className="font-medium">
                        ${baseFare.toFixed(2)}
                      </span>
                    </p>
                    <p className="text-sm">
                      <strong>Route:</strong> {booking.pickupLocation} →{" "}
                      {booking.dropoffLocation}
                    </p>
                    <p className="text-sm">
                      <strong>Date:</strong> {booking.pickupDate} |{" "}
                      {booking.pickupTime}
                    </p>
                    <p className="text-sm">
                      <strong>Extra Stops:</strong> {booking.extraStop}
                    </p>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="text-right flex flex-col justify-center">
                  <span className="text-3xl font-bold">
                    ${totalAmount.toFixed(2)}
                  </span>
                  <span className="text-sm text-gray-600">
                    Inc. all charges
                  </span>
                </div>
              </div>

              {/* PRICE BREAKDOWN */}
              {/* PRICE BREAKDOWN */}
              <div className="mt-6 space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Base Fare</span>
                  <span>${baseFare.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span>Toll</span>
                  <span>${toll.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span>Extra Stop Charges</span>
                  <span>${extraStopCharge.toFixed(2)}</span>
                </div>

                <div className="flex justify-between font-medium border-t border-gray-300 pt-4">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span>GST (10%)</span>
                  <span>${gst.toFixed(2)}</span>
                </div>

                <div className="flex justify-between font-bold pt-4 border-t border-gray-300">
                  <span>Total</span>
                  <span>${totalAmount.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* ================= CONTACT ================= */}
            <h4 className="text-xl font-bold mb-5">Contact information</h4>

            <div className="grid grid-cols-2 gap-6 mb-10">
              {["First name", "Last name", "Email", "Phone"].map((label) => (
                <div key={label} className="flex flex-col gap-1">
                  <label className="text-sm font-medium">{label} *</label>
                  <input className="border border-gray-300 px-4 py-3 rounded-lg" />
                </div>
              ))}
            </div>

            {/* ================= BILLING ADDRESS ================= */}
            <h4 className="text-xl font-bold mb-5">Billing address</h4>

            <div className="space-y-6 mb-10">
              {/* Street Address */}
              <input
                type="text"
                placeholder="Street address *"
                className="border border-gray-300 px-4 py-3 rounded-lg w-full"
              />

              {/* Country */}
              <select className="border border-gray-300 px-4 py-3 rounded-lg w-full bg-white">
                <option value="">Select country *</option>
                <option value="Australia">Australia</option>
              </select>

              {/* City / State / Zip */}
              <div className="grid grid-cols-3 gap-6">
                <input
                  type="text"
                  placeholder="City *"
                  className="border border-gray-300 px-4 py-3 rounded-lg"
                />

                <input
                  type="text"
                  placeholder="State / Province *"
                  className="border border-gray-300 px-4 py-3 rounded-lg"
                />

                <input
                  type="text"
                  placeholder="Zip Code *"
                  className="border border-gray-300 px-4 py-3 rounded-lg"
                />
              </div>
            </div>

            {/* ================= PAYMENT ================= */}
            <div className="border border-[#ffbc0c] bg-[#fffbeb] rounded-lg p-5 mb-8">
              <label className="flex gap-4 items-start">
                <input type="radio" defaultChecked className="mt-1" />
                <div>
                  <p className="font-medium">Pay with Card (Stripe)</p>
                  <p className="text-sm text-gray-600">
                    Secure encrypted Stripe payment
                  </p>
                </div>
              </label>
            </div>
            {/* Terms & Conditions */}
            <div className="flex items-center gap-3">
              <input type="checkbox" className="w-4 h-4 accent-black" />
              <p className="text-sm text-gray-700">
                I accept the{" "}
                <span className="font-medium underline cursor-pointer">
                  terms
                </span>{" "}
                *
              </p>
            </div>
            {/* ================= FOOTER ================= */}
            <div className="flex justify-between items-center">
              <button
                className="text-sm text-gray-600"
                onClick={() => window.history.back()}
              >
                ← Back
              </button>

              <button
  onClick={handleSend}
  disabled={isProcessing}
  className={`px-8 py-3 rounded-lg font-semibold transition ${
    isProcessing
      ? "bg-gray-400 cursor-not-allowed"
      : "bg-[#f2c94c] hover:opacity-90"
  }`}
>
  {isProcessing ? "Processing..." : "Send"}
</button>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
