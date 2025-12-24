import { Layers } from "lucide-react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import DownloadAppMini from "./DownloadAppMini";

const DownloadApp = () => {
  return (
    <>
      <DownloadAppMini />

      <section id="app" className="w-full bg-[#1E1E1E] py-24 border border-t-[#D4C5A0] hidden md:block scroll-mt-[60px]">
        {/* Main container */}
        <div className="w-[1215px] h-[343px] mx-auto flex items-center justify-between">

          {/* LEFT SIDE */}
          <div className="flex flex-col gap-8 w-[515.6px]">

            {/* ICON + HEADING */}
            <div className="flex items-center gap-4 w-[515.6px]">

              {/* Download Icon (Tilt on Hover) */}
              <div
                className="w-12 h-12 rounded-[14px] bg-[#D4C5A0]
                flex items-center justify-center
                transition-transform duration-300
                hover:rotate-[-8deg] hover:scale-110"
              >
                <Layers className="text-black w-6 h-6" />
              </div>

              {/* Heading */}
              <h2 className="text-[48px] font-bold text-[#D4C5A0] leading-10">
                Download the app
              </h2>
            </div>

            {/* STORE BUTTONS */}
            <div className="flex items-center gap-4 w-[500px]">

              {/* Apple Store */}
              <button
                className="flex items-center justify-center gap-2
                rounded-full border border-white px-4 py-3
                transition-transform duration-300
                hover:scale-110 "
              >
                <FaApple className="w-5 h-5 text-[#D4C5A0]" />
                <span className="text-[16px] font-normal font-['Arial'] text-[#D4C5A0] leading-6">
                  Apple Store
                </span>
              </button>

              {/* Google Play */}
              <button
                className="flex items-center justify-center gap-2
                rounded-full border border-white px-4 py-3
                transition-transform duration-300
                hover:scale-110"
              >
                <FaGooglePlay className="w-5 h-5 text-[#D4C5A0]" />
                <span className="text-[16px] font-normal font-['Arial'] text-[#D4C5A0] leading-6">
                  Google Play
                </span>
              </button>

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-6">

            {/* QR Image (Tilt on Hover) */}
            <img
              src="/Images/scan.webp"
              alt="QR Code"
              className="w-[200px] h-[200px] object-contain
              transition-transform duration-300
              hover:rotate-[6deg] hover:scale-105"
            />

            {/* Mobile Image (Opposite Tilt) */}
            <img
              src="/Images/mobile.webp"
              alt="App Mobile Preview"
              className="w-[319px] h-[343px] object-contain
              transition-transform duration-300
              hover:rotate-[-5deg] hover:scale-105"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default DownloadApp;
