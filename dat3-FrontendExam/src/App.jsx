import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Overview from "./Overview";

function App() {
  return (
    <>
      <BrowserRouter>
        <Overview />
      </BrowserRouter>
    </>
  );
}

export default App;
