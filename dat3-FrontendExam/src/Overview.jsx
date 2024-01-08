import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Prototype from "./Javascript/1Prototypes/prototype";
import HigherOrder from "./Questions/Question 1/2HigherOrder/HigherOrder";
import Bubbling from "./Questions/Question 8/7Bubbling/Bubbling";
import Components from "./Questions/Question 1/1Components/Components";
import JSXExample from "./Questions/Question 2/2JSX/JSXExample";
import LiftingState from "./Questions/Question 11/10LiftingState/LiftingState";
import Promises from "./Questions/Question 4/5Promise/Promises";
import UseEffectsExample from "./Questions/Question 6/3UseEffects/UseEffectsExample";
import HandlingEvents from "./Questions/Question 7/4HandlingEvents/HandlingEvents";
import ConditionalRendering from "./Questions/Question 5/5ConditionalRendering/ConditionalRendering";
import Storage from "./Questions/Question 6/8Storage/Storage";
import ListAndKeys from "./Questions/Question 8/6ListsAndKeys/ListsAndKeys";

const routes = [
  { path: "/javascript", content: "Javascript examples" },
  { path: "/javascript/prototype", content: <Prototype /> },
  { path: "/javascript/higherorder", content: <HigherOrder /> },
  { path: "/javascript/promises", content: <Promises /> },
  { path: "/javascript/bubbling", content: <Bubbling /> },
  { path: "/javascript/storage", content: <Storage /> },
  { path: "/react", content: "React examples" },
  { path: "/react/components", content: <Components /> },
  { path: "/react/jsx", content: <JSXExample /> },
  { path: "/react/useeffects", content: <UseEffectsExample /> },
  { path: "/react/handlingevents", content: <HandlingEvents /> },
  { path: "/react/conditionalrendering", content: <ConditionalRendering /> },
  { path: "/react/listsandkeys", content: <ListAndKeys /> },
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
