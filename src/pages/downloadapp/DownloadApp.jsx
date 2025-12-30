import { Layers } from "lucide-react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import DownloadAppMini from "./DownloadAppMini";

const DownloadApp = () => {
  return (
    <>
      {/* MOBILE VERSION */}
      <DownloadAppMini />

      {/* DESKTOP VERSION */}
      <section
        id="app"
        className="hidden md:flex w-full bg-[#1E1E1E] py-20 border-t border-[#D4C5A0] scroll-mt-16 justify-center"
      >
        <div className="max-w-7xl flex justify-between items-center gap-36 px-4">

          {/* LEFT SIDE: Icon + Heading + Store Buttons */}
          <div className="flex flex-col gap-12 max-w-[510px]">

            {/* Icon + Heading */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-12 bg-[#D4C5A0] rounded-[14px] flex items-center justify-center
                              transition-transform duration-300 hover:rotate-[-8deg] hover:scale-110">
                <Layers className="w-6 h-6 text-black" />
              </div>

              <h2 className="text-[#D4C5A0] font-bold text-[48px] leading-none whitespace-nowrap">
                Download the app
              </h2>
            </div>

            {/* Store Buttons */}
            <div className="flex gap-4">
              <button className="flex items-center gap-2 px-4 py-3 rounded-full border border-white
                                 transition-transform duration-300 hover:scale-110">
                <FaApple className="w-5 h-5 text-[#D4C5A0]" />
                <span className="text-[#D4C5A0] font-normal text-[16px]">Apple Store</span>
              </button>

              <button className="flex items-center gap-2 px-4 py-3 rounded-full border border-white
                                 transition-transform duration-300 hover:scale-110">
                <FaGooglePlay className="w-5 h-5 text-[#D4C5A0]" />
                <span className="text-[#D4C5A0] font-normal text-[16px]">Google Play</span>
              </button>
            </div>
          </div>

          {/* RIGHT SIDE: QR + Mobile Image */}
          <div className="flex items-center">
            <img
              src="/Images/scan.webp"
              alt="QR Code"
              className="w-auto h-[192px] object-contain transition-transform duration-300 hover:rotate-6 hover:scale-105"
            />

            <img
              src="/Images/mobile.webp"
              alt="App Mobile Preview"
              className="w-auto h-[336px] object-contain transition-transform duration-300 hover:rotate-[-5deg] hover:scale-105"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default DownloadApp;
