import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Components from "./Questions/Question 1/Components/Components";
import HigherOrder from "./Questions/Question 1/HigherOrder/HigherOrder";
import Example from "./Questions/Question 1/Routing/Example";
import JSXExample from "./Questions/Question 2/JSX/JSXExample";
import Callback from "./Questions/Question 2/Callback/Callback";
import FlexboxGrid from "./Questions/Question 2/FlexAndGrid/FlexboxGrid";
import Props from "./Questions/Question 3/Props/Props";
import Promises from "./Questions/Question 4/Promise/Promises";
import Error from "./Questions/Question 4/Error handling/Error";
import ConditionalRendering from "./Questions/Question 5/ConditionalRendering/ConditionalRendering";
import AsyncExample from "./Questions/Question 5/Async/AsyncExample";
import UseEffectsExample from "./Questions/Question 6/UseEffects/UseEffectsExample";
import Storage from "./Questions/Question 6/Storage/Storage";
import HandlingEvents from "./Questions/Question 7/HandlingEvents/HandlingEvents";
import Login from "./Questions/Question 7/Login/Login";
import ListAndKeys from "./Questions/Question 8/ListsAndKeys/ListsAndKeys";
import Bubbling from "./Questions/Question 8/Bubbling/Bubbling";
import FormControl from "./Questions/Question 9/FormControl/FormControl";
import Spread from "./Questions/Question 10/Spread/Spread";
import CustomExample from "./Questions/Question 10/Custom Hook/CustomExample";
import UseEffectsExample10 from "./Questions/Question 10/UseEffects/UseEffectsExample";
import AsyncExample11 from "./Questions/Question 11/Async/AsyncExample";
import LiftingState from "./Questions/Question 11/LiftingState/LiftingState";
import Promises12 from "./Questions/Question 12/Promise/Promises";
import ConditionalRendering12 from "./Questions/Question 12/ConditionalRendering";
import FlexboxGrid12 from "./Questions/Question 12/FlexAndGrid/FlexboxGrid";
import HigherOrder13 from "./Questions/Question 13/HigherOrder/HigherOrder";
import Props13 from "./Questions/Question 13/Props/Props";
import Login13 from "./Questions/Question 13/Login/Login";
import "./overview.css";
import Navbar from "./Navbar";

const routes = [
  { path: "/question1/Components", content: <Components /> },
  { path: "/question1/HigherOrder", content: <HigherOrder /> },
  { path: "/question1/Routing", content: <Example /> },
  {},
  { path: "/question2/JSXExample", content: <JSXExample /> },
  { path: "/question2/Callback", content: <Callback /> },
  { path: "/question2/FlexboxGrid", content: <FlexboxGrid /> },
  {},
  { path: "/question3/Props", content: <Props /> },
  {},
  { path: "/question4/Promises", content: <Promises /> },
  { path: "/question4/Error", content: <Error /> },
  {},
  {
    path: "/question5/ConditionalRendering",
    content: <ConditionalRendering />,
  },
  { path: "/question5/AsyncExample", content: <AsyncExample /> },
  {},
  { path: "/question6/UseEffectsExample", content: <UseEffectsExample /> },
  { path: "/question6/Storage", content: <Storage /> },
  {},
  { path: "/question7/HandlingEvents", content: <HandlingEvents /> },
  { path: "/question7/Login", content: <Login /> },
  {},
  { path: "/question8/Bubbling", content: <Bubbling /> },
  { path: "/question8/ListAndKeys", content: <ListAndKeys /> },
  {},
  { path: "/question9/FormControl", content: <FormControl /> },
  {},
  { path: "/question10/Spread", content: <Spread /> },
  { path: "/question10/CustomExample", content: <CustomExample /> },
  { path: "/question10/UseEffectsExample", content: <UseEffectsExample10 /> },
  {},
  { path: "/question11/AsyncExample", content: <AsyncExample11 /> },
  { path: "/question11/LiftingState", content: <LiftingState /> },
  {},
  { path: "/question12/Promises", content: <Promises12 /> },
  {
    path: "/question12/ConditionalRendering",
    content: <ConditionalRendering12 />,
  },
  { path: "/question12/FlexboxGrid", content: <FlexboxGrid12 /> },
  {},
  { path: "/question13/HigherOrder", content: <HigherOrder13 /> },
  { path: "/question13/Props", content: <Props13 /> },
  { path: "/question13/Login", content: <Login13 /> },
];

const Overview = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {/* <div className="examples"> */}
      <Navbar />
      {/* <h1>Example List</h1>
        <ul>
          {routes.map((route, index) => (
            <>
              <div key={index}>
                {route.path ? (
                  <li key={index}>
                    <Link to={route.path}>{route.path}</Link>
                  </li>
                ) : (
                  <>
                    <br></br>
                  </>
                )}
              </div>
            </>
          ))}
        </ul>
      </div> */}

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
