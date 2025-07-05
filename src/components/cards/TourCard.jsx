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
      if (window.BokunWidgets && window.BokunWidgets.reload) {
        window.BokunWidgets.reload();
      }
    }
  }, []);

  return (
    <div className="h-[500px] w-full min-w-[200px] max-w-5xl overflow-hidden">
      <div
        ref={widgetRef}
        className="bokunWidget h-fit max-w-[300px]"
        data-src="https://widgets.bokun.io/online-sales/613a4d6d-a284-4b72-9bf4-4376927bb45f/product-list/92929"
      ></div>
    </div>
  );
}

export default TourCard;
