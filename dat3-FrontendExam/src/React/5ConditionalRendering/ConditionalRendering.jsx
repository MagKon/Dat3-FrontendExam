import React, { useState } from "react";

function ConditionalRendering() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <div>
        {isLoggedIn ? <h1>Welcome, User!</h1> : <h1>Please log in.</h1>}
      </div>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        Log {isLoggedIn ? "out" : "in"}
      </button>
    </>
  );
}

export default ConditionalRendering;
