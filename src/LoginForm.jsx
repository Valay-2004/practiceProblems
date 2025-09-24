// src/LoginForm.js
import React, { useState } from "react";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // prevent default form submission
    console.log("Username:", username);
    console.log("Password:", password);
    // here we need to send the creds to the server
    // as server is not here
    // we are simply printing them to console
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2 className="font-mono text-4xl">Login</h2>
        <div className="flex items-center justify-center-safe">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label htmlFor="password" className="">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default LoginForm;
