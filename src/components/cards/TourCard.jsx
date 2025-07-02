import React from "react";
import { Link } from "react-router-dom";

function TourCard() {
  return (
    <div
      className="transform min-w-[250px] cursor-pointer overflow-hidden rounded-lg max-w-[400px] shadow-md transition duration-300 hover:scale-105"
      tabIndex="0"
    >
      <Link to="/tour/tour-tulum-2025" className="block">
        <div
          className="h-60 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://imgcdn.bokun.tools/04cd8429-7048-446d-96ed-c6f0d2f955ef.jpeg?w=600&h=600&mode=crop')",
          }}
        ></div>
        <div className="bg-white p-4">
          <h3 className="mb-2 text-xl font-semibold">Tour Tulum 2025</h3>
          <p className="mb-4 text-sm text-gray-700">
            Private Tulum tour with cenote and option to visit a typical town:
            history, landscapes and crystal clear waters in the Mexican
            Caribbean.
          </p>
          <button className="rounded-full bg-[#009db0] px-4 py-2 font-semibold text-white transition hover:bg-[#007a8a]">
            Book this tour
          </button>
        </div>
      </Link>
    </div>
  );
}

export default TourCard;
