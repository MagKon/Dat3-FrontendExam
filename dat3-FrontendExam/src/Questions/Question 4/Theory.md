# Explain the concept of promises in JavaScript. How do they differ from callbacks?

[Mozilla Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)

Chaining. Value before it is known. Passing a callback to the return, rather than the function. Tracking completion of a function. Callback in promise always returns a promise to avoid floating/starting the next function too early.
Promises solve a fundamental flaw with the callback pyramid of doom, by catching all errors, even thrown exceptions and programming errors. This is essential for functional composition of asynchronous operations. All errors are now handled by the catch() method at the end of the chain, and you should almost never need to use try/catch without using async/await.

# Explain the Error.jsx

Its purpose is to handle errors from the code

# Describe some important design principles when developing a website that should be working well on mobile, tablet, as well as desktop browsers.

## Mobile-First Approach

Start designing for the smallest screen and work your way up. This helps to ensure that the website is optimized for performance on mobile devices.

## Responsive Design

Use CSS media queries to create different layouts for different screen sizes. This allows the website to adapt to the screen size of the device it's being viewed on.

## Fluid Grids and Flexible Images

Use percentages rather than fixed units to define widths so that elements can resize in relation to one another.

## Atomic design

## From GPT:

Touch-Friendly Design: Ensure that all interactive elements are large enough and spaced well apart to accommodate touch inputs.

Performance Optimization: Optimize images, minify CSS and JavaScript, and leverage browser caching to improve load times, especially important for mobile users who may have slower internet connections.

Accessibility: Ensure your website is accessible to all users, including those with disabilities. This includes using semantic HTML, providing text alternatives for non-text content, and ensuring that all functionality is available from a keyboard.

Cross-Browser Compatibility: Test your website on multiple browsers (Chrome, Firefox, Safari, Edge etc.) and fix any browser-specific issues.

Progressive Enhancement: Start with a basic layer of user experience that works for everyone and then add more advanced functionality for devices and browsers that can support it.
