import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Prototype from "./Javascript/1Prototypes/prototype";
import HigherOrder from "./Javascript/2HigherOrder/HigherOrder";
import Bubbling from "./Javascript/7Bubbling/Bubbling";
import Components from "./React/1Components/Components";
import JSXExample from "./React/2JSX/JSXExample";
import LiftingState from "./React/10LiftingState/LiftingState";
import Promises from "./Javascript/5Promise/Promises";
import UseEffectsExample from "./React/3UseEffects/UseEffectsExample";

const routes = [
  { path: "/javascript", content: "Javascript examples" },
  { path: "/javascript/prototype", content: <Prototype /> },
  { path: "/javascript/higherorder", content: <HigherOrder /> },
  { path: "/javascript/promises", content: <Promises /> },
  { path: "/javascript/bubbling", content: <Bubbling /> },
  { path: "/react", content: "React examples" },
  { path: "/react/components", content: <Components /> },
  { path: "/react/jsx", content: <JSXExample /> },
  { path: "/react/useeffects", content: <UseEffectsExample /> },
  { path: "/react/liftingstate", content: <LiftingState /> },
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
