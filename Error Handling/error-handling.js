'use strict';

// try..catch..finally doesn't handle
// compile time errors

// 1. try..catch..finally block only works for 
// runtime errors.
/*
function invalidJavascriptFunction() {
    try {
        {{
    } catch (e) {
        console.error('Runtime error', e);
    }
}
*/

// 2. try..catch..finally always works synchronously.
/*
function asynchronousFn() {
    try {
        setTimeout(() => {
            aaaaa;
        }, 1000);
    } catch (e) {
        console.error('Unreachable code', e);
    }
}
*/

// try..catch has an optional finally block
// use it for cleanup logic
function exampleErrorHandling() {
    try {
        throw new Error('test error'); // 1.
    } catch (e) {
        console.error('Custom error', e); // 2.
    } finally {
        console.log('Execute finally!'); // 3.
    }
}

exampleErrorHandling();

/*
    Error instance won't be populated.

    Use case: Just want to catch the error
    and not perform any operation on that.
*/
function exampleErrorHandling2() {
    try {
        throw new Error('test error'); // 1.
    } catch {
        console.error('Custom error'); // 2.
    }
}

/*
    throw is a flow of control statement

    any statement below the throw statement is unreachable code.
*/
function exampleErrorHandling3() {
    try {
        throw new Error('test error'); // 1.

        return 2; // Unreachable code
    } catch {
        console.error('Custom error'); // 2.
    }
}

/*
    Can throw anything, throwing error object is not
    a mandate.
*/
function exampleErrorHandling4() {
    try {
        throw 2; // 1.

        return 2; // Unreachable code
    } catch (e) {
        console.error('Custom error', e); // 2.
    }
}

exampleErrorHandling4();

function sum(a, b) {
    try {
        if (a < 0 || b < 0) {
            throw new RangeError('a or b cannot be negative');
        }

        if (a > Number.MAX_SAFE_INTEGER || b > Number.MAX_SAFE_INTEGER) {
            throw new RangeError('a or b is not a valid number.');
        }

        return a + b;
    } catch (err) {
        // To check an error subtype use the instanceof keyword like this -
        if (err instanceof RangeError) {
            // do something
            console.error('Range error', err.message);
        } else {
            console.error('Generic error', err.message);
        }
    }
}

sum(-1, -1);
sum(Number.MAX_SAFE_INTEGER + 1, Number.MAX_SAFE_INTEGER + 1);
sum(2, 2);

/*
    Error object will have 3 properties -
    {
        "message": "<Short error message>",
        "stack": "<Stack trace>"
    }
*/

// Preserve stack-trace example
// With explicit try..catch
function a() {
    throw new Error('test error');
}

function b() {
    try {
        a();
    } catch(err) {
        throw err; //Re-throw the error with the error object
    }
}

function c() {
    try {
        b();
    } catch(err) {
        throw err; //Re-throw the error with the error object
    }
}

function d() {
    try {
        c();
    } catch(err) {
        throw err; //Re-throw the error with the error object
    }
}

d();

// Without try-catch
// This will also bubble up
function a1() {
    throw new Error('test error');
}

function b1() {
    a1();
}

function c1() {
    b1();
}

function d1() {
    c1();
}

d1();

// Handle the uncaught errors (Globally caught)
// Case 1. In browser
/*
    window.addEventListener('error', function(message, url, lineno, col, error) {
        console.error(message, url, lineno, col, error);
    });
*/

// Case 2. Node.js
/* 
    process.on('uncaughtException', (e) => {

    });
*/

// To make a custom error, extend the Error prototype/class
class BadRequestError extends Error {
    constructor(message, prop1, prop2) {
        super(message); // Initialize the base message

        // For custom properties
        this.prop1 = prop1;
        this.prop2 = prop2;
    }
}

function customErrorFunction(a) {
    if (a === '' || !a) {
        throw new BadRequestError('a cannot be null or empty', 2, 3);
    }

    return a;
}

customErrorFunction();


debugger;