import React from "react";

const Navabar = () => {
  return (
    <div
      style={{ backgroundColor: "#292929" }}
      className="flex rounded-lg justify-between items-center m-12 p-8 fixed -top-10  z-10 w-[1200px] "
    >
      <span className="flex items-center">
        <h1 className="text-5xl  font-monofett  text-white">Swiftie Meter</h1>
      </span>
      <ul className="flex items-center font-medium font-sometype-mono text-white">
        <li className="mx-2">HOME</li>
        <li className="mx-2">ABOUT</li>
        <li className="mx-4 text-black bg-white rounded-lg p-2 hover:text-white hover:bg-black hover:bg-opacity-50 transition-all duration-150">
          PLAY!
        </li>
        <li className="mx-2">COMMUNITY</li>
      </ul>
    </div>
  );
};

export default Navabar;
