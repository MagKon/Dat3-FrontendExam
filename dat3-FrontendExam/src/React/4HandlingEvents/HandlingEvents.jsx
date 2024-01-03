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
      <div>
        <h1>HandlingEvents</h1>
        <p>Username: {formData.username}</p>
        <p>Password: {formData.password}</p>
        <p>Is submitted: {isSubmitted.toString()}</p>
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default HandlingEvents;
