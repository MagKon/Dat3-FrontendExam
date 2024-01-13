import React, { useState } from "react";
import Routing from "./Routing";

function Example() {
  return (
    <>
      <Routing>
        {[
          { path: "home", content: <h1>Home</h1> },
          { path: "about", content: <About /> },
          { path: "contact", content: <h1>Contact</h1> },
        ]}
      </Routing>
    </>
  );
}

export default Example;

function About() {
  return (
    <>
      <h1>About</h1>
      <p>About</p>
    </>
  );
}
