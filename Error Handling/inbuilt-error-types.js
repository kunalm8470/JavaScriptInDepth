'use strict';

const error = new Error('Generic error'); // Generic error

/*
    const pi = Math.PI;
    pi.toFixed(1000); // toFixed will accept a digit between 0-100 -> RangeError
*/

/*
    function sum(a) {
        return a + b + 10; // ReferenceError for variable b
    }

    sum(20);
*/

// Below code will throw SyntaxError
// if (1 === 1) {

/*
    const foo = {};
    foo.bar(); // TypeError
*/

/*
    In TypeScript -

    let x: string;
    x = 2; // TypeError
*/

/*
    decodeURIComponent('%'); // Will throw an URIError
*/

debugger;
