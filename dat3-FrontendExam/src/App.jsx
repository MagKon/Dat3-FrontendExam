import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Overview from "./Overview";

function App() {
  document
    .getElementsByTagName("body")[0]
    .setAttribute(
      "data-bs-theme",
      sessionStorage.getItem("theme") || sessionStorage.setItem("theme", "dark")
    );
  return (
    <>
      <BrowserRouter>
        <Overview />
      </BrowserRouter>
    </>
  );
}

export default App;
