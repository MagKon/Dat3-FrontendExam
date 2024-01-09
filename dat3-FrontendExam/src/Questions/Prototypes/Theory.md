[MDN - Object Prototypes](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)

Prototypes function like “classes” in traditional OOP languages, as they are a series of properties that can be inherited by other objects. Example:

```JS
const myDate = new Date(1995, 11, 17);
console.log(myDate.getYear()); // 95
myDate.getYear = function () {
console.log("something else!");
};
myDate.getYear(); // 'something else!'
```

In the example above, the JS object “Date”, which has a method ‘getYear’ gets its prototype modified so it outputs something different than the standard method.
Classes in JS function as wrappers for the prototypes, as it does the same, but in a more familiar way than prototypes. Output is almost identical, but classes are closer to a blueprint, whereas a simple prototype is for a slightly varied series of objects.

[Turing article on prototype vs class](https://www.turing.com/kb/prototype-vs-class-in-js#which-one-is-better)
