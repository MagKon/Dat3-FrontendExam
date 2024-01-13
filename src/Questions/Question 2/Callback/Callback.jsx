import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Callback = () => {
  let arr = ["Peter", "Magnus", "Yusuf", "Sidsel"];

  function manipulateArray(arr, callback) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      newArr.push(callback(arr[i]));
    }
    return newArr;
  }

  function getManupulatedArray(arr, callback) {
    return manipulateArray(arr, callback);
  }

  return (
    <>
      <div className="container">
        <h2 className="mt-4">Higher Order and callbacks</h2>
        <p>Add a "y" to each name</p>
        <p>{manipulateArray(arr, (name) => name + "y")}</p>
        <p>Reverse each name</p>
        <p>
          {manipulateArray(arr, (name) => name.split("").reverse().join(""))}
        </p>
        <p>Get manipulated array</p>
        <button
          className="btn btn-primary"
          onClick={() =>
            console.log(getManupulatedArray(arr, (name) => name + "y"))
          }
        >
          Get Manipulated Array
        </button>
      </div>
    </>
  );
};

export default Callback;
