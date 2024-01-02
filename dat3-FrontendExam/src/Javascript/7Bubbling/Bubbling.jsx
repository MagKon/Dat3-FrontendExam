import React, { useState } from "react";

const Bubbling = () => {
  const [output, setOutput] = useState("");

  const handleContainerClick = (event) => {
    console.log("Container Clicked: " + event.currentTarget.tagName);
    setOutput("Container Clicked: " + event.currentTarget.tagName);
  };

  return (
    <div onClick={handleContainerClick}>
      <div onClick={handleContainerClick}>
        <button onClick={handleContainerClick}>Click me!</button>
        <div>
          <p>Click this paragraph!</p>
        </div>
        <p>{output}</p>
      </div>
    </div>
  );
};

export default Bubbling;
