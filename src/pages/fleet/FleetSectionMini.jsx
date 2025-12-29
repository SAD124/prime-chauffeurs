import { Luggage, Users } from "lucide-react";
import { Link } from "react-router-dom";

const FleetSectionMini = () => {
  const cars = [
    {
      img: "/Images/fleet1.png",
      name: "Mercedes-Benz S-class",
      luggage: 4,
      users: 8,
    },
    {
      img: "/Images/fleet2.png",
      name: "Mercedes-Benz E-class",
      luggage: 3,
      users: 4,
    },
    {
      img: "/Images/fleet3.png",
      name: "Mercedes V-class 200",
      luggage: 5,
      users: 7,
    },
    {
      img: "/Images/fleet4.png",
      name: "Mercedes-Benz V 300",
      luggage: 6,
      users: 8,
    },
    {
      img: "/Images/fleet5.png",
      name: "Mercedes V-class 250",
      luggage: 4,
      users: 7,
    },
    {
      img: "/Images/fleet6.png",
      name: "Mercedes Sprinter",
      luggage: 7,
      users: 15,
    },
    { img: "/Images/fleet7.png", name: "Audi Q7", luggage: 4, users: 6 },
    { img: "/Images/fleet8.png", name: "Audi Q8", luggage: 4, users: 4 },
    { img: "/Images/fleet9.png", name: "Audi A6", luggage: 3, users: 4 },
  ];

  return (
    <section
      id="ridesmini"
      className="w-full flex justify-center px-4 py-18 sm:hidden scroll-mt-12"
    >
      <div className="w-full flex flex-col items-center gap-6">
        {/* RIGHT SIDE CONTENT (FIRST) */}
        <div className="flex flex-col items-center text-center max-w-md">
          <h2 className="font-roboto font-bold text-[24px] sm:text-[26px] md:text-[28px] leading-[120%] text-black">
            Explore Our Fleet
          </h2>

          <p className="mt-4 text-[14px] leading-[150%] font-roboto text-gray-600">
            Suzellbus offers a wide range of vehicles to suit your needs —
            elegant, sophisticated, and reliable. Whether you need a premium
            sedan, a comfortable SUV, or an economical car, we've got you
            covered. Our diverse fleet reflects our commitment to your journey —
            book now and experience the difference.
          </p>

          {/* GRID */}
          <div className="grid grid-cols-2 gap-4 w-full mt-6">
            {cars.map((car, index) => (
              <div key={index} className="cursor-pointer">
                {/* Bigger Card */}
                <div className="w-full h-40 rounded-[20px] bg-gray-100 flex items-center justify-center">
                  <img
                    src={car.img}
                    alt={car.name}
                    className="w-[70%] h-[70%] object-contain"
                  />
                </div>

                <div className="mt-2 flex flex-col items-center text-center">
                  <span className="font-semibold text-sm">{car.name}</span>

                  <div className="flex gap-3 mt-1">
                    <div className="flex items-center gap-1">
                      <Luggage
                        className="h-4 w-4 stroke-green-600"
                        strokeWidth={3}
                      />
                      <span className="text-sm">{car.luggage}x</span>
                    </div>

                    <div className="flex items-center gap-1">
                      <Users
                        className="h-4 w-4 stroke-purple-600"
                        strokeWidth={3}
                      />
                      <span className="text-sm">{car.users}x</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* BUTTON */}
          <Link
            to="/book"
            className="mt-6 bg-[#d2b76b] text-white font-roboto text-[15px] px-8 sm:px-10 py-2 sm:py-3 rounded-md"
          >
            Book Now
          </Link>
        </div>

        {/* LEFT IMAGE (AFTER CONTENT) */}
        <div className="w-full max-w-md rounded-[30px] overflow-hidden">
          <img
            src="/Images/fleet.webp"
            alt="Fleet Cars"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default FleetSectionMini;
