import React from "react";

const Navabar = () => {
  return (
    <div
      style={{
        backgroundColor: "#292929",
      }}
      className="flex rounded-lg justify-between items-center m-12 p-8  z-50 fixed -top-10  w-[1200px] "
    >
      <span className="flex items-center ">
        <h1 className="text-5xl  font-monofett  text-white animate-pulse">
          Swiftie Meter
        </h1>
      </span>
      <ul className="flex items-center font-medium font-sometype-mono  text-white">
        <a href="/" className="mx-2">
          HOME
        </a>
        <a href="#about" className="mx-2">
          ABOUT
        </a>
        <li className="mx-4 text-black bg-white rounded-lg p-2 hover:text-white hover:bg-black hover:bg-opacity-50 transition-all duration-150">
          <a href="/Play">PLAY!</a>
        </li>
        <a href="#community" className="mx-2">
          <a href="/leaderboard">COMMUNITY</a>
        </a>
        <a href="/signup" className="mx-2">
          SIGNUP
        </a>
      </ul>
    </div>
  );
};

export default Navabar;
