# What is the difference between localStorage and sessionStorage in JavaScript?

Both are web storage objects. localStorage stores data with no expiration date, while sessionStorage stores data for a single session (data is lost when the browser/tab is closed).

# useEffect

A component mounts when it’s added to the screen.

A component updates when it receives new props or state, usually in response to an interaction.

A component unmounts when it’s removed from the screen.

## What is the purpose of the useEffect hook?

The useEffect hook in React's functional components serves the purpose of handling side effects. Side effects in React are actions that occur outside the scope of the component, such as fetching data from an API, subscribing to events, changing the DOM directly, or setting up timers.

## Explain the need for the dependencies array in the useEffect hook.

The useEffect hook allows you to perform these side effects in a functional component. It takes two arguments: a function containing the side effect logic and an optional dependency array (deps).
