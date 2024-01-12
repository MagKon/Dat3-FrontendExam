import React, { useState } from "react";

function HandlingEvents() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic here
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    setIsSubmitted(false);
  };

  return (
    <>
      <div className="container">
        <h1>HandlingEvents</h1>
        <p>Username: {formData.username}</p>
        <p>Password: {formData.password}</p>
        <p>Is submitted: {isSubmitted.toString()}</p>
      </div>
      <form className="container" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username:
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default HandlingEvents;
