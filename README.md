## JavaScriptInDepth

Learning JavaScript in Depth by Examples

1. **JavaScript Objects, Comments and Statements**
    - Object literal syntax
    - Object constructor syntax
    - `Object.create` method
    - Define behaviour of the property using `Object.defineProperty`
    - `Object.keys` method
    - `Object.values` method
    - `Object.entries` method
    - `Object.fromEntries` method

2. **Functions**
    - Regular Functions
    - Function Expressions
    - Constructor functions
    - Invoking functions using `call`, `apply` and `bind` functions

3. **`this` keyword**
    - `globalthis` in Node.js
    - `window` in Browser

4. **Prototypes and Prototypal Inheritance**

5. **Hoisting**

6. **Operators, Global functions**
    - Truthy values
    - Falsy values
    - `instanceof` operator
    - `typeof` operator
    - Null-coalescing operator `??`
    - Optional chaning operator `?.`
    - Ternary operator
    - `parseInt` and `parseFloat` global functions
    - Math object and its methods

7. **Control flow statements**
    - `if` statement
    - `else` statement
    - `else if` statement
    - `switch` statement
    - `break` statement
    - `return` statement
    - `while` loop
    - `do while` loop
    - `for` loop
    - `for..in` loop

8. **Functions concepts**
    - Closures
    - Currying
    - Higher order functions (Callbacks)
    - Immediately Invoked Function Expression (IIFE)
    - Revealing module pattern

9.  **Destructuring**
    - Object destructure
    - Array destructure
    - rest and spread operator

10. **JSON**
    - Serializing a javascript object into a JSON string `JSON.stringify()`
    - Deserializing a JSON string to a Javascript object using `JSON.parse()`

11.  **Date and Time**
- Time zones and UTC time
- Daylight saving time (DST)
- ISO-8601 format
- `Date.prototype.now` and `Date.prototype.getTime()`
- Parsing string dates to date objects `Date.prototype.parse()`
- Date getter methods
    - Recommended way to get year from date `Date.prototype.getFullYear()`
    - Get the month part from date `Date.prototype.getMonth()`
    - Get the day part from date `Date.prototype.getDate()`
- Time getter methods
    - Get the hour part from date `Date.prototype.getHours()`
    - Get the minute part from date `Date.prototype.getMinutes()`
    - Get the seconds part from date `Date.prototype.getSeconds()`
    - Get the milliseconds part from date `Date.prototype.getMilliseconds()`
- Date setter methods
    - Set the year to a date `Date.prototype.setFullYear()`
    - Set the month to a date `Date.prototype.setMonth()`
    - Set the day to a date `Date.prototype.setDate()`
- Time setter methods
    - Set the hour part to a date `Date.prototype.setHours()`
    - Set the minutes part to a date `Date.prototype.setMinutes()`
    - Set the seconds part to a date `Date.prototype.setSeconds()`
    - Set the milliseconds part to a date `Date.prototype.setMilliseconds()`
- Formatting Date and Time
    - Extract the date part only as a string from a date object `Date.prototype.toDateString()`
    - Extract the time part only as a string from a date object `Date.prototype.toTimeString()`
    - Format date as a ISO 8601 string `Date.prototype.toISOString()` and `Date.prototype.toJSON()`
    - Formatting into locale specific strings `Date.prototype.toLocaleString()`, `Date.prototype.toLocaleDateString()` and `Date.prototype.toLocaleTimeString()`
    - International Date and Time Formatting
    - Format locale aware date `Intl.DateTimeFormat.prototype.format()`
- Benchmarking execution times
    - Benchmark in browser and Node.js `performance.now()`
    - Benchmark in Node.js `process.hrtime.bigint()`

12. **Arrays**
    - Get length of an array `Array.prototype.length`
    - Check if array or not `Array.prototype.isArray()`
    - Convert an iterable to an array `Array.prototype.from()`
    - Get subarray from array using `Array.prototype.slice()`
    - Iterate over the array using `Array.prototype.forEach()`
    - Pushing into single, multiple items and another array in given array `Array.prototype.push()`
    - Push item into beginning using `Array.prototype.unshift()`
    - Concat another array using `Array.prototype.concat()`
    - Find the item by positive/negative indices using `Array.prototype.at()`
    - Find first found index using a element in array `Array.prototype.indexOf()`
    - Find last found index using a element in array `Array.prototype.lastIndexOf()`
    - Find if element is present in array or not `Array.prototype.includes()`
    - Find if element is present in array or not using condition and return first found index `Array.prototype.findIndex()`
    - Find if element is present in array or not using condition and return last found index `Array.prototype.findLastIndex()`
    - Return a boolean value if some values match in array with a condition `Array.prototype.some()`
    - Return a boolean value if all values match in array with a condition `Array.prototype.every()`
    - Project each item of an array into a new array `Array.prototype.map()`
    - Sort each item of an array in place `Array.prototype.sort()`
    - Reverse the items of an array `Array.prototype.reverse()`
    - Flatten nested arrays using `Array.prototype.flat()`
    - Flatten nested arrays and project at each item at same time using `Array.prototype.flatMap()`
    - Reduce the items of an array into another object or array `Array.prototype.reduce()`
    - Reduce the items of an array from the last index into another object or array `Array.prototype.reduceRight()`
    - Filter items from array based on a condition `Array.prototype.filter()`
    - Copy array items in place given start and end indices `Array.prototype.copyWithin()`
    - Delete items from array using `delete` keyword
    - Delete items using indices using `Array.prototype.splice()`
    - Delete items from beginning using `Array.prototype.shift()`
    - Delete items from end using `Array.prototype.pop()`

13. **Regular Expressions**
    - [Regular expressions deep dive](./Regular%20Expressions/understanding_internals.MD)
        - Literals
        - Metacharacters
        - Character classes
            - Digits
            - Whitespaces
        - Alternation
        - Anchors
        - Quantifiers
        - Word Boundaries
        - Capturing groups
        - Non-capturing groups
        - Backreferences
        - Lookarounds
            - Positive and Negative lookahead
            - Positive and Negative lookbehind
        - Different flags in Regular expressions
    - Defining a regular expression using regex literal `/[0-9]/`
    - Defining a regular expression using RegExp constructor `new RegExp()` 
    - Test if a string matches the specified regex or not `RegExp.prototype.test()`
    - Find all matches of the given term using Regex in the given string `RegExp.prototype.exec()`
    - Find the first found index and test if the string matches the regex `String.prototype.search()`
    - Returning an array from regex matches `String.prototype.match()`
    - Returning an iterable from regex matches `String.prototype.matchAll()`
    - Replace a string based on regex `String.prototype.replace()`

14. **Strings**
    - [Strings deep dive](./Strings/understanding_internals.MD)
        - ASCII encoding
        - Extended ASCII encoding
        - Unicode encoding (UTF-8, UTF-16, UTF-32)
        - Byte Order Mark (BOM) character
        - Surrogate pairs
        - Diacritical marks and normalization
    - Immutability of strings in Javascript
    - Get a character given a specified index using `[]` v/s `String.prototype.charAt()`
    - Get the Unicode Code point given a specified index in a string `String.prototype.charCodeAt()`
    - Convert an Unicode code point to viewable string `String.prototype.fromCodePoint()`
    - Type of strings in JavaScript (Single quoted, Double quoted, Template literals)
    - Convert regular string to base64 string `btoa()`
    - Convert base64 string to regular string `atob()`
    - Convert full URL into encoded format using `encodeURI()`
    - Convert query parameters into encoded format using `encodeURI()`
    - Decode full URL into encoded format using `decodeURI()`
    - Decode query parameters into encoded format using `decodeURIComponent()`
    - Get length of the string `String.prototype.length`
    - Change the casing of strings `String.prototype.toUpperCase()` and `String.prototype.toLowerCase()`
    - Trim whitespaces from beginning and end of a string `String.prototype.trim()`
    - Repeat a sequence of characters `String.prototype.repeat()`
    - String comparision using `String.prototype.localeCompare()`
    - Searching first found index of a character `String.prototype.indexOf()`
    - Searching last found index of a character `String.prototype.lastIndexOf()`
    - Checking if another string is part of the given string `String.prototype.includes()`
    - Checking if another string starts with the given string `String.prototype.startsWith()`
    - Checking if another string ends with the given string `String.prototype.endsWith()`
    - Get substring from the string `String.prototype.slice()`, `String.prototype.substring()` and `String.prototype.substr()`

15. **Sets**
    - Set constructor to convert any iterable into a set `new Set([iterable]);`
    - Add item into set `Set.prototype.add()`
    - Check if item is contained in set or not `Set.prototype.has()`
    - Delete item into set `Set.prototype.delete()`
    - Delete all items in a set `Set.prototype.clear()`
    - Get length of a set `Set.prototype.size`

16. **Map**
    - Map constructor `new Map();`
    - Add item into map `Map.prototype.set()`
    - Get item by key `Map.prototype.get()`
    - Check if item exists in map or not `Map.prototype.has()`
    - Delete item into map `Map.prototype.delete()`
    - Delete all items in a map `Map.prototype.clear()`
    - Get length of a map `Map.prototype.size`

17. **WeakSets**
    - WeakSet constructor `new WeakSet();`
    - Add item into WeakSet `WeakSet.prototype.add()`
    - Check if item is contained in WeakSet or not `WeakSet.prototype.has()`
    - Delete item into WeakSet `WeakSet.prototype.delete()`

18. **WeakMap**
    - WeakMap constructor `new WeakMap()`
    - Get item by key `WeakMap.prototype.get()`
    - Add item into WeakMap `WeakMap.prototype.set()`
    - Check if item exists in WeakMap or not `WeakMap.prototype.has()`
    - Delete item into WeakMap `WeakMap.prototype.delete()`

19. **Symbols**
    - Symbol constructor `Symbol()`
    - Global symbol registry
    - Create a symbol if it doesn't exist `Symbol.prototype.for()` 
    - Get the name of the key associated to a symbol `Symbol.prototype.keyFor()`

20. **Scheduling**
    - Call a function repeatedly and stop it using `setInterval()` and `clearInterval()`
    - Call a function after a timeout and stop it using `setTimeout()` and `clearTimeout()`

21. **ES6 Classes**
    - Creating custom classes using `class` keyword
    - Property Getter and Setter using `get` and `set`
    - Private fields in class by marking field with '#' `#field` 
    - Static fields
    - Inheriting custom classes

22. **Error handling**
    - `try-catch-finally` trio
    - `Error` object
    - Set the error message using `Error.prototype.message`
    - Inbuilt error types
        - `ReferenceError`
        - `TypeError`
        - `RangeError`
        - `SyntaxError`
        - `URIError`
        - `Warning`
    - Creating Custom Errors

23. **Promises**
    - Promise constructor
    - Resolve a promise using `Promise.prototype.then()`
    - Reject a promise using `Promise.prototype.catch()`
    - Resolve promises using `async` and `await`
    - Chaining promises
    - Promisify a callback function
    - Resolve multiple promises in parallel and wait for all to resolve `Promise.prototype.all()`
    - Resolve multiple promises in parallel and wait for any to resolve `Promise.prototype.any()`
    - Wait for all promise to resolve and fetch the status `Promise.prototype.allSettled()`
    - Resolve the first resolved promise and exit `Promise.prototype.race()`
    - Make a resolved promise `Promise.prototype.resolve()`
    - Make a rejected promise `Promise.prototype.reject()`

24. **Generator functions**
    - `yield` keyword
    - Inspecting the next enumerable item `Generator.prototype.next()`
    - Return an enumerable item when generator is suspended `Generator.prototype.return()`
    - Throw an error when generator is suspended `Generator.prototype.throw()`
    - Make an async generator function `for await (const item of asyncGeneratorFunction())`

25. **ES6 modules**
    - ES6 modules
    - `import` and `export` keyword
    - Named modules
    - Default modules
    - Dynamic imports using `import()`

26. **ES6 Proxy and Reflect**
    - Trap get and set operations using ES6 Proxies

27. **Make HTTP calls**
    - Make HTTP calls using inbuilt `XMLHttpRequest`
    - Make HTTP calls using inbuilt `fetch`
        - Abort HTTP call using `AbortController()`
    - `URLSearchParams` object for forming query strings.
    - Make HTTP calls using jQuery AJAX `$.ajax`
    - Make HTTP calls using 3rd party library [`Axios`](https://axios-http.com/docs/intro)

28. **Store data in browser**
    - Store data in Cookies
    - Store data in `LocalStorage` and `SessionStorage`
    - Store data in `IndexedDB`

29. **Document Object Model (DOM)**
    - DOM structure
    - Loading of scripts (`async` and `defer`)
    - Searching DOM elements using `document.getElementBy*` and `document.querySelector*`
    - Update styles of DOM elements using inline styles and external CSS
    - Events (`click`, `change`, `keyup`, `keydown`, `mouseover`, `mouseout`, `mouseenter`, `mouseleave`, `cut`, `copy`, `paste`, `submit`, `DOMContentLoaded`, `beforeunload`, `unload`, `load`)
    - Dispatching custom DOM events
    - Event bubbling and capturing
    - Validating forms using HTML5

30. **Binary Data**
    - `ArrayBuffer`
    - `Blob`
    - `File` and `FileReader`
