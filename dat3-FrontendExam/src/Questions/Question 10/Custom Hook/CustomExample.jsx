import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomHook from "./CustomHook";

function CustomExample() {
  const text = CustomHook();

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>Custom Hook</h2>
            <h4>Copy some text and paste it here</h4>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>Example text: {text}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomExample;
