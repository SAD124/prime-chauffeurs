export default function CheckoutMini({
  booking,
  car,
  baseFare,
  toll,
  extraStopCharge,
  subtotal,
  gst,
  totalAmount,
}) {
  return (
    <div className="min-h-screen bg-[#0f0f0f] px-4 py-6 flex justify-center">
      <div className="w-full max-w-md overflow-y-auto space-y-6">

        {/* HEADING */}
        <h2 className="text-center text-2xl sm:text-3xl font-semibold mb-6 text-white">
          Check-Out Your <span className="text-[#fee67c]">Comfort</span>
        </h2>

        <div className="bg-[#fffdf2] rounded-xl shadow-lg p-4 space-y-6">

          {/* ================= SUMMARY ================= */}
          <div className="bg-[#fffbeb] p-4 rounded-xl space-y-4">

            <div className="flex gap-4 items-center">
              <img
                src={car.img}
                alt={car.name}
                className="w-20 sm:w-24 h-16 sm:h-20 object-cover rounded-md"
              />

              <div className="text-sm sm:text-base space-y-1 flex-1">
                <h3 className="font-semibold text-base sm:text-lg">{car.name}</h3>
                <p className="text-gray-600">
                  Base Fare: <span className="font-medium">${baseFare.toFixed(2)}</span>
                </p>
              </div>
            </div>

            <div className="text-sm sm:text-base space-y-1">
              <p>
                <strong>Route:</strong> {booking.pickupLocation} → {booking.dropoffLocation}
              </p>
              <p>
                <strong>Date:</strong> {booking.pickupDate} | {booking.pickupTime}
              </p>
              <p>
                <strong>Extra Stops:</strong> {booking.extraStop}
              </p>
            </div>

            {/* ================= COUPON ================= */}
            <div className="mt-2">
              <h4 className="font-bold text-sm mb-2">Have a coupon?</h4>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter coupon code"
                  className="flex-1 border border-gray-300 px-3 py-2 rounded-lg text-sm"
                />
                <button className="bg-[#f2c94c] px-4 rounded-lg font-semibold text-sm">
                  Apply
                </button>
              </div>
            </div>

            {/* ================= PRICE BREAKDOWN ================= */}
            <div className="border-t border-gray-300 pt-3 space-y-2 text-sm sm:text-base">
              <div className="flex justify-between">
                <span>Toll</span>
                <span>${toll.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Extra Stop Charges</span>
                <span>${extraStopCharge.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>GST (10%)</span>
                <span>${gst.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-base pt-2">
                <span>Total</span>
                <span>${totalAmount.toFixed(2)}</span>
              </div>
            </div>

          </div>

          {/* ================= BILLING ADDRESS ================= */}
          <div>
            <h4 className="font-bold text-lg mb-3">Billing Address</h4>
            <div className="grid grid-cols-1 gap-3">
              {["Street Address", "City", "State", "ZIP/Postal Code", "Country"].map((label) => (
                <div key={label} className="flex flex-col gap-1">
                  <label className="text-sm font-medium">{label} *</label>
                  <input
                    className="border border-gray-300 px-3 py-2 rounded-lg text-sm"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* ================= CONTACT INFORMATION ================= */}
          <div>
            <h4 className="font-bold text-lg mb-3">Contact Information</h4>
            <div className="grid grid-cols-1 gap-3">
              {["First name", "Last name", "Email", "Phone"].map((label) => (
                <div key={label} className="flex flex-col gap-1">
                  <label className="text-sm font-medium">{label} *</label>
                  <input
                    className="border border-gray-300 px-3 py-2 rounded-lg text-sm"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* ================= PAYMENT ================= */}
          <div>
            <h4 className="font-bold text-lg mb-3">Payment</h4>
            <div className="border border-[#ffbc0c] bg-[#fffbeb] rounded-lg p-4">
              <label className="flex gap-3 items-start">
                <input type="radio" defaultChecked className="mt-1" />
                <div>
                  <p className="font-medium">Pay with Card (Stripe)</p>
                  <p className="text-sm text-gray-600">
                    Secure encrypted Stripe payment
                  </p>
                </div>
              </label>
            </div>
          </div>

          {/* ================= TERMS & CONDITIONS ================= */}
          <div className="flex items-start gap-2 text-sm">
            <input type="checkbox" className="mt-1" />
            <p>
              I agree to the <span className="text-[#fee67c]">Terms & Conditions</span> *
            </p>
          </div>

          {/* ================= FOOTER ================= */}
          <div className="space-y-3">
            <button
              onClick={() => window.history.back()}
              className="w-full border border-gray-400 py-3 rounded-lg text-sm"
            >
              ← Back to Car Selection
            </button>

            <button className="w-full bg-[#f2c94c] py-3 rounded-lg font-semibold text-sm">
              Send
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
