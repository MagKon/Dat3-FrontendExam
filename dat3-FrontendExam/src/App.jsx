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
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/javascript" element={<Javascript />}>
            <Route path="prototype" element={<Prototype />} />
          </Route>
          <Route path="*" element={<h1>404: Page not found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
