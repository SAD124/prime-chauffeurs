import { Link } from "react-router-dom";
import { Luggage, Users, X } from "lucide-react";
import FleetSectionMini from "./FleetSectionMini";

const FleetSection = () => {
  return (
    <>
      <FleetSectionMini/>
      <section id="rides" className="w-full lg:flex justify-center hidden md:block py-18 scroll-mt-[50px]">
      <div className="w-full lg:rounded-2xl lg:flex sm:flex-row justify-center items-center gap-5">
        {/* LEFT IMAGE */}
        <div className="w-[600px] h-[600px] rounded-[40px] overflow-hidden">
          <img
            src="/Images/fleet.webp"
            alt="Fleet Cars"
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="flex flex-col items-center text-center max-w-[700px]">
          <div className="w-[600px]">
            {/* HEADING */}
          <h2 className="w-full font-roboto font-bold text-[35px] leading-[120%] text-black">
            Explore Our Fleet
          </h2>

          {/* PARAGRAPH */}
          <p className="mt-6 text-[16px] leading-[150%] font-roboto text-gray-600">
            Suzellbus offers a wide range of vehicles to suit your needs -
            elegant, sophisticated and reliable. Wether you need a premium
            sadan, a comfortable SUV, or an economical car, we've got you
            covered. Our diverse fleet reflects our commitment to your journey -
            book now and experience the difference.
          </p>
          </div>

          {/* GRID OF 9 CAR CARDS */}
          <div className="grid grid-cols-3 gap-3 my-5 w-full">
            {[
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
              {
                img: "/Images/fleet7.png",
                name: "Audi Q7",
                luggage: 4,
                users: 6,
              },
              {
                img: "/Images/fleet8.png",
                name: "Audi Q8",
                luggage: 4,
                users: 4,
              },
              {
                img: "/Images/fleet9.png",
                name: "Audi A6",
                luggage: 3,
                users: 4,
              },
            ].map((car, index) => (
              <div
                key={index}
                className="cursor-pointer overflow-hidden transform transition-all duration-300 hover:scale-105"
              >
                {/* IMAGE CARD */}
                <div className="w-full h-[150px] lg:rounded-[30px] overflow-hidden bg-gray-100 p-4 flex items-center justify-center">
                  <img
                    src={car.img}
                    alt={car.name}
                    className="w-[120px] h-[55px] object-cover"
                  />
                </div>

                {/* LABEL + ICONS BELOW IMAGE */}
                <div className="mt-3 px-2 flex flex-col items-center mb-2">
                  <span className="font-semibold mb-1 text-sm text-center">
                    {car.name}
                  </span>
                  <div className="flex gap-3 mt-1 items-center">
                    <div className="flex items-center gap-1">
                      <Luggage
                        className="h-4 w-4 stroke-green-600 "
                        strokeWidth={3}
                      />
                      <span className="text-sm">{car.luggage}x</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users
                        className="h-3 w-3 stroke-purple-600"
                        strokeWidth={3}
                      />
                      <span className="text-sm">{car.users}x</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

{/* BOOK NOW BUTTON */}
<Link
  to="/book"
  className="w-[174px] h-[46px] mt-10 bg-[#d2b76b] text-white font-roboto text-[16px] px-10 py-3 rounded-md
             flex items-center justify-center"
>
  Book Now
</Link>

        </div>
      </div>
    </section>
    </>
  );
};

export default FleetSection;
