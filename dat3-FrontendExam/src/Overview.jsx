import React from "react";
import { Link, Route, Routes } from "react-router-dom";

const routes = [
  { path: "/example1", content: "Example 1 content" },
  { path: "/example2", content: "Example 2 content" },
  { path: "/example3", content: "Example 3 content" },
  { path: "/javascript/prototype", content: "JavaScript Prototype content" },
];

const Overview = () => {
  return (
    <div>
      <h1>Example List</h1>
      <ul>
        {routes.map((route, index) => (
          <li key={index}>
            <Link to={route.path}>{route.path}</Link>
          </li>
        ))}
      </ul>

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
  );
};

export default Overview;
