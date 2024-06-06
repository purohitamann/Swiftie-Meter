import React, { useState } from "react";

function SignupForm() {
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");

  //   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //     event.preventDefault();

  //     // if (email !== confirmEmail) {
  //     //   alert("Emails do not match");
  //     //   return;
  //     // }

  //     const response = await fetch("http://localhost:3000/login", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ email, password }),
  //     });

  //     if (response.ok) {
  //       alert("Signup successful");
  //       console.log("Signup successful");
  //     } else {
  //       alert("Signup failed");
  //       console.log("Signup failed");
  //     }
  //   };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Server response", data);
      alert("Signup successful");
    } catch (error) {
      console.error("An error occurred:", error);
      alert("Signup failed: " + error);
    }
  };
  return (
    <div className="flex z-3 flex-col items-center  w-[1200px] z-10 mt-32 p-16 h-[536px] bg-white rounded-md text-black">
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            className="border-2 border-gray-300 p-2 m-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Confirm Email:
          <input
            className="border-2 border-gray-300 p-2 m-2"
            type="email"
            value={confirmEmail}
            onChange={(e) => setConfirmEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            className="border-2 border-gray-300 p-2 m-2"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignupForm;
