import React from "react";
import Navabar from "../Navbar/Navabar";
import Home from "../Home/Home";
import About from "../About/About";
import Community from "../Community/Community";
import Footer from "../Footer/Footer";
import PlayGround from "../PlayGround/PlayGround";
const EntryPoint = () => {
  return (
    <div
      style={{
        backgroundColor: "#292929",
        width: "w-screen",
        height: "h-screen",
      }}
      id="home"
      className="flex flex-col items-center"
    >
      <div className="blur-[500px] w-1/2 h-1/2 z-100 absolute right-1/2 bottom-1/2 sepia bg-white rounded-xl"></div>

      <Navabar />
      <Home />
      <div className="blur-[800px] w-1/2 h-1/2 z-100 absolute left-2/3 bottom-2/3 sepia bg-slate-400 rounded-xl"></div>
      <About />
      <PlayGround />
      <Community />
      {/* <div className="blur-[500px] w-1/2 h-1/2 z-100 absolute left-1/2 top-1/2 bg-white rounded-xl"></div> */}
      <Footer />
    </div>
  );
};

export default EntryPoint;
