"use client";

import React, { useState } from "react";

const MapSectionMini = () => {
  const [mapType, setMapType] = useState("map");
  const [terrain, setTerrain] = useState(false);
  const [label, setLabel] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [showTempLabel, setShowTempLabel] = useState(false);

  const toggleFullScreen = () => setIsFullScreen(!isFullScreen);
  const handleMapTypeChange = (type) => {
    setMapType(type);
    setShowTempLabel(true);
    setTimeout(() => setShowTempLabel(false), 2000);
  };

  return (
    <div className={`md:hidden rounded-t-3xl relative w-full max-w-[1046px] mx-auto overflow-hidden shadow-[0px_10px_25px_rgba(30,41,57,0.5)] ${isFullScreen ? "fixed top-0 left-0 w-screen h-screen z-50" : "h-[365px]"}`}>
      
      <img src={mapType === "map" ? "/Images/map.webp" : "/Images/satellite.webp"} alt={mapType} className="w-full h-full object-cover" />

      <div className="absolute top-3 left-3 flex items-center bg-white shadow-md overflow-hidden rounded-md">
        <button onClick={() => handleMapTypeChange("map")} className={`px-4 py-2 text-sm w-[70px] text-center ${mapType === "map" ? "font-semibold" : "font-normal"}`}>Map</button>
        <div className="w-[3px] bg-gray-300 h-full"></div>
        <button onClick={() => handleMapTypeChange("satellite")} className={`px-4 py-2 text-sm w-[90px] text-center border-l border-gray-300 ${mapType === "satellite" ? "font-semibold" : "font-normal"}`}>Satellite</button>
      </div>

      {showTempLabel && mapType === "map" && (
        <div className="absolute top-12 left-3 bg-white p-2 shadow-md flex items-center gap-2 rounded">
          <input type="checkbox" checked={terrain} onChange={() => setTerrain(!terrain)} />
          <label className="text-sm font-semibold">Terrain</label>
        </div>
      )}

      {showTempLabel && mapType === "satellite" && (
        <div className="absolute top-12 left-20 bg-white p-2 shadow-md flex items-center gap-2 rounded">
          <input type="checkbox" checked={label} onChange={() => setLabel(!label)} />
          <label className="text-sm font-semibold px-1">Label</label>
        </div>
      )}

      <button onClick={toggleFullScreen} className="absolute top-3 right-3 bg-white p-2 rounded shadow-md">⬜</button>
    </div>
  );
};

export default MapSectionMini;
