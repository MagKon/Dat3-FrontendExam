import React, { useState } from "react";

function Controlled() {
  const [value, setValue] = useState({ name: "", description: "" });
  const [display, setDisplay] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setDisplay(value.name + " " + value.description);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <p>Submitted text: {display}</p>
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
                  onChange={(e) => setValue({ ...value, name: e.target.value })}
                />
              </div>
              <div className="mb-3">
                <textarea
                  name="description"
                  className="form-control"
                  placeholder="Description"
                  onChange={(e) =>
                    setValue({ ...value, description: e.target.value })
                  }
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

export default Controlled;
