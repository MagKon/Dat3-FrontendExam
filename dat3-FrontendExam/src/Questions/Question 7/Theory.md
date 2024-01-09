# What is the purpose of the window object in JavaScript?

The window object in JavaScript represents the browser window. It provides access to the browser's properties, methods, and the global scope for JavaScript code running in the window.

It is the interface containing the DOM document. It is useful as it gives a browser the possibility to manage multiple pages, by containing multiple “window” objects as tabs in the browser. It is also the global variable at the top of the tree.

# Event handling

## How are events handled in React compared to vanilla javascript?

In React, handling events is similar to how it is done in vanilla JavaScript, but with some differences. In vanilla JavaScript, it is common to directly modify the DOM to add event listeners and handle events. However, in React, event handling is typically done using a declarative approach.

In React, you define event handlers as methods within your functional components and attach them to specific elements using JSX. These event handlers are then automatically bound to the corresponding elements, and React takes care of managing event delegation and event listeners behind the scenes.

Overall, while the basic concepts of event handling are similar in React and vanilla JavaScript, React provides a more streamlined and declarative approach to handling events. React uses "SyntheticEvents" as a wrapper for event handling based on what browser is loaded.

"Syntactical sugar"

## Show examples of how to handle form submit events, and how to handle input change events.

#