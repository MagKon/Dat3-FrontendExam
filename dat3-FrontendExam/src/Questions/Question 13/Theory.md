# What are higher-order functions in JavaScript? Give an example.

Higher order functions are, in simple terms, functions that inputs/outputs a function. A typical example is the map function in JS, which takes a function as an argument. In the map example, the callback function is used to define how the map should handle the array.

[Medium Articel](https://medium.com/@kevinlai76/javascript-callbacks-and-higher-order-functions-3e5a81b4ec9d)

# Props

## Describe the purpose of props in React.

A component allows for modular rendering, and the properties, props, allows a component to change its values or HTML based on the functions or values sent from the parent. Props helps the component be more generic as well, since the props can be anything it wants to be, for example, HTML.

## Explain the role of state in a React component.

States are instead meant to be a fluid value, which is often used as a storage for something that causes a rerender when changed. States are a powerful tool for DOM manipulation as it allows React to quickly rerender the page.

# Describe and show how we log in a user in React with JWT.

Call your login source, in this case a Javalin App, which then attempts to login the user in the DB.
If the user is found with name and password, a JWT is encoded. The JWT is then send back to the frontend.
The frontend then keeps the token, which it can then use for future calls as it can be used to verify that the user is logged in.
