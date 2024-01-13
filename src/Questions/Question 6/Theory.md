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

# Routing

## Explain how navigation works in React, and the difference from how it's done in a multipage application.

React Router works by changing in the browsers history stack programmatically. The history stack is how the browser figures out where a user has been, and where they currently are.

Example from React Router:

For example, consider the user:

    clicks a link to /dashboard
    clicks a link to /accounts
    clicks a link to /customers/123
    clicks the back button
    clicks a link to /dashboard

The history stack will change as follows where bold entries denote the current URL:

    /dashboard
    /dashboard, /accounts
    /dashboard, /accounts, /customers/123
    /dashboard, /accounts, /customers/123
    /dashboard, /accounts, /dashboard

React Router then listens to the URL and searches for a child for that specific path and applies the content, if found.
This is all handled on the client. In no part is a server or API asked, unless specifically designed so.

On the contrary, a classic MPA sends the documents from the server. Whenever the user changes location, the server is asked to send a document for that location.

The biggest difference between the two, is the fact that the documents in an SPA is typically handled client side, while they are handled and compiled server side in an MPA.

Points from Copilot:

Single Page Application (SPA): You could elaborate a bit more on what a SPA is. In a SPA, after the initial page load, all navigation is handled internally by the JavaScript that's already on the page. This leads to a much smoother user experience.

Multi-Page Application (MPA): Similarly, you could explain a bit more about MPAs. In a MPA, each time a user navigates to a new page, the browser sends a request to the server and the server responds with a new HTML page.

Performance: You could mention that one of the reasons SPAs can be faster than MPAs is because they don't require a full page reload on navigation. However, SPAs can also be slower to initially load because they often have larger bundle sizes.

SEO: You might also want to touch on the topic of Search Engine Optimization (SEO). Traditional MPAs are generally more SEO-friendly than SPAs, although techniques like server-side rendering can help improve the SEO of SPAs.

## Show an example of how navigation can be implemented in React

Either the routing in the project, or question 1's routing example.
