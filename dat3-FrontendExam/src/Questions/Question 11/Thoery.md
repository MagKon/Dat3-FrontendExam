# What is the difference between synchronous and asynchronous programming and how does async and await fit into this?

[Mozilla Documentation](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing)

Synchronous code executes sequentially, blocking further execution until the current operation finishes. Asynchronous code allows multiple operations to execute concurrently, and the program doesn't wait for each operation to finish.
async/await provides a more readable and structured way to write asynchronous code in JavaScript by allowing the use of await within async functions.
Essentially, it exists to allow other actions, while something is happening. Say you want to call an API, but at the same time the user should be allowed to write in a textbox. This wouldn’t be possible synchronously because the browser would be occupied fetching data. This may be fine if the API is responding quickly, but that is not a guarantee.

# Lifting state

## What is the purpose of lifting state up in React?

The meaning of “lifting” a state is to move it from a child component to its parent component (or further) so that it can be shared between components. This way, a state can be synchronized between components. Say there exists 2 navigation bars, when one is shifted, the other one should shift with it. If there was a state in each bar, they wouldn’t be synchronized, but by lifting the state, a common state can be made. The state is of course passed to the components as a prop.

One downside is the complexity which is added to the parent component. Another is the risk of "prop drilling", where a prop has to pass through many layers before they reach their target. This creates complexity on every layer, and produces an error vector, meaning the prop needs to be well validated before being drilled down.

## Show how you would lift state up in a React application.

# Show a few examples of responsive design.

To me:

While examples will be in other files, it could be useful to mention some key techniques used in responsive design, such as fluid grid layouts, flexible images and media queries.
