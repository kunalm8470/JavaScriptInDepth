'use strict';

const sleep = function(seconds) {
    // To make a new promise, instantiate a Promise constructor
    return new Promise((resolve, reject) => {
        // Body of the promise is called Promise Executor

        // Promise constructor will have 2 callbacks -
        // 1. resolve callback (Used to resolve a promise)
        // 2. reject callback (Used to reject a promise)
        setTimeout(function() {
            return resolve();
        }, seconds * 1000);
    });
};

const sleepObj = sleep(5000);
console.log(sleepObj);

const promise1 = function() {
    /*
        If any error is thrown in the executor body
        The promise gets rejected automatically and is equivalent of writing

        return new Promise((resolve, reject) => {
            return reject(new Error('promise error'));
        });
    */
    return new Promise((resolve, reject) => {
        throw new Error('promise error');
    });
};

promise1()
.catch((err) => {
    // Handle the error
    console.error('Failed promise', err);
});

/*
    For client side, if no corresponding catch block is found
    the unhandlerejection event will be thrown. Which can be listened on a global level.

    window.addEventListener('unhandledrejection', function(event) {
        const { promise, reason } = event;

        console.error('Promise', promise);
        console.error('Reason', reason);
    });
*/

debugger;