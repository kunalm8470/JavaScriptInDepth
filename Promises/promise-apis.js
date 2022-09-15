'use strict';

// To get a resolved promise quickly
// We can make use of Promise.prototype.resolve -> Static method

const resolvedValue = 2;
const resolvedPromise = Promise.resolve(resolvedValue);
resolvedPromise.then((val) => {
    console.log(val);
});

// To get a rejected promise quickly
// We can make use of Promise.prototype.reject -> Static method

const rejectedValue = new Error('rejected promise');
const rejectedPromise = Promise.reject(rejectedValue);
rejectedPromise.catch((err) => {
    // Handle the error
    console.error('Promise error', err);
});

const promiseAllExample = async () => {
    const urls = [
        'https://api.github.com/users/kunalm8470',
        'https://api.github.com/users/-1',
        'https://api.github.com/users/johndoe'
    ];

    // These promises are in pending state
    const promises = urls.map((url) => {
        // fetch doesn't work in Node.js
        return fetch(url);
    });

    /*
        Promise.prototype.all will issue the promises in
        parallel

        It has the fail-fast policy
    */
    const resolvedValues = await Promise.all(promises);

    for (const resolvedValue of resolvedValues) {
        if (!resolvedValue.ok) {
            console.log(resolvedValue);
        }
    }
};


const promiseAllExample2 = async () => {
    // These promises are in pending state
    const promises = [
        Promise.resolve(2),
        Promise.resolve(3),
        Promise.reject(new Error('Promise.all failure')),
        Promise.resolve(4)
    ];

    /*
        Promise.prototype.all will issue the promises in
        parallel

        It has the fail-fast policy
    */
    const resolvedValues = await Promise.all(promises);
};

// promiseAllExample2();

// Promise.prototype.allSettled will execute all the promise arrays 2019+ (ES10+)
// regardless of the failed promise
// It will return an array of objects with following structure
/*
    [
        {
            status: 'fulfilled',
            value: <resolved value>
        },
        {
            status: 'rejected',
            reason: <exception message>
        }
    ]
*/
const promiseExample3 = async () => {
    // These promises are in pending state
    const promises = [
        Promise.resolve(2),
        Promise.resolve(3),
        Promise.reject(new Error('Promise.all failure')),
        Promise.resolve(4)
    ];

    /*
        Promise.prototype.allSettled will issue the promises in
        parallel.
    */
    const settledValues = await Promise.allSettled(promises);

    console.log(settledValues);
};

promiseExample3();

/*
    Promise.prototype.any will wait for first promise to get resolved

    It will exit after the 1st promise gets resolved

    It will ignore the rejected promises.
*/
const promiseExample4 = async () => {
    // These promises are in pending state
    const promises = [
        Promise.reject(new Error('Promise.all failure')),
        Promise.resolve(3),
        Promise.resolve(2),
        Promise.resolve(4)
    ];

    /*
        Promise.prototype.any will issue the promises in
        parallel.

        And will exit after the 1st promise
    */
    const settledValues = await Promise.any(promises);

    console.log(settledValues);
};

promiseExample4();

/*
    Promise.prototype.race will exit after any promise is completed
*/
const promiseExample5 = async () => {
    // These promises are in pending state
    const promises = [
        Promise.reject(new Error('Promise.all failure')),
        Promise.resolve(3),
        Promise.resolve(2),
        Promise.resolve(4)
    ];

    /*
        Promise.prototype.race will issue the promises in
        parallel.

        And will exit after the 1st promise (regardless it is resolved/rejected)
    */
    const settledValues = await Promise.race(promises);

    console.log(settledValues);
};

promiseExample5();