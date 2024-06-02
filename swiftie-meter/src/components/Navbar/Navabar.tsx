import React from "react";

const Navabar = () => {
  return (
    <div className="flex justify-between items-center m-12 p-2 border-b-2 border-gray-100 bg-gray-600 sepia font-mono text-white fixed -top-10 left-0 right-0 z-10">
      <h1 className="text-2xl font-bold">Swiftie Meter</h1>
      <ul className="flex items-center">
        <li className="mx-2">Home</li>
        <li className="mx-2">About</li>
        <li className="mx-2">Play</li>
        <li className="mx-2">Leaderboard</li>
      </ul>
    </div>
  );
};

export default Navabar;
