import React, { useState } from "react";
import facade from "./api.mjs";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const handleLogin = async () => {
    const result = await facade.login(username, password);
    setToken(result);
    console.log(result);
  };

  const handleRegister = async () => {
    const result = await facade.register(username, username, password);
    setToken(result);
    console.log(result);
  };

  return (
    <>
      <h2>Login</h2>
      <p>{token}</p>
      <div>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
      <h2>Register</h2>
      <div>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleRegister}>Register</button>
      </div>
    </>
  );
}
