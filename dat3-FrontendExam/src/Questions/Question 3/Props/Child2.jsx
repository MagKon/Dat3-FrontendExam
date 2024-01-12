import React from "react";

const Child2 = ({ value }) => {
  return (
    <div className="container">
      <h2 className="mb-4">Child 2</h2>
      <p className="mb-4">Value from Child 1: {value}</p>
    </div>
  );
};

export default Child2;
