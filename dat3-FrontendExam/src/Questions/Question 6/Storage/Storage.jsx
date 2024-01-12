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
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <input
              type="text"
              className="form-control"
              onChange={(e) => {
                setText(e.target.value);
              }}
            ></input>
            <div className="mt-3">
              <div>
                <button className="btn btn-primary" onClick={handleLocalClick}>
                  Save to local
                </button>
              </div>
              <button
                className="btn btn-primary mt-2"
                onClick={handleSessionClick}
              >
                Save to session
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Storage;
