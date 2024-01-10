import React, { useState, useEffect } from "react";

const UseEffectsExample10 = () => {
  /**
   * useEffects run twice, possibly because of the way the routes are set up.
   * When React runs in dev mode, it runs twice.
   */
  const [pageLoaded, setPageLoaded] = useState(false);
  const [message, setMessage] = useState("I'm a message");
  const [useEffectCalled, setUseEffectCalled] = useState(0);

  useEffect(() => {
    console.log("useEffect 1 called");
    let timeout = setTimeout(() => {
      setPageLoaded(true);
    }, 3000);

    return () => {
      console.log("cleanup");
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    console.log("useEffect 2 called");
    setUseEffectCalled(useEffectCalled + 1);
    return () => {
      console.log("cleanup");
    };
  }, [message]);

  return (
    <div>
      <h1>UseEffectsExample</h1>
      <p>Page loaded: {pageLoaded.toString()}</p>
      <p>{message}</p>
      <button onClick={() => setMessage("I'm a new message")}>
        Change message
      </button>
      <span> {useEffectCalled} </span>
    </div>
  );
};

export default UseEffectsExample10;
