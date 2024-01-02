import React, { useState } from "react";

const Bubbling = () => {
  const [output, setOutput] = useState("");

  const handleContainerClick = (event) => {
    console.log("Container Clicked: " + event.currentTarget.tagName);
    setOutput("Container Clicked: " + event.currentTarget.tagName);
  };

  /*
  It is worth mentioning that the onClick event is not a React specific event handler, but a DOM event handler.
  In vanilla JS, the event handler would often be written as:
    document.querySelector("div").addEventListener("click", (event) => {
        console.log("Container Clicked: " + event.currentTarget.tagName);
    });

    The event handler is attached to the div element, and the event will bubble up to the div element, even if the button or paragraph is clicked.

    This is exactly what happens in React, when we attach the event handler to the div element.

    For these examples, it is written as React code, to make it a bit more modular.
  */

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
