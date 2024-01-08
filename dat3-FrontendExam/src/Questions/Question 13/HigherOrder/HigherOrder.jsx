import React from "react";

const HigherOrder13 = () => {
  let arr = ["Peter", "Magnus", "Yusuf", "Sidsel"];

  // Higher order function that takes an array and a callback function
  function manipulateArray(arr, callback) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      newArr.push(callback(arr[i]));
    }
    return newArr;
  }

  // Higher order function that returns a callback function
  function getManupulatedArray(arr, callback) {
    return manipulateArray(arr, callback);
  }

  return (
    <>
      <div>
        <h2>Higher Order and callbacks</h2>
        <p>Add a "y" to each name</p>
        <p>{manipulateArray(arr, (name) => name + "y")}</p>
        <p>Revers each name</p>
        <p>
          {manipulateArray(arr, (name) => name.split("").reverse().join(""))}
        </p>
        <p>Get manipulated array</p>
        <button
          onClick={() =>
            console.log(getManupulatedArray(arr, (name) => name + "y"))
          }
        ></button>
      </div>
    </>
  );
};

export default HigherOrder13;
