import React from "react";
import Navabar from "../Navbar/Navabar";
import Home from "../Home/Home";
import About from "../About/About";
import Community from "../Community/Community";
import Footer from "../Footer/Footer";
import PlayGround from "../PlayGround/PlayGround";
import SignupForm from "../SignupForm/SignupForm";
const EntryPoint = () => {
  return (
    <div
      style={{
        backgroundColor: "#292929",
        width: "w-screen",
        height: "h-screen",
        // overflow: "hidden",
      }}
      id="home"
      className="flex flex-col items-center"
    >
      <Navabar />

      <Home />
      {/* <SignupForm /> */}
      <About />

      {/* <PlayGround /> */}

      {/* <Community /> */}
      {/* <div className="blur-[500px] w-1/2 h-1/2 z-100 absolute left-1/2 top-1/2 bg-white rounded-xl"></div> */}
      <Footer />
    </div>
  );
};

export default EntryPoint;
