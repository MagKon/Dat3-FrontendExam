import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched asynchronously");
    }, 2000);
  });
};

const AsyncExample = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDataAsync = async () => {
      console.log("I will be called before data is fetched");
      const data = await fetchData();
      console.log("I wont be called until data is fetched");
      setData(data);
    };

    fetchDataAsync();

    fetchData().then((data) => {
      console.log("I wont be called until data is fetched");
      setData(data);
    });
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>Async Example</h2>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>{data}</p>
            <input
              type="text"
              className="form-control"
              placeholder="Type here while fetching"
            />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col">
            <input
              type="button"
              className="btn btn-primary"
              value="Reset"
              onClick={() => window.location.reload()}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AsyncExample;
