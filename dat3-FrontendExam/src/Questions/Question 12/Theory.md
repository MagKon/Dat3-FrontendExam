# Explain the concept of promises in JavaScript. How do they differ from callbacks?

[Mozilla Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)

Chaining. Value before it is known. Passing a callback to the return, rather than the function. Tracking completion of a function. Callback in promise always returns a promise to avoid floating/starting the next function too early.
Promises solve a fundamental flaw with the callback pyramid of doom, by catching all errors, even thrown exceptions and programming errors. This is essential for functional composition of asynchronous operations. All errors are now handled by the catch() method at the end of the chain, and you should almost never need to use try/catch without using async/await.

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

# Describe the purpose of flexbox and grid in css, and show some examples of what can be achieved by applying them.

The purpose of grids and flexboxes is to make responsive design, so when a screen changes size, the items are not overlapping or going outside of the screen.
Alongside media queries, they are a strong tool for creating design that works on both mobile and computer.
Example, you have item boxes and you want them to be stacked with spacing between them, but on top of each other on mobile.

Copilots explanation:
The effect is achieved using CSS Flexbox and CSS classes.

    The FlexboxGrid component is a functional component that returns a JSX structure. This structure includes a container div with the class container, a div with the class grid, and four div elements with the class item.

    The CSS classes are defined in the FnG.css file which is imported at the top of the FlexboxGrid.jsx file.

    The container class is used to center the grid and provide padding on the left and right.

    The grid class uses the CSS Flexbox model to layout its children (item divs). The display: flex; property makes the grid a flex container and its children flex items. The flex-wrap: wrap; property allows the items to wrap onto multiple lines if there isn't enough room on one line. The justify-content: space-between; property distributes the items evenly along the horizontal line with equal space between them.

    The item class defines the properties of each grid item. The flex: 1 0 21%; property sets the flex grow factor to 1 (allowing the item to grow and take up extra space), the flex shrink factor to 0 (preventing the item from shrinking), and the flex basis to 21% (setting the initial main size of the item to 21% of the container's width). This creates a 5-column grid.

    The @media queries in the CSS file adjust the number of columns based on the width of the viewport. For example, when the viewport width is less than 1200px, the flex-basis is set to 31%, creating a 3-column grid.

    The background-color, border, border-radius, margin, and padding properties in the item class style each grid item.
