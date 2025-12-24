    import { Luggage, Users } from "lucide-react";
    import { Link } from "react-router-dom";

    const FleetSectionMini = () => {
    const cars = [
        { img: "/Images/fleet1.png", name: "Mercedes-Benz S-class", luggage: 4, users: 8 },
        { img: "/Images/fleet2.png", name: "Mercedes-Benz E-class", luggage: 3, users: 4 },
        { img: "/Images/fleet3.png", name: "Mercedes V-class 200", luggage: 5, users: 7 },
        { img: "/Images/fleet4.png", name: "Mercedes-Benz V 300", luggage: 6, users: 8 },
        { img: "/Images/fleet5.png", name: "Mercedes V-class 250", luggage: 4, users: 7 },
        { img: "/Images/fleet6.png", name: "Mercedes Sprinter", luggage: 7, users: 15 },
        { img: "/Images/fleet7.png", name: "Audi Q7", luggage: 4, users: 6 },
        { img: "/Images/fleet8.png", name: "Audi Q8", luggage: 4, users: 4 },
        { img: "/Images/fleet9.png", name: "Audi A6", luggage: 3, users: 4 },
    ];

    return (
        <section id="rides" className="w-full flex justify-center px-4 sm:px-6 py-18 sm:py-20 lg:hidden scroll-mt-[50px]">
        <div className="w-full flex flex-col items-center gap-3">
            {/* RIGHT SIDE CONTENT ON TOP */}
            <div className="flex flex-col items-center text-center w-full">
                <div className="max-w-[400px] sm:max-w-[550px]">
            <h2 className="w-full font-roboto font-bold text-[28px] sm:text-[32px] leading-[120%] text-black">
                Explore Our Fleet
            </h2>
            <p className="mt-4 text-[14px] sm:text-[16px] leading-[150%] font-roboto text-gray-600 w-full">
                Suzellbus offers a wide range of vehicles to suit your needs - elegant, sophisticated and reliable. 
                Whether you need a premium sedan, a comfortable SUV, or an economical car, we've got you covered.
                Our diverse fleet reflects our commitment to your journey - book now and experience the difference.
            </p>
    </div>
            {/* GRID OF CARS */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-5 my-6 w-full max-w-full">
    {cars.map((car, index) => (
        <div key={index} className="w-full cursor-pointer overflow-hidden transform transition-all duration-300 hover:scale-105">
        <div className="w-full h-[170px] rounded-[20px] overflow-hidden bg-gray-100 p-3 flex items-center justify-center">
            <img src={car.img} alt={car.name} className="w-full h-full object-contain" />
        </div>
        <div className="mt-2 px-2 flex flex-col items-center mb-1">
            <span className="font-semibold mb-1 text-xs sm:text-sm text-center">{car.name}</span>
            <div className="flex gap-3 mt-1 items-center">
            <div className="flex items-center gap-1">
                <Luggage className="h-4 w-4 stroke-green-600" strokeWidth={3} />
                <span className="text-xs sm:text-sm">{car.luggage}x</span>
            </div>
            <div className="flex items-center gap-1">
                <Users className="h-3 w-3 stroke-purple-600" strokeWidth={3} />
                <span className="text-xs sm:text-sm">{car.users}x</span>
            </div>
            </div>
        </div>
        </div>
    ))}
    </div>


            {/* BOOK NOW BUTTON */}
            <Link to="/book" className="py-2 sm:py-3 px-9 sm:px-12 mt-6 bg-[#d2b76b] text-white font-roboto text-[15px] rounded-md">
                Book Now
            </Link>
            </div>

            {/* LEFT IMAGE BELOW */}
    <div className="w-full mt-6 sm:w-[90%] h-[400px] sm:h-[700px] rounded-[30px] overflow-hidden">
  <img src="/Images/fleet.webp" alt="Fleet Cars" className="w-full h-full object-contain" />
</div>


        </div>
        </section>
    );
    };

    export default FleetSectionMini;
