import React, { useState } from "react";

function ConditionalRendering() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <div className="container">
        <div className="text-center mt-5">
          {isLoggedIn ? <h1>Welcome, User!</h1> : <h1>Please log in.</h1>}
        </div>
        <div className="text-center mt-3">
          <button
            className="btn btn-primary"
            onClick={() => setIsLoggedIn(!isLoggedIn)}
          >
            Log {isLoggedIn ? "out" : "in"}
          </button>
        </div>
      </div>
    </>
  );
}

export default ConditionalRendering;
