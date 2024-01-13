import React, { useState } from "react";

const JSXExample = () => {
  const [showMessage, setShowMessage] = useState(false);
  const name = "John Doe";
  const age = 25;

  const handleClick = () => {
    setShowMessage(!showMessage);
  };

  return (
    <div className="container">
      <h1 className="display-4">Hello, JSX!</h1>
      <p className="lead">This is an example of JSX usage.</p>
      <p>
        {name} is {age} years old.
      </p>
      <button className="btn btn-primary" onClick={handleClick}>
        Toggle Message
      </button>
      {showMessage && <p>Button clicked!</p>}
    </div>
  );
};

export default JSXExample;
