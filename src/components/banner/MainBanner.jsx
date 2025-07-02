import React from "react";

function MainBanner() {
  return (
    <div
      className="flex h-[200px] w-full items-center justify-center bg-cover bg-fixed bg-center md:h-[300px] lg:h-[400px]"
      style={{ backgroundImage: `url('https://picsum.photos/2000')` }}
    >
      <h1 className="w-full text-center text-[48px] font-bold text-white sm:text-start md:pb-20 md:pl-14 md:text-[80px] lg:pb-30 lg:pl-20 lg:text-[100px] xl:text-[120px]">
        Cancun Tours
      </h1>
    </div>
  );
}

export default MainBanner;
