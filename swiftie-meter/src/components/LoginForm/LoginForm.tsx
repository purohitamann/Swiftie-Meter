import React, { useState } from "react";
import axios from "axios";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/authenticate", {
        email,
        password,
      });

      if (response.data.success) {
        console.log("Login successful");
        // Handle successful login here (e.g., redirect to another page)
      } else {
        console.log("Invalid email or password");
        // Handle failed login here (e.g., show an error message)
      }
    } catch (error) {
      console.error("Error during login:", error);
      // Handle error during login here (e.g., show an error message)
    }
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <label className="block">
        <span className="text-gray-700">Email:</span>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          required
        />
      </label>
      <label className="block">
        <span className="text-gray-700">Password:</span>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          required
        />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
