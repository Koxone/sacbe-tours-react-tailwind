import React, { useEffect, useRef } from "react";

function TourCard() {
  const widgetRef = useRef(null);

  useEffect(() => {
    if (!document.getElementById("bokun-widget-loader")) {
      const script = document.createElement("script");
      script.src =
        "https://widgets.bokun.io/assets/javascripts/apps/build/BokunWidgetsLoader.js?bookingChannelUUID=613a4d6d-a284-4b72-9bf4-4376927bb45f";
      script.async = true;
      script.id = "bokun-widget-loader";
      document.body.appendChild(script);
    } else {
      // Si el script ya está cargado, reescanea los widgets
      if (window.BokunWidgets && window.BokunWidgets.reload) {
        window.BokunWidgets.reload();
      }
    }
  }, []);

  return (
    <div
      className="max-w-[400px] min-w-[250px] transform cursor-pointer overflow-hidden rounded-lg shadow-md transition duration-300 hover:scale-105"
      tabIndex="0"
    >
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
          history, landscapes and crystal clear waters in the Mexican Caribbean.
        </p>
        {/* <div
          ref={widgetRef}
          className="bokunWidget"
          data-src="https://widgets.bokun.io/online-sales/613a4d6d-a284-4b72-9bf4-4376927bb45f/experience/1048914"
        ></div> */}
        <noscript>Please enable javascript in your browser to book</noscript>
      </div>
    </div>
  );
}

export default TourCard;
