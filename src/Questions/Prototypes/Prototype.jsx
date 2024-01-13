import React from "react";

function Prototype() {
  // Prototype is a property on all functions in JavaScript

  // This is a constructor function
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }

  // This is a prototype function
  // It is added to the prototype property of the Person function
  Person.prototype.greet = function () {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  };

  // This is an instance of the Person function
  // It has access to the prototype function
  const john = new Person("John", 30);
  console.log(john.greet());

  // This is a date object. It is a built-in constructor function
  const date = new Date();

  // This is a modified date object. It has the same prototype as the date object
  const modifiedDate = new Date();

  // This is a prototype function that overrides the original function
  modifiedDate.getDay = function () {
    return "Today is not a day";
  };

  return (
    <div>
      <h2>Prototype</h2>
      <p>{john.greet()}</p>
      <p>Today: {date.getDay()}</p>
      <p>Modified: {modifiedDate.getDay()}</p>
    </div>
  );
}

export default Prototype;
