# What is the spread operator in JavaScript and how does it differ from the rest operator?

# React hooks

## What are React Hooks? Provide examples of at least two built-in hooks.

## Explain the difference between useState and useEffect.

## Show example of how you handle errors in React.

# Describe conceptually what Same Origin Policy and CORS is, and how we avoid getting CORS errors when fetching data from an API.

The Same Origin Policy is a security measure implemented by web browsers to prevent scripts from different origins (domains, protocols, or ports) from accessing each other's data. It ensures that resources (such as cookies, local storage, and DOM) are only accessible by scripts from the same origin.

Cross-Origin Resource Sharing (CORS) is a mechanism that relaxes the Same Origin Policy by allowing servers to specify which origins are allowed to access their resources. It enables web applications to make cross-origin requests and receive responses, thus avoiding CORS errors.

To avoid CORS errors when fetching data from an API, the server needs to include the appropriate CORS headers in its response. These headers specify the allowed origins, methods, and headers for cross-origin requests. The most common CORS header is "Access-Control-Allow-Origin", which specifies the allowed origins.

By configuring the server to include the necessary CORS headers, the browser will allow the client-side code to access the API's resources without triggering CORS errors.
