import React from "react";
import Navabar from "../Navbar/Navabar";
import Home from "../Home/Home";
import About from "../About/About";
import Community from "../Community/Community";
import Footer from "../Footer/Footer";
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
      <Navabar />
      <Home />
      <About />
      <Community />
      <Footer />
    </div>
  );
};

export default EntryPoint;
