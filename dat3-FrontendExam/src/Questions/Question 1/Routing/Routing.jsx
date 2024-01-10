import React, { useEffect, useState } from "react";
import PageComponent from "./PageComponent";

function Routing({ children }) {
  const [currentRoute, setCurrentRoute] = useState({
    path: "home",
    content: (
      <>
        <h1>Home</h1>
      </>
    ),
  });
  const [Search, setSearch] = useState("");

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  function handleSearchSubmit(e) {
    e.preventDefault();
    window.history.pushState({}, undefined, "/" + Search);
    console.log(routes);
    const route = routes.children.find((entry) => {
      if (entry.path === Search) return entry;
    });
    console.log(route);
    setCurrentRoute(route);
  }

  const routes = {
    children,
  };

  return (
    <>
      <input type="text" onChange={handleSearch}></input>
      <button onClick={handleSearchSubmit}>Search</button>
      <PageComponent content={currentRoute.content}></PageComponent>
    </>
  );
}

export default Routing;
