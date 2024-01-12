import React, { useState } from "react";

function Uncontrolled() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const username = event.target.elements.username.value;
    const description = event.target.elements.description.value;
    // Process the form data...
    console.log("Submitted value (uncontrolled):", { username, description });
    document.getElementById("submitted").innerHTML =
      username + " " + description;
    // Further processing or sending data to backend...
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <p>
              Submitted text: <span id="submitted"></span>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  placeholder="Username"
                />
              </div>
              <div className="mb-3">
                <textarea
                  name="description"
                  className="form-control"
                  placeholder="Description"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Uncontrolled;
