import React from "react";

function MainBanner() {
  return (
    <div
      className="flex h-[500px] w-full items-center justify-center bg-cover bg-fixed bg-center"
      style={{ backgroundImage: `url('https://picsum.photos/2000')` }}
    >
      <h1 className="text-[120px] font-bold text-white">Cancun Tours</h1>
    </div>
  );
}

export default MainBanner;
