# What are higher-order functions in JavaScript? Give an example.

Higher order functions are, in simple terms, functions that inputs/outputs a function. A typical example is the map function in JS, which takes a function as an argument. In the map example, the callback function is used to define how the map should handle the array.

[Medium Articel](https://medium.com/@kevinlai76/javascript-callbacks-and-higher-order-functions-3e5a81b4ec9d)

# Components

## What is a React component?

A component is, usually, a function which is used to create modular HTML, often with the JSX XML syntax. This is called “functional components”. A simple component might just be a function that returns a header (h1).

## Explain the benefits of using components compared to how you would build a web application in vanilla javascript.

The benefit of components is that they allow for making a part which could potentially be reused infinitely, even in different applications. Often in vanilla JS, an HTML element is repeated if it is used more than once. This creates more than one point of truth, making it complex to change or edit if something is needed.

Components in React will also often take properties, shorted to props. These allow components to change or move depending on the input. A common, standard prop is children. The children prop allows a component to work as a “wrapper” containing a body defined by the caller.

# Routing

## Explain what React Router is and its purpose in a React application.

## Show an example of how routing works in React
