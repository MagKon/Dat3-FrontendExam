import React from "react";
import Text from "./Text";

function Paragraph({ textArray }) {
  return (
    <div>
      <p>I am a paragraph</p>
      {textArray.map((text, index) => (
        <Text key={index} text={text} />
      ))}
    </div>
  );
}

export default Paragraph;
