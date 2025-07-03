import React, { useEffect, useRef } from "react";

function ToursVideoCard() {
  const videoRef = useRef(null);

  useEffect(() => {
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);

    // Si NO es móvil, reproducir automáticamente
    if (!isMobile && videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <div className="hidden rounded-lg border-4 bg-white md:block">
      <video
        ref={videoRef}
        src="/assets/pruebaBanner.mp4"
        muted
        loop
        // quitamos autoplay aquí
        className="hidden h-full max-h-[240px] w-full max-w-[500px] cursor-pointer overflow-hidden rounded-lg border-2 border-black object-cover md:block"
      />
    </div>
  );
}

export default ToursVideoCard;
