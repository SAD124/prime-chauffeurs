import { Layers } from "lucide-react";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const DownloadAppMini = () => {
  return (
    <section
      className="w-full bg-[#1E1E1E] border-t border-[#D4C5A0] 
      py-12 sm:py-16 lg:hidden"
    >
      <div className="w-full max-w-[720px] mx-auto px-4 flex flex-col gap-15">

        {/* TOP LEFT CONTENT */}
        <div className="flex flex-col gap-10 items-start">

          {/* ICON + HEADING */}
          <div className="flex items-center gap-3">
            <div
              className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-[#D4C5A0]
              flex items-center justify-center
              transition-transform duration-300
              hover:rotate-[-8deg] hover:scale-110"
            >
              <Layers className="text-black w-5 h-5 sm:w-6 sm:h-6" />
            </div>

            <h2
              className="text-[#D4C5A0] font-bold 
              text-[28px] sm:text-[34px] leading-tight"
            >
              Download the app
            </h2>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 w-[400px] mx-auto sm:mx-0">

            {/* Apple */}
            <button
              className="flex items-center justify-center gap-2 
              rounded-full border border-white 
              px-4 py-3 w-full sm:w-auto
              transition-transform duration-300
              hover:scale-110"
            >
              <FaApple className="text-[#D4C5A0] w-5 h-5" />
              <span className="text-white text-[14px] sm:text-[15px]">
                Apple Store
              </span>
            </button>

            {/* Google */}
            <button
              className="flex items-center justify-center gap-2 
              rounded-full border border-white 
              px-4 py-3 w-full sm:w-auto
              transition-transform duration-300
              hover:scale-110"
            >
              <FaGooglePlay className="text-[#D4C5A0] w-5 h-5" />
              <span className="text-white text-[14px] sm:text-[15px]">
                Google Play
              </span>
            </button>
          </div>
        </div>

        {/* QR IMAGE */}
        <div className="flex justify-center">
          <img
            src="/Images/scan.webp"
            alt="QR Code"
            className="w-[170px] sm:w-[200px] object-contain
            transition-transform duration-300
            hover:rotate-[6deg] hover:scale-105"
          />
        </div>

      </div>
    </section>
  );
};

export default DownloadAppMini;
