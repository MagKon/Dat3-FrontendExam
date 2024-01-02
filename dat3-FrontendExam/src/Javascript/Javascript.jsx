import React from "react";
import { Outlet } from "react-router-dom";

function Javascript() {
  return (
    <>
      <div>
        <h1>Javascript examples</h1>
      </div>
      <Outlet />
    </>
  );
}

export default Javascript;
