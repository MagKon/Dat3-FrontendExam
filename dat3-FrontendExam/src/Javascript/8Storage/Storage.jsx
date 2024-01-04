import React, { useEffect, useState } from "react";

function Storage() {
  const [text, setText] = useState("");

  useEffect(() => {
    if (localStorage.getItem("text")) {
      setText(localStorage.getItem("text"));
    } else if (sessionStorage.getItem("text")) {
      setText(sessionStorage.getItem("text"));
    }
  }, []);

  function handleLocalClick() {
    localStorage.setItem("text", text);
  }

  function handleSessionClick() {
    sessionStorage.setItem("text", text);
  }

  return (
    <>
      <div>
        <input
          type="text"
          onChange={(e) => {
            setText(e.target.value);
          }}
        ></input>
        <div>
          <div>
            <button onClick={handleLocalClick}>Save to local</button>
          </div>
          <button onClick={handleSessionClick}>Save to session</button>
        </div>
      </div>
    </>
  );
}

export default Storage;
