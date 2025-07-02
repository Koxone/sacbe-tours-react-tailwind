import React from "react";

function Header() {
  return (
    <header className="grid w-full grid-cols-[auto_1fr_auto] items-center justify-between p-5">
      <button className="max-w-[48px] cursor-pointer rounded-full">
        <img
          className="rounded-full object-contain"
          src="/assets/logo.png"
          alt=""
        />
      </button>
      <h1 className="text-center text-3xl font-bold">Cancun Tours</h1>
      <button className="btn-pulse w-[200px] cursor-pointer rounded-4xl bg-[#297da9] px-4 py-2 text-xl text-white transition-all duration-300 ease-in-out hover:bg-[#2965a9]">
        Book Now
      </button>
    </header>
  );
}

export default Header;
