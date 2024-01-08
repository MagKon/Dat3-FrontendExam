# What is a callback function in JavaScript and when would you use one?

# JSX

## What is JSX? Provide an example

## How does JSX differ from HTML?

# Describe the purpose of flexbox and grid in css, and show some examples of what can be achieved by applying them.

The effect is achieved using CSS Flexbox and CSS classes.

The FlexboxGrid component is a functional component that returns a JSX structure. This structure includes a container div with the class container, a div with the class grid, and four div elements with the class item.

The CSS classes are defined in the FnG.css file which is imported at the top of the FlexboxGrid.jsx file.

The container class is used to center the grid and provide padding on the left and right.

The grid class uses the CSS Flexbox model to layout its children (item divs). The display: flex; property makes the grid a flex container and its children flex items. The flex-wrap: wrap; property allows the items to wrap onto multiple lines if there isn't enough room on one line. The justify-content: space-between; property distributes the items evenly along the horizontal line with equal space between them.

The item class defines the properties of each grid item. The flex: 1 0 21%; property sets the flex grow factor to 1 (allowing the item to grow and take up extra space), the flex shrink factor to 0 (preventing the item from shrinking), and the flex basis to 21% (setting the initial main size of the item to 21% of the container's width). This creates a 5-column grid.

The @media queries in the CSS file adjust the number of columns based on the width of the viewport. For example, when the viewport width is less than 1200px, the flex-basis is set to 31%, creating a 3-column grid.

The background-color, border, border-radius, margin, and padding properties in the item class style each grid item.
