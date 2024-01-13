# What is the difference between synchronous and asynchronous programming and how does async and await fit into this?

[Mozilla Documentation](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing)

Synchronous code executes sequentially, blocking further execution until the current operation finishes. Asynchronous code allows multiple operations to execute concurrently, and the program doesn't wait for each operation to finish.
async/await provides a more readable and structured way to write asynchronous code in JavaScript by allowing the use of await within async functions.
Essentially, it exists to allow other actions, while something is happening. Say you want to call an API, but at the same time the user should be allowed to write in a textbox. This wouldn’t be possible synchronously because the browser would be occupied fetching data. This may be fine if the API is responding quickly, but that is not a guarantee.

async/await is a syntax feature in JavaScript that makes working with Promises more straightforward. Instead of using .then() and .catch() to handle resolved and rejected Promises, you can use the await keyword to pause execution of the function until the Promise resolves, and the async keyword to indicate that a function should return a Promise.

# Conditional Rendering

## Describe how conditional rendering is achieved in React.

Conditional rendering in React refers to using a statement, like an if statement or a conditional operator, to modify the JSX. It can be used as the return of a component.

Conditional rendering in React works the same way conditions work in JavaScript. Use JavaScript operators like if or the conditional (ternary) operator to create elements representing the current state, and let React update the UI to match them.

## Provide an example of using the ternary operator for conditional rendering.

if (x != null)
return x;
else
return “I am null”;

Or it can be written directly in the JSX:

{ x != null ? x : “I am null”}

{ x != null && x}

```JS
function MyComponent({ data }) {
  return (
    <div>
      {data ? data : "No data available"}
    </div>
  );
}
```

# Describe conceptually the typical flow of using JWTs for user authentication in a React application.

The typical flow of using JWTs for user authentication in a React application involves the following steps:

1. User Registration: The user provides their credentials (e.g., username and password) to the server. The server verifies the credentials and generates a JWT token.

2. Token Storage: The server sends the JWT token back to the client, and the client stores the token securely (e.g., in local storage or a cookie).

3. Protected Routes: The client includes the JWT token in the Authorization header of each subsequent request to protected routes.

4. Token Verification: The server receives the request and verifies the JWT token's authenticity and integrity. If the token is valid, the server processes the request; otherwise, it returns an error.

5. User Logout: When the user logs out, the client removes the JWT token from storage, effectively invalidating it.

This flow ensures that only authenticated users with valid JWT tokens can access protected routes in the React application.

For example: DND-Builder - MyProfile
