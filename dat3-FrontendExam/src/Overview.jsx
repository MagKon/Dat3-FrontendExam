import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Prototype from "./Javascript/1Prototypes/prototype";
import HigherOrder from "./Javascript/2HigherOrder/HigherOrder";

const routes = [
  { path: "/javascript/prototype", content: <Prototype /> },
  { path: "/javascript/higherorder", content: <HigherOrder /> },
  { path: "/example1", content: "Example 1 content" },
  { path: "/example2", content: "Example 2 content" },
  { path: "/example3", content: "Example 3 content" },
];

const Overview = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ position: "absolute", top: 0, left: 0 }}>
        <h1>Example List</h1>
        <ul>
          {routes.map((route, index) => (
            <li key={index}>
              <Link to={route.path}>{route.path}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div style={{ alignSelf: "center" }}>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<div>{route.content}</div>}
            />
          ))}
        </Routes>
      </div>
    </div>
  );
};

export default Overview;
