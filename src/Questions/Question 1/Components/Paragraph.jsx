import React from "react";
import Text from "./Text";
import "bootstrap/dist/css/bootstrap.min.css";

function Paragraph({ textArray }) {
  return (
    <div className="container">
      <p className="lead">I am a paragraph</p>
      <div className="row">
        {textArray.map((text, index) => (
          <Text key={index} text={text} />
        ))}
      </div>
    </div>
  );
}

export default Paragraph;
