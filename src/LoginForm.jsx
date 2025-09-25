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
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-purple-200">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md:"
        >
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </form>
        
      </div>
    </>
  );
};

export default LoginForm;
