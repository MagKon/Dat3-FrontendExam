import React, { useEffect, useState } from "react";
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
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./overview.css";

function Navbar() {
  const routes = [
    { path: "/question1/HigherOrder", content: <HigherOrder /> },
    { path: "/question1/Components", content: <Components /> },
    { path: "/question1/Routing", content: <Example /> },
    { path: "/question2/Callback", content: <Callback /> },
    { path: "/question2/JSXExample", content: <JSXExample /> },
    { path: "/question2/FlexboxGrid", content: <FlexboxGrid /> },
    { path: "/question3/Props", content: <Props /> },
    { path: "/question4/Promises", content: <Promises /> },
    { path: "/question4/Error", content: <Error /> },
    {
      path: "/question5/ConditionalRendering",
      content: <ConditionalRendering />,
    },
    { path: "/question5/AsyncExample", content: <AsyncExample /> },
    { path: "/question6/Storage", content: <Storage /> },
    { path: "/question6/UseEffectsExample", content: <UseEffectsExample /> },
    { path: "/question7/HandlingEvents", content: <HandlingEvents /> },
    { path: "/question7/Login", content: <Login /> },
    { path: "/question8/Bubbling", content: <Bubbling /> },
    { path: "/question8/ListAndKeys", content: <ListAndKeys /> },
    { path: "/question9/FormControl", content: <FormControl /> },
    { path: "/question10/Spread", content: <Spread /> },
    { path: "/question10/CustomExample", content: <CustomExample /> },
    { path: "/question10/UseEffectsExample", content: <UseEffectsExample10 /> },
    { path: "/question11/AsyncExample", content: <AsyncExample11 /> },
    { path: "/question11/LiftingState", content: <LiftingState /> },
    { path: "/question12/Promises", content: <Promises12 /> },
    {
      path: "/question12/ConditionalRendering",
      content: <ConditionalRendering12 />,
    },
    { path: "/question12/FlexboxGrid", content: <FlexboxGrid12 /> },
    { path: "/question13/HigherOrder", content: <HigherOrder13 /> },
    { path: "/question13/Props", content: <Props13 /> },
    { path: "/question13/Login", content: <Login13 /> },
  ];

  const routes1to3 = routes.slice(0, 7);
  const routes4to6 = routes.slice(7, 13);
  const routes7to9 = routes.slice(13, 18);
  const routes10to13 = routes.slice(18, 29);

  const routesToFrom = [routes1to3, routes4to6, routes7to9, routes10to13];

  function cleanName(path) {
    let str = path.slice(1); // Remove the leading slash
    let words = str.split("/"); // Split the string into words
    words[0] = words[0].replace(/(\d+)/g, " $1"); // Insert a space before the number
    words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1); // Capitalize the first word
    let result = words.join(" "); // Join the words back together with spaces
    return result;
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary custom-navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {routesToFrom.map((routes, index) => (
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
              key={index}
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Questions {index * 3 + 1} to{" "}
                    {index != 3 && index * 3 + 3 ? index * 3 + 3 : 13}
                  </a>
                  <ul className="dropdown-menu">
                    {routes.map((route, index) => (
                      <li key={index}>
                        <Link to={route.path} className="dropdown-item">
                          {cleanName(route.path)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
