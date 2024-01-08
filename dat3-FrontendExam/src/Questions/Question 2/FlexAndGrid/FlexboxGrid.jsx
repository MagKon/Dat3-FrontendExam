import React from "react";
import "./FnG.css";

const FlexboxGrid = () => {
  return (
    <>
      {/* This examples shows a grid with responsive items */}
      <div className="container">
        <div className="grid">
          <div className="item">Item 1</div>
          <div className="item">Item 2</div>
          <div className="item">Item 3</div>
          <div className="item">Item 4</div>
          <div className="item">Item 4</div>
          <div className="item">Item 4</div>
        </div>
      </div>
      {/* This examples shows a grid with a responsive navbar */}
      <div className="container">
        <nav className="navbar">
          <ul className="nav-list">
            <li className="nav-item">Home</li>
            <li className="nav-item">About</li>
            <li className="nav-item">Services</li>
            <li className="nav-item">Contact</li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default FlexboxGrid;
