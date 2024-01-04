import React from "react";

const ListAndKeys = () => {
  const data = ["apple", "banana", "orange", "pineapple"];

  return (
    <>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li> // key is needed for React to keep track of the items
        ))}
      </ul>
      <ul>
        {data.map((item) => (
          <li>{item}</li> // key is required, but not needed to be unique. React will use the index as key if no key is provided
        ))}
      </ul>
    </>
  );
};

export default ListAndKeys;
