'use strict';

/*
    setTimeout is a global function

    In case of the browser its window.setTimeout
    and in case of Node.js of globalThis.setTimeout
*/

/*
    Signature of setTimeout function -
    
    const timerId = setTimeout(function(arg1, arg2, ... argN) {

    }, DELAY_IN_MILLISEC, arg1, arg2, ..., argN);
*/

// 2.
setTimeout(() => {
    console.log('After 1 sec');
}, 1000);

function greet(first, last) {
    console.log(`Hello ${first} ${last}`);
}

// 3.
setTimeout(greet, 5000, 'John', 'Doe');

// 3.
// In case of anonymous function
const timerId = setTimeout(function(first, last) {
    console.log(`Hello ${last} ${first}`);
}, 5000, 'Jane', 'Doe');

/*
    clearTimeout will accept a timerId and
    stop the setTimeout handler to execute before the
    elapsed time.
*/
//clearTimeout(timerId);

// 1.
// Synchonous code will run first
// After that only the setTimeout and setInterval will run
for (let i = 0; i < 100; i++) {
    console.log(i);
}
