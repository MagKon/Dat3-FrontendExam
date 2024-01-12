# What is the spread operator in JavaScript and how does it differ from the rest operator?

The spread operator and the rest operator are both syntactical features in JavaScript that involve the use of three dots (...). However, they have different purposes and behaviors.

The spread operator is used to expand an iterable (such as an array or a string) into individual elements. It allows you to easily copy or combine arrays, pass multiple arguments to a function, or create new arrays or objects. It essentially "spreads" the elements of an iterable.

On the other hand, the rest operator is used to gather multiple elements into an array. It allows you to represent an indefinite number of arguments as an array. It is typically used in function parameters to handle variable-length argument lists.

In summary, the spread operator is used to expand an iterable into individual elements, while the rest operator is used for gathering and handling variable-length arguments.

# React hooks

## What are React Hooks? Provide examples of at least two built-in hooks.

## Explain the difference between useState and useEffect.

## Show example of how you handle errors in React.

# Describe conceptually what Same Origin Policy and CORS is, and how we avoid getting CORS errors when fetching data from an API.

The Same Origin Policy is a security measure implemented by web browsers to prevent scripts from different origins (domains, protocols, or ports) from accessing each other's data. It ensures that resources (such as cookies, local storage, and DOM) are only accessible by scripts from the same origin.

Cross-Origin Resource Sharing (CORS) is a mechanism that relaxes the Same Origin Policy by allowing servers to specify which origins are allowed to access their resources. It enables web applications to make cross-origin requests and receive responses, thus avoiding CORS errors.

To avoid CORS errors when fetching data from an API, the server needs to include the appropriate CORS headers in its response. These headers specify the allowed origins, methods, and headers for cross-origin requests. The most common CORS header is "Access-Control-Allow-Origin", which specifies the allowed origins.

By configuring the server to include the necessary CORS headers, the browser will allow the client-side code to access the API's resources without triggering CORS errors.
