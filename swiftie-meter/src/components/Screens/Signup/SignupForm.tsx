import React from "react";
import EntryPoint from "../../EntryPoint/EntryPoint";
import Navabar from "../../Navbar/Navabar";

const SignupForm = () => {
  return (
    <div
      style={{
        backgroundColor: "#292929",
        width: "w-screen",
        height: "h-screen",
        overflow: "hidden",
      }}
    >
      {/* <EntryPoint /> */}
      <Navabar />
      <h1>Signup</h1>
    </div>
  );
};

export default SignupForm;
