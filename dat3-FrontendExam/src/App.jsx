import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Javascript from "./Javascript/Javascript";
import Prototype from "./Javascript/1Prototypes/prototype";
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
