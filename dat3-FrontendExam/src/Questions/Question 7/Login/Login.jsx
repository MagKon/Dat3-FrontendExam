import React, { useState } from "react";
import facade from "./api.mjs";
import "bootstrap/dist/css/bootstrap.min.css";

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
      <div className="container">
        <h2>Login</h2>
        <p>{token}</p>
        <div className="row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="col">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="col">
            <button className="btn btn-primary" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <h2>Register</h2>
        <div className="row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="col">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="col">
            <button className="btn btn-primary" onClick={handleRegister}>
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
