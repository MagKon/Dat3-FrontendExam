import React from "react";

const Child1 = ({ value, onChange }) => {
  return (
    <div>
      <h2>Child 1</h2>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
};

export default Child1;
