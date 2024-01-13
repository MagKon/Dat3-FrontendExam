import React from "react";

const Child1 = ({ value, onChange }) => {
  return (
    <div className="container">
      <h2>Child 1</h2>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default Child1;
