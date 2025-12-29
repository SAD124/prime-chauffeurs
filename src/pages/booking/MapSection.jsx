import { useState, } from "react";
import MapSectionMini from "./MapSectionMini";

const MapSection = () => {
  const [mapType, setMapType] = useState("map"); // "map" or "satellite"
  const [terrain, setTerrain] = useState(false);
  const [label, setLabel] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  // State to control temporary label visibility
  const [showTempLabel, setShowTempLabel] = useState(false);

  const toggleFullScreen = () => setIsFullScreen(!isFullScreen);

  // Handle Map / Satellite click
  const handleMapTypeChange = (type) => {
    setMapType(type);
    setShowTempLabel(true);

    // Hide label after 2 seconds
    setTimeout(() => setShowTempLabel(false), 2000);
  };

  return (
    <>
      <MapSectionMini/>
      <div
      className={`hidden md:block rounded-t-3xl relative w-full max-w-6xl mx-auto rounded-6 overflow-hidden shadow-[0px_10px_25px_rgba(30,41,57,0.5)]
 ${
        isFullScreen
          ? "fixed top-0 left-0 w-screen h-screen z-50"
          : "h-98"
      }`}
    >
      {/* MAP / SATELLITE IMAGE */}
      <img
        src={
          mapType === "map"
            ? "/Images/map.webp"
            : "/Images/satellite.webp"
        }
        alt={mapType === "map" ? "Map" : "Satellite"}
        className="w-full h-full object-cover "
      />

      {/* TOP LEFT: Map / Satellite Buttons */}
      <div className="absolute top-3 left-3 flex items-center bg-white shadow-md overflow-hidden rounded-md">
        {/* Map Button */}
        <button
          onClick={() => handleMapTypeChange("map")}
          className={`px-4 py-2 text-sm w-16 text-center ${
            mapType === "map" ? "font-semibold" : "font-normal"
          }`}
        >
          Map
        </button>

        {/* Vertical separator */}
        <div className="w-1 bg-gray-300 h-full"></div>

        {/* Satellite Button */}
        <button
          onClick={() => handleMapTypeChange("satellite")}
          className={`px-4 py-2 text-sm w-20 text-center border-l border-gray-300 ${
            mapType === "satellite" ? "font-semibold" : "font-normal"
          }`}
        >
          Satellite
        </button>
      </div>

      {/* Temporary Label */}
      {showTempLabel && mapType === "map" && (
        <div className="absolute top-12 left-3 bg-white p-2 shadow-md flex items-center gap-2 rounded">
          <input
            type="checkbox"
            id="terrain"
            checked={terrain}
            onChange={() => setTerrain(!terrain)}
          />
          <label htmlFor="terrain" className="text-sm font-semibold">
            Terrain
          </label>
        </div>
      )}

      {showTempLabel && mapType === "satellite" && (
        <div className="absolute top-12 left-20 bg-white p-2 shadow-md flex items-center gap-2 rounded">
          <input
            type="checkbox"
            id="label"
            checked={label}
            onChange={() => setLabel(!label)}
          />
          <label htmlFor="label" className="text-sm font-semibold px-1">
            Label
          </label>
        </div>
      )}

      {/* TOP RIGHT: Fullscreen button */}
      <button
        onClick={toggleFullScreen}
        className="absolute top-3 right-3 bg-white p-2 rounded shadow-md"
      >
        ⬜
      </button>
    </div>
    </>
  );
};

export default MapSection;
