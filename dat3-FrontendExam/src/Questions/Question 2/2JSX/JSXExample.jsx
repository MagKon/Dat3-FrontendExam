import React, { useState } from "react";

const JSXExample = () => {
  const [showMessage, setShowMessage] = useState(false);
  const name = "John Doe";
  const age = 25;

  const handleClick = () => {
    setShowMessage(!showMessage);
  };

  return (
    <div>
      <h1>Hello, JSX!</h1>
      <p>This is an example of JSX usage.</p>
      <p>
        {name} is {age} years old.
      </p>
      <button onClick={handleClick}>Toggle Message</button>
      {showMessage && <p>Button clicked!</p>}
    </div>
  );
};

export default JSXExample;
