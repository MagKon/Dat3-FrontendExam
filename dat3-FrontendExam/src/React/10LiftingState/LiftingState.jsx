import React, { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

const LiftingState = () => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <Child1 value={value} onChange={handleChange} />
      <Child2 value={value} />
    </div>
  );
};

export default LiftingState;
