import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Spread() {
  // Spread operator
  const numbers = [1, 2, 3];
  const numbers2 = [4, 5, 6];
  const newArray = [...numbers, ...numbers2]; // Creates a new array with the same values as numbers

  // Rest operator
  function sum(...args) {
    return args.reduce((total, num) => total + num, 0);
  }

  console.log(sum(1, 2, 3)); // Outputs: 6

  // Destructuring
  const person = {
    firstName: "Peter",
    lastName: "Pan",
    age: 20,
  };

  const { firstName, lastName } = person;
  console.log(firstName, lastName); // Outputs: Peter Pan

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>Spread operator</h2>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>Example array: {numbers}</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p> Using spread to create the same array in a new constant </p>
            <p>newArray: {newArray}</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p> Using rest to sum an array </p>
            <p>sum(1, 2, 3): {sum(1, 2, 3)}</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>
              {" "}
              Using destructuring to get first name and last name from a person
              object{" "}
            </p>
            <p>
              Destructuring:{firstName} {lastName}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Spread;
