import { HashLink } from "react-router-hash-link";
import { Luggage, Users } from "lucide-react";
import FleetSectionMini from "./FleetSectionMini";

const FleetSection = () => {
  const cars = [
    { img: "/Images/fleet1.png", name: "Mercedes-Benz S-Class", luggage: 4, users: 8 },
    { img: "/Images/fleet2.png", name: "Mercedes-Benz E-Class", luggage: 3, users: 4 },
    { img: "/Images/fleet3.png", name: "Mercedes V-Class 200", luggage: 5, users: 7 },
    { img: "/Images/fleet4.png", name: "Mercedes-Benz V 300", luggage: 6, users: 8 },
    { img: "/Images/fleet5.png", name: "Mercedes V-Class 250", luggage: 4, users: 7 },
    { img: "/Images/fleet6.png", name: "Mercedes Sprinter", luggage: 7, users: 15 },
    { img: "/Images/fleet7.png", name: "Audi Q7", luggage: 4, users: 6 },
    { img: "/Images/fleet8.png", name: "Audi Q8", luggage: 4, users: 4 },
    { img: "/Images/fleet9.png", name: "Audi A6", luggage: 3, users: 4 },
  ];

  return (
    <>
      <FleetSectionMini />

      {/* Desktop */}
      <section
        id="rides"
        className="hidden md:block w-full py-20 scroll-mt-16"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-2 gap-12 items-center px-8">

          {/* Left Image */}
          <div className="w-full rounded-2xl overflow-hidden">
            <img
              src="/Images/fleet.webp"
              alt="Our Fleet"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-col items-center text-center">

            {/* Heading */}
            <h2 className="font-roboto font-bold text-4xl text-black leading-tight">
              Explore Our Fleet
            </h2>

            {/* Description */}
            <p className="mt-6 text-base text-gray-600 max-w-lg leading-relaxed">
              Suzellbus offers a wide range of vehicles to suit your needs — elegant, sophisticated, and reliable. Whether you need a premium sedan, a comfortable SUV, or an economical car, we've got you covered. Our diverse fleet reflects our commitment to your journey — book now and experience the difference.
            </p>

            {/* Cars Grid */}
            <div className="grid grid-cols-3 gap-6 w-full mt-10">
              {cars.map((car, index) => (
                <div key={index} className="flex flex-col items-center cursor-pointer">

                  <div className="w-full h-36 rounded-3xl bg-gray-100 flex items-center justify-center px-4 py-6">
                    <img
                      src={car.img}
                      alt={car.name}
                      className="max-h-full object-contain"
                    />
                  </div>

                  <div className="mt-3 text-center">
                    <p className="font-semibold text-sm">{car.name}</p>

                    <div className="flex justify-center gap-4 mt-2 text-sm">
                      <div className="flex items-center gap-1">
                        <Luggage className="w-4 h-4 text-green-600" />
                        <span>{car.luggage}</span>
                      </div>

                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4 text-purple-600" />
                        <span>{car.users}</span>
                      </div>
                    </div>
                  </div>

                </div>
              ))}
            </div>

            {/* CTA */}
            <HashLink smooth to="/#booking-section">
              <button className="mt-12 bg-[#d2b76b] text-white px-12 py-3 rounded-md text-base font-medium hover:opacity-90 transition">
                Book Now
              </button>
            </HashLink>

          </div>
        </div>
      </section>
    </>
  );
};

export default FleetSection;
