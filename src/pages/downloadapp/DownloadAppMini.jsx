import { Layers } from "lucide-react";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const DownloadAppMini = () => {
  return (
    <section
      id="appmini"
      className="w-full bg-[#1E1E1E] border-t border-[#D4C5A0] py-12 sm:py-16 lg:hidden scroll-mt-12"
    >
      <div className="max-w-4xl mx-auto px-4 flex flex-col gap-12">

        {/* ICON + HEADING */}
        <div className="flex items-center gap-3">
          <div
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#D4C5A0]
                       flex items-center justify-center
                       transition-transform duration-300 hover:rotate-[-8deg] hover:scale-110"
          >
            <Layers className="text-black w-6 h-6 sm:w-7 sm:h-7" />
          </div>

          <h2 className="text-[#D4C5A0] font-bold text-[30px] sm:text-[34px] leading-tight">
            Download the app
          </h2>
        </div>

        {/* STORE BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <button
            className="flex items-center justify-center gap-2 w-full sm:w-auto
                       px-4 py-3 rounded-full border border-white
                       transition-transform duration-300 hover:scale-105"
          >
            <FaApple className="text-[#D4C5A0] w-5 h-5" />
            <span className="text-white text-[14px] sm:text-[15px]">Apple Store</span>
          </button>

          <button
            className="flex items-center justify-center gap-2 w-full sm:w-auto
                       px-4 py-3 rounded-full border border-white
                       transition-transform duration-300 hover:scale-105"
          >
            <FaGooglePlay className="text-[#D4C5A0] w-5 h-5" />
            <span className="text-white text-[14px] sm:text-[15px]">Google Play</span>
          </button>
        </div>

        {/* QR CODE IMAGE */}
        <div className="flex justify-center mt-6">
          <img
            src="/Images/scan.webp"
            alt="QR Code"
            className="w-44 sm:w-52 object-contain
                       transition-transform duration-300 hover:rotate-4 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default DownloadAppMini;
