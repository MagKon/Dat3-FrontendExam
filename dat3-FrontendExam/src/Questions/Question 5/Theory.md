# What is the difference between synchronous and asynchronous programming and how does async and await fit into this?

[Mozilla Documentation](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing)

Synchronous code executes sequentially, blocking further execution until the current operation finishes. Asynchronous code allows multiple operations to execute concurrently, and the program doesn't wait for each operation to finish.
async/await provides a more readable and structured way to write asynchronous code in JavaScript by allowing the use of await within async functions.
Essentially, it exists to allow other actions, while something is happening. Say you want to call an API, but at the same time the user should be allowed to write in a textbox. This wouldn’t be possible synchronously because the browser would be occupied fetching data. This may be fine if the API is responding quickly, but that is not a guarantee.

# Conditional Rendering

## Describe how conditional rendering is achieved in React.

Conditional rendering in React refers to using a statement, like an if statement or a conditional operator, to modify the JSX. It can be used as the return of a component:

## Provide an example of using the ternary operator for conditional rendering.

if (x != null)
return x;
else
return “I am null”;

Or it can be written directly in the JSX:

{ x != null ? x : “I am null”}

{ x != null && x}

# Describe conceptually the typical flow of using JWTs for user authentication in a React application.
