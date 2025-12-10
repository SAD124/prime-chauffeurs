import { Layers } from "lucide-react";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const DownloadApp = () => {
  return (
    <section className="w-full bg-[#1E1E1E] py-24 border border-t-[#D4C5A0]">
      {/* Main container */}
      <div className="w-[1215px] h-[343px] mx-auto flex items-center justify-between">

        {/* LEFT SIDE */}
        <div className="flex flex-col gap-8 w-[515.6px]">

          {/* ICON + HEADING */}
          <div className="flex items-center gap-4 w-[515.6px]">
            {/* Icon Box */}
            <div className="w-12 h-12 rounded-[14px] bg-[#D4C5A0] flex items-center justify-center">
  <Layers  className="text-black text-2xl" />
</div>


            {/* Heading */}
            <h2 className="text-[48px] font-bold text-[#D4C5A0] leading-10 ">
              Download the app
            </h2>
          </div>

          {/* BUTTONS */}
          <div className="flex items-center gap-4 w-[500px]">

            {/* Apple Store Button */}
            <button
              className="flex items-center justify-center gap-2 
              rounded-full border border-white px-3 py-3"
            >
              <FaApple className="w-5 h-5 text-[#D4C5A0]" />
              <span className="text-[16px] font-normal font-['Arial'] text-[#D4C5A0] leading-6">
                Apple Store
              </span>
            </button>

            {/* Google Play Button */}
            <button
              className="flex items-center justify-center gap-2 
              rounded-full border border-white px-3 py-3"
            >
              <FaGooglePlay className="w-5 h-5 text-[#D4C5A0]" />
              <span className="text-[16px] font-normal font-['Arial'] text-[#D4C5A0] leading-6">
                Google Play
              </span>
            </button>

          </div>
        </div>

        {/* RIGHT SIDE: QR + TEXT + IMAGE */}
        <div className="flex items-center gap-3">

          {/* QR + text */}
            <img
              src="/Images/scan.webp"
              className="w-[200px] h-[200px] object-contain"
              alt="QR Code"
            />

          {/* Main Phone Image */}
          <img
            src="/Images/mobile.webp"
            className="w-[319px] h-[343px] object-contain"
            alt="App Mobile Preview"
          />
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
