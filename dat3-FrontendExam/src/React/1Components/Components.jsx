import React from "react";
import Paragraph from "./Paragraph";

function Components() {
  const textArray = [
    "This is the first text",
    "This is the second text",
    "This is the third text",
  ];
  return (
    <div>
      <Paragraph textArray={textArray} />
    </div>
  );
}

export default Components;
